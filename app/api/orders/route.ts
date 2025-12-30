import { NextRequest, NextResponse } from 'next/server';
import { createOrder, getOrderById } from '../../../lib/db';
import { CreateOrderInput, Env } from '../../../lib/types';

export const runtime = 'edge';

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
      data: order
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

    const body = await request.json();

    // Validate required fields
    const requiredFields = [
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
      'total_amount'
    ];

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { success: false, error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Get client IP and user agent
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('cf-connecting-ip') || 
               'unknown';
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // Create order input
    const orderInput: CreateOrderInput = {
      ...body,
      ip_address: ip,
      user_agent: userAgent
    };

    // Create order in database
    const order = await createOrder(env.DB, orderInput);

    return NextResponse.json({
      success: true,
      data: order,
      message: 'Order created successfully'
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}
