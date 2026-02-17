"use client";

import { useState, useMemo } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Search, SlidersHorizontal } from "lucide-react";
import { skills, categories, t } from "@/lib/data/skills";
import { SkillCard } from "@/components/skills/SkillCard";
import type { CategorySlug } from "@/types";

type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export default function SkillCatalogPage() {
  const i18n = useTranslations("catalog");
  const locale = useLocale();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    "all"
  );
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filteredSkills = useMemo(() => {
    let result = [...skills];

    // Category filter
    if (activeCategory !== "all") {
      result = result.filter((s) => s.category === activeCategory);
    }

    // Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          t(s.tagline, locale).toLowerCase().includes(q) ||
          s.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "newest":
        result.reverse();
        break;
      case "featured":
      default:
        break;
    }

    return result;
  }, [searchQuery, activeCategory, sortBy, locale]);

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Page header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {i18n("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-[42rem] text-lg text-text-secondary">
            {i18n("subtitle")}
          </p>
        </div>

        {/* Search + filter bar */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          {/* Search */}
          <div className="relative flex-1 sm:max-w-sm">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={i18n("searchPlaceholder")}
              className="w-full rounded-lg border border-border bg-surface py-2.5 pl-9 pr-4 text-sm text-text-primary placeholder:text-text-secondary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            />
          </div>

          <div className="flex items-center gap-3">
            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-primary focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            >
              <option value="featured">{i18n("sortFeatured")}</option>
              <option value="price-asc">{i18n("sortPriceAsc")}</option>
              <option value="price-desc">{i18n("sortPriceDesc")}</option>
              <option value="newest">{i18n("sortNewest")}</option>
            </select>

            {/* Mobile filter toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2.5 text-sm text-text-primary transition-colors hover:bg-surface-elevated lg:hidden"
            >
              <SlidersHorizontal size={16} />
              {i18n("filters")}
            </button>
          </div>
        </div>

        <div className="mt-8 flex gap-8">
          {/* Sidebar categories (desktop) */}
          <aside className="hidden w-56 shrink-0 lg:block">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-text-secondary">
              {i18n("categories")}
            </h3>
            <nav className="mt-3 flex flex-col gap-1">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                  activeCategory === "all"
                    ? "bg-accent/10 text-accent"
                    : "text-text-secondary hover:bg-surface hover:text-text-primary"
                }`}
              >
                {i18n("allCategories")}
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                    activeCategory === cat.slug
                      ? "bg-accent/10 text-accent"
                      : "text-text-secondary hover:bg-surface hover:text-text-primary"
                  }`}
                >
                  {t(cat.name, locale)}
                </button>
              ))}
            </nav>
          </aside>

          {/* Mobile filter chips */}
          {showFilters && (
            <div className="fixed inset-x-0 top-16 z-40 border-b border-border bg-bg px-4 py-3 lg:hidden">
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                    activeCategory === "all"
                      ? "border-accent bg-accent/10 text-accent"
                      : "border-border text-text-secondary"
                  }`}
                >
                  {i18n("allCategories")}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat.slug}
                    onClick={() => setActiveCategory(cat.slug)}
                    className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                      activeCategory === cat.slug
                        ? "border-accent bg-accent/10 text-accent"
                        : "border-border text-text-secondary"
                    }`}
                  >
                    {t(cat.name, locale)}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Skills grid */}
          <div className="flex-1">
            {/* Results count */}
            <p className="mb-6 text-sm text-text-secondary">
              {i18n("showing", { count: filteredSkills.length })}
            </p>

            {filteredSkills.length === 0 ? (
              <div className="py-16 text-center">
                <p className="text-lg text-text-secondary">
                  {i18n("noResults")}
                </p>
                <button
                  onClick={() => {
                    setSearchQuery("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
                >
                  {i18n("clearFilters")}
                </button>
              </div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredSkills.map((skill, i) => (
                  <SkillCard key={skill.slug} skill={skill} index={i} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
