'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

interface CheckoutFormData {
  name: string;
  email: string;
}

export default function CheckoutPage() {
  const router = useRouter();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [formData, setFormData] = useState<CheckoutFormData>({
    name: '',
    email: '',
  });
  const [loading, setLoading] = useState(false);
  const [paypalLoaded, setPaypalLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleStripeCheckout = async () => {
    if (!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/stripe/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: cartItems,
          customerEmail: formData.email,
          customerName: formData.name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Checkout failed');
      }

      // Redirect to Stripe Checkout
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
      setLoading(false);
    }
  };

  // PayPal button configuration
  useEffect(() => {
    if (!paypalLoaded || !window.paypal || cartItems.length === 0) return;

    const initPayPalButtons = async () => {
      try {
        await window.paypal.Buttons({
          style: {
            layout: 'horizontal',
            color: 'gold',
            shape: 'rect',
            label: 'paypal',
            height: 48,
          },
          createOrder: async () => {
            if (!formData.name || !formData.email) {
              setError('Please fill in all fields');
              throw new Error('Missing required fields');
            }

            const response = await fetch('/api/paypal/create-order', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                items: cartItems,
                customerEmail: formData.email,
                customerName: formData.name,
              }),
            });

            const data = await response.json();

            if (!response.ok) {
              throw new Error(data.error || 'Failed to create order');
            }

            return data.orderID;
          },
          onApprove: async (data: { orderID: string }) => {
            setLoading(true);
            setError(null);

            try {
              const response = await fetch('/api/paypal/capture-order', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderID: data.orderID }),
              });

              const result = await response.json();

              if (!response.ok) {
                throw new Error(result.error || 'Payment capture failed');
              }

              // Clear cart
              localStorage.removeItem('cart');
              
              // Redirect to success page
              router.push(`/success?order_id=${result.orderId}`);
            } catch (err) {
              setError(err instanceof Error ? err.message : 'Payment failed');
              setLoading(false);
            }
          },
          onError: (err: Error) => {
            console.error('PayPal error:', err);
            setError('PayPal payment failed');
            setLoading(false);
          },
        }).render('#paypal-button-container');
      } catch (err) {
        console.error('PayPal button initialization error:', err);
      }
    };

    initPayPalButtons();
  }, [paypalLoaded, cartItems, formData, router]);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-zinc-900 text-zinc-100 flex items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-light mb-4">Your cart is empty</h2>
          <a
            href="/shop"
            className="text-teal-400 hover:text-teal-300 transition-colors"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <Script
        src={`https://www.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}&currency=USD`}
        onLoad={() => setPaypalLoaded(true)}
      />

      <div className="min-h-screen bg-zinc-900 text-zinc-100 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-12 text-center">Checkout</h1>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Order Summary */}
            <div className="space-y-6">
              <h2 className="text-2xl font-light mb-6">Order Summary</h2>
              
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center py-4 border-b border-zinc-800"
                  >
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-zinc-400">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-zinc-700">
                <div className="flex justify-between items-center text-xl">
                  <span className="font-light">Total</span>
                  <span className="font-medium text-teal-400">
                    ${totalAmount.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl font-light mb-6">Customer Information</h2>
                
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-zinc-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-zinc-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors"
                    required
                  />
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                <h3 className="text-lg font-light mb-4">Choose Payment Method</h3>
                
                {/* Stripe Checkout Button */}
                <button
                  onClick={handleStripeCheckout}
                  disabled={loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    'Processing...'
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v12h16V6H4zm2 8h12v2H6v-2zm0-4h8v2H6v-2z"/>
                      </svg>
                      Pay with Card (Stripe)
                    </>
                  )}
                </button>

                {/* PayPal Button */}
                <div className="relative">
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center">
                    <div className="flex-1 border-t border-zinc-700"></div>
                    <span className="px-4 text-sm text-zinc-500">or</span>
                    <div className="flex-1 border-t border-zinc-700"></div>
                  </div>
                </div>

                <div id="paypal-button-container" className="min-h-[48px]"></div>
              </div>

              <p className="text-xs text-zinc-500 text-center">
                Your payment information is secure and encrypted.
                <br />
                Stripe Checkout supports cards, Apple Pay, and Google Pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Extend Window interface for PayPal
declare global {
  interface Window {
    paypal?: {
      Buttons: (config: {
        style: {
          layout: string;
          color: string;
          shape: string;
          label: string;
          height: number;
        };
        createOrder: () => Promise<string>;
        onApprove: (data: { orderID: string }) => Promise<void>;
        onError: (err: Error) => void;
      }) => {
        render: (selector: string) => Promise<void>;
      };
    };
  }
}
