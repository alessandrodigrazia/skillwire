import { getSlugByPlanId } from "@/lib/whop";
import { generateDownloadToken, DOWNLOADABLE_SLUGS } from "@/lib/download";
import ThankYouClient from "./ThankYouClient";

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
