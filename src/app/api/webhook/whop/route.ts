import { NextResponse } from "next/server";
import { verifyWebhookSignature, getSlugByPlanId } from "@/lib/whop";
import { generateDownloadToken, DOWNLOADABLE_SLUGS } from "@/lib/download";
import { getSkillBySlug } from "@/lib/data/skills";
import { getBundleBySlug } from "@/lib/data/bundles";
/**
 * Whop webhook handler.
 * Listens for payment and membership events.
 *
 * Configure in Whop Dashboard > Developer > Webhooks:
 *   URL: https://skillwire.ai/api/webhook/whop
 *   Events: payment.succeeded, membership.went_valid
 */

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://skillwire.ai";

function getProductName(slug: string): string {
  const skill = getSkillBySlug(slug);
  if (skill) return skill.name;
  const bundle = getBundleBySlug(slug);
  if (bundle) return bundle.name;
  return slug;
}

async function sendDownloadEmail(email: string, slug: string) {
  if (!process.env.RESEND_API_KEY) return;

  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  const productName = getProductName(slug);
  const { url } = generateDownloadToken(slug);
  const downloadUrl = `${APP_URL}${url}`;
  const howItWorksUrl = `${APP_URL}/en/how-it-works`;

  await resend.emails.send({
    from: "Skillwire <noreply@skillwire.ai>",
    to: email,
    subject: `Your download is ready — ${productName}`,
    html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Your Skillwire download is ready</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Logo -->
          <tr>
            <td style="padding-bottom:32px;text-align:center;">
              <img src="${APP_URL}/logo-header.png" alt="Skillwire" width="158" height="24" style="display:inline-block;border:0;">
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#141414;border:1px solid #2a2a2a;border-radius:16px;padding:40px 36px;">

              <!-- Icon -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;padding-bottom:24px;">
                    <div style="display:inline-block;background:#0ff4c620;border-radius:50%;width:64px;height:64px;line-height:64px;text-align:center;font-size:28px;">✅</div>
                  </td>
                </tr>
              </table>

              <!-- Heading -->
              <h1 style="margin:0 0 8px;font-size:24px;font-weight:700;color:#f0f0f0;text-align:center;">
                Your download is ready
              </h1>
              <p style="margin:0 0 32px;font-size:16px;color:#888;text-align:center;">
                Thank you for purchasing <strong style="color:#f0f0f0;">${productName}</strong>
              </p>

              <!-- Download button -->
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="text-align:center;padding-bottom:24px;">
                    <a href="${downloadUrl}"
                       style="display:inline-block;background:#0ff4c6;color:#0a0a0a;font-size:15px;font-weight:700;text-decoration:none;padding:14px 32px;border-radius:10px;">
                      ⬇ Download ${productName}
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Expiry note -->
              <p style="margin:0 0 32px;font-size:13px;color:#666;text-align:center;">
                This link expires in 7 days. If it expires, visit
                <a href="${APP_URL}/en/retrieve" style="color:#0ff4c6;text-decoration:none;">${APP_URL.replace("https://","")}/en/retrieve</a>
                to generate a new one.
              </p>

              <!-- Divider -->
              <hr style="border:none;border-top:1px solid #2a2a2a;margin:0 0 24px;">

              <!-- Install guide -->
              <p style="margin:0 0 8px;font-size:14px;color:#888;">
                📖 <strong style="color:#f0f0f0;">First time?</strong>
                Follow the <a href="${howItWorksUrl}" style="color:#0ff4c6;text-decoration:none;">installation guide</a>
                to set up your skill in Claude Code.
              </p>
              <p style="margin:0;font-size:13px;color:#666;">
                Questions? Reply to this email or contact
                <a href="mailto:hello@skillwire.ai" style="color:#0ff4c6;text-decoration:none;">hello@skillwire.ai</a>
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#555;">
                © ${new Date().getFullYear()} Skillwire · Professional Skills for Claude Code
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`,
  });
}

export async function GET() {
  return NextResponse.json({ status: "ok", service: "whop-webhook" });
}

export async function POST(request: Request) {
  const rawBody = await request.text();

  const msgId = request.headers.get("webhook-id") ?? "";
  const timestamp = request.headers.get("webhook-timestamp") ?? "";
  const signature = request.headers.get("webhook-signature") ?? "";

  // TODO: re-enable signature verification once we confirm webhook fires
  // Temporarily disabled to isolate whether the issue is signing or delivery
  console.log("[whop-webhook] INCOMING request, headers:", {
    msgId,
    timestamp,
    hasSig: !!signature,
    contentType: request.headers.get("content-type"),
    userAgent: request.headers.get("user-agent"),
  });
  console.log("[whop-webhook] body preview:", rawBody.slice(0, 500));

  try {
    const payload = JSON.parse(rawBody);
    const rawEvent: string = payload.type ?? payload.event ?? payload.action ?? "";
    // Normalize: Whop V5 sends underscores (payment_succeeded),
    // newer versions may use dots (payment.succeeded). Accept both.
    const eventType = rawEvent.replace(/_/g, ".");

    console.log("[whop-webhook] event:", rawEvent, "→ normalized:", eventType);

    if (eventType === "payment.succeeded") {
      const payment = payload.data;
      const planId = payment?.plan ?? payment?.plan_id ?? payment?.plan?.id;
      const email = payment?.email ?? payment?.user?.email;

      console.log("[whop-webhook] Payment succeeded:", {
        id: payment?.id,
        planId,
        email,
        total: payment?.total,
        currency: payment?.currency,
      });

      if (planId && email) {
        const slug = getSlugByPlanId(planId);
        if (slug && DOWNLOADABLE_SLUGS.has(slug)) {
          await sendDownloadEmail(email, slug);
          console.log("[whop-webhook] Download email sent to:", email, "for:", slug);
        }
      }
    }

    if (eventType === "membership.went.valid" || eventType === "membership.activated") {
      const membership = payload.data;
      const planId = membership?.plan ?? membership?.plan_id ?? membership?.plan?.id;
      const email = membership?.user?.email ?? membership?.email;

      console.log("[whop-webhook] Membership activated:", {
        id: membership?.id,
        planId,
        email,
      });

      if (planId && email) {
        const slug = getSlugByPlanId(planId);
        if (slug && DOWNLOADABLE_SLUGS.has(slug)) {
          await sendDownloadEmail(email, slug);
          console.log("[whop-webhook] Download email sent to:", email, "for:", slug);
        }
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[whop-webhook] Parse error:", err);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
