# Quick Start Implementation Guide

## 🚀 How to Add Payments to Your Existing Rooted Smile Site

Follow these steps to integrate the payment system into your current Next.js project.

---

## Step 1: Add Files to Your Project

### API Routes
Copy these files to your `app/api/` directory:

```
app/api/stripe/checkout/route.ts
app/api/stripe/webhook/route.ts
app/api/paypal/create-order/route.ts
app/api/paypal/capture-order/route.ts
```

### Pages
Copy these files to your `app/` directory:

```
app/checkout/page.tsx
app/success/page.tsx
app/cart/page.tsx (or update your existing cart page)
```

### Shared Code
Create a `lib/` directory if you don't have one, then add:

```
lib/cart-context.tsx
lib/types.ts (or merge with existing types file)
```

### Configuration
Add to your project root:

```
schema.sql
wrangler.toml
.env.example
```

---

## Step 2: Update Your Layout

Wrap your app with the CartProvider in `app/layout.tsx`:

```typescript
import { CartProvider } from '@/lib/cart-context';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
```

---

## Step 3: Update Your Shop/Product Pages

Add "Add to Cart" functionality:

```typescript
'use client';

import { useCart } from '@/lib/cart-context';

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
    });
    
    // Optional: Show success message
    alert('Added to cart!');
  };

  return (
    <div>
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
```

---

## Step 4: Update Your Header

Add a cart icon with item count:

```typescript
'use client';

import { useCart } from '@/lib/cart-context';
import Link from 'next/link';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header>
      {/* Your existing header content */}
      
      <Link href="/cart" className="relative">
        <svg /* cart icon */>
          <path d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-teal-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Link>
    </header>
  );
}
```

---

## Step 5: Set Up Cloudflare D1 Database

```bash
# 1. Install Wrangler if not already installed
npm install -g wrangler

# 2. Login to Cloudflare
wrangler login

# 3. Create D1 database
wrangler d1 create rooted-smile-db

# 4. Copy the database ID from output and update wrangler.toml

# 5. Initialize the database with schema
wrangler d1 execute rooted-smile-db --file=./schema.sql

# 6. Verify it worked
wrangler d1 execute rooted-smile-db --command="SELECT COUNT(*) FROM orders"
```

---

## Step 6: Environment Variables

### Create `.env.local` for Development

```bash
# Stripe
STRIPE_SECRET_KEY=sk_test_your_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_secret_here

# PayPal
PAYPAL_CLIENT_ID=your_client_id_here
PAYPAL_CLIENT_SECRET=your_secret_here
PAYPAL_MODE=sandbox

# Public PayPal (for SDK)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=your_client_id_here
```

### Add to Cloudflare Pages

1. Go to your Pages project
2. Settings → Environment variables
3. Add production secrets:
   - `STRIPE_SECRET_KEY` (Encrypted)
   - `STRIPE_WEBHOOK_SECRET` (Encrypted)
   - `PAYPAL_CLIENT_ID` (Encrypted)
   - `PAYPAL_CLIENT_SECRET` (Encrypted)
   - `PAYPAL_MODE` (Plain text: "production")
   - `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (Plain text)

---

## Step 7: Update next.config.js

Ensure edge runtime is supported:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Required for Cloudflare Pages
  },
  images: {
    domains: ['your-image-domain.com'],
  },
};

module.exports = nextConfig;
```

---

## Step 8: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Visit http://localhost:3000
# Test adding items to cart
# Test checkout flow
```

### Test Payments

**Stripe Test Card:**
- Number: 4242 4242 4242 4242
- Expiry: Any future date
- CVC: Any 3 digits

**PayPal:**
- Use sandbox buyer account from PayPal Developer Dashboard

---

## Step 9: Deploy to Cloudflare Pages

```bash
# Build the project
npm run build

# Deploy (if using Wrangler)
npm run pages:deploy

# OR push to GitHub (if connected to GitHub)
git add .
git commit -m "Add payment integration"
git push origin main
```

---

## Step 10: Configure Webhooks

### Stripe Webhook

1. Go to https://dashboard.stripe.com/webhooks
2. Add endpoint: `https://your-domain.com/api/stripe/webhook`
3. Select event: `checkout.session.completed`
4. Copy webhook secret
5. Update in Cloudflare Pages environment variables

### Verify Webhook

Test with Stripe CLI:
```bash
stripe listen --forward-to https://your-domain.com/api/stripe/webhook
stripe trigger checkout.session.completed
```

---

## Troubleshooting Common Issues

### 1. "DB is not defined" Error

**Solution:** Make sure wrangler.toml is properly configured and D1 binding is set up in Cloudflare Pages.

### 2. PayPal Button Not Showing

**Solution:** Check that `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set and the script is loading in browser console.

### 3. Stripe Webhook Failing

**Solution:** 
- Verify webhook secret is correct
- Check webhook signature verification code
- Review Cloudflare Pages logs

### 4. Orders Not Saving to Database

**Solution:**
- Verify D1 database is initialized with schema
- Check API route logs in Cloudflare Pages
- Ensure DB binding is correct in wrangler.toml

---

## Verify Everything Works

### Checklist

- [ ] Can add items to cart
- [ ] Cart persists across page refreshes
- [ ] Can update quantities in cart
- [ ] Can remove items from cart
- [ ] Checkout page loads with cart items
- [ ] Customer info form works
- [ ] Stripe checkout redirects to Stripe
- [ ] PayPal button renders and works
- [ ] Successful payment redirects to success page
- [ ] Order is saved to D1 database
- [ ] Cart is cleared after successful payment
- [ ] Webhook receives and processes events

### Test Database

```bash
# View all orders
wrangler d1 execute rooted-smile-db --command="SELECT * FROM orders"

# Check recent order
wrangler d1 execute rooted-smile-db --command="SELECT * FROM orders ORDER BY created_at DESC LIMIT 1"
```

---

## Next Features to Add

1. **Order Confirmation Email**
   - Use Cloudflare Email Workers
   - Send receipt with order details

2. **Admin Dashboard**
   - View all orders
   - Filter by date, status, customer
   - Export to CSV

3. **Inventory Management**
   - Track stock levels
   - Auto-update on purchase
   - Low stock alerts

4. **Shipping Integration**
   - Calculate shipping costs
   - Print shipping labels
   - Track shipments

5. **Customer Accounts**
   - Order history
   - Save addresses
   - Reorder functionality

---

**You're all set! Your Rooted Smile site now has a complete payment system! 🎉**
