# Technical Reference - Rooted Smile Payments

## TypeScript Configuration

### tsconfig.json

Ensure your tsconfig.json includes:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "preserve",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowJs": true,
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

---

## Edge Runtime Compatibility

All API routes use Edge Runtime for Cloudflare Pages compatibility:

```typescript
export const runtime = 'edge';
```

### Key Differences from Node.js

1. **No Node.js APIs**: Can't use `fs`, `path`, Node Buffer, etc.
2. **Use Fetch API**: All HTTP requests use native `fetch`
3. **Web Crypto**: Use `crypto.subtle` instead of Node crypto
4. **Request Body**: Use `request.text()` and `request.json()`

---

## D1 Database Patterns

### Type-Safe Query Pattern

```typescript
import type { D1Database } from '@/types';

async function createOrder(DB: D1Database, order: Order) {
  const result = await DB.prepare(
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
  
  return result;
}
```

### Query Patterns

```typescript
// SELECT single row
const order = await DB.prepare(
  'SELECT * FROM orders WHERE id = ?'
).bind(orderId).first<Order>();

// SELECT multiple rows
const orders = await DB.prepare(
  'SELECT * FROM orders WHERE customer_email = ? ORDER BY created_at DESC'
).bind(email).all<Order>();

// COUNT
const { count } = await DB.prepare(
  'SELECT COUNT(*) as count FROM orders WHERE status = ?'
).bind('paid').first<{ count: number }>();

// UPDATE
await DB.prepare(
  'UPDATE orders SET status = ? WHERE id = ?'
).bind('shipped', orderId).run();

// DELETE
await DB.prepare(
  'DELETE FROM orders WHERE id = ?'
).bind(orderId).run();
```

---

## Stripe Integration Patterns

### Creating Checkout Session

```typescript
const response = await fetch('https://api.stripe.com/v1/checkout/sessions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  body: new URLSearchParams({
    'success_url': successUrl,
    'cancel_url': cancelUrl,
    'customer_email': customerEmail,
    'mode': 'payment',
    'payment_method_types[0]': 'card',
    'line_items[0][price_data][currency]': 'usd',
    'line_items[0][price_data][product_data][name]': productName,
    'line_items[0][price_data][unit_amount]': priceInCents.toString(),
    'line_items[0][quantity]': '1',
  }).toString(),
});
```

### Webhook Signature Verification

```typescript
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
```

---

## PayPal Integration Patterns

### Getting Access Token

```typescript
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

  const data = await response.json();
  return data.access_token;
}
```

### Creating Order

```typescript
const orderData = {
  intent: 'CAPTURE',
  purchase_units: [
    {
      amount: {
        currency_code: 'USD',
        value: totalAmount.toFixed(2),
      },
      items: items.map(item => ({
        name: item.name,
        unit_amount: {
          currency_code: 'USD',
          value: item.price.toFixed(2),
        },
        quantity: item.quantity.toString(),
      })),
    },
  ],
};

const response = await fetch(`${baseUrl}/v2/checkout/orders`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(orderData),
});
```

---

## Client-Side Patterns

### Cart Management Hook

```typescript
'use client';

import { useCart } from '@/lib/cart-context';

export default function ProductCard({ product }) {
  const { addItem, items, totalItems } = useCart();
  
  const isInCart = items.some(item => item.id === product.id);
  
  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
  };
  
  return (
    <button onClick={handleAddToCart}>
      {isInCart ? 'In Cart' : 'Add to Cart'}
    </button>
  );
}
```

### PayPal Button Integration

