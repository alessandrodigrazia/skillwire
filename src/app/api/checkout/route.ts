import { NextResponse } from "next/server";
import {
  createCheckoutSession,
  getVariantId,
} from "@/lib/lemon-squeezy";

export async function POST(request: Request) {
  // Check if LS is configured
  if (
    !process.env.LEMON_SQUEEZY_API_KEY ||
    !process.env.LEMON_SQUEEZY_STORE_ID
  ) {
    return NextResponse.json(
      { error: "Checkout is not configured yet." },
      { status: 503 }
    );
  }

  try {
    const { items, locale = "en" } = await request.json();

    if (!items || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Cart is empty." },
        { status: 400 }
      );
    }

    // MVP: process first item
    const item = items[0];
    const variantId = getVariantId(item.slug);

    if (!variantId) {
      return NextResponse.json(
        { error: `No variant configured for "${item.slug}".` },
        { status: 400 }
      );
    }

    const checkoutUrl = await createCheckoutSession({
      variantId,
      slug: item.slug,
      locale,
    });

    if (!checkoutUrl) {
      return NextResponse.json(
        { error: "Failed to create checkout session." },
        { status: 500 }
      );
    }

    return NextResponse.json({ checkoutUrl });
  } catch (err) {
    console.error("[checkout]", err);
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
