// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import CartPanel from './CartPanel';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (activeMenu) setActiveMenu(null);
    };
    
    if (activeMenu) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [activeMenu]);

  const handleMenuClick = (e: React.MouseEvent, menuName: string) => {
    e.stopPropagation();
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  return (
    <>
      {/* Header with atmospheric blur */}
      <header 
        className="fixed top-[44px] left-0 right-0 z-[90]"
        style={{
          background: 'rgba(15, 45, 43, 0.6)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group z-50">
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

            {/* Desktop Navigation with Mega Menus */}
            <nav className="hidden lg:flex items-center gap-1">
              {/* Shop Mega Menu */}
              <div className="relative">
                <button
                  onClick={(e) => handleMenuClick(e, 'shop')}
                  className="px-4 py-2 text-stone-300 hover:text-gold-400 transition-colors font-medium tracking-wide text-sm uppercase flex items-center gap-1"
                >
                  Shop
                  <svg className={`w-4 h-4 transition-transform ${activeMenu === 'shop' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Shop Mega Menu Dropdown */}
                {activeMenu === 'shop' && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(22, 67, 64, 0.98)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-8 grid grid-cols-2 gap-8">
                      {/* Column 1: All Products */}
                      <div>
                        <h3 className="text-gold-400 text-xs uppercase tracking-wider mb-4 font-medium">All Products</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link href="/shop" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Shop All
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Tooth Powder - 4oz
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Discovery Size
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Gift Sets
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: By Benefit */}
                      <div>
                        <h3 className="text-gold-400 text-xs uppercase tracking-wider mb-4 font-medium">By Benefit</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link href="/benefits#whitening" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Natural Whitening
                            </Link>
                          </li>
                          <li>
                            <Link href="/benefits#gum-health" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Gum Health
                            </Link>
                          </li>
                          <li>
                            <Link href="/benefits#fresh-breath" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Fresh Breath
                            </Link>
                          </li>
                          <li>
                            <Link href="/benefits#sensitivity" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Sensitivity Relief
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Featured Product Banner */}
                    <div 
                      className="px-8 py-6 border-t border-white/5"
                      style={{ background: 'rgba(212, 175, 106, 0.08)' }}
                    >
                      <Link href="/shop" className="flex items-center gap-4 group" onClick={() => setActiveMenu(null)}>
                        <div className="w-16 h-16 rounded-lg bg-teal-700/30 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400/40 to-teal-400/20"></div>
                        </div>
                        <div className="flex-1">
                          <p className="text-gold-400 text-xs uppercase tracking-wider mb-1">Bestseller</p>
                          <p className="text-stone-100 font-medium group-hover:text-gold-400 transition-colors">Herbal Tooth Powder</p>
                          <p className="text-stone-400 text-xs">100% Natural • Ayurvedic Formula</p>
                        </div>
                        <svg className="w-5 h-5 text-stone-400 group-hover:text-gold-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Discover Mega Menu */}
              <div className="relative">
                <button
                  onClick={(e) => handleMenuClick(e, 'discover')}
                  className="px-4 py-2 text-stone-300 hover:text-gold-400 transition-colors font-medium tracking-wide text-sm uppercase flex items-center gap-1"
                >
                  Discover
                  <svg className={`w-4 h-4 transition-transform ${activeMenu === 'discover' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Discover Mega Menu Dropdown */}
                {activeMenu === 'discover' && (
                  <div 
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[600px] rounded-2xl overflow-hidden"
                    style={{
                      background: 'rgba(22, 67, 64, 0.98)',
                      backdropFilter: 'blur(20px)',
                      WebkitBackdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="p-8 grid grid-cols-2 gap-8">
                      {/* Column 1: Why Rooted Smile */}
                      <div>
                        <h3 className="text-gold-400 text-xs uppercase tracking-wider mb-4 font-medium">Why Rooted Smile</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link href="/about" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Our Story
                            </Link>
                          </li>
                          <li>
                            <Link href="/about#ingredients" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Ayurvedic Ingredients
                            </Link>
                          </li>
                          <li>
                            <Link href="/about#sourcing" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Ethical Sourcing
                            </Link>
                          </li>
                          <li>
                            <Link href="/about#sustainability" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Sustainability
                            </Link>
                          </li>
                        </ul>
                      </div>

                      {/* Column 2: Learn More */}
                      <div>
                        <h3 className="text-gold-400 text-xs uppercase tracking-wider mb-4 font-medium">Learn More</h3>
                        <ul className="space-y-3">
                          <li>
                            <Link href="/benefits" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Benefits
                            </Link>
                          </li>
                          <li>
                            <Link href="/reviews" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Customer Reviews
                            </Link>
                          </li>
                          <li>
                            <Link href="/contact" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              Contact Us
                            </Link>
                          </li>
                          <li>
                            <Link href="/faq" className="text-stone-200/90 hover:text-gold-400 transition-colors text-sm block" onClick={() => setActiveMenu(null)}>
                              FAQ
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Simple Links */}
              <Link href="/about" className="px-4 py-2 text-stone-300 hover:text-gold-400 transition-colors font-medium tracking-wide text-sm uppercase">
                About
              </Link>
              <Link href="/reviews" className="px-4 py-2 text-stone-300 hover:text-gold-400 transition-colors font-medium tracking-wide text-sm uppercase">
                Reviews
              </Link>
            </nav>

            {/* Right Side: Cart & CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-stone-300 hover:text-gold-400 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {mounted && totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gold-500 text-teal-900 text-xs rounded-full flex items-center justify-center font-medium">
                    {totalItems}
                  </span>
                )}
              </button>
              
              <Link
                href="/shop"
                className="px-6 py-2.5 bg-gradient-to-r from-gold-500 to-gold-600 text-teal-900 font-medium hover:from-gold-600 hover:to-gold-700 transition-all shadow-lg tracking-wide text-sm uppercase rounded-lg"
              >
                Shop Now
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-stone-300 hover:text-gold-400 transition-colors z-50"
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
            <div className="lg:hidden pb-6 pt-2">
              <nav className="flex flex-col gap-1">
                <Link href="/shop" className="px-4 py-3 text-stone-300 hover:text-gold-400 hover:bg-white/5 transition-all font-medium tracking-wide text-sm uppercase rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Shop
                </Link>
                <Link href="/about" className="px-4 py-3 text-stone-300 hover:text-gold-400 hover:bg-white/5 transition-all font-medium tracking-wide text-sm uppercase rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  About
                </Link>
                <Link href="/benefits" className="px-4 py-3 text-stone-300 hover:text-gold-400 hover:bg-white/5 transition-all font-medium tracking-wide text-sm uppercase rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Benefits
                </Link>
                <Link href="/reviews" className="px-4 py-3 text-stone-300 hover:text-gold-400 hover:bg-white/5 transition-all font-medium tracking-wide text-sm uppercase rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Reviews
                </Link>
                <Link href="/contact" className="px-4 py-3 text-stone-300 hover:text-gold-400 hover:bg-white/5 transition-all font-medium tracking-wide text-sm uppercase rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>
                  Contact
                </Link>
                
                <div className="flex items-center gap-4 pt-4 mt-4 border-t border-white/5 px-4">
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
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Cart Slide-in Panel */}
      <CartPanel isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
