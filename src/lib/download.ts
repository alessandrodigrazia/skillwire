import crypto from "crypto";

/** Valid slugs that have a corresponding ZIP in /public/downloads/ */
export const DOWNLOADABLE_SLUGS = new Set([
  "ask-to-andrew",
  "human-writer",
  "janus",
  "ask-to-vera",
  "ai-b2b-sales-methodology",
  "b2b-presentation-builder",
  "deep-research-agent",
  "cv-guru",
  "n8n-ai-workflow-expert",
  "n8n-docs-live",
  "n8n-workflow-repository",
  "iterative-self-critique",
  "skill-creator-guru",
  "memory-manager",
  "maia",
  "llm-arena-vs",
  "content-pipeline-pro",
  "remotion-best-practices",
  "nano-banana-guru",
  // Bundles (ZIP names must match)
  "b2b-sales-pro",
  "career-navigator",
  "n8n-power-pack",
  "claude-code-mastery",
  "linkedin-toolkit",
]);

const TOKEN_TTL_SECONDS = 7 * 24 * 60 * 60; // 7 days

function getSecret(): string {
  return process.env.DOWNLOAD_SECRET ?? "dev-download-secret-change-me";
}

/**
 * Generates a signed download token for a given slug.
 * Token format: hex(HMAC-SHA256(slug:exp, secret))
 * URL: /api/download/TOKEN?slug=SLUG&exp=EXP
 */
export function generateDownloadToken(slug: string): {
  token: string;
  exp: number;
  url: string;
} {
  const exp = Math.floor(Date.now() / 1000) + TOKEN_TTL_SECONDS;
  const token = crypto
    .createHmac("sha256", getSecret())
    .update(`${slug}:${exp}`)
    .digest("hex")
    .slice(0, 32);

  const url = `/api/download/${token}?slug=${encodeURIComponent(slug)}&exp=${exp}`;
  return { token, exp, url };
}

/**
 * Verifies a download token and returns the slug if valid.
 * Returns null if the token is invalid or expired.
 */
export function verifyDownloadToken(
  token: string,
  slug: string,
  exp: number
): boolean {
  if (!DOWNLOADABLE_SLUGS.has(slug)) return false;
  if (Date.now() / 1000 > exp) return false;

  const expected = crypto
    .createHmac("sha256", getSecret())
    .update(`${slug}:${exp}`)
    .digest("hex")
    .slice(0, 32);

  try {
    return crypto.timingSafeEqual(
      Buffer.from(token, "hex"),
      Buffer.from(expected, "hex")
    );
  } catch {
    return false;
  }
}
