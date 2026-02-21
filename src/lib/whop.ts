import crypto from "crypto";

/**
 * Slug → Whop plan ID mapping.
 * Generated 2026-02-19 via Whop API bulk creation.
 */
export const WHOP_PLAN_MAP: Record<string, string> = {
  // Skills
  "ask-to-andrew": "plan_0d4wKLYdVXMHb",
  "human-writer": "plan_t1Zmwe6wHBUzJ",
  "janus": "plan_dGvHQ3ruuk4CD",
  "ask-to-vera": "plan_ru2RnPeBv1PXM",
  "ai-b2b-sales-methodology": "plan_3M06gJ3Ztrkfd",
  "b2b-presentation-builder": "plan_UYFq7SdtEJydR",
  "deep-research-agent": "plan_fD2gbeVTzrZpX",
  "cv-guru": "plan_miUiPZ9916CzR",
  "n8n-ai-workflow-expert": "plan_bHJU5txZWydMq",
  "n8n-docs-live": "plan_fbTN07gMJwsHv",
  "n8n-workflow-repository": "plan_9YuLsqE8KeTQZ",
  "iterative-self-critique": "plan_kqqqoWFveHUtO",
  "skill-creator-guru": "plan_93BCj16Cc4hHu",
  "memory-manager": "plan_XviXDXzefwi1F",
  "maia": "plan_sHkYk6j2neCu6",
  "llm-arena-vs": "plan_2wnUsR8FXQnqU",
  "content-pipeline-pro": "plan_orQeX2lHkQpI0",
  "remotion-best-practices": "plan_5YYWJZhbnfF99",
  "nano-banana-guru": "plan_8fUkM9kpesAK2",
  "workspace-architect": "plan_CGUQAu3tBDug1",
  // Bundles
  "b2b-sales-pro": "plan_CZQCeLL1eGNKg",
  "career-navigator": "plan_9JaBuhfFbNKzy",
  "n8n-power-pack": "plan_U2MIsrSamhKay",
  "claude-code-mastery": "plan_cu2TlB2SfUdzU",
  "linkedin-toolkit": "plan_lApIJEKfzuFyr",
};

export function getPlanId(slug: string): string | null {
  return WHOP_PLAN_MAP[slug] ?? null;
}

/** Reverse map: plan_id → slug */
export const PLAN_SLUG_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(WHOP_PLAN_MAP).map(([slug, planId]) => [planId, slug])
);

export function getSlugByPlanId(planId: string): string | null {
  return PLAN_SLUG_MAP[planId] ?? null;
}

/**
 * Returns the Whop checkout URL for a plan.
 * Passes plan_id as ?p= in the redirect URL so the thank-you page
 * can show the correct download link without extra API calls.
 */
export function getCheckoutUrl(planId: string, locale = "en"): string {
  const appUrl = process.env.NEXT_PUBLIC_APP_URL || "https://skillwire.ai";
  const redirectUrl = encodeURIComponent(
    `${appUrl}/${locale}/thank-you?p=${planId}`
  );
  return `https://whop.com/checkout/${planId}/?redirect_url=${redirectUrl}&returnUrl=${redirectUrl}`;
}

/**
 * Verifies a Whop webhook signature using the Standard Webhooks spec.
 * Headers: webhook-id, webhook-timestamp, webhook-signature
 * Secret format: whsec_{base64_secret}
 *
 * @see https://www.standardwebhooks.com/
 */
export function verifyWebhookSignature(
  rawBody: string,
  msgId: string,
  timestamp: string,
  signature: string
): boolean {
  const secret = process.env.WHOP_WEBHOOK_SECRET;
  if (!secret) return false;

  // Whop secrets: "ws_{hex}" format. Standard Webhooks: "whsec_{base64}" format.
  let secretBytes: Buffer;
  if (secret.startsWith("whsec_")) {
    secretBytes = Buffer.from(secret.slice(6), "base64");
  } else if (secret.startsWith("ws_")) {
    secretBytes = Buffer.from(secret.slice(3), "hex");
  } else {
    secretBytes = Buffer.from(secret, "base64");
  }

  // Sign: "{msgId}.{timestamp}.{rawBody}"
  const toSign = `${msgId}.${timestamp}.${rawBody}`;
  const hmac = crypto.createHmac("sha256", secretBytes);
  const digest = hmac.update(toSign).digest("base64");

  // signature header can contain multiple sigs: "v1,{sig1} v1,{sig2}"
  const sigs = signature.split(" ").map((s) => s.replace(/^v\d+,/, ""));
  return sigs.some((sig) => {
    try {
      return crypto.timingSafeEqual(
        Buffer.from(sig, "base64"),
        Buffer.from(digest, "base64")
      );
    } catch {
      return false;
    }
  });
}
