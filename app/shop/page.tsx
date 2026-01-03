'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { useRouter } from 'next/navigation';

export default function ShopPage() {
  const { addItem } = useCart();
  const router = useRouter();
  const [addedToCart, setAddedToCart] = useState(false);

  // Example product - replace with your actual product data
  const product = {
    id: 'herbal-tooth-powder-4oz',
    name: 'Herbal Tooth Powder - 4oz',
    price: 24.99,
    image: '/images/product.jpg', // Update with your image path
    variant_id: 'default',
    variant_size: 'Standard',
    variant_weight: '4oz',
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      variant_id: product.variant_id,
      variant_size: product.variant_size,
      variant_weight: product.variant_weight,
    });

    // Show feedback
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleBuyNow = () => {
    // Add to cart and go directly to checkout
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image,
      variant_id: product.variant_id,
      variant_size: product.variant_size,
      variant_weight: product.variant_weight,
    });
    
    router.push('/checkout');
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-zinc-100 py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light mb-12 text-center">Shop</h1>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-zinc-800/50 rounded-lg overflow-hidden aspect-square flex items-center justify-center">
            <div className="text-zinc-600 text-center p-8">
              <svg
                className="w-32 h-32 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <p className="text-sm">Product Image</p>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-light mb-2">{product.name}</h2>
              <p className="text-2xl text-teal-400 font-medium">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-zinc-400 leading-relaxed">
                Our premium herbal tooth powder is crafted from natural ingredients 
                to give you a naturally radiant smile. Free from harsh chemicals 
                and artificial additives.
              </p>

              <div className="space-y-2">
                <h3 className="font-medium text-sm text-zinc-400">Key Benefits:</h3>
                <ul className="space-y-2 text-zinc-300">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>100% Natural Ingredients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Whitens & Strengthens Teeth</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Fresh Breath All Day</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Add to Cart Buttons */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                className="w-full px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {addedToCart ? 'Added to Cart! ✓' : 'Add to Cart'}
              </button>

              <button
                onClick={handleBuyNow}
                className="w-full px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 border border-zinc-700 rounded-lg font-medium transition-all duration-300"
              >
                Buy Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-zinc-700 space-y-3">
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                </svg>
                <span>Free shipping on orders over $50</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-zinc-400">
                <svg className="w-5 h-5 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                <span>30-day money back guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
