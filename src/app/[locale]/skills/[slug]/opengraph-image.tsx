import { ImageResponse } from "next/og";
import { getSkillBySlug } from "@/lib/data/skills";

export const runtime = "edge";
export const alt = "Skill product image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);

  if (!skill) {
    return new ImageResponse(
      (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0A0A0B",
            color: "#F59E0B",
            fontSize: 64,
            fontFamily: "monospace",
          }}
        >
          Skillwire
        </div>
      ),
      { ...size },
    );
  }

  const priceLabel = skill.isFree ? "FREE" : `EUR ${skill.price}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          backgroundColor: "#0A0A0B",
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
            color: "#F59E0B",
            fontSize: 28,
            opacity: 0.8,
          }}
        >
          {">"} skillwire.ai
        </div>

        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          {skill.name}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            fontSize: 28,
          }}
        >
          <div
            style={{
              color: "#F59E0B",
              backgroundColor: "rgba(245,158,11,0.15)",
              padding: "8px 20px",
              borderRadius: 8,
            }}
          >
            {skill.category}
          </div>
          <div style={{ color: "#A1A1AA" }}>{priceLabel}</div>
          <div style={{ color: "#A1A1AA" }}>{skill.filesCount} files</div>
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#71717A",
            marginTop: 32,
            lineHeight: 1.5,
            maxWidth: 900,
          }}
        >
          {skill.metaDescription.en.length > 140
            ? skill.metaDescription.en.slice(0, 140) + "..."
            : skill.metaDescription.en}
        </div>
      </div>
    ),
    { ...size },
  );
}
