import {
  lemonSqueezySetup,
  createCheckout,
  type NewCheckout,
} from "@lemonsqueezy/lemonsqueezy.js";
import crypto from "crypto";

let isInitialized = false;

export function initLemonSqueezy() {
  if (isInitialized) return;

  const apiKey = process.env.LEMON_SQUEEZY_API_KEY;
  if (!apiKey) {
    throw new Error("LEMON_SQUEEZY_API_KEY is not set");
  }

  lemonSqueezySetup({ apiKey });
  isInitialized = true;
}

/**
 * Slug-to-variantId mapping.
 * Update these values after creating products on Lemon Squeezy dashboard.
 */
const VARIANT_MAP: Record<string, string> = {
  // Skills — populate with real variant IDs from LS dashboard
  // "sales-methodology-pro": "123456",
  // "b2b-presentation-builder": "123457",
  // Bundles
  // "b2b-sales-pro": "200001",
};

export function getVariantId(slug: string): string | null {
  return VARIANT_MAP[slug] ?? null;
}

export async function createCheckoutSession({
  variantId,
  slug,
  locale,
  embed = true,
}: {
  variantId: string;
  slug: string;
  locale: string;
  embed?: boolean;
}) {
  initLemonSqueezy();

  const storeId = process.env.LEMON_SQUEEZY_STORE_ID;
  if (!storeId) {
    throw new Error("LEMON_SQUEEZY_STORE_ID is not set");
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://skillwire.ai";

  const checkoutData: NewCheckout = {
    productOptions: {
      redirectUrl: `${appUrl}/${locale}/thank-you`,
    },
    checkoutOptions: {
      embed,
    },
    checkoutData: {
      custom: {
        slug,
        locale,
      },
    },
  };

  const { data, error } = await createCheckout(storeId, variantId, checkoutData);

  if (error) {
    throw new Error(`Lemon Squeezy checkout error: ${JSON.stringify(error)}`);
  }

  return data?.data.attributes.url;
}

export function verifyWebhookSignature(
  rawBody: string,
  signature: string
): boolean {
  const secret = process.env.LEMON_SQUEEZY_WEBHOOK_SECRET;
  if (!secret) return false;

  const hmac = crypto.createHmac("sha256", secret);
  const digest = hmac.update(rawBody).digest("hex");

  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(digest)
  );
}
