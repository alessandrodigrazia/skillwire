import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getSkillBySlug } from "@/lib/data/skills";
import SkillDetailClient from "./SkillDetailClient";

type Params = { locale: string; slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) return {};

  const lang = locale === "it" ? "it" : "en";
  const title = skill.metaTitle[lang];
  const description = skill.metaDescription[lang];
  const url = `https://skillwire.ai/${locale}/skills/${slug}`;

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
        en: `https://skillwire.ai/en/skills/${slug}`,
        it: `https://skillwire.ai/it/skills/${slug}`,
      },
    },
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const skill = getSkillBySlug(slug);
  if (!skill) notFound();

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: skill.name,
    description: skill.metaDescription.en,
    brand: { "@type": "Brand", name: "Skillwire" },
    offers: {
      "@type": "Offer",
      price: skill.isFree ? 0 : skill.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
  };

  const faqSchema =
    skill.faq.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: skill.faq.map((item) => ({
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
      <SkillDetailClient />
    </>
  );
}
