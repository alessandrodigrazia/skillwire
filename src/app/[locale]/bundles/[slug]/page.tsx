"use client";

import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  Check,
  ChevronDown,
  Package,
  Star,
} from "lucide-react";
import { useState } from "react";
import { getBundleBySlug, t } from "@/lib/data/bundles";
import { useCartStore } from "@/lib/store/cart";
import { notFound } from "next/navigation";

export default function BundleDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const i18n = useTranslations("bundlePage");
  const locale = useLocale();
  const bundle = getBundleBySlug(slug);
  const { addItem, openCart, items } = useCartStore();

  if (!bundle) {
    notFound();
  }

  const isInCart = items.some((i) => i.slug === bundle.slug);
  const savings = bundle.originalPrice - bundle.bundlePrice;

  const handleAddToCart = () => {
    addItem({
      slug: bundle.slug,
      name: bundle.name,
      price: bundle.bundlePrice,
      type: "bundle",
      emoji: bundle.emoji,
    });
    openCart();
  };

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
          <Link
            href="/bundles"
            className="transition-colors hover:text-text-primary"
          >
            {i18n("breadcrumbBundles")}
          </Link>
          <span>/</span>
          <span className="text-text-primary">{bundle.name}</span>
        </nav>

        {/* Bundle Hero */}
        <motion.div
          className="rounded-2xl border border-border bg-surface p-8 sm:p-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-[36rem]">
              {/* Emoji + Badge + Version */}
              <div className="flex items-center gap-3">
                <span className="text-5xl">{bundle.emoji}</span>
                <span className="rounded-full border border-border bg-bg px-3 py-1 text-xs font-medium text-text-secondary">
                  Bundle
                </span>
                <span className="rounded-full border border-accent/20 bg-accent/10 px-2.5 py-1 text-xs font-semibold text-accent">
                  v{bundle.version}
                </span>
              </div>

              {/* Name */}
              <h1 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
                {bundle.name}
              </h1>

              {/* Tagline */}
              <p className="mt-3 text-lg leading-relaxed text-text-secondary">
                {t(bundle.tagline, locale)}
              </p>

              {/* Metadata */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
                <span className="flex items-center gap-1.5">
                  <Package size={14} />
                  {i18n("skillsIncluded", {
                    count: bundle.skillSummaries.length,
                  })}
                </span>
                <span className="rounded-full bg-success/10 px-2.5 py-0.5 text-xs font-semibold text-success">
                  {i18n("savePercent", { percent: bundle.savingsPercent })}
                </span>
              </div>
            </div>

            {/* Price + CTA */}
            <div className="flex shrink-0 flex-col items-start gap-4 lg:items-end">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-bold text-accent">
                  &euro;{bundle.bundlePrice}
                </span>
                <span className="text-xl text-text-secondary line-through">
                  &euro;{bundle.originalPrice}
                </span>
              </div>
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
            </div>
          </div>
        </motion.div>

        {/* Content sections */}
        <div className="mt-12 grid gap-12 lg:grid-cols-3">
          {/* Main content (2/3) */}
          <div className="space-y-12 lg:col-span-2">
            {/* Why This Bundle */}
            <Section title={i18n("whyThisBundle")}>
              <p className="text-text-secondary leading-relaxed">
                {t(bundle.description, locale)}
              </p>
            </Section>

            {/* Included Skills */}
            <Section title={i18n("includedSkills")}>
              <div className="space-y-4">
                {bundle.skillSummaries.map((skill) => (
                  <div
                    key={skill.slug}
                    className="rounded-lg border border-border bg-surface p-5"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-2xl">{skill.emoji}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-text-primary">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-text-secondary">
                            &euro;{skill.price}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                          {t(skill.tagline, locale)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Price Breakdown */}
            <Section title={i18n("priceBreakdown")}>
              <div className="overflow-hidden rounded-lg border border-border">
                <table className="w-full text-sm">
                  <tbody>
                    {bundle.skillSummaries.map((skill, i) => (
                      <tr
                        key={skill.slug}
                        className={i % 2 === 0 ? "bg-surface" : "bg-bg"}
                      >
                        <td className="px-4 py-3 text-text-primary">
                          <span className="mr-2">{skill.emoji}</span>
                          {skill.name}
                        </td>
                        <td className="px-4 py-3 text-right text-text-secondary">
                          &euro;{skill.price}
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t border-border bg-surface">
                      <td className="px-4 py-3 font-medium text-text-secondary">
                        {i18n("total")}
                      </td>
                      <td className="px-4 py-3 text-right text-text-secondary line-through">
                        &euro;{bundle.originalPrice}
                      </td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="px-4 py-3 font-bold text-accent">
                        {i18n("bundlePrice")}
                      </td>
                      <td className="px-4 py-3 text-right text-lg font-bold text-accent">
                        &euro;{bundle.bundlePrice}
                      </td>
                    </tr>
                    <tr className="bg-success/5">
                      <td className="px-4 py-3 font-semibold text-success">
                        {i18n("youSave")}
                      </td>
                      <td className="px-4 py-3 text-right font-semibold text-success">
                        &euro;{savings} ({bundle.savingsPercent}%)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>

            {/* Who Is This For */}
            <Section title={i18n("whoIsThisFor")}>
              <ul className="space-y-3">
                {bundle.whoIsThisFor.map((item, i) => (
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
            </Section>

            {/* Changelog */}
            <Section title={i18n("changelogTitle")}>
              <div className="space-y-4">
                {bundle.changelog.map((entry) => (
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
                {bundle.faq.map((item, i) => (
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
              <span className="text-3xl">{bundle.emoji}</span>
              <h3 className="mt-3 text-lg font-semibold text-text-primary">
                {bundle.name}
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                {t(bundle.tagline, locale)}
              </p>
              <div className="mt-4 flex items-baseline gap-2">
                <p className="text-3xl font-bold text-accent">
                  &euro;{bundle.bundlePrice}
                </p>
                <p className="text-sm text-text-secondary line-through">
                  &euro;{bundle.originalPrice}
                </p>
              </div>
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

              {/* Quick specs */}
              <div className="mt-6 space-y-2 border-t border-border pt-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specVersion")}
                  </span>
                  <span className="font-semibold text-accent">
                    v{bundle.version}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specSkills")}
                  </span>
                  <span className="text-text-primary">
                    {bundle.skillSummaries.length}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-secondary">
                    {i18n("specSavings")}
                  </span>
                  <span className="font-semibold text-success">
                    {bundle.savingsPercent}%
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
