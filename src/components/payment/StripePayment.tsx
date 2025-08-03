'use client';

import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  CardElement,
  useStripe,
  useElements
} from '@stripe/react-stripe-js';
import { DEPOSIT_AMOUNT, formatPrice } from '@/lib/payments';
import { Loader2, CreditCard } from 'lucide-react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutFormProps {
  customerData: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({ customerData, onSuccess, onError }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);

    const cardElement = elements.getElement(CardElement);
    
    if (!cardElement) {
      onError('Card element not found');
      setIsLoading(false);
      return;
    }

    try {
      // Create payment intent on your backend
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: DEPOSIT_AMOUNT,
          currency: 'eur',
          customer: customerData,
        }),
      });

      const { clientSecret, error } = await response.json();

      if (error) {
        onError(error);
        setIsLoading(false);
        return;
      }

      const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: customerData.name,
              email: customerData.email,
              phone: customerData.phone,
            },
          },
        }
      );

      if (stripeError) {
        onError(stripeError.message || 'Payment failed');
      } else if (paymentIntent.status === 'succeeded') {
        onSuccess();
      }
    } catch {
      onError('Network error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const cardStyle = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="border border-gray-300 rounded-lg p-4">
        <CardElement options={cardStyle} />
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <CreditCard className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-blue-800">Deposit Payment</span>
        </div>
        <p className="text-sm text-blue-700">
          You&apos;re paying a deposit of <strong>{formatPrice(DEPOSIT_AMOUNT)}</strong> to secure your spot.
          The remaining amount will be due later.
        </p>
      </div>

      <button
        type="submit"
        disabled={!stripe || isLoading}
        className="w-full py-4 bg-[#D4A95C] text-[#0D2C36] font-montserrat font-bold text-lg rounded-lg hover:bg-[#D4A95C]/90 transition-colors duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processing...</span>
          </>
        ) : (
          <span>Pay Deposit {formatPrice(DEPOSIT_AMOUNT)}</span>
        )}
      </button>
    </form>
  );
};

interface StripePaymentProps {
  customerData: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const StripePayment: React.FC<StripePaymentProps> = ({ customerData, onSuccess, onError }) => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm 
        customerData={customerData} 
        onSuccess={onSuccess} 
        onError={onError} 
      />
    </Elements>
  );
};

export default StripePayment;
