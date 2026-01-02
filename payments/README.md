# Rooted Smile - Payment Integration 💳

Complete Stripe + PayPal payment system for your premium herbal tooth powder e-commerce site.

## 🎯 Features

### Payment Methods
- ✅ **Stripe Checkout** - Cards, Apple Pay, Google Pay (automatic)
- ✅ **PayPal** - PayPal account and card payments
- ✅ Seamless checkout experience
- ✅ Mobile-optimized payment flows

### Order Management
- ✅ **Cloudflare D1 Database** - Fast, serverless order storage
- ✅ Webhook integration for automatic order creation
- ✅ Order tracking and history
- ✅ Customer email capture

### Security
- ✅ Webhook signature verification
- ✅ PCI-compliant payment processing
- ✅ Encrypted environment variables
- ✅ Edge runtime for enhanced security

### UI/UX
- ✅ Premium moody editorial design
- ✅ Teal and gold color scheme
- ✅ Smooth animations and transitions
- ✅ Mobile-responsive layout
- ✅ Loading states and error handling

---

## 📦 What's Included

### API Routes
- `POST /api/stripe/checkout` - Create Stripe checkout session
- `POST /api/stripe/webhook` - Handle Stripe webhook events
- `POST /api/paypal/create-order` - Create PayPal order
- `POST /api/paypal/capture-order` - Capture PayPal payment

### Pages
- `/checkout` - Checkout page with both payment options
- `/success` - Post-payment success page
- `/cart` - Shopping cart with quantity controls

### Components
- Cart Context - Global cart state management
- Payment Forms - Customer information collection
- PayPal Button - Integrated PayPal JS SDK
- Success Confirmation - Order confirmation UI

### Database
- Orders table with full order details
- Indexed queries for performance
- JSON storage for cart items
- Payment method tracking

---

## 🚀 Quick Start

### 1. Installation
```bash
# Copy all files to your Next.js project
# See QUICK_START.md for detailed file locations
```

### 2. Database Setup
```bash
# Create D1 database
wrangler d1 create rooted-smile-db

# Initialize schema
wrangler d1 execute rooted-smile-db --file=./schema.sql
```

### 3. Environment Variables
```bash
# Copy .env.example to .env.local
cp .env.example .env.local

# Add your API keys (see SETUP_GUIDE.md)
```

### 4. Deploy
```bash
# Build and deploy
npm run build
npm run pages:deploy
```

---

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Step-by-step implementation guide
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Complete setup and configuration
- **[TECHNICAL_REFERENCE.md](TECHNICAL_REFERENCE.md)** - Code patterns and best practices

---

## 🔧 Tech Stack

- **Next.js 14** - React framework with App Router
- **Cloudflare Pages** - Edge deployment platform
- **Cloudflare D1** - Serverless SQLite database
- **Stripe** - Payment processing (Cards, Apple Pay, Google Pay)
- **PayPal** - Alternative payment method
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling

---

## 💰 Payment Flow

### Stripe Flow
1. User fills checkout form
2. Click "Pay with Card"
3. Redirect to Stripe Checkout
4. Complete payment (card, Apple Pay, or Google Pay)
5. Stripe sends webhook to `/api/stripe/webhook`
6. Order saved to D1 database
7. Redirect to success page

### PayPal Flow
1. User fills checkout form
2. Click PayPal button
3. PayPal popup opens
4. Complete payment with PayPal account
5. Order captured via `/api/paypal/capture-order`
6. Order saved to D1 database
7. Redirect to success page

---

## 🗄️ Database Schema

```sql
CREATE TABLE orders (
  id TEXT PRIMARY KEY,
  customer_email TEXT NOT NULL,
  customer_name TEXT NOT NULL,
  total_amount REAL NOT NULL,
  payment_method TEXT NOT NULL,  -- 'stripe' or 'paypal'
  payment_id TEXT NOT NULL UNIQUE,
  status TEXT NOT NULL,           -- 'pending', 'paid', 'failed'
  items TEXT NOT NULL,            -- JSON array
  shipping_address TEXT,
  created_at TEXT NOT NULL
);
```

---

## 🧪 Testing

### Test Cards (Stripe)
```
Success: 4242 4242 4242 4242
3D Secure: 4000 0025 0000 3155
Declined: 4000 0000 0000 9995

Expiry: Any future date
CVC: Any 3 digits
```

