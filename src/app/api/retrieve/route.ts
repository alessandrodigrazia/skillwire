import { NextResponse } from "next/server";
import { getSlugByPlanId } from "@/lib/whop";
import { generateDownloadToken, DOWNLOADABLE_SLUGS } from "@/lib/download";
import { getSkillBySlug } from "@/lib/data/skills";
import { getBundleBySlug } from "@/lib/data/bundles";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://skillwire.ai";
const WHOP_API_URL = "https://api.whop.com";

function getProductName(slug: string): string {
  const skill = getSkillBySlug(slug);
  if (skill) return skill.name;
  const bundle = getBundleBySlug(slug);
  if (bundle) return bundle.name;
  return slug;
}

/**
 * POST /api/retrieve
 * Body: { email: string }
 *
 * Queries Whop API for all memberships belonging to this email.
 * For each downloadable plan, returns a signed download URL.
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json({ error: "Valid email required." }, { status: 400 });
    }

    const apiKey = process.env.WHOP_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Service temporarily unavailable." },
        { status: 503 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const results: { name: string; slug: string; downloadUrl: string }[] = [];
    const seen = new Set<string>();

    // Fetch memberships, paginating until done
    let pageNum = 1;
    const maxPages = 20; // safety limit

    while (pageNum <= maxPages) {
      const resp = await fetch(
        `${WHOP_API_URL}/v2/memberships?page_size=50&page_num=${pageNum}`,
        {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!resp.ok) {
        console.error("[retrieve] Whop API error:", resp.status, await resp.text());
        break;
      }

      const data = await resp.json();
      const memberships: unknown[] = data.data ?? [];

      for (const mem of memberships) {
        const m = mem as Record<string, unknown>;
        const memberEmail =
          (m.email as string) ??
          ((m.user as Record<string, unknown>)?.email as string) ??
          "";

        if (memberEmail.toLowerCase() !== normalizedEmail) continue;

        // Whop API returns `plan` as a string ID (not a nested object)
        const planId =
          (m.plan as string) ??
          (m.plan_id as string) ??
          ((m.plan as Record<string, unknown>)?.id as string);
        if (!planId) continue;

        const slug = getSlugByPlanId(planId);
        if (!slug || !DOWNLOADABLE_SLUGS.has(slug) || seen.has(slug)) continue;

        seen.add(slug);
        const { url } = generateDownloadToken(slug);
        results.push({
          name: getProductName(slug),
          slug,
          downloadUrl: `${APP_URL}${url}`,
        });
      }

      // Stop if no more pages
      const nextPage = data.pagination?.next_page;
      if (!nextPage || memberships.length === 0) break;
      pageNum++;
    }

    return NextResponse.json({ results });
  } catch (err) {
    console.error("[retrieve] Error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
