"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { X, Trash2, ShoppingBag, Lock, Loader2 } from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    LemonSqueezy?: {
      Url: {
        Open: (url: string) => void;
      };
    };
  }
}

export function CartDrawer() {
  const t = useTranslations("cart");
  const locale = useLocale();
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    total,
    count,
    isCheckingOut,
    checkoutError,
    setCheckingOut,
    setCheckoutError,
  } = useCartStore();

  async function handleCheckout() {
    setCheckoutError(null);
    setCheckingOut(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, locale }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (res.status === 503) {
          setCheckoutError(t("notConfigured"));
        } else {
          setCheckoutError(data.error || t("checkoutError"));
        }
        return;
      }

      // Open LS overlay if lemon.js is loaded, otherwise redirect
      if (window.LemonSqueezy) {
        window.LemonSqueezy.Url.Open(data.checkoutUrl);
      } else {
        window.location.href = data.checkoutUrl;
      }
    } catch {
      setCheckoutError(t("checkoutError"));
    } finally {
      setCheckingOut(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[60] bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col border-l border-border bg-bg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-semibold text-text-primary">
                {t("title")} ({count()})
              </h2>
              <button
                onClick={closeCart}
                className="rounded-lg p-2 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <ShoppingBag
                    size={48}
                    className="text-text-secondary/30"
                  />
                  <p className="mt-4 text-sm text-text-secondary">
                    {t("empty")}
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {items.map((item) => (
                    <div
                      key={item.slug}
                      className="flex items-center justify-between rounded-lg border border-border bg-surface p-4"
                    >
                      <div className="flex items-center gap-3">
                        {item.emoji && (
                          <span className="text-xl">{item.emoji}</span>
                        )}
                        <div>
                          <p className="text-sm font-medium text-text-primary">
                            {item.name}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {item.type === "bundle" ? t("bundle") : t("skill")}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-semibold text-accent">
                          &euro;{item.price}
                        </span>
                        <button
                          onClick={() => removeItem(item.slug)}
                          className="rounded p-1 text-text-secondary transition-colors hover:bg-surface-elevated hover:text-error"
                          aria-label={t("remove")}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-border px-6 py-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-text-secondary">
                    {t("subtotal")}
                  </span>
                  <span className="text-lg font-bold text-text-primary">
                    &euro;{total()}
                  </span>
                </div>
                <p className="mt-1 text-xs text-text-secondary">
                  {t("vatNote")}
                </p>

                {/* Checkout error */}
                {checkoutError && (
                  <p className="mt-2 text-center text-xs text-error">
                    {checkoutError}
                  </p>
                )}

                {/* Checkout button */}
                <button
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isCheckingOut ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      {t("checkingOut")}
                    </>
                  ) : (
                    t("checkout")
                  )}
                </button>

                {/* Trust signals */}
                <div className="mt-3 flex items-center justify-center gap-1 text-xs text-text-secondary">
                  <Lock size={12} />
                  <span>{t("secure")}</span>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
