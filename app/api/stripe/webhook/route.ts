// app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { Env } from '@/lib/types';

export const runtime = 'edge';

// Webhook signature verification for Cloudflare Workers
async function verifyStripeSignature(
  payload: string,
  signature: string,
  secret: string
): Promise<boolean> {
  const encoder = new TextEncoder();
  const parts = signature.split(',');
  
  let timestamp = '';
  let signatures: string[] = [];
  
  for (const part of parts) {
    const [key, value] = part.split('=');
    if (key === 't') timestamp = value;
    if (key === 'v1') signatures.push(value);
  }
  
  if (!timestamp || signatures.length === 0) return false;
  
  const signedPayload = `${timestamp}.${payload}`;
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  
  const expectedSignature = await crypto.subtle.sign(
    'HMAC',
    key,
    encoder.encode(signedPayload)
  );
  
  const expectedHex = Array.from(new Uint8Array(expectedSignature))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
  
  return signatures.some(sig => sig === expectedHex);
}

export async function POST(request: NextRequest) {
  try {
    // Read raw body for signature verification
    const payload = await request.text();
    const signature = request.headers.get('stripe-signature');

    const env = process.env as unknown as Env;
    const { STRIPE_WEBHOOK_SECRET, DB } = env;

    if (!signature || !STRIPE_WEBHOOK_SECRET) {
      return NextResponse.json(
        { error: 'Missing signature or webhook secret' },
        { status: 400 }
      );
    }

    // Verify webhook signature
    const isValid = await verifyStripeSignature(
      payload,
      signature,
      STRIPE_WEBHOOK_SECRET
    );

    if (!isValid) {
      return NextResponse.json(
        { error: 'Invalid signature' },
        { status: 401 }
      );
    }

    const event = JSON.parse(payload) as {
      type: string;
      data: {
        object: {
          id: string;
          customer_email?: string;
          customer_details?: { email?: string };
          payment_intent?: string;
          metadata?: {
            customer_name?: string;
            items?: string;
            total_amount?: string;
          };
        };
      };
    };

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Extract metadata
      const customerEmail = session.customer_email || session.customer_details?.email || '';
      const customerName = session.metadata?.customer_name || '';
      const items = session.metadata?.items || '[]';
      const totalAmount = parseFloat(session.metadata?.total_amount || '0');
      const paymentId = session.payment_intent || session.id;

      // Create order in D1
      const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const now = new Date().toISOString();

      // Insert into D1 database - matching your existing schema
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
          'N/A', // shipping_address_line1 - to be collected separately
          null,
          'N/A',
          'N/A',
          'N/A',
          'US',
          'default', // variant_id
          'Standard', // variant_size
          '4oz', // variant_weight
          1, // quantity
          Math.round(totalAmount * 100), // unit_price in cents
          Math.round(totalAmount * 100), // subtotal in cents
          0, // shipping_cost
          0, // tax_amount
          0, // discount_amount
          Math.round(totalAmount * 100), // total_amount in cents
          'paid',
          paymentId,
          'paid',
          'stripe'
        )
        .run();

      console.log('Order created:', orderId);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json(
      { error: 'Webhook processing failed' },
      { status: 500 }
    );
  }
}
