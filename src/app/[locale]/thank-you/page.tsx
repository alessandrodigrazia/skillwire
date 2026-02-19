import type { Metadata } from "next";
import { getSlugByPlanId } from "@/lib/whop";
import { generateDownloadToken, DOWNLOADABLE_SLUGS } from "@/lib/download";
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

type SearchParams = { p?: string };

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const { p: planId } = await searchParams;

  let downloadUrl: string | undefined;

  if (planId) {
    const slug = getSlugByPlanId(planId);
    if (slug && DOWNLOADABLE_SLUGS.has(slug)) {
      const { url } = generateDownloadToken(slug);
      downloadUrl = url;
    }
  }

  return <ThankYouClient downloadUrl={downloadUrl} />;
}
