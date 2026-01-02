# Rooted Smile - Payment Integration Setup Guide

## Overview

This payment integration adds **Stripe Checkout** and **PayPal** to your Rooted Smile e-commerce site with Cloudflare D1 database for order storage.

### Features
- ✅ Stripe Checkout (Cards + Apple Pay + Google Pay)
- ✅ PayPal Payments
- ✅ Cloudflare D1 Database for order storage
- ✅ Webhook verification for Stripe
- ✅ Order tracking and management
- ✅ Premium UI matching your existing design

---

## File Structure

Add these files to your Next.js project:

```
app/
├── api/
│   ├── stripe/
│   │   ├── checkout/
│   │   │   └── route.ts          # Stripe checkout session
│   │   └── webhook/
│   │       └── route.ts          # Stripe webhook handler
│   └── paypal/
│       ├── create-order/
│       │   └── route.ts          # PayPal order creation
│       └── capture-order/
│           └── route.ts          # PayPal payment capture
├── checkout/
│   └── page.tsx                  # Checkout page with both payment methods
└── success/
    └── page.tsx                  # Post-payment success page

types.ts                          # TypeScript definitions
schema.sql                        # D1 database schema
wrangler.toml                     # Cloudflare configuration
.env.example                      # Environment variables template
```

---

## Step 1: Database Setup

### Create D1 Database

```bash
# Create the database
wrangler d1 create rooted-smile-db

# This will output a database ID - copy it for wrangler.toml
```

### Initialize Schema

```bash
# Run the schema to create tables
wrangler d1 execute rooted-smile-db --file=./schema.sql
```

### Update wrangler.toml

Replace `your-d1-database-id-here` with your actual database ID:

```toml
[[d1_databases]]
binding = "DB"
database_name = "rooted-smile-db"
database_id = "abc123-your-actual-id-here"
```

---

## Step 2: Stripe Setup

### 1. Get API Keys

1. Go to https://dashboard.stripe.com/test/apikeys
2. Copy your **Secret Key** (starts with `sk_test_`)
3. Go to https://dashboard.stripe.com/test/webhooks
4. Click "Add endpoint"
5. Enter URL: `https://your-domain.com/api/stripe/webhook`
6. Select event: `checkout.session.completed`
7. Copy the **Webhook Secret** (starts with `whsec_`)

### 2. Add to Environment

**Local Development (.env.local):**
```bash
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Cloudflare Pages (Dashboard):**
1. Go to your Pages project → Settings → Environment variables
2. Add both variables as encrypted secrets
3. Deploy changes

---

## Step 3: PayPal Setup

### 1. Create PayPal App

1. Go to https://developer.paypal.com/dashboard/applications/sandbox
2. Click "Create App"
3. Name it "Rooted Smile"
4. Copy **Client ID** and **Secret**

### 2. Add to Environment

**Local Development (.env.local):**
```bash
PAYPAL_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PAYPAL_CLIENT_SECRET=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
PAYPAL_MODE=sandbox

# Public variable (needed for PayPal SDK)
NEXT_PUBLIC_PAYPAL_CLIENT_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

**Cloudflare Pages:**
1. Add `PAYPAL_CLIENT_ID` (encrypted)
2. Add `PAYPAL_CLIENT_SECRET` (encrypted)
3. Add `PAYPAL_MODE` = `sandbox` (plain text)
4. Add `NEXT_PUBLIC_PAYPAL_CLIENT_ID` (plain text)

### 3. For Production

When going live:
1. Create a live app at https://developer.paypal.com/dashboard/applications/live
2. Update credentials
3. Change `PAYPAL_MODE` to `production`

---

## Step 4: Integration

### 1. Copy Files

Copy all the provided files to your Next.js project:
- API routes to `app/api/`
- Pages to `app/`
- Types to root or `lib/`
- Configuration files to root

### 2. Update Cart Component

Your cart should store items in localStorage:

```typescript
// Add to cart
const addToCart = (item: CartItem) => {
  const cart = JSON.parse(localStorage.getItem('cart') || '[]');
  cart.push(item);
  localStorage.setItem('cart', JSON.stringify(cart));
};

// Navigate to checkout
<Link href="/checkout">Proceed to Checkout</Link>
```

