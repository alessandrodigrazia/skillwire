"use client";

import { Link } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import type { BlogArticle } from "@/lib/data/blog";
import { t, blogCategories } from "@/lib/data/blog";

const categoryColors: Record<string, string> = {
  guide: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  insight: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  tutorial: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

interface BlogCardProps {
  article: BlogArticle;
  index?: number;
}

export function BlogCard({ article, index = 0 }: BlogCardProps) {
  const locale = useLocale();
  const i18n = useTranslations("blogPage");
  const cat = blogCategories.find((c) => c.slug === article.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        href={`/blog/${article.slug}` as "/blog"}
        className="group flex h-full flex-col rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:-translate-y-1 hover:border-accent/20 glow-accent-hover"
      >
        {/* Top row: emoji + category */}
        <div className="flex items-center gap-3">
          <span className="text-3xl">{article.coverEmoji}</span>
          {cat && (
            <span
              className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold ${categoryColors[article.category] ?? ""}`}
            >
              {t(cat.name, locale)}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="mt-4 text-base font-semibold text-text-primary group-hover:text-accent transition-colors">
          {t(article.title, locale)}
        </h3>

        {/* Excerpt */}
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary line-clamp-3">
          {t(article.excerpt, locale)}
        </p>

        {/* Bottom row: date + reading time */}
        <div className="mt-4 flex items-center gap-4 text-xs text-text-secondary">
          <span>{article.publishedAt}</span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {article.readingTime} {i18n("readMin")}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
