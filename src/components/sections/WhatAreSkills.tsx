import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

export function WhatAreSkills() {
  const t = useTranslations("whatAreSkills");

  return (
    <section className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-[48rem] px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          {t("title")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-text-secondary">
          {t("description")}
        </p>
        <div className="mt-8">
          <Link
            href="/what-are-claude-skills"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            {t("cta")}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
