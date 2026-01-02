// app/api/paypal/create-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import type { CartItem, Env } from '@/types';

export const runtime = 'edge';

interface CreateOrderRequest {
  items: CartItem[];
  customerEmail: string;
  customerName: string;
}

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
    const body: CreateOrderRequest = await request.json();
    const { items, customerEmail, customerName } = body;

    if (!items || items.length === 0) {
      return NextResponse.json(
        { error: 'Cart is empty' },
        { status: 400 }
      );
    }

    const env = process.env as unknown as Env;
    const { PAYPAL_CLIENT_ID, PAYPAL_CLIENT_SECRET, PAYPAL_MODE } = env;

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

    // Calculate total
    const totalAmount = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    // Create PayPal order
    const orderData = {
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: totalAmount.toFixed(2),
            breakdown: {
              item_total: {
                currency_code: 'USD',
                value: totalAmount.toFixed(2),
              },
            },
          },
          items: items.map((item) => ({
            name: item.name,
            unit_amount: {
              currency_code: 'USD',
              value: item.price.toFixed(2),
            },
            quantity: item.quantity.toString(),
          })),
          custom_id: JSON.stringify({
            customerEmail,
            customerName,
            items: JSON.stringify(items),
          }),
        },
      ],
      application_context: {
        return_url: `${request.headers.get('origin')}/api/paypal/capture-order`,
        cancel_url: `${request.headers.get('origin')}/cart`,
        brand_name: 'Rooted Smile',
        user_action: 'PAY_NOW',
      },
    };

    const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('PayPal error:', error);
      return NextResponse.json(
        { error: 'Failed to create PayPal order' },
        { status: 500 }
      );
    }

    const order = await response.json();

    return NextResponse.json({
      orderID: order.id,
    });
  } catch (error) {
    console.error('Create order error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
