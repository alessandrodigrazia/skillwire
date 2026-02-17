"use client";

import { useTranslations } from "next-intl";
import { ShoppingBag, Download, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const stepIcons = [ShoppingBag, Download, Terminal];

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  const steps = [
    { title: t("step1Title"), desc: t("step1Desc") },
    { title: t("step2Title"), desc: t("step2Desc") },
    { title: t("step3Title"), desc: t("step3Desc") },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {t("title")}
          </h2>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 sm:grid-cols-3">
          {steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.title}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
              >
                {/* Step number + icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-surface">
                  <Icon size={28} className="text-accent" />
                </div>

                {/* Step number */}
                <span className="mt-4 text-xs font-bold uppercase tracking-widest text-text-secondary">
                  Step {i + 1}
                </span>

                {/* Title */}
                <h3 className="mt-2 text-lg font-semibold text-text-primary">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-[20rem] text-sm leading-relaxed text-text-secondary">
                  {step.desc}
                </p>

                {/* Connector arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="absolute right-0 top-8 hidden -translate-x-1/2 translate-y-0 text-border sm:block lg:translate-x-8">
                    <svg
                      width="40"
                      height="12"
                      viewBox="0 0 40 12"
                      fill="none"
                    >
                      <path
                        d="M0 6h32m0 0l-6-5m6 5l-6 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