### PayPal Sandbox
```
Use sandbox accounts from:
https://developer.paypal.com/dashboard/accounts
```

### Database Queries
```bash
# View all orders
wrangler d1 execute rooted-smile-db \
  --command="SELECT * FROM orders"

# Recent orders
wrangler d1 execute rooted-smile-db \
  --command="SELECT * FROM orders ORDER BY created_at DESC LIMIT 10"

# Revenue total
wrangler d1 execute rooted-smile-db \
  --command="SELECT SUM(total_amount) FROM orders WHERE status='paid'"
```

---

## 🔐 Security

### Environment Variables
- Never commit `.env.local` to Git
- Use encrypted secrets in Cloudflare Pages
- Rotate API keys regularly

### Webhook Verification
- All webhooks verify signatures
- Uses Web Crypto API for HMAC verification
- Rejects invalid signatures with 401

### Database Access
- D1 binding prevents SQL injection
- Parameterized queries only
- Read-only access from client

---

## 📊 Analytics

### Track These Metrics
- Conversion rate (cart → checkout → payment)
- Average order value
- Payment method preference
- Cart abandonment rate
- Revenue by time period

### Query Examples
```sql
-- Orders by payment method
SELECT payment_method, COUNT(*) as count
FROM orders
WHERE status = 'paid'
GROUP BY payment_method;

-- Revenue by day
SELECT DATE(created_at) as date, SUM(total_amount) as revenue
FROM orders
WHERE status = 'paid'
GROUP BY DATE(created_at);

-- Top customers
SELECT customer_email, COUNT(*) as orders, SUM(total_amount) as total
FROM orders
WHERE status = 'paid'
GROUP BY customer_email
ORDER BY total DESC
LIMIT 10;
```

---

## 🚨 Troubleshooting

### Common Issues

**"DB is not defined"**
- Check wrangler.toml has correct D1 binding
- Verify database exists and is initialized

**"PayPal button not showing"**
- Ensure NEXT_PUBLIC_PAYPAL_CLIENT_ID is set
- Check browser console for script errors

**"Webhook signature invalid"**
- Verify STRIPE_WEBHOOK_SECRET matches Stripe dashboard
- Check webhook endpoint URL is correct

**"Orders not saving"**
- Review Cloudflare Pages function logs
- Test webhook locally with Stripe CLI
- Verify D1 database schema is initialized

See [SETUP_GUIDE.md](SETUP_GUIDE.md) for detailed troubleshooting.

---

## 🎨 Customization

### Colors
Update in checkout-page.tsx and cart-page.tsx:
```typescript
// Primary: Teal
className="bg-teal-600 hover:bg-teal-500"

// Accent: Gold
className="text-amber-400"
```

### Payment Methods
To add more payment methods:
1. Update Stripe session creation
2. Add new API routes
3. Update checkout UI

### Email Notifications
Add Cloudflare Email Workers:
```typescript
// In webhook handler after order creation
await sendOrderConfirmation({
  to: customer_email,
  orderId: order.id,
  items: JSON.parse(order.items),
  total: order.total_amount,
});
```

---

## 📈 Next Steps

1. **Email Confirmations**
   - Integrate with SendGrid/Resend
   - Send order receipts
   - Shipping notifications

2. **Admin Dashboard**
   - View all orders
   - Export to CSV
   - Update order status

3. **Inventory Management**
   - Track stock levels
   - Auto-update on purchase
   - Low stock alerts

4. **Shipping Integration**
   - Calculate shipping costs
   - Print labels
   - Track packages

5. **Customer Accounts**
   - Order history
   - Saved addresses
   - Reorder functionality

---

## 📝 License

This payment integration is provided for Rooted Smile. Modify as needed for your use case.

---

## 🤝 Support

For issues or questions:
1. Check documentation in this repo
2. Review Cloudflare Pages logs
3. Test with Stripe/PayPal sandbox
4. Verify environment variables

---

## ✨ Features Roadmap

- [ ] Discount codes/coupons
- [ ] Subscription payments
- [ ] Gift cards
- [ ] Multiple currencies
- [ ] Tax calculation
- [ ] Abandoned cart recovery
- [ ] Customer reviews after purchase
- [ ] Loyalty points program

---

**Built with ❤️ for Rooted Smile - Natural herbal tooth powder for a naturally radiant smile.**
