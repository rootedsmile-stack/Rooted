// components/CouponPanel.tsx
'use client';

import { useState } from 'react';

export default function CouponPanel() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-teal-900 text-stone-100 py-3 relative z-[60]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-gold-400">✦</span>
          <p className="text-sm tracking-wide">
            Limited Time: <span className="text-gold-400 font-semibold">Free Shipping</span> on orders over $50
          </p>
          <span className="text-gold-400">✦</span>
          
          <button 
            onClick={() => setIsVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-stone-400 hover:text-white transition-colors p-1"
            aria-label="Close announcement"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
