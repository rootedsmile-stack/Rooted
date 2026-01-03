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
  const [error, setError] = useState<string | null>(null);
  
  // Stripe Elements
  const [stripeLoaded, setStripeLoaded] = useState(false);
  const [stripe, setStripe] = useState<any>(null);
  const [cardElement, setCardElement] = useState<any>(null);

  useEffect(() => {
    // Load cart from localStorage
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart) as CartItem[]);
    }
  }, []);

  // Initialize Stripe Elements
  useEffect(() => {
    if (!stripeLoaded || !window.Stripe) return;

    const stripeInstance = window.Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
    setStripe(stripeInstance);

    const elements = stripeInstance.elements();
    const card = elements.create('card', {
      style: {
        base: {
          color: '#e4e4e7',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '16px',
          fontWeight: '400',
          '::placeholder': {
            color: '#71717a',
          },
        },
        invalid: {
          color: '#ef4444',
          iconColor: '#ef4444',
        },
      },
      hidePostalCode: true,
    });

    card.mount('#card-element');
    setCardElement(card);

    card.on('change', (event: any) => {
      setError(event.error ? event.error.message : null);
    });

    return () => {
      card.unmount();
    };
  }, [stripeLoaded]);

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

  const handleStripePayment = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      setError('Please fill in all fields');
      return;
    }

    if (!stripe || !cardElement) {
      setError('Payment system not ready. Please refresh the page.');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Create payment method from card element
      const { error: methodError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      });

      if (methodError) {
        setError(methodError.message);
        setLoading(false);
        return;
      }

      // Send to backend to create payment intent
      const response = await fetch('/api/stripe/create-payment-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: Math.round(totalAmount * 100), // Convert to cents
          customerName: formData.name,
          customerEmail: formData.email,
          items: cartItems,
        }),
      });

      const data = await response.json() as { 
        error?: string; 
        clientSecret?: string;
        orderId?: string;
      };

      if (!response.ok) {
        throw new Error(data.error || 'Payment failed');
      }

      // Confirm the payment
      const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(
        data.clientSecret
      );

      if (confirmError) {
        setError(confirmError.message);
        setLoading(false);
        return;
      }

      if (paymentIntent.status === 'succeeded') {
        // Clear cart
        localStorage.removeItem('cart');
        
        // Redirect to success
        router.push(`/success?order_id=${data.orderId}`);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
      setLoading(false);
    }
  };

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
        src="https://js.stripe.com/v3/"
        onLoad={() => setStripeLoaded(true)}
      />

      <div className="min-h-screen bg-zinc-900 text-zinc-100 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-light mb-12 text-center">Checkout</h1>

          <form onSubmit={handleStripePayment}>
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
              <div className="space-y-6">
                <h2 className="text-2xl font-light mb-6">Payment Information</h2>
                
                {/* Customer Info */}
                <div className="space-y-4">
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
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors text-zinc-100"
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
                      className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-teal-500 transition-colors text-zinc-100"
                      required
                    />
                  </div>
                </div>

                {/* Card Element */}
                <div>
                  <label className="block text-sm mb-2 text-zinc-400">
                    Card Information
                  </label>
                  <div
                    id="card-element"
                    className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg"
                  />
                  <p className="text-xs text-zinc-500 mt-2">
                    Supports Visa, Mastercard, American Express, and more
                  </p>
                </div>

                {error && (
                  <div className="p-4 bg-red-900/20 border border-red-500 rounded-lg text-red-400 text-sm">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={!stripe || loading}
                  className="w-full px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Processing...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Pay ${totalAmount.toFixed(2)}
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2 justify-center pt-4">
                  <svg className="w-4 h-4 text-zinc-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-xs text-zinc-500">
                    Your payment is secured and encrypted by Stripe
                  </p>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 pt-2 opacity-50">
                  <span className="text-xs text-zinc-600">VISA</span>
                  <span className="text-xs text-zinc-600">MASTERCARD</span>
                  <span className="text-xs text-zinc-600">AMEX</span>
                  <span className="text-xs text-zinc-600">DISCOVER</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

declare global {
  interface Window {
    Stripe: any;
  }
}
