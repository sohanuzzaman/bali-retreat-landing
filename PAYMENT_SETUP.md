# Payment Integration Setup

This project includes Stripe and PayPal payment integration for processing retreat deposits.

## Features

- **Deposit System**: Customers pay 666 EUR deposit to secure their spot
- **Dual Payment Options**: Both Stripe (credit/debit cards) and PayPal
- **Early Bird Pricing**: Automatic pricing based on booking date
- **Secure Processing**: Industry-standard payment security
- **Responsive Design**: Works on all devices

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your payment provider credentials:

```bash
cp .env.local.example .env.local
```

### Required Variables:

- `STRIPE_SECRET_KEY`: Your Stripe secret key
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `NEXT_PUBLIC_PAYPAL_CLIENT_ID`: Your PayPal client ID
- `PAYPAL_CLIENT_SECRET`: Your PayPal client secret (for server-side verification)

## Payment Flow

1. **Customer fills form** with contact information
2. **Selects payment method** (Stripe or PayPal)
3. **Pays deposit** of 666 EUR to secure spot
4. **Remaining amount** due 60 days before retreat
5. **Confirmation** sent via email

## Pricing Structure

- **Early Bird**: 3,666 EUR (save 333 EUR until August 31, 2025)
- **Standard**: 3,999 EUR (from September 1, 2025)
- **Deposit**: 666 EUR (same for both tiers)

## API Endpoints

- `POST /api/create-payment-intent` - Creates Stripe payment intent
- `POST /api/process-paypal-payment` - Processes PayPal payment completion

## Development

1. Install dependencies: `npm install`
2. Set up environment variables in `.env.local`
3. Run development server: `npm run dev`

## Production Setup

Before going live:

1. Replace test API keys with production keys
2. Set up webhook endpoints for payment confirmations
3. Implement proper error logging and monitoring
4. Add email confirmation system
5. Set up database to store booking information

## Testing

Use Stripe's test card numbers and PayPal's sandbox environment for testing payments without real money.

## Security Notes

- Never expose secret keys in client-side code
- Always validate payments on the server side
- Use HTTPS in production
- Implement proper error handling and logging
