"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-32">
      {/* Background glow effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[300px] w-[400px] rounded-full bg-accent/3 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Copy */}
          <div className="max-w-[36rem]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                <Sparkles size={12} />
                {t("badge")}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="mt-6 text-4xl font-bold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-[56px] lg:leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {t("title")}
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="mt-5 text-lg leading-relaxed text-text-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t("subtitle")}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link
                href="/skills"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                {t("cta")}
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/skills/skill-creator-guru"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-text-primary transition-colors hover:bg-surface"
              >
                {t("ctaSecondary")}
              </Link>
            </motion.div>
          </div>

          {/* Right: Terminal / Code block */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glow-accent rounded-xl border border-border bg-surface p-1">
              {/* Terminal header */}
              <div className="flex items-center gap-2 rounded-t-lg border-b border-border bg-bg px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                <div className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                <div className="h-3 w-3 rounded-full bg-[#28C840]" />
                <span className="ml-2 text-xs text-text-secondary">
                  Terminal
                </span>
              </div>
              {/* Terminal body */}
              <div className="rounded-b-lg bg-bg p-5 font-mono text-sm leading-7">
                <p className="text-text-secondary">{t("terminalLine1")}</p>
                <p className="text-text-secondary">{t("terminalLine2")}</p>
                <p className="text-success">{t("terminalLine3")}</p>
                <p className="text-success">{t("terminalLine4")}</p>
                <p className="mt-2 text-text-secondary">
                  <span className="animate-pulse text-accent">_</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
