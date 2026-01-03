// app/api/paypal/capture-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { Env, Order } from '@/lib/types';

export const runtime = 'edge';

async function getPayPalAccessToken(
  clientId: string,
  clientSecret: string,
  mode: 'sandbox' | 'production'
): Promise<string> {
  const baseUrl = mode === 'sandbox' 
    ? 'https://api-m.sandbox.paypal.com' 
    : 'https://api-m.paypal.com';
  
  const auth = btoa(`${clientId}:${clientSecret}`);
  
  const response = await fetch(`${baseUrl}/v1/oauth2/token`, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${auth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
  });

  if (!response.ok) {
    throw new Error('Failed to get PayPal access token');
  }

  const data = await response.json() as { access_token: string };
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const { orderID } = await request.json() as { orderID: string };

    if (!orderID) {
      return NextResponse.json(
        { error: 'Order ID required' },
        { status: 400 }
      );
    }

    const env = process.env as unknown as Env;
    const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_MODE, DB } = env;

    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      return NextResponse.json(
        { error: 'PayPal not configured' },
        { status: 500 }
      );
    }

    const mode = PAYPAL_MODE || 'sandbox';
    const baseUrl = mode === 'sandbox' 
      ? 'https://api-m.sandbox.paypal.com' 
      : 'https://api-m.paypal.com';

    // Get access token
    const accessToken = await getPayPalAccessToken(
      PAYPAL_CLIENT_ID,
      PAYPAL_CLIENT_SECRET,
      mode
    );

    // Capture the order
    const captureResponse = await fetch(
      `${baseUrl}/v2/checkout/orders/${orderID}/capture`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!captureResponse.ok) {
      const error = await captureResponse.text();
      console.error('PayPal capture error:', error);
      return NextResponse.json(
        { error: 'Failed to capture payment' },
        { status: 500 }
      );
    }

    const captureData = await captureResponse.json() as {
      id: string;
      purchase_units?: Array<{
        amount?: { value?: string };
        custom_id?: string;
      }>;
      payer?: {
        email_address?: string;
        name?: {
          given_name?: string;
          surname?: string;
        };
      };
    };

    // Extract order details
    const purchaseUnit = captureData.purchase_units?.[0];
    const customData = purchaseUnit?.custom_id 
      ? JSON.parse(purchaseUnit.custom_id) as {
          customerEmail?: string;
          customerName?: string;
          items?: string;
        }
      : {};

    const customerEmail = customData.customerEmail || captureData.payer?.email_address || '';
    const customerName = customData.customerName || 
      `${captureData.payer?.name?.given_name || ''} ${captureData.payer?.name?.surname || ''}`.trim();
    const items = customData.items || '[]';
    const totalAmount = parseFloat(purchaseUnit?.amount?.value || '0');
    const paymentId = captureData.id;

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
        'paypal'
      )
      .run();

    console.log('PayPal order created:', orderId);

    return NextResponse.json({
      success: true,
      orderId: orderId,
      captureId: captureData.id,
    });
  } catch (error) {
    console.error('Capture order error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
