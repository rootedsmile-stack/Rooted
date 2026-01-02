'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const [orderId, setOrderId] = useState<string | null>(null);

  useEffect(() => {
    // Get order ID from URL params
    const sessionId = searchParams.get('session_id'); // Stripe
    const orderIdParam = searchParams.get('order_id'); // PayPal

    if (orderIdParam) {
      setOrderId(orderIdParam);
    } else if (sessionId) {
      // For Stripe, we'll use the session ID as reference
      setOrderId(sessionId);
    }

    // Clear cart from localStorage
    localStorage.removeItem('cart');
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-8">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-teal-600 rounded-full flex items-center justify-center">
            <svg
              className="w-12 h-12 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-4">
          <h1 className="text-4xl font-light">Payment Successful!</h1>
          <p className="text-xl text-zinc-400">
            Thank you for your purchase from Rooted Smile
          </p>
        </div>

        {/* Order Details */}
        {orderId && (
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 space-y-3">
            <p className="text-sm text-zinc-400">Order Reference</p>
            <p className="font-mono text-teal-400 break-all">{orderId}</p>
          </div>
        )}

        {/* Next Steps */}
        <div className="space-y-6 pt-8">
          <div className="bg-zinc-800/30 border border-zinc-700 rounded-lg p-6 text-left space-y-4">
            <h2 className="text-xl font-light">What's Next?</h2>
            <ul className="space-y-3 text-zinc-400">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.94 6.412A2 2 0 002 8.108V16a2 2 0 002 2h12a2 2 0 002-2V8.108a2 2 0 00-.94-1.696l-6-3.75a2 2 0 00-2.12 0l-6 3.75zm2.615 2.423a1 1 0 10-1.11 1.664l5 3.333a1 1 0 001.11 0l5-3.333a1 1 0 00-1.11-1.664L10 11.798 5.555 8.835z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  You'll receive an order confirmation email shortly at the address you provided
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span>
                  Your order will be prepared and shipped within 1-2 business days
                </span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>
                  Track your shipment using the tracking number in your confirmation email
                </span>
              </li>
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/shop"
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-lg font-medium transition-all duration-300"
            >
              Continue Shopping
            </Link>
            <Link
              href="/"
              className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 rounded-lg font-medium transition-all duration-300"
            >
              Return Home
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="pt-8 text-sm text-zinc-500">
          Questions about your order?{' '}
          <Link href="/contact" className="text-teal-400 hover:text-teal-300">
            Contact our support team
          </Link>
        </div>
      </div>
    </div>
  );
}
