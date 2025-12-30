import { NextRequest, NextResponse } from 'next/server';
import { createOrder, getOrderById } from '../../../lib/db';
import type { CreateOrderInput, Env } from '../../../lib/types';

export const runtime = 'edge';

const REQUIRED_FIELDS = [
  'customer_email',
  'customer_first_name',
  'customer_last_name',
  'shipping_address_line1',
  'shipping_city',
  'shipping_state',
  'shipping_postal_code',
  'variant_id',
  'variant_size',
  'variant_weight',
  'quantity',
  'unit_price',
  'subtotal',
  'total_amount',
] as const;

type RequiredField = (typeof REQUIRED_FIELDS)[number];

function getMissingRequiredField(body: Record<string, unknown>): RequiredField | null {
  for (const field of REQUIRED_FIELDS) {
    // Treat empty string / null / undefined as missing
    const value = body[field];
    if (value === undefined || value === null || value === '') return field;
  }
  return null;
}

/**
 * GET /api/orders?id=ORDER_ID
 * Retrieve an order by ID
 */
export async function GET(request: NextRequest) {
  try {
    // Access Cloudflare D1 database
    const env = process.env as unknown as Env;

    if (!env.DB) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 500 }
      );
    }

    const { searchParams } = new URL(request.url);
    const orderId = searchParams.get('id');

    if (!orderId) {
      return NextResponse.json(
        { success: false, error: 'Order ID is required' },
        { status: 400 }
      );
    }

    const order = await getOrderById(env.DB, orderId);

    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: order,
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/orders
 * Create a new order (placeholder for future checkout implementation)
 */
export async function POST(request: NextRequest) {
  try {
    // Access Cloudflare D1 database
    const env = process.env as unknown as Env;

    if (!env.DB) {
      return NextResponse.json(
        { success: false, error: 'Database not configured' },
        { status: 500 }
      );
    }

    const body = (await request.json()) as Record<string, unknown>;

    // Validate required fields
    const missing = getMissingRequiredField(body);
    if (missing) {
      return NextResponse.json(
        { success: false, error: `Missing required field: ${missing}` },
        { status: 400 }
      );
    }

    // Get client IP and user agent
    const ip =
      request.headers.get('x-forwarded-for') ||
      request.headers.get('cf-connecting-ip') ||
      'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    /**
     * At this point we’ve validated the required keys exist,
     * but TS can’t infer that from dynamic key checks.
     * The cast is now safe given the runtime validation.
     */
    const orderInput: CreateOrderInput = {
      ...(body as CreateOrderInput),
      ip_address: ip,
      user_agent: userAgent,
    };

    // Create order in database
    const order = await createOrder(env.DB, orderInput);

    return NextResponse.json(
      {
        success: true,
        data: order,
        message: 'Order created successfully',
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
