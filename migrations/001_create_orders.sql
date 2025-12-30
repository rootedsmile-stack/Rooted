-- Orders table for storing customer order information
CREATE TABLE IF NOT EXISTS orders (
  id TEXT PRIMARY KEY,
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  updated_at TEXT NOT NULL DEFAULT (datetime('now')),
  
  -- Customer information
  customer_email TEXT NOT NULL,
  customer_first_name TEXT NOT NULL,
  customer_last_name TEXT NOT NULL,
  customer_phone TEXT,
  
  -- Shipping address
  shipping_address_line1 TEXT NOT NULL,
  shipping_address_line2 TEXT,
  shipping_city TEXT NOT NULL,
  shipping_state TEXT NOT NULL,
  shipping_postal_code TEXT NOT NULL,
  shipping_country TEXT NOT NULL DEFAULT 'US',
  
  -- Billing address (if different from shipping)
  billing_address_line1 TEXT,
  billing_address_line2 TEXT,
  billing_city TEXT,
  billing_state TEXT,
  billing_postal_code TEXT,
  billing_country TEXT,
  
  -- Order details
  variant_id TEXT NOT NULL,
  variant_size TEXT NOT NULL,
  variant_weight TEXT NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 1,
  
  -- Pricing (in cents)
  unit_price INTEGER NOT NULL,
  subtotal INTEGER NOT NULL,
  shipping_cost INTEGER NOT NULL DEFAULT 0,
  tax_amount INTEGER NOT NULL DEFAULT 0,
  discount_amount INTEGER NOT NULL DEFAULT 0,
  total_amount INTEGER NOT NULL,
  
  -- Coupon/discount tracking
  coupon_code TEXT,
  
  -- Order status
  status TEXT NOT NULL DEFAULT 'pending',
  -- Status values: pending, processing, paid, shipped, delivered, cancelled, refunded
  
  -- Payment tracking (to be implemented later)
  payment_intent_id TEXT,
  payment_status TEXT DEFAULT 'unpaid',
  payment_method TEXT,
  
  -- Fulfillment tracking
  tracking_number TEXT,
  carrier TEXT,
  shipped_at TEXT,
  delivered_at TEXT,
  
  -- Additional metadata
  notes TEXT,
  ip_address TEXT,
  user_agent TEXT
);

-- Index for customer email lookups
CREATE INDEX IF NOT EXISTS idx_orders_customer_email ON orders(customer_email);

-- Index for order status
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);

-- Index for payment status
CREATE INDEX IF NOT EXISTS idx_orders_payment_status ON orders(payment_status);

-- Index for created date (for sorting/filtering)
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at DESC);

-- Index for coupon code tracking
CREATE INDEX IF NOT EXISTS idx_orders_coupon_code ON orders(coupon_code);

-- Trigger to update updated_at timestamp
CREATE TRIGGER IF NOT EXISTS update_orders_updated_at
  AFTER UPDATE ON orders
  FOR EACH ROW
BEGIN
  UPDATE orders SET updated_at = datetime('now') WHERE id = NEW.id;
END;
