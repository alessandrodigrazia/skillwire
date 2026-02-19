import { NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/whop";

/**
 * Whop webhook handler.
 * Listens for payment and membership events.
 *
 * Configure in Whop Dashboard > Developer > Webhooks:
 *   URL: https://skillwire.ai/api/webhook/whop
 *   Events: payment.succeeded, membership.went_valid
 */
export async function POST(request: Request) {
  const rawBody = await request.text();

  const msgId = request.headers.get("webhook-id") ?? "";
  const timestamp = request.headers.get("webhook-timestamp") ?? "";
  const signature = request.headers.get("webhook-signature") ?? "";

  // Skip verification in dev if secret not set
  if (process.env.WHOP_WEBHOOK_SECRET) {
    if (!verifyWebhookSignature(rawBody, msgId, timestamp, signature)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
    }
  }

  try {
    const payload = JSON.parse(rawBody);
    const eventType: string = payload.type ?? payload.event ?? "";

    console.log("[whop-webhook] event:", eventType);

    if (eventType === "payment.succeeded") {
      const payment = payload.data;
      console.log("[whop-webhook] Payment succeeded:", {
        id: payment?.id,
        planId: payment?.plan_id ?? payment?.plan?.id,
        email: payment?.email,
        total: payment?.total,
        currency: payment?.currency,
      });
      // TODO: send download email, provision access, etc.
    }

    if (eventType === "membership.went_valid") {
      const membership = payload.data;
      console.log("[whop-webhook] Membership activated:", {
        id: membership?.id,
        planId: membership?.plan_id ?? membership?.plan?.id,
        userId: membership?.user_id,
        email: membership?.user?.email,
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[whop-webhook] Parse error:", err);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
