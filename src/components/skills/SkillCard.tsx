"use client";

import { Link } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import type { SkillDetail } from "@/lib/data/skills";
import { t, categories } from "@/lib/data/skills";
import { getIcon } from "@/lib/icon-map";

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

interface SkillCardProps {
  skill: SkillDetail;
  index?: number;
}

export function SkillCard({ skill, index = 0 }: SkillCardProps) {
  const locale = useLocale();
  const cat = categories.find((c) => c.slug === skill.category);
  const SkillIcon = getIcon(skill.icon);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/skills/${skill.slug}` as "/skills"}
        className="group relative flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/20 glow-accent-hover"
      >
        {/* Badge */}
        {skill.badge && (
          <span
            className={`absolute right-4 top-4 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${badgeStyles[skill.badge] ?? ""}`}
          >
            {badgeLabels[skill.badge]
              ? t(badgeLabels[skill.badge], locale)
              : skill.badge}
          </span>
        )}

        {/* Icon */}
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
          <SkillIcon size={24} className="text-accent" />
        </div>

        {/* Name */}
        <h3 className="mt-4 text-base font-semibold text-text-primary">
          {skill.name}
        </h3>

        {/* Tagline */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {t(skill.tagline, locale)}
        </p>

        {/* Bottom row */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-accent">
            {skill.isFree
              ? locale === "it"
                ? "Gratis"
                : "Free"
              : `\u20AC${skill.price}`}
          </span>
          <span className="text-xs font-medium text-text-secondary">
            {cat ? t(cat.name, locale) : skill.category}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
