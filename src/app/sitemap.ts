import type { MetadataRoute } from "next";
import { skills } from "@/lib/data/skills";
import { getAllBundles } from "@/lib/data/bundles";
import { getAllArticles } from "@/lib/data/blog";

const BASE_URL = "https://skillwire.ai";
const LOCALES = ["en", "it"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages = [
    "",
    "/skills",
    "/bundles",
    "/how-it-works",
    "/what-are-claude-skills",
    "/about",
    "/blog",
    "/legal/privacy",
    "/legal/terms",
    "/legal/disclaimer",
    "/legal/refund",
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((path) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}${path}`])
        ),
      },
    }))
  );

  // Skill pages (19 skills × 2 locales)
  const skillEntries: MetadataRoute.Sitemap = skills.flatMap((skill) =>
    LOCALES.map((locale) => ({
      url: `${BASE_URL}/${locale}/skills/${skill.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: skill.isFree ? 0.9 : 0.85,
      alternates: {
        languages: Object.fromEntries(
          LOCALES.map((l) => [l, `${BASE_URL}/${l}/skills/${skill.slug}`])
        ),
      },
    }))
  );

  // Bundle pages (5 bundles × 2 locales)
  const bundleEntries: MetadataRoute.Sitemap = getAllBundles().flatMap(
    (bundle) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/bundles/${bundle.slug}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}/bundles/${bundle.slug}`])
          ),
        },
      }))
  );

  // Blog articles
  const blogEntries: MetadataRoute.Sitemap = getAllArticles().flatMap(
    (article) =>
      LOCALES.map((locale) => ({
        url: `${BASE_URL}/${locale}/blog/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "yearly" as const,
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(
            LOCALES.map((l) => [l, `${BASE_URL}/${l}/blog/${article.slug}`])
          ),
        },
      }))
  );

  return [...staticEntries, ...skillEntries, ...bundleEntries, ...blogEntries];
}
