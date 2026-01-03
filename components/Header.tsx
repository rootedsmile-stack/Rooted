// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import CartPanel from './CartPanel';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Listen for openCart event
    const handleOpenCart = () => setIsCartOpen(true);
    window.addEventListener('openCart', handleOpenCart);

    return () => {
      window.removeEventListener('openCart', handleOpenCart);
    };
  }, []);

  return (
    <>
      <header className="fixed top-[44px] left-0 right-0 z-[90] bg-teal-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-stone-100 group-hover:text-gold-400 transition-colors tracking-wide">
                    Rooted Smile
                  </h1>
                  <p className="text-xs text-stone-400 tracking-widest uppercase">Natural Oral Care</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                {['Shop', 'About', 'Benefits', 'Reviews', 'Contact'].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase()}`}
                    className="text-stone-300 hover:text-gold-400 transition-colors font-medium tracking-wide text-sm uppercase"
                  >
                    {item}
                  </Link>
                ))}
              </nav>

              {/* CTA & Cart */}
              <div className="hidden md:flex items-center gap-4">
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative p-2 text-stone-300 hover:text-gold-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  {mounted && totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      {totalItems}
                    </span>
                  )}
                  {mounted && totalItems === 0 && (
                    <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                      0
                    </span>
                  )}
                </button>
                
                <Link
                  href="/shop"
                  className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg tracking-wide text-sm uppercase"
                >
                  Shop Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-stone-300 hover:text-gold-400 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-6 pt-6 border-t border-teal-800">
                <nav className="flex flex-col gap-4">
                  {['Shop', 'About', 'Benefits', 'Reviews', 'Contact'].map((item) => (
                    <Link
                      key={item}
                      href={`/${item.toLowerCase()}`}
                      className="text-stone-300 hover:text-gold-400 transition-colors font-medium py-2 tracking-wide text-sm uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  ))}
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-teal-800">
                    <button
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsCartOpen(true);
                      }}
                      className="flex items-center gap-2 text-stone-300 hover:text-gold-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      Cart ({mounted ? totalItems : 0})
                    </button>
                    
                    <Link
                      href="/shop"
                      className="flex-1 px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-medium text-center hover:from-gold-600 hover:to-gold-700 transition-all tracking-wide text-sm uppercase"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shop Now
                    </Link>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Cart Slide-in Panel */}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
