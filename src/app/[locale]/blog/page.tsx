"use client";

import { useState, useMemo } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { getAllArticles, blogCategories, type BlogCategory } from "@/lib/data/blog";
import { BlogCard } from "@/components/blog/BlogCard";

export default function BlogPage() {
  const i18n = useTranslations("blogPage");
  const [activeCategory, setActiveCategory] = useState<BlogCategory | "all">(
    "all"
  );

  const allArticles = getAllArticles();

  const filteredArticles = useMemo(() => {
    if (activeCategory === "all") return allArticles;
    return allArticles.filter((a) => a.category === activeCategory);
  }, [activeCategory, allArticles]);

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {i18n("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-[42rem] text-lg text-text-secondary">
            {i18n("subtitle")}
          </p>
        </motion.div>

        {/* Category filter chips */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              activeCategory === "all"
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-secondary hover:border-accent/20 hover:text-text-primary"
            }`}
          >
            {i18n("allCategories")}
          </button>
          {blogCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveCategory(cat.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeCategory === cat.slug
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-text-secondary hover:border-accent/20 hover:text-text-primary"
              }`}
            >
              {i18n(cat.slug)}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="mt-10">
          <p className="mb-6 text-sm text-text-secondary">
            {i18n("showing", { count: filteredArticles.length })}
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, i) => (
              <BlogCard key={article.slug} article={article} index={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
