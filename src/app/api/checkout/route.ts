import { NextResponse } from "next/server";
import { getPlanId, getCheckoutUrl } from "@/lib/whop";

const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "https://skillwire.ai";

export async function POST(request: Request) {
  try {
    const { items, locale = "en" } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json({ error: "Cart is empty." }, { status: 400 });
    }

    // MVP: process first item
    const item = items[0];
    const planId = getPlanId(item.slug);

    if (!planId) {
      return NextResponse.json(
        { error: `No plan configured for "${item.slug}".` },
        { status: 400 }
      );
    }

    const redirectUrl = `${APP_URL}/${locale}/thank-you?p=${planId}`;

    // Try API-generated checkout session (bypasses iframe race condition)
    if (process.env.WHOP_API_KEY) {
      try {
        const res = await fetch(
          "https://api.whop.com/api/v1/checkout_configurations",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${process.env.WHOP_API_KEY}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              plan_id: planId,
              redirect_url: redirectUrl,
              metadata: { slug: item.slug, locale },
            }),
          }
        );

        if (res.ok) {
          const data = await res.json();
          if (data.purchase_url) {
            return NextResponse.json({
              checkoutUrl: data.purchase_url,
              sessionId: data.id,
            });
          }
        }

        console.warn("[checkout] Whop API error, falling back to static URL");
      } catch (apiErr) {
        console.warn("[checkout] Whop API unreachable, falling back:", apiErr);
      }
    }

    // Fallback: static checkout URL
    const checkoutUrl = getCheckoutUrl(planId, locale);
    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
