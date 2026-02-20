"use client";

import { useEffect, useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Mail,
  Download,
  BookOpen,
  ArrowRight,
  Gift,
  Copy,
  Check,
  Loader2,
  Send,
} from "lucide-react";
import { useCartStore } from "@/lib/store/cart";
import { StarRating } from "@/components/ui/StarRating";

const PROMO_CODE = "THANKS15";
const PROMO_MIN_RATING = 4;

type ReviewState = "form" | "submitting" | "high" | "low";

interface ThankYouClientProps {
  downloadUrl?: string;
  slug?: string;
}

export default function ThankYouClient({ downloadUrl, slug }: ThankYouClientProps) {
  const t = useTranslations("thankYou");
  const clearCart = useCartStore((s) => s.clearCart);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewState, setReviewState] = useState<ReviewState>("form");
  const [copied, setCopied] = useState(false);

  const canSubmit = rating > 0 && comment.trim().length > 0 && reviewState === "form";

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  const handleSubmitReview = useCallback(async () => {
    if (!slug || !canSubmit) return;
    setReviewState("submitting");
    try {
      await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          rating,
          comment: comment.trim(),
          source: "purchase",
        }),
      });
      setReviewState(rating >= PROMO_MIN_RATING ? "high" : "low");
    } catch {
      setReviewState(rating >= PROMO_MIN_RATING ? "high" : "low");
    }
  }, [slug, canSubmit, rating, comment]);

  const handleCopyCode = useCallback(() => {
    navigator.clipboard.writeText(PROMO_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

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

        {/* Review section — only for purchased skills */}
        {slug && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="rounded-xl border border-border bg-surface p-6">
              <AnimatePresence mode="wait">
                {(reviewState === "form" || reviewState === "submitting") && (
                  <motion.div
                    key="review-form"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium text-text-primary">
                        {t("rateTitle")}
                      </p>
                      <p className="mt-1 text-xs text-text-secondary">
                        {t("rateSubtitle")}
                      </p>
                    </div>

                    {/* Stars */}
                    <div className="flex justify-center">
                      <StarRating
                        value={rating}
                        onChange={setRating}
                        disabled={reviewState === "submitting"}
                        size={28}
                      />
                    </div>

                    {/* Comment textarea */}
                    <textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder={t("commentPlaceholder")}
                      disabled={reviewState === "submitting"}
                      maxLength={2000}
                      rows={3}
                      className="w-full resize-none rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-accent/50 disabled:opacity-50"
                    />

                    {/* Submit button */}
                    <button
                      onClick={handleSubmitReview}
                      disabled={!canSubmit}
                      className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                        canSubmit
                          ? "bg-accent text-bg hover:bg-accent-hover"
                          : "bg-surface-elevated text-text-secondary cursor-not-allowed"
                      }`}
                    >
                      {reviewState === "submitting" ? (
                        <>
                          <Loader2 size={16} className="animate-spin" />
                          {t("submittingReview")}
                        </>
                      ) : (
                        <>
                          <Send size={16} />
                          {t("submitReview")}
                        </>
                      )}
                    </button>
                  </motion.div>
                )}

                {reviewState === "high" && (
                  <motion.div
                    key="promo"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10">
                      <Gift size={20} className="text-accent" />
                    </div>
                    <p className="mb-1 text-sm font-medium text-text-primary">
                      {t("promoTitle")}
                    </p>
                    <p className="mb-3 text-xs text-text-secondary">
                      {t("promoSubtitle")}
                    </p>
                    <div className="mx-auto flex max-w-[240px] items-center justify-between rounded-lg border border-accent/30 bg-accent/5 px-4 py-2.5">
                      <span className="font-mono text-sm font-bold tracking-wider text-accent">
                        {PROMO_CODE}
                      </span>
                      <button
                        onClick={handleCopyCode}
                        className="ml-3 rounded-md p-1.5 text-text-secondary transition-colors hover:bg-surface hover:text-text-primary"
                        aria-label={copied ? t("promoCopied") : t("promoCopy")}
                      >
                        {copied ? (
                          <Check size={16} className="text-accent" />
                        ) : (
                          <Copy size={16} />
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}

                {reviewState === "low" && (
                  <motion.div
                    key="thanks"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center"
                  >
                    <p className="text-sm text-text-secondary">
                      {t("rateImprove")}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
