"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { ArrowRight, Linkedin, Mail, Award, Clock, Users, BookOpen } from "lucide-react";

export default function AboutPage() {
  const t = useTranslations("aboutPage");

  const stats = [
    { icon: Award, value: t("statsSkills") },
    { icon: Clock, value: t("statsYears") },
    { icon: Users, value: t("statsUsers") },
  ];

  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[250px] w-[350px] rounded-full bg-accent/3 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-[48rem] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-text-secondary">{t("subtitle")}</p>
        </motion.div>

        {/* Creator section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary">
            {t("creatorTitle")}
          </h2>

          <div className="mt-8 rounded-2xl border border-border bg-surface p-8 glow-accent">
            {/* Name + role */}
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-2xl font-bold text-accent">
                AD
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-primary">
                  {t("creatorName")}
                </h3>
                <p className="text-sm text-text-secondary">
                  {t("creatorRole")}
                </p>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-text-secondary">
                {t("creatorBio1")}
              </p>
              <p className="leading-relaxed text-text-secondary">
                {t("creatorBio2")}
              </p>
              <p className="leading-relaxed text-text-secondary">
                {t("creatorBio3")}
              </p>
            </div>

            {/* Books */}
            <div className="mt-8">
              <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-text-secondary">
                <BookOpen size={16} className="text-accent" />
                {t("creatorBooksTitle")}
              </h4>
              <div className="mt-3 flex flex-col gap-2">
                <a
                  href={t("creatorBook1Link")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-sm leading-relaxed text-text-secondary transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 shrink-0 text-accent/60 transition-colors group-hover:text-accent">&#8250;</span>
                  <span className="underline decoration-border underline-offset-2 transition-colors group-hover:decoration-accent">{t("creatorBook1Title")}</span>
                </a>
                <a
                  href={t("creatorBook2Link")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-2 text-sm leading-relaxed text-text-secondary transition-colors hover:text-accent"
                >
                  <span className="mt-0.5 shrink-0 text-accent/60 transition-colors group-hover:text-accent">&#8250;</span>
                  <span className="underline decoration-border underline-offset-2 transition-colors group-hover:decoration-accent">{t("creatorBook2Title")}</span>
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4">
              {stats.map((stat, i) => {
                const SIcon = stat.icon;
                return (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-2 rounded-lg border border-border bg-bg p-4 text-center"
                  >
                    <SIcon size={20} className="text-accent" />
                    <span className="text-sm font-medium text-text-primary">
                      {stat.value}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Why Skillwire */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary">
            {t("whyTitle")}
          </h2>
          <div className="mt-6 space-y-4">
            <p className="leading-relaxed text-text-secondary">
              {t("whyP1")}
            </p>
            <p className="leading-relaxed text-text-secondary">
              {t("whyP2")}
            </p>
            <p className="leading-relaxed text-text-secondary">
              {t("whyP3")}
            </p>
          </div>
        </motion.div>

        {/* Connect */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary">
            {t("connectTitle")}
          </h2>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/alessandrodigrazia/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent/20 hover:text-accent"
            >
              <Linkedin size={16} />
              {t("linkedinLabel")}
            </a>
            <a
              href="mailto:hello@skillwire.ai"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-medium text-text-primary transition-colors hover:border-accent/20 hover:text-accent"
            >
              <Mail size={16} />
              {t("emailLabel")}
            </a>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Link
            href="/skills"
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
          >
            {t("cta")}
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
