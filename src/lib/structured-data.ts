const SITE_URL = "https://skillwire.ai";

export function getMerchantReturnPolicy() {
  return {
    "@type": "MerchantReturnPolicy",
    applicableCountry: "WORLD",
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
    shippingDestination: {
      "@type": "DefinedRegion",
      addressCountry: "WORLD",
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

export function buildSkillProductSchema(params: {
  slug: string;
  name: string;
  description: string;
  price: number;
  isFree: boolean;
  imageUrl: string;
  averageRating: number;
  reviewCount: number;
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
