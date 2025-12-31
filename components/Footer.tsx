// components/Footer.tsx
import React from 'react';
import Link from 'next/link';
import { GlassPanel } from './GlassPanel';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-slate-900 to-slate-950 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">R</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Rooted Smile</h2>
                <p className="text-xs text-slate-400">Natural Oral Care</p>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6">
              Experience the transformative power of Ayurvedic herbal tooth powder. 
              Ancient wisdom meets modern science for your healthiest smile.
            </p>
            
            {/* Social Media Links */}
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800/50 rounded-full flex items-center justify-center text-slate-400 hover:text-teal-400 hover:bg-slate-800 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Shop</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/shop/all-products" className="text-slate-400 hover:text-teal-400 transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop/tooth-powder" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Tooth Powder
                </Link>
              </li>
              <li>
                <Link href="/shop/bundles" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Bundles & Sets
                </Link>
              </li>
              <li>
                <Link href="/shop/subscriptions" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Subscriptions
                </Link>
              </li>
              <li>
                <Link href="/shop/gift-cards" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Gift Cards
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Learn</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/benefits" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="/ingredients" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Ingredients
                </Link>
              </li>
              <li>
                <Link href="/how-to-use" className="text-slate-400 hover:text-teal-400 transition-colors">
                  How to Use
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-teal-400 transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Shipping Info
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mb-16">
          <GlassPanel variant="teal" className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Join Our Natural Community
                </h3>
                <p className="text-slate-300">
                  Get exclusive tips, special offers, and wellness insights delivered to your inbox.
                </p>
              </div>
              <div>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-medium rounded-lg hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-teal-500/50"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </GlassPanel>
        </div>

        {/* Trust Badges - FIXED ICON SIZES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-slate-800">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white mb-1">100% Natural</p>
            <p className="text-xs text-slate-400">No Chemicals</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white mb-1">Free Shipping</p>
            <p className="text-xs text-slate-400">Orders Over $50</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white mb-1">Money Back</p>
            <p className="text-xs text-slate-400">30-Day Guarantee</p>
          </div>
          
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mb-3">
              <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <p className="text-sm font-medium text-white mb-1">Eco-Friendly</p>
            <p className="text-xs text-slate-400">Sustainable Packaging</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>
            &copy; {currentYear} Rooted Smile. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="/accessibility" className="hover:text-teal-400 transition-colors">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
