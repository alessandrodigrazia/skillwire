"use client";

import { useState, useCallback } from "react";
import { useTranslations } from "next-intl";
import { Download, Mail, Loader2, Send, CheckCircle2 } from "lucide-react";
import { StarRating } from "@/components/ui/StarRating";

type Status = "idle" | "loading" | "success" | "error";
type ReviewStatus = "idle" | "submitting" | "done";

export function FreeSkillForm({ slug }: { slug: string }) {
  const t = useTranslations("skillDetail");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [downloadUrl, setDownloadUrl] = useState("");

  // Review form state
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [reviewStatus, setReviewStatus] = useState<ReviewStatus>("idle");

  const isValid = email.includes("@") && email.includes(".") && consent;
  const canSubmitReview = rating > 0 && comment.trim().length > 0 && reviewStatus === "idle";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, slug, consent }),
      });
      const data = await res.json();
      if (data.downloadUrl) {
        setDownloadUrl(data.downloadUrl);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleSubmitReview = useCallback(async () => {
    if (!canSubmitReview) return;
    setReviewStatus("submitting");
    try {
      await fetch("/api/review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          rating,
          comment: comment.trim(),
          source: "free",
        }),
      });
    } catch {
      // still show thanks on error
    }
    setReviewStatus("done");
  }, [canSubmitReview, slug, rating, comment]);

  if (status === "success") {
    return (
      <div className="space-y-4">
        <p className="text-sm font-medium text-success">{t("freeSuccess")}</p>
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          <Download size={16} />
          {t("freeDownloadNow")}
        </a>

        {/* Review form */}
        <div className="border-t border-border pt-4">
          {reviewStatus === "done" ? (
            <div className="flex items-center gap-2 text-sm text-success">
              <CheckCircle2 size={16} />
              {t("reviewThanks")}
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm font-medium text-text-primary">
                {t("rateSkill")}
              </p>
              <StarRating
                value={rating}
                onChange={setRating}
                disabled={reviewStatus === "submitting"}
                size={24}
              />
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t("reviewPlaceholder")}
                disabled={reviewStatus === "submitting"}
                maxLength={2000}
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-bg px-3 py-2.5 text-sm text-text-primary outline-none placeholder:text-text-secondary focus:border-accent/50 disabled:opacity-50"
              />
              <button
                onClick={handleSubmitReview}
                disabled={!canSubmitReview}
                className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${
                  canSubmitReview
                    ? "bg-accent text-bg hover:bg-accent-hover"
                    : "bg-surface-elevated text-text-secondary cursor-not-allowed"
                }`}
              >
                {reviewStatus === "submitting" ? (
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
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="flex items-center gap-2 rounded-lg border border-border bg-bg px-3 py-2.5">
        <Mail size={16} className="shrink-0 text-text-secondary" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t("freeEmailPlaceholder")}
          required
          className="w-full bg-transparent text-sm text-text-primary outline-none placeholder:text-text-secondary"
        />
      </div>
      <label className="flex items-start gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-accent"
        />
        <span className="text-xs leading-relaxed text-text-secondary">
          {t("freeConsent")}
        </span>
      </label>
      <button
        type="submit"
        disabled={!isValid || status === "loading"}
        className={`inline-flex w-full items-center justify-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-colors ${
          isValid && status !== "loading"
            ? "bg-accent text-bg hover:bg-accent-hover"
            : "bg-surface-elevated text-text-secondary cursor-not-allowed"
        }`}
      >
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            {t("freeDownloading")}
          </>
        ) : (
          <>
            <Download size={16} />
            {t("freeDownloadBtn")}
          </>
        )}
      </button>
      {status === "error" && (
        <p className="text-xs text-error">{t("freeError")}</p>
      )}
    </form>
  );
}
