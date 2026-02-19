"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { getSlugByPlanId } from "@/lib/whop";

type CheckoutState = "loading" | "ready" | "disabled";

interface CheckoutOverlayProps {
  sessionId: string;
  planId: string;
  onClose: () => void;
}

export function CheckoutOverlay({
  sessionId,
  planId,
  onClose,
}: CheckoutOverlayProps) {
  const t = useTranslations("cart");
  const locale = useLocale();
  const router = useRouter();
  const clearCart = useCartStore((s) => s.clearCart);
  const [checkoutState, setCheckoutState] =
    useState<CheckoutState>("loading");

  const handleStateChange = useCallback((state: CheckoutState) => {
    setCheckoutState(state);
  }, []);

  const handleComplete = useCallback(
    (_sessionId: string) => {
      clearCart();
      const slug = getSlugByPlanId(planId);
      const params = new URLSearchParams();
      params.set("p", planId);
      if (slug) params.set("slug", slug);
      router.push(`/${locale}/thank-you?${params.toString()}`);
    },
    [clearCart, planId, locale, router]
  );

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-lg rounded-2xl border border-border bg-bg shadow-2xl"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
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

          {/* Body */}
          <div className="relative min-h-[300px] px-6 py-4">
            {/* Loading overlay — shown until iframe is ready */}
            {checkoutState === "loading" && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 rounded-b-2xl bg-bg">
                <Loader2 size={28} className="animate-spin text-accent" />
                <p className="text-sm text-text-secondary">
                  {t("loadingCheckout")}
                </p>
              </div>
            )}

            <WhopCheckoutEmbed
              sessionId={sessionId}
              theme="dark"
              themeOptions={{ accentColor: "amber" }}
              onStateChange={handleStateChange}
              onComplete={handleComplete}
              fallback={null}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
