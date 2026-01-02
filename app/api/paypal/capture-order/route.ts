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

  const data = await response.json();
  return data.access_token;
}

export async function POST(request: NextRequest) {
  try {
    const { orderID } = await request.json();

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

    const captureData = await captureResponse.json();

    // Extract order details
    const purchaseUnit = captureData.purchase_units?.[0];
    const customData = purchaseUnit?.custom_id 
      ? JSON.parse(purchaseUnit.custom_id) 
      : {};

    const customerEmail = customData.customerEmail || captureData.payer?.email_address || '';
    const customerName = customData.customerName || 
      `${captureData.payer?.name?.given_name || ''} ${captureData.payer?.name?.surname || ''}`.trim();
    const items = customData.items || '[]';
    const totalAmount = parseFloat(purchaseUnit?.amount?.value || '0');
    const paymentId = captureData.id;

    // Create order in D1
    const orderId = `ord_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const order: Order = {
      id: orderId,
      customer_email: customerEmail,
      customer_name: customerName,
      total_amount: totalAmount,
      payment_method: 'paypal',
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

    console.log('PayPal order created:', orderId);

    return NextResponse.json({
      success: true,
      orderId: order.id,
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
