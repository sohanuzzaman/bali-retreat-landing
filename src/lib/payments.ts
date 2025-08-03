import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
export const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export const DEPOSIT_AMOUNT = 66600; // 666 EUR in cents
export const EARLY_BIRD_TOTAL = 366600; // 3,666 EUR in cents
export const STANDARD_TOTAL = 399900; // 3,999 EUR in cents

export const calculateRemainingAmount = (totalAmount: number) => {
  return totalAmount - DEPOSIT_AMOUNT;
};

export const formatPrice = (amountInCents: number) => {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'EUR',
  }).format(amountInCents / 100);
};
