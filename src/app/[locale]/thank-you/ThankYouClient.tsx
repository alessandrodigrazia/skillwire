"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  Download,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useCartStore } from "@/lib/store/cart";

interface ThankYouClientProps {
  downloadUrl?: string;
}

export default function ThankYouClient({ downloadUrl }: ThankYouClientProps) {
  const t = useTranslations("thankYou");
  const clearCart = useCartStore((s) => s.clearCart);

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[36rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Icon */}
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-accent/10">
            <CheckCircle2 className="h-10 w-10 text-accent" />
          </div>

          {/* Title */}
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-lg text-text-secondary">{t("subtitle")}</p>
        </motion.div>

        {/* Download button (when plan_id is present in redirect) */}
        {downloadUrl && (
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="rounded-xl border border-accent/30 bg-accent/5 p-6 text-center">
              <p className="mb-4 text-sm font-medium text-text-primary">
                {t("downloadReady")}
              </p>
              <a
                href={downloadUrl}
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                <Download size={16} />
                {t("downloadBtn")}
              </a>
            </div>
          </motion.div>
        )}

        {/* Steps */}
        <motion.div
          className="mt-8 space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {/* Email */}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
            <Mail className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-text-secondary">
              {t("emailNote")}{" "}
              <Link
                href="/retrieve"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                {t("retrieveLinkLabel")}
              </Link>
            </p>
          </div>

          {/* Install guide */}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
            <Download className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-text-secondary">
              <Link
                href="/how-it-works"
                className="text-accent underline underline-offset-2 hover:text-accent-hover"
              >
                {t("installGuide")}
              </Link>
            </p>
          </div>

          {/* Order support */}
          <div className="flex items-start gap-4 rounded-lg border border-border bg-surface p-5">
            <BookOpen className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <p className="text-sm text-text-secondary">{t("orderNote")}</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            {t("browseMore")}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
