import { NextRequest, NextResponse } from "next/server";
import { getSkillBySlug } from "@/lib/data/skills";

export async function POST(req: NextRequest) {
  try {
    const { email, slug, consent } = await req.json();

    // Validation
    if (!email || !slug || consent !== true) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    const skill = getSkillBySlug(slug);
    if (!skill || !skill.isFree) {
      return NextResponse.json(
        { error: "Invalid skill slug" },
        { status: 400 }
      );
    }

    const downloadUrl = `/downloads/${slug}.zip`;

    // Save to Airtable (non-blocking — don't fail the download if Airtable is down)
    const pat = process.env.AIRTABLE_PAT;
    const baseId = process.env.AIRTABLE_LEADS_BASE_ID;

    if (pat && baseId) {
      try {
        await fetch(`https://api.airtable.com/v0/${baseId}/Leads`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${pat}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            records: [
              {
                fields: {
                  Email: email,
                  Skill: slug,
                  Consent: true,
                  Locale:
                    req.headers.get("accept-language")?.split(",")[0] || "en",
                },
              },
            ],
          }),
        });
      } catch {
        // Airtable failure is non-blocking
        console.error("Airtable save failed for lead:", email, slug);
      }
    }

    return NextResponse.json({ success: true, downloadUrl });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
