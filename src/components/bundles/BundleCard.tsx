"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import type { BundleDetail } from "@/lib/data/bundles";
import { t } from "@/lib/data/bundles";
import { Package } from "lucide-react";

const badgeStyles: Record<string, string> = {
  "best-seller": "bg-accent/10 text-accent border-accent/20",
  new: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  popular: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  premium: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  flagship: "bg-red-500/10 text-red-400 border-red-500/20",
  niche: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "lead-magnet": "bg-green-500/10 text-green-400 border-green-500/20",
};

const badgeLabels: Record<string, { en: string; it: string }> = {
  "best-seller": { en: "Best Seller", it: "Best Seller" },
  new: { en: "New", it: "Nuovo" },
  popular: { en: "Popular", it: "Popolare" },
  premium: { en: "Premium", it: "Premium" },
  flagship: { en: "Flagship", it: "Flagship" },
  niche: { en: "Niche", it: "Nicchia" },
  "lead-magnet": { en: "Free", it: "Gratis" },
};

interface BundleCardProps {
  bundle: BundleDetail;
  index?: number;
}

export function BundleCard({ bundle, index = 0 }: BundleCardProps) {
  const locale = useLocale();
  const i18n = useTranslations("bundlePage");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/bundles/${bundle.slug}` as "/bundles"}
        className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/20 glow-accent-hover"
      >
        {/* Badge */}
        {bundle.badge && (
          <span
            className={`absolute right-4 top-4 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeStyles[bundle.badge] ?? ""}`}
          >
            {badgeLabels[bundle.badge]
              ? t(badgeLabels[bundle.badge], locale)
              : bundle.badge}
          </span>
        )}

        {/* Emoji */}
        <span className="text-3xl">{bundle.emoji}</span>

        {/* Name */}
        <h3 className="mt-4 text-base font-semibold text-text-primary">
          {bundle.name}
        </h3>

        {/* Tagline */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {t(bundle.tagline, locale)}
        </p>

        {/* Skills count */}
        <div className="mt-4 flex items-center gap-1.5 text-xs text-text-secondary">
          <Package size={12} />
          <span>
            {i18n("skillsIncluded", {
              count: bundle.skillSummaries.length,
            })}
          </span>
        </div>

        {/* Price row */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-bold text-accent">
            &euro;{bundle.bundlePrice}
          </span>
          <span className="text-sm text-text-secondary line-through">
            &euro;{bundle.originalPrice}
          </span>
          <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
            -{bundle.savingsPercent}%
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