### 3. Build & Deploy

```bash
# Install dependencies
npm install

# Test locally
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run pages:deploy
```

---

## Step 5: Testing Payments

### Stripe Test Cards

| Card Number | Description |
|------------|-------------|
| 4242 4242 4242 4242 | Successful payment |
| 4000 0025 0000 3155 | Requires authentication |
| 4000 0000 0000 9995 | Declined payment |

Use any future expiry date and any 3-digit CVC.

### PayPal Sandbox

1. Go to https://developer.paypal.com/dashboard/accounts
2. Use sandbox buyer account to test
3. Default: `sb-buyer@personal.example.com` / `password123`

---

## Step 6: Webhook Testing

### Local Testing with Stripe CLI

```bash
# Install Stripe CLI
brew install stripe/stripe-cli/stripe

# Login
stripe login

# Forward webhooks to local
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Trigger test event
stripe trigger checkout.session.completed
```

### Production Webhooks

Stripe webhooks will automatically fire when payments complete. Check:
1. Cloudflare Pages logs for webhook processing
2. D1 database for created orders:

```bash
wrangler d1 execute rooted-smile-db --command="SELECT * FROM orders ORDER BY created_at DESC LIMIT 10"
```

---

## Database Queries

### View All Orders

```bash
wrangler d1 execute rooted-smile-db --command="SELECT * FROM orders"
```

### View Recent Orders

```bash
wrangler d1 execute rooted-smile-db --command="SELECT id, customer_email, total_amount, payment_method, status, created_at FROM orders ORDER BY created_at DESC LIMIT 20"
```

### Search by Email

```bash
wrangler d1 execute rooted-smile-db --command="SELECT * FROM orders WHERE customer_email = 'user@example.com'"
```

### Total Revenue

```bash
wrangler d1 execute rooted-smile-db --command="SELECT SUM(total_amount) as total_revenue FROM orders WHERE status = 'paid'"
```

---

## Troubleshooting

### Payments Not Creating Orders

**Check:**
1. D1 database is properly bound in wrangler.toml
2. Webhook secret is correct
3. Webhook endpoint is receiving events (check Stripe dashboard)
4. Cloudflare Pages logs for errors

### PayPal Button Not Rendering

**Check:**
1. `NEXT_PUBLIC_PAYPAL_CLIENT_ID` is set
2. PayPal SDK script is loading (check browser console)
3. No JavaScript errors in console

### Stripe Checkout Not Redirecting

**Check:**
1. `STRIPE_SECRET_KEY` is set correctly
2. API route is accessible
3. Network tab shows successful API call
4. Success/cancel URLs are correct

---

## Security Checklist

- [x] Stripe webhook signature verification
- [x] PayPal OAuth token validation
- [x] Environment variables are encrypted in Cloudflare
- [x] D1 database has proper indexes
- [x] API routes use edge runtime
- [x] No sensitive data in client-side code

---

## Next Steps

1. **Email Notifications**: Add order confirmation emails using Cloudflare Email Workers
2. **Admin Dashboard**: Create admin panel to view orders from D1
3. **Inventory Management**: Track stock levels in D1
4. **Shipping Integration**: Connect to shipping APIs
5. **Analytics**: Track conversion rates and revenue

---

## Support

- Stripe Docs: https://stripe.com/docs/payments/checkout
- PayPal Docs: https://developer.paypal.com/docs/checkout/
- Cloudflare D1: https://developers.cloudflare.com/d1/
- Next.js: https://nextjs.org/docs

---

## Production Checklist

Before going live:

- [ ] Switch Stripe to production keys
- [ ] Switch PayPal to production mode
- [ ] Update webhook URLs to production domain
- [ ] Test with real payment methods
- [ ] Enable production logging
- [ ] Set up monitoring and alerts
- [ ] Test error scenarios
- [ ] Review refund procedures
- [ ] Comply with PCI requirements
- [ ] Update terms of service

**Your payment integration is ready! 🎉**
