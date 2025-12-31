// components/Header.tsx
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { GlassPanel } from './GlassPanel';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-4'
          : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <GlassPanel
          variant={isScrolled ? 'dark' : 'light'}
          blur={isScrolled ? 'lg' : 'md'}
          className={`transition-all duration-300 ${
            isScrolled ? 'shadow-2xl' : 'shadow-lg'
          }`}
        >
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 group">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
                  <span className="text-white font-bold text-xl">R</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white group-hover:text-teal-400 transition-colors">
                    Rooted Smile
                  </h1>
                  <p className="text-xs text-slate-400">Natural Oral Care</p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link
                  href="/shop"
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  Shop
                </Link>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  About
                </Link>
                <Link
                  href="/benefits"
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  Benefits
                </Link>
                <Link
                  href="/reviews"
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  Reviews
                </Link>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-teal-400 transition-colors font-medium"
                >
                  Contact
                </Link>
              </nav>

              {/* CTA & Cart */}
              <div className="hidden md:flex items-center gap-4">
                <Link
                  href="/cart"
                  className="relative p-2 text-slate-300 hover:text-teal-400 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-teal-500 text-white text-xs rounded-full flex items-center justify-center">
                    0
                  </span>
                </Link>
                
                <Link
                  href="/shop"
                  className="px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-teal-700 transition-all shadow-lg hover:shadow-teal-500/50"
                >
                  Shop Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-slate-300 hover:text-teal-400 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
              <div className="md:hidden mt-6 pt-6 border-t border-white/10">
                <nav className="flex flex-col gap-4">
                  <Link
                    href="/shop"
                    className="text-slate-300 hover:text-teal-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Shop
                  </Link>
                  <Link
                    href="/about"
                    className="text-slate-300 hover:text-teal-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link
                    href="/benefits"
                    className="text-slate-300 hover:text-teal-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Benefits
                  </Link>
                  <Link
                    href="/reviews"
                    className="text-slate-300 hover:text-teal-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Reviews
                  </Link>
                  <Link
                    href="/contact"
                    className="text-slate-300 hover:text-teal-400 transition-colors font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                  
                  <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                    <Link
                      href="/cart"
                      className="flex items-center gap-2 text-slate-300 hover:text-teal-400 transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      Cart (0)
                    </Link>
                    
                    <Link
                      href="/shop"
                      className="flex-1 px-6 py-2.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium text-center hover:from-teal-600 hover:to-teal-700 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Shop Now
                    </Link>
                  </div>
                </nav>
              </div>
            )}
          </div>
        </GlassPanel>
      </div>
    </header>
  );
}
