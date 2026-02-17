"use client";

import { useParams } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion } from "framer-motion";
import { Clock, ArrowRight } from "lucide-react";
import { useState, useEffect, type ComponentType } from "react";
import { getArticleBySlug, getAllArticles, t, blogCategories } from "@/lib/data/blog";
import { getSkillBySlug } from "@/lib/data/skills";
import { t as tSkill } from "@/lib/data/skills";
import { BlogCard } from "@/components/blog/BlogCard";
import { mdxComponents } from "@/components/blog/MdxComponents";
import { notFound } from "next/navigation";

const categoryColors: Record<string, string> = {
  guide: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  insight: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  tutorial: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const i18n = useTranslations("blogPage");
  const locale = useLocale();
  const article = getArticleBySlug(slug);

  const [MdxContent, setMdxContent] = useState<ComponentType<{ components: typeof mdxComponents }> | null>(null);

  useEffect(() => {
    if (!article) return;

    const loadContent = async () => {
      try {
        const mod = await import(
          `@/content/blog/${locale}/${slug}.mdx`
        );
        setMdxContent(() => mod.default);
      } catch {
        // MDX file not found for this locale, content stays null
      }
    };
    loadContent();
  }, [locale, slug, article]);

  if (!article) {
    notFound();
  }

  const cat = blogCategories.find((c) => c.slug === article.category);
  const relatedSkill = article.relatedSkillSlug
    ? getSkillBySlug(article.relatedSkillSlug)
    : null;
  const otherArticles = getAllArticles()
    .filter((a) => a.slug !== slug)
    .slice(0, 2);

  return (
    <div className="py-12 sm:py-16">
      <div className="mx-auto max-w-[48rem] px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-text-secondary">
          <Link
            href="/blog"
            className="transition-colors hover:text-text-primary"
          >
            {i18n("backToBlog")}
          </Link>
          <span>/</span>
          <span className="text-text-primary line-clamp-1">
            {t(article.title, locale)}
          </span>
        </nav>

        {/* Article header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Category + emoji */}
          <div className="flex items-center gap-3">
            <span className="text-4xl">{article.coverEmoji}</span>
            {cat && (
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${categoryColors[article.category] ?? ""}`}
              >
                {t(cat.name, locale)}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            {t(article.title, locale)}
          </h1>

          {/* Meta */}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-secondary">
            <span>
              {i18n("by")} {article.author}
            </span>
            <span>{article.publishedAt}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {article.readingTime} {i18n("readMin")}
            </span>
          </div>
        </motion.header>

        {/* Article body */}
        <motion.article
          className="mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {MdxContent ? (
            <MdxContent components={mdxComponents} />
          ) : (
            <p className="text-text-secondary leading-relaxed">
              {t(article.excerpt, locale)}
            </p>
          )}
        </motion.article>

        {/* Related skill CTA */}
        {relatedSkill && (
          <motion.div
            className="mt-12 rounded-xl border border-accent/20 bg-accent/5 p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-accent">
              {i18n("relatedSkill")}
            </p>
            <div className="mt-3 flex items-center gap-3">
              <span className="text-2xl">{relatedSkill.emoji}</span>
              <div>
                <h3 className="font-semibold text-text-primary">
                  {relatedSkill.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {tSkill(relatedSkill.tagline, locale)}
                </p>
              </div>
            </div>
            <Link
              href={`/skills/${relatedSkill.slug}` as "/skills"}
              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-2.5 text-sm font-semibold text-bg transition-colors hover:bg-accent-hover"
            >
              &euro;{relatedSkill.price} &mdash; View skill
              <ArrowRight size={14} />
            </Link>
          </motion.div>
        )}

        {/* More articles */}
        {otherArticles.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl font-bold text-text-primary">
              {i18n("relatedArticles")}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {otherArticles.map((a, i) => (
                <BlogCard key={a.slug} article={a} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
