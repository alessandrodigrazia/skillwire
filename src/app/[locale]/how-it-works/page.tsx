"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Download,
  FolderOpen,
  Check,
  ChevronDown,
  ArrowRight,
  Monitor,
  Cpu,
  Globe,
  Code2,
  Terminal,
  Settings,
} from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: ShoppingCart, color: "text-accent" },
  { icon: Download, color: "text-blue-400" },
  { icon: FolderOpen, color: "text-emerald-400" },
] as const;

const prereqIcons = [Monitor, Cpu, Globe, Code2] as const;

export default function HowItWorksPage() {
  const t = useTranslations("howItWorksPage");

  const prereqs = [
    { icon: prereqIcons[0], text: t("prereqClaude") },
    { icon: prereqIcons[1], text: t("prereqPlan") },
    { icon: prereqIcons[2], text: t("prereqOs") },
    { icon: prereqIcons[3], text: t("prereqCode") },
  ];

  const faqs = [
    { q: t("faq1Q"), a: t("faq1A") },
    { q: t("faq2Q"), a: t("faq2A") },
    { q: t("faq3Q"), a: t("faq3A") },
    { q: t("faq4Q"), a: t("faq4A") },
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

        {/* Steps 1 & 2 */}
        <div className="mt-16 space-y-12 rounded-2xl border border-border bg-surface p-8 glow-accent">
          {[1, 2].map((num, i) => {
            const Icon = steps[i].icon;
            return (
              <motion.div
                key={num}
                className="flex gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div className="flex shrink-0 flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface">
                    <Icon size={20} className={steps[i].color} />
                  </div>
                  <div className="mt-2 h-full w-px bg-border" />
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                      {num}
                    </span>
                    <h2 className="text-xl font-bold text-text-primary">
                      {t(`step${num}Title` as "step1Title")}
                    </h2>
                  </div>
                  <p className="mt-3 leading-relaxed text-text-secondary">
                    {t(`step${num}Desc` as "step1Desc")}
                  </p>
                </div>
              </motion.div>
            );
          })}

          {/* Step 3 — with two installation methods */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex shrink-0 flex-col items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface">
                <FolderOpen size={20} className="text-emerald-400" />
              </div>
            </div>
            <div className="pb-8">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                  3
                </span>
                <h2 className="text-xl font-bold text-text-primary">
                  {t("step3Title")}
                </h2>
              </div>
              <p className="mt-3 leading-relaxed text-text-secondary">
                {t("step3Desc")}
              </p>

              {/* Two method cards */}
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {/* Claude Code */}
                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <Terminal size={16} className="text-accent" />
                    <h4 className="text-sm font-semibold text-text-primary">
                      {t("step3MethodCodeTitle")}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">
                    {t("step3MethodCodeDesc")}
                  </p>
                </div>
                {/* Claude Desktop / claude.ai */}
                <div className="rounded-lg border border-border bg-surface p-4">
                  <div className="flex items-center gap-2">
                    <Settings size={16} className="text-accent" />
                    <h4 className="text-sm font-semibold text-text-primary">
                      {t("step3MethodDesktopTitle")}
                    </h4>
                  </div>
                  <p className="mt-2 text-sm text-text-secondary">
                    {t("step3MethodDesktopDesc")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Installation details */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-lg font-bold text-text-primary">
            {t("installTitle")}
          </h3>

          {/* Claude Code CLI */}
          <div className="mt-4">
            <p className="text-sm font-medium text-accent">
              {t("installCodeLabel")}
            </p>
            <div className="mt-2 space-y-2">
              <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm text-text-secondary">
                <code>{t("installMac")}</code>
              </pre>
              <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm text-text-secondary">
                <code>{t("installWin")}</code>
              </pre>
            </div>
          </div>

          {/* Claude Desktop / claude.ai GUI */}
          <div className="mt-6">
            <p className="text-sm font-medium text-accent">
              {t("installDesktopLabel")}
            </p>
            <div className="mt-2 rounded-lg border border-border bg-surface p-4">
              <p className="whitespace-pre-line text-sm leading-relaxed text-text-secondary">
                {t("installDesktopSteps")}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Prerequisites */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary">
            {t("prerequisitesTitle")}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {prereqs.map((prereq, i) => {
              const PIcon = prereq.icon;
              return (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-border bg-surface p-4"
                >
                  <PIcon size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-sm text-text-secondary">
                    {prereq.text}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* FAQ */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-text-primary">
            {t("faqTitle")}
          </h2>
          <div className="mt-6 space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.q} answer={faq.a} />
            ))}
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-lg border border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm font-medium text-text-primary">
          {question}
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 text-text-secondary transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div className="border-t border-border px-4 py-3">
          <p className="text-sm leading-relaxed text-text-secondary">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
