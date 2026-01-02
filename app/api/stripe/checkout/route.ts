// app/api/stripe/checkout/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { CartItem, Env } from '@/types';

export const runtime = 'edge';

interface CheckoutRequest {
  items: CartItem[];
  customerEmail: string;
  customerName: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: CheckoutRequest = await request.json();
    const { items, customerEmail, customerName } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    // Access Cloudflare environment
    const env = process.env as unknown as Env;
    const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;

    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      );
    }

    // Calculate total
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create Stripe line items
    const lineItems = items.map((item) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: item.image ? [item.image] : [],
        },
        unit_amount: Math.round(item.price * 100), // Convert to cents
      },
      quantity: item.quantity,
    }));

    // Create checkout session
    const session = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        'success_url': `${request.headers.get('origin')}/success?session_id={CHECKOUT_SESSION_ID}`,
        'cancel_url': `${request.headers.get('origin')}/cart`,
        'customer_email': customerEmail,
        'mode': 'payment',
        'payment_method_types[0]': 'card',
        'metadata[customer_name]': customerName,
        'metadata[items]': JSON.stringify(items),
        'metadata[total_amount]': totalAmount.toString(),
        ...lineItems.reduce((acc, item, index) => ({
          ...acc,
          [`line_items[${index}][price_data][currency]`]: item.price_data.currency,
          [`line_items[${index}][price_data][product_data][name]`]: item.price_data.product_data.name,
          [`line_items[${index}][price_data][unit_amount]`]: item.price_data.unit_amount.toString(),
          [`line_items[${index}][quantity]`]: item.quantity.toString(),
          ...(item.price_data.product_data.images?.[0] ? {
            [`line_items[${index}][price_data][product_data][images][0]`]: item.price_data.product_data.images[0]
          } : {}),
        }), {}),
      }).toString(),
    });

    if (!session.ok) {
      const error = await session.text();
      console.error('Stripe error:', error);
      return NextResponse.json(
        { error: 'Failed to create checkout session' },
        { status: 500 }
      );
    }

    const sessionData = await session.json();

    return NextResponse.json({
      sessionId: sessionData.id,
      url: sessionData.url,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
