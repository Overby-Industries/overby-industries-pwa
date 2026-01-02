import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2025-12-15.clover",
});

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Donation to Overby Industries",
            },
            unit_amount: 2000, // $20 donation (in cents)
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/donation-success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/donation-canceled`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
