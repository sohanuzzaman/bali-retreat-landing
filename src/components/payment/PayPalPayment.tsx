'use client';

import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { DEPOSIT_AMOUNT, formatPrice } from '@/lib/payments';
import { Wallet } from 'lucide-react';

interface PayPalPaymentProps {
  customerData: {
    name: string;
    email: string;
    phone: string;
  };
  onSuccess: () => void;
  onError: (error: string) => void;
}

const PayPalPayment: React.FC<PayPalPaymentProps> = ({ customerData, onSuccess, onError }) => {
  const initialOptions = {
    clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID!,
    currency: 'EUR',
    intent: 'capture',
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const createOrder = (data: unknown, actions: any) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            currency_code: 'EUR',
            value: (DEPOSIT_AMOUNT / 100).toFixed(2),
          },
          description: 'Bali Retreat Deposit - Securing your transformational journey',
          custom_id: `deposit_${customerData.email}_${Date.now()}`,
        },
      ],
      payer: {
        name: {
          given_name: customerData.name.split(' ')[0],
          surname: customerData.name.split(' ').slice(1).join(' '),
        },
        email_address: customerData.email,
      },
    });
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onApprove = async (data: unknown, actions: any) => {
    try {
      const details = await actions.order.capture();
      
      // Send order details to your backend
      const response = await fetch('/api/process-paypal-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderData: details,
          customer: customerData,
        }),
      });

      if (response.ok) {
        onSuccess();
      } else {
        onError('Payment processing failed');
      }
    } catch {
      onError('Payment capture failed');
    }
  };

  const onErrorHandler = () => {
    onError('PayPal payment failed');
  };

  return (
    <div className="space-y-6">
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex items-center space-x-2 mb-2">
          <Wallet className="w-5 h-5 text-blue-600" />
          <span className="font-semibold text-blue-800">PayPal Deposit Payment</span>
        </div>
        <p className="text-sm text-blue-700">
          You&apos;re paying a deposit of <strong>{formatPrice(DEPOSIT_AMOUNT)}</strong> to secure your spot.
          The remaining amount will be due later.
        </p>
      </div>

      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{
            layout: 'vertical',
            shape: 'rect',
            color: 'gold',
            label: 'pay',
          }}
          createOrder={createOrder}
          onApprove={onApprove}
          onError={onErrorHandler}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default PayPalPayment;
