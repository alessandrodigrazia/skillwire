import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArticleBySlug } from "@/lib/data/blog";
import BlogPostClient from "./BlogPostClient";

type Params = { locale: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const lang = locale === "it" ? "it" : "en";
  const title = article.metaTitle[lang];
  const description = article.metaDescription[lang];
  const url = `https://skillwire.ai/${locale}/blog/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url,
      publishedTime: article.publishedAt,
      authors: [article.author],
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://skillwire.ai/en/blog/${slug}`,
        it: `https://skillwire.ai/it/blog/${slug}`,
      },
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.metaTitle.en,
    description: article.metaDescription.en,
    datePublished: article.publishedAt,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Skillwire",
      url: "https://skillwire.ai",
    },
    url: `https://skillwire.ai/${locale}/blog/${slug}`,
    inLanguage: locale,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <BlogPostClient />
    </>
  );
}
