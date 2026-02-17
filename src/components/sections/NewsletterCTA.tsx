"use client";

import { useTranslations } from "next-intl";

export function NewsletterCTA() {
  const t = useTranslations("newsletter");

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[42rem] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
          {t("title")}
        </h2>
        <p className="mt-4 text-base leading-relaxed text-text-secondary">
          {t("description")}
        </p>

        {/* Email form */}
        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            placeholder={t("placeholder")}
            className="rounded-lg border border-border bg-bg px-4 py-3 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:w-72"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            {t("cta")}
          </button>
        </form>

        <p className="mt-3 text-xs text-text-secondary">{t("disclaimer")}</p>
      </div>
    </section>
  );
}
