// app/api/stripe/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { Env, Order } from '@/lib/types';

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

    const event = JSON.parse(payload);

    // Handle checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      // Extract metadata
      const customerEmail = session.customer_email || session.customer_details?.email;
      const customerName = session.metadata?.customer_name || '';
      const items = session.metadata?.items || '[]';
      const totalAmount = parseFloat(session.metadata?.total_amount || '0');
      const paymentId = session.payment_intent || session.id;

      // Create order in D1
      const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      
      const order: Order = {
        id: orderId,
        customer_email: customerEmail,
        customer_name: customerName,
        total_amount: totalAmount,
        payment_method: 'stripe',
        payment_id: paymentId,
        status: 'paid',
        items: items,
        created_at: new Date().toISOString(),
      };

      // Insert into D1 database
      await DB.prepare(
        `INSERT INTO orders (
          id, customer_email, customer_name, total_amount, 
          payment_method, payment_id, status, items, created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          order.id,
          order.customer_email,
          order.customer_name,
          order.total_amount,
          order.payment_method,
          order.payment_id,
          order.status,
          order.items,
          order.created_at
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
