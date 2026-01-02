// Database types for D1 orders table
export interface Order {
  id: string;
  created_at: string;
  updated_at: string;
  
  // Customer information
  customer_email: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_phone: string | null;
  
  // Shipping address
  shipping_address_line1: string;
  shipping_address_line2: string | null;
  shipping_city: string;
  shipping_state: string;
  shipping_postal_code: string;
  shipping_country: string;
  
  // Billing address (if different from shipping)
  billing_address_line1: string | null;
  billing_address_line2: string | null;
  billing_city: string | null;
  billing_state: string | null;
  billing_postal_code: string | null;
  billing_country: string | null;
  
  // Order details
  variant_id: string;
  variant_size: string;
  variant_weight: string;
  quantity: number;
  
  // Pricing (in cents)
  unit_price: number;
  subtotal: number;
  shipping_cost: number;
  tax_amount: number;
  discount_amount: number;
  total_amount: number;
  
  // Coupon/discount tracking
  coupon_code: string | null;
  
  // Order status
  status: OrderStatus;
  
  // Payment tracking
  payment_intent_id: string | null;
  payment_status: PaymentStatus;
  payment_method: string | null;
  
  // Fulfillment tracking
  tracking_number: string | null;
  carrier: string | null;
  shipped_at: string | null;
  delivered_at: string | null;
  
  // Additional metadata
  notes: string | null;
  ip_address: string | null;
  user_agent: string | null;
}

export type OrderStatus = 
  | 'pending' 
  | 'processing' 
  | 'paid' 
  | 'shipped' 
  | 'delivered' 
  | 'cancelled' 
  | 'refunded';

export type PaymentStatus = 
  | 'unpaid' 
  | 'paid' 
  | 'failed' 
  | 'refunded' 
  | 'partially_refunded';

// Input type for creating new orders
export interface CreateOrderInput {
  customer_email: string;
  customer_first_name: string;
  customer_last_name: string;
  customer_phone?: string;
  
  shipping_address_line1: string;
  shipping_address_line2?: string;
  shipping_city: string;
  shipping_state: string;
  shipping_postal_code: string;
  shipping_country?: string;
  
  billing_address_line1?: string;
  billing_address_line2?: string;
  billing_city?: string;
  billing_state?: string;
  billing_postal_code?: string;
  billing_country?: string;
  
  variant_id: string;
  variant_size: string;
  variant_weight: string;
  quantity: number;
  
  unit_price: number;
  subtotal: number;
  shipping_cost?: number;
  tax_amount?: number;
  discount_amount?: number;
  total_amount: number;
  
  coupon_code?: string;
  notes?: string;
  ip_address?: string;
  user_agent?: string;
}

// Input type for updating orders
export interface UpdateOrderInput {
  status?: OrderStatus;
  payment_status?: PaymentStatus;
  payment_intent_id?: string;
  payment_method?: string;
  tracking_number?: string;
  carrier?: string;
  shipped_at?: string;
  delivered_at?: string;
  notes?: string;
}

// ============================================
// PAYMENT INTEGRATION TYPES
// ============================================

// Cart item type for shopping cart
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant_id?: string;
  variant_size?: string;
  variant_weight?: string;
}

// Cloudflare Workers environment bindings
export interface Env {
  DB: D1Database;
  
  // Payment provider credentials
  STRIPE_SECRET_KEY: string;
  STRIPE_WEBHOOK_SECRET: string;
  PAYPAL_CLIENT_ID: string;
  PAYPAL_CLIENT_SECRET: string;
  PAYPAL_MODE: 'sandbox' | 'production';
  
  // Add other bindings here as needed (KV, R2, etc.)
}

// API response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Stripe checkout types
export interface StripeCheckoutRequest {
  items: CartItem[];
  customerEmail: string;
  customerName: string;
}

export interface StripeCheckoutResponse {
  sessionId: string;
  url: string;
}

// PayPal order types
export interface PayPalCreateOrderRequest {
  items: CartItem[];
  customerEmail: string;
  customerName: string;
}

export interface PayPalCreateOrderResponse {
  orderID: string;
}

export interface PayPalCaptureOrderRequest {
  orderID: string;
}

export interface PayPalCaptureOrderResponse {
  success: boolean;
  orderId: string;
  captureId: string;
}
