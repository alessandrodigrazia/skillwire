"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";
import { WhopCheckoutEmbed } from "@whop/checkout/react";

const TEST_PLAN_ID = "plan_0d4wKLYdVXMHb";

export default function CheckoutTestPage() {
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="mx-auto max-w-lg px-4 py-16">
      <h1 className="mb-2 text-xl font-bold text-text-primary">
        Checkout Embed Test
      </h1>
      <p className="mb-8 text-sm text-text-secondary">
        Client-only mount — no SSR, no modal, no iframe nesting.
        Plan: <code className="text-accent">{TEST_PLAN_ID}</code>
      </p>

      <div className="rounded-xl border border-border bg-surface p-4">
        {mounted ? (
          <WhopCheckoutEmbed
            planId={TEST_PLAN_ID}
            theme="dark"
            returnUrl={`https://skillwire.ai/${locale}/checkout-test`}
          />
        ) : (
          <div className="flex items-center justify-center py-16 text-sm text-text-secondary">
            Loading checkout...
          </div>
        )}
      </div>
    </div>
  );
}
