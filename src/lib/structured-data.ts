const SITE_URL = "https://skillwire.ai";

export function getMerchantReturnPolicy() {
  return {
    "@type": "MerchantReturnPolicy",
    returnPolicyCategory:
      "https://schema.org/MerchantReturnNotPermitted",
    returnPolicyUrl: `${SITE_URL}/en/legal/refund`,
  };
}

export function getDigitalShippingDetails() {
  return {
    "@type": "OfferShippingDetails",
    shippingRate: {
      "@type": "MonetaryAmount",
      value: 0,
      currency: "EUR",
    },
    deliveryTime: {
      "@type": "ShippingDeliveryTime",
      handlingTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "d",
      },
      transitTime: {
        "@type": "QuantitativeValue",
        minValue: 0,
        maxValue: 0,
        unitCode: "d",
      },
    },
  };
}

export function getPriceValidUntil(): string {
  return `${new Date().getFullYear()}-12-31`;
}

export interface SkillReview {
  rating: number;
  comment?: string;
}

export async function fetchSkillReviews(
  slug: string
): Promise<{ reviews: SkillReview[]; averageRating: number; reviewCount: number }> {
  const pat = process.env.AIRTABLE_PAT;
  const baseId = process.env.AIRTABLE_LEADS_BASE_ID;
  if (!pat || !baseId) return { reviews: [], averageRating: 0, reviewCount: 0 };

  try {
    const filter = encodeURIComponent(`{Skill}="${slug}"`);
    const url = `https://api.airtable.com/v0/${baseId}/Reviews?filterByFormula=${filter}&fields[]=Rating&fields[]=Comment`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${pat}` },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { reviews: [], averageRating: 0, reviewCount: 0 };

    const data = await res.json();
    const records: { fields: { Rating?: number; Comment?: string } }[] =
      data.records ?? [];

    const reviews: SkillReview[] = [];
    const ratings: number[] = [];
    for (const r of records) {
      const rating = r.fields?.Rating;
      if (typeof rating === "number" && rating >= 1 && rating <= 5) {
        ratings.push(rating);
        reviews.push({
          rating,
          ...(r.fields.Comment ? { comment: r.fields.Comment } : {}),
        });
      }
    }

    if (ratings.length === 0) return { reviews: [], averageRating: 0, reviewCount: 0 };

    const averageRating =
      Math.round((ratings.reduce((a, b) => a + b, 0) / ratings.length) * 10) / 10;

    return { reviews, averageRating, reviewCount: ratings.length };
  } catch {
    return { reviews: [], averageRating: 0, reviewCount: 0 };
  }
}

export function buildSkillProductSchema(params: {
  slug: string;
  name: string;
  description: string;
  price: number;
  isFree: boolean;
  imageUrl: string;
  averageRating: number;
  reviewCount: number;
  reviews?: SkillReview[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    image: params.imageUrl,
    brand: { "@type": "Brand", name: "Skillwire" },
    category: "Software",
    offers: {
      "@type": "Offer",
      price: params.isFree ? 0 : params.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/en/skills/${params.slug}`,
      priceValidUntil: getPriceValidUntil(),
      hasMerchantReturnPolicy: getMerchantReturnPolicy(),
      shippingDetails: getDigitalShippingDetails(),
    },
  };

  if (params.reviewCount > 0 && params.averageRating > 0) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: params.averageRating,
      bestRating: 5,
      worstRating: 1,
      reviewCount: params.reviewCount,
    };
  }

  if (params.reviews && params.reviews.length > 0) {
    schema.review = params.reviews.map((r) => ({
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: r.rating,
        bestRating: 5,
        worstRating: 1,
      },
      author: { "@type": "Person", name: "Verified User" },
      ...(r.comment ? { reviewBody: r.comment } : {}),
    }));
  }

  return schema;
}

export function buildBundleProductSchema(params: {
  slug: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: params.name,
    description: params.description,
    image: params.imageUrl,
    brand: { "@type": "Brand", name: "Skillwire" },
    category: "Software",
    offers: {
      "@type": "Offer",
      price: params.price,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/en/bundles/${params.slug}`,
      priceValidUntil: getPriceValidUntil(),
      hasMerchantReturnPolicy: getMerchantReturnPolicy(),
      shippingDetails: getDigitalShippingDetails(),
    },
  };
}
