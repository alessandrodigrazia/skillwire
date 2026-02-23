import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getBundleBySlug } from "@/lib/data/bundles";
import { buildBundleProductSchema } from "@/lib/structured-data";
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
      images: [
        {
          url: `https://skillwire.ai/${locale}/bundles/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: `${title} | Skillwire`,
        },
      ],
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

  const productSchema = buildBundleProductSchema({
    slug: bundle.slug,
    name: bundle.name,
    description: bundle.metaDescription.en,
    price: bundle.bundlePrice,
    imageUrl: `https://skillwire.ai/en/bundles/${bundle.slug}/opengraph-image`,
  });

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
