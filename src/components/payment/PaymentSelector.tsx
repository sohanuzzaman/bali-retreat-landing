'use client';

import React, { useState } from 'react';
import { CreditCard, Wallet, CheckCircle, XCircle } from 'lucide-react';
import StripePayment from './StripePayment';
import PayPalPayment from './PayPalPayment';
import { formatPrice, DEPOSIT_AMOUNT, calculateRemainingAmount, EARLY_BIRD_TOTAL, STANDARD_TOTAL } from '@/lib/payments';

interface PaymentSelectorProps {
  customerData: {
    name: string;
    email: string;
    phone: string;
  };
  isEarlyBird: boolean;
  onPaymentSuccess: () => void;
}

type PaymentMethod = 'stripe' | 'paypal' | null;

const PaymentSelector: React.FC<PaymentSelectorProps> = ({ 
  customerData, 
  isEarlyBird, 
  onPaymentSuccess 
}) => {
  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>(null);
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const totalAmount = isEarlyBird ? EARLY_BIRD_TOTAL : STANDARD_TOTAL;
  const remainingAmount = calculateRemainingAmount(totalAmount);

  const handlePaymentSuccess = () => {
    setPaymentStatus('success');
    setTimeout(() => {
      onPaymentSuccess();
    }, 2000);
  };

  const handlePaymentError = (error: string) => {
    setPaymentStatus('error');
    setErrorMessage(error);
  };

  const resetPayment = () => {
    setPaymentStatus('idle');
    setErrorMessage('');
    setSelectedMethod(null);
  };

  if (paymentStatus === 'success') {
    return (
      <div className="text-center py-8">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-green-700 mb-2">Payment Successful!</h3>
        <p className="text-gray-600 mb-4">
          Your deposit of {formatPrice(DEPOSIT_AMOUNT)} has been processed successfully.
        </p>
        <p className="text-sm text-gray-500">
          You will receive a confirmation email shortly with further instructions.
        </p>
      </div>
    );
  }

  if (paymentStatus === 'error') {
    return (
      <div className="text-center py-8">
        <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-red-700 mb-2">Payment Failed</h3>
        <p className="text-gray-600 mb-4">{errorMessage}</p>
        <button
          onClick={resetPayment}
          className="py-2 px-6 bg-[#D4A95C] text-[#0D2C36] font-montserrat font-semibold rounded-lg hover:bg-[#D4A95C]/90 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Payment Summary */}
      <div className="bg-gradient-to-r from-[#D4A95C]/10 to-[#2AB8A6]/10 p-6 rounded-lg border border-[#D4A95C]/20">
        <h3 className="text-xl font-semibold text-[#0D2C36] mb-4">Payment Summary</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Total Investment:</span>
            <span className="font-semibold">{formatPrice(totalAmount)}</span>
          </div>
          <div className="flex justify-between text-[#D4A95C] font-semibold">
            <span>Deposit (Today):</span>
            <span>{formatPrice(DEPOSIT_AMOUNT)}</span>
          </div>
          <div className="flex justify-between text-gray-600">
            <span>Remaining Amount:</span>
            <span>{formatPrice(remainingAmount)}</span>
          </div>
          <div className="border-t pt-2 mt-2 text-xs text-gray-500">
            The remaining amount will be due 60 days before the retreat starts.
          </div>
        </div>
      </div>

      {!selectedMethod ? (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-[#0D2C36] text-center mb-6">
            Choose Your Payment Method
          </h3>
          
          {/* Stripe Option */}
          <button
            onClick={() => setSelectedMethod('stripe')}
            className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#D4A95C] hover:bg-[#D4A95C]/5 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#635BFF]/10 rounded-lg group-hover:bg-[#635BFF]/20 transition-colors">
                <CreditCard className="w-6 h-6 text-[#635BFF]" />
              </div>
              <div className="text-left flex-1">
                <h4 className="font-semibold text-[#0D2C36]">Credit/Debit Card</h4>
                <p className="text-sm text-gray-600">Pay securely with Stripe</p>
              </div>
              <div className="text-[#D4A95C] font-semibold">
                {formatPrice(DEPOSIT_AMOUNT)}
              </div>
            </div>
          </button>

          {/* PayPal Option */}
          <button
            onClick={() => setSelectedMethod('paypal')}
            className="w-full p-4 border-2 border-gray-200 rounded-lg hover:border-[#D4A95C] hover:bg-[#D4A95C]/5 transition-all duration-200 group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#0070BA]/10 rounded-lg group-hover:bg-[#0070BA]/20 transition-colors">
                <Wallet className="w-6 h-6 text-[#0070BA]" />
              </div>
              <div className="text-left flex-1">
                <h4 className="font-semibold text-[#0D2C36]">PayPal</h4>
                <p className="text-sm text-gray-600">Pay with your PayPal account</p>
              </div>
              <div className="text-[#D4A95C] font-semibold">
                {formatPrice(DEPOSIT_AMOUNT)}
              </div>
            </div>
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-[#0D2C36]">
              Complete Your Payment
            </h3>
            <button
              onClick={() => setSelectedMethod(null)}
              className="text-[#2AB8A6] hover:underline text-sm font-medium"
            >
              Change Method
            </button>
          </div>

          {selectedMethod === 'stripe' && (
            <StripePayment
              customerData={customerData}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          )}

          {selectedMethod === 'paypal' && (
            <PayPalPayment
              customerData={customerData}
              onSuccess={handlePaymentSuccess}
              onError={handlePaymentError}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentSelector;
