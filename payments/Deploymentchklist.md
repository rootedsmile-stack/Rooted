# Deployment Checklist ✅

Use this checklist to ensure your payment integration is properly deployed and configured.

---

## Pre-Deployment

### Local Development
- [ ] All files copied to correct directories
- [ ] `.env.local` created with test API keys
- [ ] `npm install` completed successfully
- [ ] `npm run dev` starts without errors
- [ ] Can view checkout page at `/checkout`
- [ ] Can view cart page at `/cart`
- [ ] Cart functionality works (add/remove/update)

### Database Setup
- [ ] Cloudflare D1 database created
- [ ] Database ID copied to `wrangler.toml`
- [ ] Schema initialized with `schema.sql`
- [ ] Can query database with Wrangler CLI
- [ ] Database binding appears in `wrangler.toml`

### Stripe Setup (Test Mode)
- [ ] Stripe account created
- [ ] Test API keys obtained
- [ ] Test secret key added to `.env.local`
- [ ] Webhook endpoint created in Stripe Dashboard
- [ ] Webhook secret obtained
- [ ] Webhook secret added to `.env.local`
- [ ] Test payment completes successfully
- [ ] Webhook receives events locally
- [ ] Order appears in D1 database

### PayPal Setup (Sandbox)
- [ ] PayPal developer account created
- [ ] Sandbox app created
- [ ] Client ID and Secret obtained
- [ ] Credentials added to `.env.local`
- [ ] `NEXT_PUBLIC_PAYPAL_CLIENT_ID` set
- [ ] PayPal button renders on checkout page
- [ ] Test payment completes successfully
- [ ] Order appears in D1 database

---

## Deployment to Cloudflare Pages

### Build & Deploy
- [ ] `npm run build` completes without errors
- [ ] No TypeScript errors
- [ ] No build warnings (or documented)
- [ ] Deployed to Cloudflare Pages
- [ ] Build succeeds on Cloudflare

### Environment Variables (Production)
- [ ] `STRIPE_SECRET_KEY` added (encrypted)
- [ ] `STRIPE_WEBHOOK_SECRET` added (encrypted)
- [ ] `PAYPAL_CLIENT_ID` added (encrypted)
- [ ] `PAYPAL_CLIENT_SECRET` added (encrypted)
- [ ] `PAYPAL_MODE` set to "sandbox" or "production"
- [ ] `NEXT_PUBLIC_PAYPAL_CLIENT_ID` added (plain text)

### D1 Database Binding
- [ ] D1 database bound in Pages settings
- [ ] Binding name is "DB"
- [ ] Database accessible from functions
- [ ] Can query from production

### Domain & SSL
- [ ] Custom domain configured (if applicable)
- [ ] SSL certificate active
- [ ] HTTPS enforced
- [ ] DNS propagated

---

## Production Testing

### Checkout Flow
- [ ] Can access `/checkout` page
- [ ] Product images load correctly
- [ ] Customer form validates properly
- [ ] Stripe button renders and works
- [ ] PayPal button renders and works
- [ ] Loading states show during payment
- [ ] Error messages display correctly

### Stripe Checkout (Test Mode)
- [ ] Redirects to Stripe Checkout
- [ ] Can complete payment with test card (4242...)
- [ ] Redirects to success page
- [ ] Order ID appears on success page
- [ ] Cart clears after payment
- [ ] Order saved to D1 database
- [ ] Webhook processes successfully

### PayPal Checkout (Sandbox)
- [ ] PayPal button opens popup
- [ ] Can log in with sandbox account
- [ ] Payment completes successfully
- [ ] Redirects to success page
- [ ] Order ID appears on success page
- [ ] Cart clears after payment
- [ ] Order saved to D1 database

### Webhooks
- [ ] Stripe webhook URL configured
- [ ] Webhook secret matches production
- [ ] Webhook events process successfully
- [ ] Orders created in database
- [ ] Can view webhook logs in Stripe Dashboard
- [ ] No signature verification errors

### Error Handling
- [ ] Invalid card shows error message
- [ ] Network errors handled gracefully
- [ ] Empty cart redirects properly
- [ ] Missing fields show validation
- [ ] 500 errors don't expose secrets

