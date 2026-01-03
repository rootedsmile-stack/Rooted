// app/api/stripe/create-payment-intent/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { Env, CartItem } from '@/lib/types';

export const runtime = 'edge';

interface CreatePaymentIntentRequest {
  paymentMethodId: string;
  amount: number;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CreatePaymentIntentRequest;
    const { paymentMethodId, amount, customerName, customerEmail, items } = body;

    const env = process.env as unknown as Env;
    const STRIPE_SECRET_KEY = env.STRIPE_SECRET_KEY;
    const DB = env.DB;

    if (!STRIPE_SECRET_KEY) {
      return NextResponse.json(
        { error: 'Stripe not configured' },
        { status: 500 }
      );
    }

    // Create Payment Intent
    const paymentIntentResponse = await fetch('https://api.stripe.com/v1/payment_intents', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        amount: amount.toString(),
        currency: 'usd',
        payment_method: paymentMethodId,
        confirmation_method: 'manual',
        confirm: 'true',
        'metadata[customer_name]': customerName,
        'metadata[customer_email]': customerEmail,
        'metadata[items]': JSON.stringify(items),
      }).toString(),
    });

    if (!paymentIntentResponse.ok) {
      const error = await paymentIntentResponse.text();
      console.error('Stripe error:', error);
      return NextResponse.json(
        { error: 'Failed to create payment' },
        { status: 500 }
      );
    }

    const paymentIntent = await paymentIntentResponse.json() as {
      id: string;
      client_secret: string;
      status: string;
      next_action?: any;
    };

    // If payment requires additional action (3D Secure)
    if (paymentIntent.status === 'requires_action') {
      return NextResponse.json({
        requiresAction: true,
        clientSecret: paymentIntent.client_secret,
      });
    }

    // If payment succeeded immediately
    if (paymentIntent.status === 'succeeded') {
      // Create order in database
      const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const now = new Date().toISOString();

      await DB.prepare(
        `INSERT INTO orders (
          id, created_at, updated_at,
          customer_email, customer_first_name, customer_last_name, customer_phone,
          shipping_address_line1, shipping_address_line2, shipping_city, 
          shipping_state, shipping_postal_code, shipping_country,
          variant_id, variant_size, variant_weight, quantity,
          unit_price, subtotal, shipping_cost, tax_amount, discount_amount, total_amount,
          status, payment_intent_id, payment_status, payment_method
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          orderId,
          now,
          now,
          customerEmail,
          customerName.split(' ')[0] || '',
          customerName.split(' ').slice(1).join(' ') || '',
          null,
          'N/A',
          null,
          'N/A',
          'N/A',
          'N/A',
          'US',
          'default',
          'Standard',
          '4oz',
          1,
          amount,
          amount,
          0,
          0,
          0,
          amount,
          'paid',
          paymentIntent.id,
          'paid',
          'stripe'
        )
        .run();

      return NextResponse.json({
        success: true,
        orderId: orderId,
        clientSecret: paymentIntent.client_secret,
      });
    }

    // Return client secret for confirmation
    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
      orderId: `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    });
  } catch (error) {
    console.error('Payment intent error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
