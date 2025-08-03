import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { orderData, customer } = await request.json();

    // Here you would typically:
    // 1. Verify the PayPal order with PayPal's API
    // 2. Save the payment information to your database
    // 3. Send confirmation emails
    // 4. Update your booking system

    console.log('PayPal payment received:', {
      orderId: orderData.id,
      customer,
      amount: orderData.purchase_units[0].amount.value,
      status: orderData.status,
    });

    // For now, we'll just return success
    // In production, you should verify the payment with PayPal's API
    if (orderData.status === 'COMPLETED') {
      return NextResponse.json({
        success: true,
        orderId: orderData.id,
      });
    } else {
      return NextResponse.json(
        { error: 'Payment not completed' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Error processing PayPal payment:', error);
    return NextResponse.json(
      { error: 'Failed to process payment' },
      { status: 500 }
    );
  }
}
