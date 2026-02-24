"use client";

import { useState, useCallback, useLayoutEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { getSlugByPlanId } from "@/lib/whop";

type CheckoutState = "loading" | "ready" | "disabled";

interface CheckoutOverlayProps {
  planId: string;
  sessionId?: string;
  onClose: () => void;
}

/**
 * Whop SDK bug: WhopCheckoutEmbed constructs the iframe URL as either:
 *   - planId only:    /embedded/checkout/plan_XXX/          (correct path, NO ?session=)
 *   - sessionId only: /embedded/checkout/chk_XXX/?session=  (WRONG path, has ?session=)
 *
 * Without ?session=, Basis Theory can't initialize (sessionKey missing) and
 * card tokenization silently fails — the "Unisciti" button does nothing.
 *
 * Fix: render with planId (correct path), then inject ?session= via
 * useLayoutEffect before the browser starts loading the iframe.
 */
export function CheckoutOverlay({ planId, sessionId, onClose }: CheckoutOverlayProps) {
  const t = useTranslations("cart");
  const locale = useLocale();
  const router = useRouter();
  const clearCart = useCartStore((s) => s.clearCart);

  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  // Inject ?session= into the iframe URL before the browser loads it.
  // useLayoutEffect runs synchronously after DOM commit but before paint,
  // so the browser only fetches the corrected URL.
  useLayoutEffect(() => {
    if (!sessionId || !containerRef.current) return;

    const iframe = containerRef.current.querySelector("iframe");
    if (iframe && iframe.src && !iframe.src.includes("session=")) {
      const url = new URL(iframe.src);
      url.searchParams.set("session", sessionId);
      iframe.src = url.toString();
    }
  }, [sessionId]);

  const handleStateChange = useCallback((state: CheckoutState) => {
    if (state === "ready") {
      setIsReady(true);
    }
  }, []);

  const handleComplete = useCallback(
    (_planId: string) => {
      clearCart();
      const slug = getSlugByPlanId(planId);
      const params = new URLSearchParams();
      params.set("p", planId);
      if (slug) params.set("slug", slug);
      router.push(`/${locale}/thank-you?${params.toString()}`);
    },
    [clearCart, planId, locale, router]
  );

  const returnUrl = `${process.env.NEXT_PUBLIC_APP_URL || "https://skillwire.ai"}/${locale}/checkout/return?plan_id=${planId}`;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-end sm:items-center justify-center bg-black/70 p-0 sm:p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative flex w-full max-w-lg flex-col rounded-t-2xl sm:rounded-2xl border border-border bg-bg shadow-2xl max-h-[100dvh] sm:max-h-[90vh]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {/* Header — sticky */}
          <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
            <h3 className="text-lg font-semibold text-text-primary">
              {t("checkout")}
            </h3>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
              aria-label="Close"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body — scrollable */}
          <div
            ref={containerRef}
            className="relative min-h-[300px] flex-1 overflow-y-auto px-4 py-4 sm:px-6"
          >
            {/* Loading overlay */}
            {!isReady && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-bg">
                <Loader2 size={28} className="animate-spin text-accent" />
                <p className="text-sm text-text-secondary">
                  {t("loadingCheckout")}
                </p>
              </div>
            )}

            <WhopCheckoutEmbed
              planId={planId}
              theme="dark"
              onStateChange={handleStateChange}
              onComplete={handleComplete}
              returnUrl={returnUrl}
              fallback={null}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
