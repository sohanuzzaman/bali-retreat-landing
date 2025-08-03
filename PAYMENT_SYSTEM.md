# Simplified Payment Integration

The payment system has been simplified to use a direct Stripe payment link, making it more reliable and easier to maintain.

## How it works

1. **Customer fills form** with their contact information
2. **Form validation** ensures all required fields are completed
3. **Redirect to Stripe** - Customer is redirected to the secure Stripe payment page
4. **Payment processing** happens directly on Stripe's servers
5. **Confirmation** - Stripe handles confirmation and receipts

## Payment Details

- **Deposit Amount**: 666 EUR
- **Early Bird Total**: 3,666 EUR (until August 31, 2025)
- **Standard Total**: 3,999 EUR (from September 1, 2025)
- **Remaining Balance**: Due 60 days before retreat

## Stripe Payment Link

The system uses this Stripe payment link:
```
https://buy.stripe.com/fZubIT1MQ5ms1u6bVw0oM01
```

## Benefits of this approach

- **Secure**: All payment processing handled by Stripe
- **Simple**: No complex API integrations to maintain
- **Reliable**: No server-side payment processing that can fail
- **PCI Compliant**: Stripe handles all compliance requirements
- **Mobile Friendly**: Stripe's payment pages work perfectly on all devices

## Customer Experience

1. Customer fills out the booking form
2. Clicks "Pokračovat k platbě Stripe" button
3. Gets redirected to Stripe's secure payment page
4. Completes payment with credit/debit card
5. Receives confirmation from Stripe
6. Retreat organizers get notified of successful payment

## Development

No additional environment variables or API keys needed for development. The Stripe link is ready to use as-is.

## Production

The Stripe payment link is already configured for production use. Make sure to:

1. Test the payment flow thoroughly
2. Verify the correct amount (666 EUR) is being charged
3. Ensure Stripe notifications are set up for successful payments
4. Have a system in place to track bookings and remaining balances
