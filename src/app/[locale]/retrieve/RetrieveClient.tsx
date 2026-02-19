"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Download, Mail, Search, Loader2 } from "lucide-react";
import { useState } from "react";

interface DownloadResult {
  name: string;
  slug: string;
  downloadUrl: string;
}

export default function RetrieveClient() {
  const t = useTranslations("retrieve");

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<DownloadResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setResults(null);
    setLoading(true);

    try {
      const res = await fetch("/api/retrieve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.status === 503) {
        setError(t("errorUnavailable"));
        return;
      }

      if (!res.ok) {
        setError(data.error || t("errorGeneric"));
        return;
      }

      setResults(data.results ?? []);
    } catch {
      setError(t("errorGeneric"));
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-[36rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <Download className="h-8 w-8 text-accent" />
          </div>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-base text-text-secondary">{t("subtitle")}</p>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="rounded-xl border border-border bg-surface p-6">
            <label
              htmlFor="retrieve-email"
              className="block text-sm font-medium text-text-primary"
            >
              <Mail size={14} className="mr-1.5 inline text-accent" />
              {t("emailLabel")}
            </label>
            <input
              id="retrieve-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("emailPlaceholder")}
              className="mt-2 w-full rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary/50 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />

            {error && (
              <p className="mt-3 text-center text-sm text-error">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading || !email}
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-accent py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {t("loading")}
                </>
              ) : (
                <>
                  <Search size={16} />
                  {t("submit")}
                </>
              )}
            </button>
          </div>
        </motion.form>

        {/* Results */}
        {results !== null && (
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {results.length === 0 ? (
              <div className="rounded-xl border border-border bg-surface p-6 text-center">
                <p className="text-sm text-text-secondary">{t("noResults")}</p>
              </div>
            ) : (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-text-primary">
                  {t("resultsTitle")}
                </h2>
                <p className="text-xs text-text-secondary">{t("resultsNote")}</p>
                {results.map((item) => (
                  <div
                    key={item.slug}
                    className="flex items-center justify-between rounded-lg border border-border bg-surface px-5 py-4"
                  >
                    <span className="text-sm font-medium text-text-primary">
                      {item.name}
                    </span>
                    <a
                      href={item.downloadUrl}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-4 py-2 text-xs font-semibold text-bg transition-colors hover:bg-accent-hover"
                    >
                      <Download size={13} />
                      {t("downloadBtn")}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
