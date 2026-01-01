// components/CouponPanel.tsx
'use client';

export default function CouponPanel() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[100] bg-teal-950 text-stone-100 py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-gold-400">✦</span>
          <p className="text-sm tracking-wide">
            Limited Time: <span className="text-gold-400 font-semibold">Free Shipping</span> on orders over $50
          </p>
          <span className="text-gold-400">✦</span>
        </div>
      </div>
    </div>
  );
}
