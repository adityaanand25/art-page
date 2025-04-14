import { z } from 'zod';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

const checkoutSchema = z.object({
  priceId: z.string(),
  userId: z.string().uuid(),
  tierName: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { priceId, userId, tierName } = checkoutSchema.parse(body);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.SITE_URL}/club`,
      client_reference_id: userId,
      metadata: {
        userId,
        tierName,
      },
    });

    return new Response(JSON.stringify({ sessionId: session.id }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    return new Response(
      JSON.stringify({ error: 'Error creating checkout session' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}