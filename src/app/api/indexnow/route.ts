import { NextResponse } from "next/server";
import { skills } from "@/lib/data/skills";
import { getAllBundles } from "@/lib/data/bundles";
import { getAllArticles } from "@/lib/data/blog";

const BASE_URL = "https://skillwire.ai";
const LOCALES = ["en", "it"];
const INDEXNOW_KEY = "3d3852cd97d7fe678921b2672984a239";

export async function POST(request: Request) {
  // Protect with a deploy secret (optional but recommended)
  const authHeader = request.headers.get("authorization");
  const expectedSecret = process.env.INDEXNOW_SECRET;
  if (expectedSecret && authHeader !== `Bearer ${expectedSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const staticPages = [
    "",
    "/skills",
    "/bundles",
    "/how-it-works",
    "/what-are-claude-skills",
    "/about",
    "/blog",
  ];

  const urls: string[] = [
    ...staticPages.flatMap((path) =>
      LOCALES.map((locale) => `${BASE_URL}/${locale}${path}`)
    ),
    ...skills.flatMap((skill) =>
      LOCALES.map((locale) => `${BASE_URL}/${locale}/skills/${skill.slug}`)
    ),
    ...getAllBundles().flatMap((bundle) =>
      LOCALES.map((locale) => `${BASE_URL}/${locale}/bundles/${bundle.slug}`)
    ),
    ...getAllArticles().flatMap((article) =>
      LOCALES.map((locale) => `${BASE_URL}/${locale}/blog/${article.slug}`)
    ),
  ];

  const body = {
    host: "skillwire.ai",
    key: INDEXNOW_KEY,
    keyLocation: `${BASE_URL}/${INDEXNOW_KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  return NextResponse.json({
    status: res.status,
    submitted: urls.length,
    urls,
  });
}