```typescript
'use client';

import Script from 'next/script';
import { useState } from 'react';

export default function PayPalButton() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!loaded || !window.paypal) return;

    window.paypal.Buttons({
      style: {
        layout: 'horizontal',
        color: 'gold',
        shape: 'rect',
        label: 'paypal',
      },
      createOrder: async () => {
        const response = await fetch('/api/paypal/create-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ items, customerEmail, customerName }),
        });
        const data = await response.json();
        return data.orderID;
      },
      onApprove: async (data) => {
        const response = await fetch('/api/paypal/capture-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ orderID: data.orderID }),
        });
        const result = await response.json();
        router.push(`/success?order_id=${result.orderId}`);
      },
    }).render('#paypal-button-container');
  }, [loaded]);

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${clientId}&currency=USD`}
        onLoad={() => setLoaded(true)}
      />
      <div id="paypal-button-container" />
    </>
  );
}
```

---

## Error Handling Patterns

### API Route Error Handling

```typescript
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate input
    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { error: 'Invalid request' },
        { status: 400 }
      );
    }
    
    // Process request
    const result = await processPayment(body);
    
    return NextResponse.json(result);
  } catch (error) {
    console.error('API error:', error);
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```

### Client-Side Error Handling

```typescript
const [error, setError] = useState<string | null>(null);
const [loading, setLoading] = useState(false);

const handleCheckout = async () => {
  setLoading(true);
  setError(null);
  
  try {
    const response = await fetch('/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items, customerEmail }),
    });
    
    if (!response.ok) {
      const data = await response.json();
      throw new Error(data.error || 'Checkout failed');
    }
    
    const data = await response.json();
    window.location.href = data.url;
  } catch (err) {
    setError(err instanceof Error ? err.message : 'Payment failed');
  } finally {
    setLoading(false);
  }
};
```

---

## Security Best Practices

### 1. Environment Variables

```typescript
// ❌ NEVER expose secrets in client code
const STRIPE_SECRET = 'sk_live_xxx'; // WRONG!

// ✅ Access via server-side environment
const env = process.env as unknown as Env;
const STRIPE_SECRET = env.STRIPE_SECRET_KEY; // CORRECT
```

### 2. Webhook Verification

```typescript
// ❌ NEVER trust webhook without verification
const event = await request.json();
processOrder(event); // WRONG!

// ✅ Always verify signature first
const payload = await request.text();
const isValid = await verifySignature(payload, signature, secret);
if (!isValid) return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
```

### 3. Input Validation

```typescript
// ❌ NEVER trust user input
await DB.prepare(`INSERT INTO orders VALUES ('${userId}')`); // SQL INJECTION!

// ✅ Always use parameterized queries
await DB.prepare('INSERT INTO orders VALUES (?)').bind(userId).run();
```

---

## Performance Optimization

### 1. Database Indexes

```sql
CREATE INDEX idx_orders_email ON orders(customer_email);
CREATE INDEX idx_orders_payment_id ON orders(payment_id);
CREATE INDEX idx_orders_created_at ON orders(created_at);
```

### 2. Efficient Queries

```typescript
// ❌ Inefficient
const orders = await DB.prepare('SELECT * FROM orders').all();
const userOrders = orders.results.filter(o => o.customer_email === email);

// ✅ Efficient
const userOrders = await DB.prepare(
  'SELECT * FROM orders WHERE customer_email = ?'
).bind(email).all();
```

### 3. Client-Side Caching

```typescript
// Cache cart in localStorage
useEffect(() => {
  localStorage.setItem('cart', JSON.stringify(items));
}, [items]);
```

---

## Testing Patterns

### Unit Test Example

```typescript
import { describe, it, expect } from 'vitest';
import { verifyStripeSignature } from './webhook';

describe('Stripe Webhook Verification', () => {
  it('should verify valid signature', async () => {
    const payload = 'test payload';
    const secret = 'whsec_test';
    const signature = 't=123,v1=abc';
    
    const isValid = await verifyStripeSignature(payload, signature, secret);
    expect(isValid).toBe(true);
  });
});
```

### Integration Test Example

```typescript
describe('Checkout API', () => {
  it('should create checkout session', async () => {
    const response = await fetch('http://localhost:3000/api/stripe/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        items: [{ id: '1', name: 'Test', price: 10, quantity: 1 }],
        customerEmail: 'test@example.com',
        customerName: 'Test User',
      }),
    });
    
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data.sessionId).toBeDefined();
  });
});
```

---

## Monitoring & Logging

### Server-Side Logging

```typescript
console.log('Order created:', {
  orderId: order.id,
  amount: order.total_amount,
  method: order.payment_method,
  timestamp: new Date().toISOString(),
});

console.error('Payment failed:', {
  error: error.message,
  orderId: orderId,
  userId: userId,
});
```

### Error Tracking

```typescript
try {
  await processPayment();
} catch (error) {
  // Log to monitoring service
  console.error('Payment processing error:', {
    message: error.message,
    stack: error.stack,
    context: { orderId, userId, amount },
  });
  
  throw error;
}
```

---

This technical reference covers the key patterns and best practices for the payment integration. Refer to it when implementing features or debugging issues.
