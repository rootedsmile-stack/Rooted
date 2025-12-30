import { CreateOrderInput, Order, UpdateOrderInput } from './types';

/**
 * Generate a unique order ID
 * Format: ORD-YYYYMMDD-XXXXX (e.g., ORD-20241229-A1B2C)
 */
export function generateOrderId(): string {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  
  // Generate random alphanumeric string (5 chars)
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomStr = '';
  for (let i = 0; i < 5; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  
  return `ORD-${year}${month}${day}-${randomStr}`;
}

/**
 * Create a new order in the database
 */
export async function createOrder(
  db: D1Database,
  input: CreateOrderInput
): Promise<Order> {
  const orderId = generateOrderId();
  
  const query = `
    INSERT INTO orders (
      id,
      customer_email,
      customer_first_name,
      customer_last_name,
      customer_phone,
      shipping_address_line1,
      shipping_address_line2,
      shipping_city,
      shipping_state,
      shipping_postal_code,
      shipping_country,
      billing_address_line1,
      billing_address_line2,
      billing_city,
      billing_state,
      billing_postal_code,
      billing_country,
      variant_id,
      variant_size,
      variant_weight,
      quantity,
      unit_price,
      subtotal,
      shipping_cost,
      tax_amount,
      discount_amount,
      total_amount,
      coupon_code,
      notes,
      ip_address,
      user_agent
    ) VALUES (
      ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?
    )
  `;
  
  await db.prepare(query).bind(
    orderId,
    input.customer_email,
    input.customer_first_name,
    input.customer_last_name,
    input.customer_phone || null,
    input.shipping_address_line1,
    input.shipping_address_line2 || null,
    input.shipping_city,
    input.shipping_state,
    input.shipping_postal_code,
    input.shipping_country || 'US',
    input.billing_address_line1 || null,
    input.billing_address_line2 || null,
    input.billing_city || null,
    input.billing_state || null,
    input.billing_postal_code || null,
    input.billing_country || null,
    input.variant_id,
    input.variant_size,
    input.variant_weight,
    input.quantity,
    input.unit_price,
    input.subtotal,
    input.shipping_cost || 0,
    input.tax_amount || 0,
    input.discount_amount || 0,
    input.total_amount,
    input.coupon_code || null,
    input.notes || null,
    input.ip_address || null,
    input.user_agent || null
  ).run();
  
  // Fetch and return the created order
  const order = await getOrderById(db, orderId);
  if (!order) {
    throw new Error('Failed to create order');
  }
  
  return order;
}

/**
 * Get order by ID
 */
export async function getOrderById(
  db: D1Database,
  orderId: string
): Promise<Order | null> {
  const result = await db
    .prepare('SELECT * FROM orders WHERE id = ?')
    .bind(orderId)
    .first<Order>();
  
  return result || null;
}

/**
 * Get orders by customer email
 */
export async function getOrdersByEmail(
  db: D1Database,
  email: string,
  limit: number = 50
): Promise<Order[]> {
  const result = await db
    .prepare('SELECT * FROM orders WHERE customer_email = ? ORDER BY created_at DESC LIMIT ?')
    .bind(email, limit)
    .all<Order>();
  
  return result.results || [];
}

/**
 * Update an order
 */
export async function updateOrder(
  db: D1Database,
  orderId: string,
  updates: UpdateOrderInput
): Promise<Order | null> {
  const fields: string[] = [];
  const values: any[] = [];
  
  if (updates.status !== undefined) {
    fields.push('status = ?');
    values.push(updates.status);
  }
  
  if (updates.payment_status !== undefined) {
    fields.push('payment_status = ?');
    values.push(updates.payment_status);
  }
  
  if (updates.payment_intent_id !== undefined) {
    fields.push('payment_intent_id = ?');
    values.push(updates.payment_intent_id);
  }
  
  if (updates.payment_method !== undefined) {
    fields.push('payment_method = ?');
    values.push(updates.payment_method);
  }
  
  if (updates.tracking_number !== undefined) {
    fields.push('tracking_number = ?');
    values.push(updates.tracking_number);
  }
  
  if (updates.carrier !== undefined) {
    fields.push('carrier = ?');
    values.push(updates.carrier);
  }
  
  if (updates.shipped_at !== undefined) {
    fields.push('shipped_at = ?');
    values.push(updates.shipped_at);
  }
  
  if (updates.delivered_at !== undefined) {
    fields.push('delivered_at = ?');
    values.push(updates.delivered_at);
  }
  
  if (updates.notes !== undefined) {
    fields.push('notes = ?');
    values.push(updates.notes);
  }
  
  if (fields.length === 0) {
    return getOrderById(db, orderId);
  }
  
  values.push(orderId);
  
  const query = `UPDATE orders SET ${fields.join(', ')} WHERE id = ?`;
  
  await db.prepare(query).bind(...values).run();
  
  return getOrderById(db, orderId);
}

/**
 * Get all orders with pagination
 */
export async function getAllOrders(
  db: D1Database,
  page: number = 1,
  limit: number = 50
): Promise<{ orders: Order[]; total: number }> {
  const offset = (page - 1) * limit;
  
  // Get total count
  const countResult = await db
    .prepare('SELECT COUNT(*) as count FROM orders')
    .first<{ count: number }>();
  
  const total = countResult?.count || 0;
  
  // Get paginated orders
  const result = await db
    .prepare('SELECT * FROM orders ORDER BY created_at DESC LIMIT ? OFFSET ?')
    .bind(limit, offset)
    .all<Order>();
  
  return {
    orders: result.results || [],
    total
  };
}

/**
 * Get orders by status
 */
export async function getOrdersByStatus(
  db: D1Database,
  status: string,
  limit: number = 50
): Promise<Order[]> {
  const result = await db
    .prepare('SELECT * FROM orders WHERE status = ? ORDER BY created_at DESC LIMIT ?')
    .bind(status, limit)
    .all<Order>();
  
  return result.results || [];
}

/**
 * Delete an order (use with caution)
 */
export async function deleteOrder(
  db: D1Database,
  orderId: string
): Promise<boolean> {
  const result = await db
    .prepare('DELETE FROM orders WHERE id = ?')
    .bind(orderId)
    .run();
  
  return result.success;
}

/**
 * Format price from cents to dollars
 */
export function formatPrice(cents: number): string {
  return `$${(cents / 100).toFixed(2)}`;
}

/**
 * Calculate order total
 */
export function calculateOrderTotal(
  subtotal: number,
  shippingCost: number = 0,
  taxAmount: number = 0,
  discountAmount: number = 0
): number {
  return subtotal + shippingCost + taxAmount - discountAmount;
}
