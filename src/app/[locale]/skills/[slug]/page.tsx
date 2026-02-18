"use client";

import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Check,
  X as XIcon,
  ChevronDown,
  Star,
  FileText,
  FolderOpen,
} from "lucide-react";
import { useState } from "react";
import {
  getSkillBySlug,
  getRelatedSkills,
  t,
  categories,
} from "@/lib/data/skills";
import { SkillCard } from "@/components/skills/SkillCard";
import { FreeSkillForm } from "@/components/FreeSkillForm";
import { useCartStore } from "@/lib/store/cart";
import { notFound } from "next/navigation";

export default function SkillDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const i18n = useTranslations("skillDetail");
  const locale = useLocale();
  const skill = getSkillBySlug(slug);
  const { addItem, openCart, items } = useCartStore();

  if (!skill) {
    notFound();
  }

  const related = getRelatedSkills(slug);
  const isInCart = items.some((i) => i.slug === skill.slug);
  const cat = categories.find((c) => c.slug === skill.category);
  const categoryName = cat ? t(cat.name, locale) : skill.category;

  const handleAddToCart = () => {
    addItem({
      slug: skill.slug,
      name: skill.name,
      price: skill.price,
      type: "skill",
      emoji: skill.emoji,
    });
    openCart();
  };

  return (
    <div className="relative overflow-hidden py-12 sm:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[700px] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute right-0 top-1/4 h-[250px] w-[350px] rounded-full bg-accent/3 blur-[100px]" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
          <Link
            href="/skills"
            className="transition-colors hover:text-text-primary"
          >
            {i18n("breadcrumbSkills")}
          </Link>
          <span>/</span>
          <span className="text-text-primary">{skill.name}</span>
        </nav>

        {/* Skill Hero */}
        <motion.div
          className="rounded-2xl border border-border bg-surface p-8 sm:p-10 glow-accent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[36rem]">
              {/* Emoji + Category + Version */}
              <div className="flex items-center gap-3">
                <span className="text-5xl">{skill.emoji}</span>
                <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-secondary">
                  {categoryName}
                </span>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  v{skill.version}
                </span>
              </div>

              {/* Name */}
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {skill.name}
              </h1>

              {/* Tagline */}
              <p className="mt-3 text-lg leading-relaxed text-text-secondary">
                {t(skill.tagline, locale)}
              </p>

              {/* Metadata */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <FileText size={14} />
                  {skill.filesCount} {i18n("files")}
                </span>
                <span className="flex items-center gap-1.5">
                  <FolderOpen size={14} />
                  {categoryName}
                </span>
                <span className="flex items-center gap-1">
                  <Star size={14} className="fill-accent text-accent" />
                  {skill.averageRating} ({skill.reviewCount})
                </span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
              {skill.isFree ? (
                <>
                  <span className="rounded-full bg-success/10 px-4 py-1.5 text-lg font-bold text-success">
                    {i18n("freeLabel")}
                  </span>
                  <FreeSkillForm slug={skill.slug} />
                </>
              ) : (
                <>
                  <span className="text-4xl font-bold text-accent">
                    &euro;{skill.price}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`inline-flex items-center gap-2 rounded-lg px-8 py-3.5 text-sm font-semibold transition-colors ${
                      isInCart
                        ? "bg-surface-elevated text-text-secondary cursor-default"
                        : "bg-accent text-bg hover:bg-accent-hover"
                    }`}
                  >
                    <ShoppingCart size={16} />
                    {isInCart ? i18n("inCart") : i18n("addToCart")}
                  </button>
                  <p className="text-xs text-text-secondary">
                    {i18n("guarantee")}
                  </p>
                </>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Main content (2/3) */}
          <div className="space-y-12 lg:col-span-2">
            {/* Problem -> Solution -> Result */}
            <Section title={i18n("problemTitle")}>
              <p className="text-text-secondary leading-relaxed">
                {t(skill.problem, locale)}
              </p>
            </Section>

            <Section title={i18n("solutionTitle")}>
              <p className="text-text-secondary leading-relaxed">
                {t(skill.solution, locale)}
              </p>
            </Section>

            <Section title={i18n("resultTitle")}>
              <p className="text-text-secondary leading-relaxed">
                {t(skill.result, locale)}
              </p>
            </Section>

            {/* What's Inside */}
            <Section title={i18n("whatsInsideTitle")}>
              <ul className="space-y-3">
                {skill.whatsInside.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-success"
                    />
                    <span className="text-sm text-text-secondary">
                      {t(item, locale)}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* Who Is This For */}
            <Section title={i18n("whoIsThisForTitle")}>
              <ul className="space-y-3">
                {skill.whoIsThisFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span className="text-sm text-text-secondary">
                      {t(item, locale)}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex items-start gap-3">
                <XIcon
                  size={16}
                  className="mt-0.5 shrink-0 text-error"
                />
                <span className="text-sm text-text-secondary">
                  {i18n("notFor")}: {t(skill.notFor, locale)}
                </span>
              </div>
            </Section>

            {/* Before vs After */}
            <Section title={i18n("beforeAfterTitle")}>
              <div className="space-y-4">
                {skill.beforeAfter.map((item, i) => (
                  <div key={i} className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-lg border border-error/20 bg-error/5 p-4">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-error">
                        {i18n("before")}
                      </span>
                      <p className="text-sm text-text-secondary">
                        {t(item.before, locale)}
                      </p>
                    </div>
                    <div className="rounded-lg border border-success/20 bg-success/5 p-4">
                      <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-success">
                        {i18n("after")}
                      </span>
                      <p className="text-sm text-text-secondary">
                        {t(item.after, locale)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Specifications */}
            <Section title={i18n("specsTitle")}>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {[
                      [i18n("specFiles"), String(skill.filesCount)],
                      [i18n("specCategory"), categoryName],
                      [
                        i18n("specComplexity"),
                        "\u2B50".repeat(skill.complexity),
                      ],
                      [i18n("specVersion"), `v${skill.version}`],
                      [
                        i18n("specLanguage"),
                        locale === "it"
                          ? "Italiano & Inglese"
                          : "English & Italian",
                      ],
                      [i18n("specCompatibility"), "Claude Free, Pro, Max, Team, Enterprise"],
                      [i18n("specPlatform"), "macOS, Windows, Linux"],
                    ].map(([label, value], i) => (
                      <tr
                        key={label}
                        className={i % 2 === 0 ? "bg-surface" : "bg-bg"}
                      >
                        <td className="px-4 py-3 font-medium text-text-primary">
                          {label}
                        </td>
                        <td className="px-4 py-3 text-text-secondary">
                          {value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Changelog */}
            <Section title={i18n("changelogTitle")}>
              <div className="space-y-4">
                {skill.changelog.map((entry) => (
                  <div
                    key={entry.version}
                    className="rounded-lg border border-border bg-surface p-4"
                  >
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                        v{entry.version}
                      </span>
                      <span className="text-xs text-text-secondary">
                        {entry.date}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-1.5">
                      {entry.changes.map((change, ci) => (
                        <li
                          key={ci}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {t(change, locale)}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Section>

            {/* FAQ */}
            <Section title={i18n("faqTitle")}>
              <div className="space-y-3">
                {skill.faq.map((item, i) => (
                  <FaqItem
                    key={i}
                    question={t(item.question, locale)}
                    answer={t(item.answer, locale)}
                  />
                ))}
              </div>
            </Section>
          </div>

          {/* Sticky sidebar (1/3) */}
          <div className="hidden lg:block">
            <div className="sticky top-24 rounded-xl border border-border bg-surface p-6">
              <span className="text-3xl">{skill.emoji}</span>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">
                {skill.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {t(skill.tagline, locale)}
              </p>
              {skill.isFree ? (
                <>
                  <p className="mt-4 rounded-full bg-success/10 px-4 py-1.5 text-center text-lg font-bold text-success">
                    {i18n("freeLabel")}
                  </p>
                  <div className="mt-4">
                    <FreeSkillForm slug={skill.slug} />
                  </div>
                </>
              ) : (
                <>
                  <p className="mt-4 text-3xl font-bold text-accent">
                    &euro;{skill.price}
                  </p>
                  <button
                    onClick={handleAddToCart}
                    disabled={isInCart}
                    className={`mt-4 flex w-full items-center justify-center gap-2 rounded-lg py-3 text-sm font-semibold transition-colors ${
                      isInCart
                        ? "bg-surface-elevated text-text-secondary cursor-default"
                        : "bg-accent text-bg hover:bg-accent-hover"
                    }`}
                  >
                    <ShoppingCart size={16} />
                    {isInCart ? i18n("inCart") : i18n("addToCart")}
                  </button>
                  <p className="mt-3 text-center text-xs text-text-secondary">
                    {i18n("guarantee")}
                  </p>
                </>
              )}

              {/* Quick specs */}
              <div className="mt-6 space-y-2 border-t border-border pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specVersion")}
                  </span>
                  <span className="font-semibold text-accent">
                    v{skill.version}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specFiles")}
                  </span>
                  <span className="text-text-primary">
                    {skill.filesCount}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specRating")}
                  </span>
                  <span className="flex items-center gap-1 text-text-primary">
                    <Star size={12} className="fill-accent text-accent" />
                    {skill.averageRating}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specPlatform")}
                  </span>
                  <span className="text-text-primary">All</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Skills */}
        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-text-primary">
              {i18n("relatedTitle")}
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => (
                <SkillCard key={s.slug} skill={s} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl font-bold text-text-primary">{title}</h2>
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
