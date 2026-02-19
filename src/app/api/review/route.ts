import { NextRequest, NextResponse } from "next/server";
import { getSkillBySlug } from "@/lib/data/skills";

const AIRTABLE_TABLE = "Reviews";

function getAirtableConfig() {
  const pat = process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_LEADS_BASE_ID;
  return { pat, baseId, ready: !!(pat && baseId) };
}

// POST — save a new rating
export async function POST(req: NextRequest) {
  try {
    const { slug, rating, source = "free" } = await req.json();

    if (!slug || typeof rating !== "number" || rating < 1 || rating > 5) {
      return NextResponse.json(
        { error: "Invalid fields: slug required, rating must be 1-5" },
        { status: 400 }
      );
    }

    const skill = getSkillBySlug(slug);
    if (!skill) {
      return NextResponse.json({ error: "Unknown skill slug" }, { status: 400 });
    }

    const { pat, baseId, ready } = getAirtableConfig();
    if (!ready) {
      return NextResponse.json(
        { error: "Rating service not configured" },
        { status: 503 }
      );
    }

    await fetch(`https://api.airtable.com/v0/${baseId}/${AIRTABLE_TABLE}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${pat}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        records: [
          {
            fields: {
              Skill: slug,
              Rating: Math.round(rating),
              Source: source,
            },
          },
        ],
      }),
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// GET ?slug=xxx — compute average rating and count for a skill
export async function GET(req: NextRequest) {
  try {
    const slug = req.nextUrl.searchParams.get("slug");
    if (!slug) {
      return NextResponse.json(
        { error: "Missing slug parameter" },
        { status: 400 }
      );
    }

    const { pat, baseId, ready } = getAirtableConfig();
    if (!ready) {
      return NextResponse.json({ averageRating: null, reviewCount: 0 });
    }

    const filter = encodeURIComponent(`{Skill}="${slug}"`);
    const url = `https://api.airtable.com/v0/${baseId}/${AIRTABLE_TABLE}?filterByFormula=${filter}&fields[]=Rating`;

    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${pat}` },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ averageRating: null, reviewCount: 0 });
    }

    const data = await res.json();
    const records: { fields: { Rating?: number } }[] = data.records ?? [];
    const ratings = records
      .map((r) => r.fields?.Rating)
      .filter((v): v is number => typeof v === "number" && v >= 1 && v <= 5);

    if (ratings.length === 0) {
      return NextResponse.json({ averageRating: null, reviewCount: 0 });
    }

    const average =
      Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) /
      10;

    return NextResponse.json({ averageRating: average, reviewCount: ratings.length });
  } catch {
    return NextResponse.json({ averageRating: null, reviewCount: 0 });
  }
}
