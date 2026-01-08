// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="relative pt-20 pb-8"
      style={{
        background: 'linear-gradient(180deg, #164340 0%, #1c1917 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-400/60 to-gold-500/40 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <h4 className="text-lg font-light text-stone-100/90 tracking-wider">Rooted Smile</h4>
                <p className="text-[10px] text-stone-400/70 uppercase tracking-widest">Natural Oral Care</p>
              </div>
            </Link>
            
            <p className="text-stone-400/70 font-light leading-relaxed text-sm max-w-md mb-6">
              Discover the power of nature with our premium herbal tooth powder. 
              Made with traditional Ayurvedic ingredients for a healthier, brighter smile.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-8">
              <h5 className="text-stone-200 font-medium text-sm mb-3">Join Our Community</h5>
              <p className="text-stone-400/70 text-xs mb-4">Get wellness tips & exclusive offers</p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2.5 text-sm rounded-lg text-stone-100"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.15)'
                  }}
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-teal-900 rounded-lg font-medium text-sm transition-colors"
                >
                  Join
                </button>
              </form>
            </div>

            {/* Social Links */}
            <div>
              <h5 className="text-stone-200 font-medium text-sm mb-4">Follow Us</h5>
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 106, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 106, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg className="w-5 h-5 text-stone-400/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                </a>
                
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 106, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 106, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg className="w-5 h-5 text-stone-400/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a 
                  href="https://pinterest.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all"
                  style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(212, 175, 106, 0.2)';
                    e.currentTarget.style.borderColor = 'rgba(212, 175, 106, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                >
                  <svg className="w-5 h-5 text-stone-400/70" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Shop Column */}
          <div>
            <h5 className="text-stone-200 font-medium text-sm uppercase tracking-wider mb-4">Shop</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/shop" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Tooth Powder
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Gift Sets
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Discovery Size
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Discover Column */}
          <div>
            <h5 className="text-stone-200 font-medium text-sm uppercase tracking-wider mb-4">Discover</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about#ingredients" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Column */}
          <div>
            <h5 className="text-stone-200 font-medium text-sm uppercase tracking-wider mb-4">Support</h5>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="text-stone-400/70 hover:text-gold-400 transition-colors text-sm font-light block">
                  Track Order
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Trust Badges */}
        <div 
          className="py-8 mb-8"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-8 items-center">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-stone-400/70 text-xs font-light">100% Natural</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <p className="text-stone-400/70 text-xs font-light">Ayurvedic</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-stone-400/70 text-xs font-light">30-Day Guarantee</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-white/5 flex items-center justify-center">
                <svg className="w-6 h-6 text-gold-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <p className="text-stone-400/70 text-xs font-light">Cruelty-Free</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div 
          className="pt-8"
          style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500/60 text-xs font-light">
              © 2026 Rooted Smile. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-xs">
              <Link href="/privacy" className="text-stone-500/60 hover:text-stone-400 transition-colors font-light">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-stone-500/60 hover:text-stone-400 transition-colors font-light">
                Terms of Service
              </Link>
              <Link href="/shipping" className="text-stone-500/60 hover:text-stone-400 transition-colors font-light">
                Shipping Policy
              </Link>
              <Link href="/accessibility" className="text-stone-500/60 hover:text-stone-400 transition-colors font-light">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
