import { NextResponse } from "next/server";
import { verifyWebhookSignature } from "@/lib/lemon-squeezy";

export async function POST(request: Request) {
  const rawBody = await request.text();
  const signature = request.headers.get("x-signature") ?? "";

  if (!verifyWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  try {
    const payload = JSON.parse(rawBody);
    const eventName = payload.meta?.event_name;

    if (eventName === "order_created") {
      const order = payload.data;
      const custom = payload.meta?.custom_data;

      console.log("[webhook] Order created:", {
        orderId: order?.id,
        slug: custom?.slug,
        locale: custom?.locale,
        email: order?.attributes?.user_email,
        total: order?.attributes?.total_formatted,
      });
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("[webhook] Parse error:", err);
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
  }
}
