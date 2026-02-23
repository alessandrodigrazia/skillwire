import { ImageResponse } from "next/og";
import { getBundleBySlug } from "@/lib/data/bundles";

export const alt = "Bundle product image";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;
  const bundle = getBundleBySlug(slug);

  if (!bundle) {
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
          }}
        >
          Skillwire
        </div>
      ),
      { ...size },
    );
  }

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
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: 40,
            color: "#F59E0B",
            fontSize: 28,
          }}
        >
          {"> skillwire.ai"}
        </div>

        <div
          style={{
            fontSize: 52,
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            marginBottom: 24,
          }}
        >
          {bundle.name}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 28,
          }}
        >
          <div
            style={{
              color: "#F59E0B",
              backgroundColor: "#2D2006",
              padding: "8px 20px",
              borderRadius: 8,
              marginRight: 24,
            }}
          >
            BUNDLE
          </div>
          <div style={{ color: "#A1A1AA", marginRight: 24 }}>
            {`EUR ${bundle.bundlePrice}`}
          </div>
          <div style={{ color: "#22C55E", marginRight: 24 }}>
            {`Save ${bundle.savingsPercent}%`}
          </div>
          <div style={{ color: "#A1A1AA" }}>
            {`${bundle.skillSummaries.length} skills`}
          </div>
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
          {bundle.metaDescription.en.length > 140
            ? bundle.metaDescription.en.slice(0, 140) + "..."
            : bundle.metaDescription.en}
        </div>
      </div>
    ),
    { ...size },
  );
}
