import { NextResponse } from "next/server";
import { getPlanId, getCheckoutUrl } from "@/lib/whop";

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
