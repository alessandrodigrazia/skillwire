"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Download, Mail, Loader2 } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export function FreeSkillForm({ slug }: { slug: string }) {
  const t = useTranslations("skillDetail");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [downloadUrl, setDownloadUrl] = useState("");

  const isValid = email.includes("@") && email.includes(".") && consent;

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

  if (status === "success") {
    return (
      <div className="space-y-3">
        <p className="text-sm font-medium text-success">{t("freeSuccess")}</p>
        <a
          href={downloadUrl}
          download
          className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
        >
          <Download size={16} />
          {t("freeDownloadNow")}
        </a>
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
