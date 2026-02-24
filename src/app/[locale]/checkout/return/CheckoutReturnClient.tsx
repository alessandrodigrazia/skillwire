"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { WhopCheckoutEmbed } from "@whop/checkout/react";
import { Loader2, AlertCircle } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { getSlugByPlanId } from "@/lib/whop";

type CheckoutState = "loading" | "ready" | "disabled";

interface CheckoutReturnClientProps {
  stateId: string;
  sessionId: string;
  planId: string;
  locale: string;
}

export function CheckoutReturnClient({
  stateId,
  sessionId,
  planId,
  locale,
}: CheckoutReturnClientProps) {
  const t = useTranslations("cart");
  const router = useRouter();
  const clearCart = useCartStore((s) => s.clearCart);
  const [checkoutState, setCheckoutState] = useState<CheckoutState>("loading");
  const [hasError, setHasError] = useState(false);

  const handleStateChange = useCallback((state: CheckoutState) => {
    setCheckoutState(state);
    if (state === "disabled") {
      setHasError(true);
    }
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

  if (hasError) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <AlertCircle size={40} className="text-error" />
        <h2 className="text-lg font-semibold text-text-primary">
          {t("paymentError")}
        </h2>
        <button
          onClick={() => router.push(`/${locale}/skills`)}
          className="rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          {t("tryAgain")}
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 py-12">
      {checkoutState === "loading" && (
        <div className="mb-6 flex flex-col items-center gap-3">
          <Loader2 size={28} className="animate-spin text-accent" />
          <p className="text-sm text-text-secondary">
            {t("completingPayment")}
          </p>
        </div>
      )}

      <div className="w-full">
        <WhopCheckoutEmbed
          sessionId={sessionId}
          stateId={stateId}
          theme="dark"
          themeOptions={{ accentColor: "amber" }}
          onStateChange={handleStateChange}
          onComplete={handleComplete}
          fallback={null}
        />
      </div>
    </div>
  );
}