---

## Going Live (Production)

### Stripe Production Keys
- [ ] Production API keys obtained
- [ ] Production secret key updated in Cloudflare
- [ ] Production webhook endpoint created
- [ ] Production webhook secret updated in Cloudflare
- [ ] Test payment with real card
- [ ] Refund test payment
- [ ] Webhook processes live events

### PayPal Production
- [ ] Live PayPal app created
- [ ] Live Client ID and Secret obtained
- [ ] Credentials updated in Cloudflare
- [ ] `PAYPAL_MODE` changed to "production"
- [ ] `NEXT_PUBLIC_PAYPAL_CLIENT_ID` updated
- [ ] Test with real PayPal account
- [ ] Funds appear in PayPal business account

### Security Audit
- [ ] No API keys in client-side code
- [ ] No API keys in Git repository
- [ ] `.env.local` in `.gitignore`
- [ ] Webhook signatures verified
- [ ] All secrets encrypted in Cloudflare
- [ ] HTTPS enforced everywhere
- [ ] Rate limiting configured (if needed)

### Compliance
- [ ] Terms of Service updated
- [ ] Privacy Policy updated (mentions payment data)
- [ ] Refund policy displayed
- [ ] PCI DSS compliance confirmed (via Stripe/PayPal)
- [ ] GDPR compliance if applicable
- [ ] Tax collection configured if needed

---

## Monitoring & Maintenance

### Analytics
- [ ] Track conversion rate
- [ ] Monitor payment method usage
- [ ] Track average order value
- [ ] Monitor cart abandonment
- [ ] Set up revenue reports

### Logging
- [ ] Error logging configured
- [ ] Webhook events logged
- [ ] Payment failures logged
- [ ] Can access Cloudflare Pages logs
- [ ] Alert system for critical errors

### Database Maintenance
- [ ] Regular database backups
- [ ] Query performance monitored
- [ ] Old orders archived (if needed)
- [ ] Database size monitored

### Updates
- [ ] Stripe API version monitored
- [ ] PayPal API updates tracked
- [ ] Dependencies updated regularly
- [ ] Security patches applied
- [ ] Next.js version kept current

---

## Post-Launch

### Customer Experience
- [ ] Order confirmation emails sent
- [ ] Customer support process established
- [ ] Refund process documented
- [ ] Failed payment recovery flow
- [ ] Shipping notification system

### Business Operations
- [ ] Daily order review process
- [ ] Revenue reconciliation
- [ ] Inventory management
- [ ] Customer database management
- [ ] Tax reporting system

### Optimization
- [ ] A/B test checkout flow
- [ ] Monitor and improve conversion rate
- [ ] Reduce cart abandonment
- [ ] Optimize page load times
- [ ] Add testimonials/trust badges

---

## Emergency Procedures

### If Payments Stop Working
1. Check Cloudflare Pages deployment status
2. Verify environment variables are set
3. Check Stripe/PayPal API status pages
4. Review error logs in Cloudflare
5. Test with test cards/accounts
6. Verify webhook endpoints
7. Check database connectivity

### If Database Issues
1. Check D1 database status
2. Verify binding in Pages settings
3. Test queries with Wrangler CLI
4. Check for schema changes needed
5. Review function logs

### Rollback Plan
1. Keep previous deployment available
2. Document version numbers
3. Have database backup ready
4. Know how to revert environment variables
5. Test rollback procedure in advance

---

## Success Criteria

Your payment integration is production-ready when:

✅ All checklist items completed
✅ Test payments work in production
✅ Real payments process successfully
✅ Orders save to database correctly
✅ Webhooks process reliably
✅ No errors in production logs
✅ Customer experience is smooth
✅ Monitoring and alerts active
✅ Team trained on processes
✅ Documentation up to date

---

## Support Resources

- **Stripe**: https://support.stripe.com
- **PayPal**: https://developer.paypal.com/support
- **Cloudflare**: https://community.cloudflare.com
- **Next.js**: https://nextjs.org/docs

**Good luck with your launch! 🚀**
