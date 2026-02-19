import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBundleBySlug } from "@/lib/data/bundles";
import BundleDetailClient from "./BundleDetailClient";

type Params = { locale: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const bundle = getBundleBySlug(slug);
  if (!bundle) return {};

  const lang = locale === "it" ? "it" : "en";
  const title = bundle.metaTitle[lang];
  const description = bundle.metaDescription[lang];
  const url = `https://skillwire.ai/${locale}/bundles/${slug}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url,
    },
    alternates: {
      canonical: url,
      languages: {
        en: `https://skillwire.ai/en/bundles/${slug}`,
        it: `https://skillwire.ai/it/bundles/${slug}`,
      },
    },
  };
}

export default async function BundleDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const bundle = getBundleBySlug(slug);
  if (!bundle) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: bundle.name,
    description: bundle.metaDescription.en,
    brand: { "@type": "Brand", name: "Skillwire" },
    offers: {
      "@type": "Offer",
      price: bundle.bundlePrice,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema =
    bundle.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: bundle.faq.map((item) => ({
            "@type": "Question",
            name: item.question.en,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer.en,
            },
          })),
        }
      : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BundleDetailClient />
    </>
  );
}
