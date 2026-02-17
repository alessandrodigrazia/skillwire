"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronDown,
  RefreshCw,
  Brain,
  Zap,
} from "lucide-react";
import { useState, useEffect } from "react";

const folderStructure = `my-skill/
\u251C\u2500\u2500 SKILL.md            \u2190 The core: instructions, methodology, workflows
\u251C\u2500\u2500 references/         \u2190 Knowledge base: data, frameworks, examples
\u2502   \u251C\u2500\u2500 methodology.md
\u2502   \u251C\u2500\u2500 case-studies.md
\u2502   \u2514\u2500\u2500 ...
\u251C\u2500\u2500 scripts/            \u2190 Automation: Python/shell scripts
\u2502   \u2514\u2500\u2500 calculator.py
\u251C\u2500\u2500 assets/             \u2190 Templates: document templates, checklists
\u2502   \u2514\u2500\u2500 template.md
\u2514\u2500\u2500 README.md           \u2190 Quick-start guide`;

const installMac = `# macOS / Linux
unzip skill-name.zip -d ~/.claude/skills/`;

const installWin = `# Windows (PowerShell)
Expand-Archive skill-name.zip -DestinationPath $env:USERPROFILE\\.claude\\skills\\`;

const tocSections = [
  "claudeCode",
  "whatIsSkill",
  "whatsInside",
  "benefits",
  "install",
  "prerequisites",
  "faq",
] as const;

export default function WhatAreSkillsPage() {
  const t = useTranslations("whatAreSkillsPage");
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    for (const id of tocSections) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const faqs = Array.from({ length: 10 }, (_, i) => ({
    q: t(`faq${i + 1}Q` as "faq1Q"),
    a: t(`faq${i + 1}A` as "faq1A"),
  }));

  const benefits = [
    { icon: RefreshCw, title: t("benefit1Title"), desc: t("benefit1Desc") },
    { icon: Brain, title: t("benefit2Title"), desc: t("benefit2Desc") },
    { icon: Zap, title: t("benefit3Title"), desc: t("benefit3Desc") },
  ];

  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        <div className="mt-16 flex gap-12">
          {/* Sticky sidebar TOC (desktop) */}
          <aside className="hidden w-48 shrink-0 lg:block">
            <nav className="sticky top-24 space-y-1">
              {tocSections.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    activeSection === id
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:text-text-primary"
                  }`}
                >
                  {t(`toc${id.charAt(0).toUpperCase() + id.slice(1)}` as "tocClaudeCode")}
                </a>
              ))}
            </nav>
          </aside>

          {/* Main content */}
          <div className="min-w-0 max-w-[45rem] space-y-16">
            {/* What is Claude Code */}
            <Section id="claudeCode" title={t("claudeCodeTitle")}>
              <p className="text-text-secondary leading-relaxed">
                {t("claudeCodeP1")}
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t("claudeCodeP2")}
              </p>
              <div className="mt-4 rounded-lg border border-accent/20 bg-accent/5 p-4">
                <p className="text-sm font-medium text-accent">
                  {t("claudeCodeP3")}
                </p>
              </div>
            </Section>

            {/* What is a Skill */}
            <Section id="whatIsSkill" title={t("whatIsSkillTitle")}>
              <p className="text-lg font-medium text-text-primary">
                {t("whatIsSkillP1")}
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t("whatIsSkillP2")}
              </p>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t("whatIsSkillP3")}
              </p>
              <div className="mt-4 rounded-lg border border-border bg-surface p-4">
                <p className="text-sm italic text-text-secondary">
                  {t("whatIsSkillAnalogy")}
                </p>
              </div>
            </Section>

            {/* What's Inside */}
            <Section id="whatsInside" title={t("whatsInsideTitle")}>
              <p className="text-text-secondary leading-relaxed">
                {t("whatsInsideP1")}
              </p>
              <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm text-text-secondary">
                <code>{folderStructure}</code>
              </pre>
              <p className="mt-4 text-text-secondary leading-relaxed">
                {t("whatsInsideP2")}
              </p>
            </Section>

            {/* Benefits */}
            <Section id="benefits" title={t("benefitsTitle")}>
              <div className="space-y-6">
                {benefits.map((b, i) => {
                  const BIcon = b.icon;
                  return (
                    <div
                      key={i}
                      className="flex gap-4 rounded-lg border border-border bg-surface p-5"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10">
                        <BIcon size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-text-primary">
                          {b.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                          {b.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Section>

            {/* Mid-page CTA */}
            <div className="text-center">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                {t("cta")}
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* How to Install */}
            <Section id="install" title={t("installTitle")}>
              <div className="space-y-6">
                {/* Step 1: Download */}
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    1
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {t("installStep1")}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {t("installStep1Desc")}
                    </p>
                  </div>
                </div>

                {/* Step 2a: Claude Code (CLI) */}
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    2a
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {t("installStep2Code")}
                    </h3>
                    <div className="mt-2 space-y-2">
                      <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-3 font-mono text-sm text-text-secondary">
                        <code>{installMac}</code>
                      </pre>
                      <pre className="overflow-x-auto rounded-lg border border-border bg-surface p-3 font-mono text-sm text-text-secondary">
                        <code>{installWin}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Step 2b: Claude Desktop / claude.ai (GUI) */}
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    2b
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {t("installStep2Desktop")}
                    </h3>
                    <p className="mt-2 text-sm text-text-secondary">
                      {t("installStep2DesktopDesc")}
                    </p>
                  </div>
                </div>

                {/* Step 3: Use */}
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                    3
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">
                      {t("installStep3")}
                    </h3>
                    <p className="mt-1 text-sm text-text-secondary">
                      {t("installStep3Desc")}
                    </p>
                  </div>
                </div>
              </div>
            </Section>

            {/* Prerequisites */}
            <Section id="prerequisites" title={t("prerequisitesTitle")}>
              <div className="space-y-3">
                {[
                  t("prereqClaudeSub"),
                  t("prereqClaudeCode"),
                  t("prereqOs"),
                  t("prereqCoding"),
                  t("prereqInternet"),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-success"
                    />
                    <span className="text-sm text-text-secondary">{item}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* FAQ */}
            <Section id="faq" title={t("faqTitle")}>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </Section>

            {/* Bottom CTA */}
            <div className="text-center">
              <Link
                href="/skills"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-3.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
              >
                {t("cta")}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="scroll-mt-24"
    >
      <h2 className="text-2xl font-bold text-text-primary">{title}</h2>
      <div className="mt-4">{children}</div>
    </motion.section>
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
