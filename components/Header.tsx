'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#benefits', label: 'Benefits' },
    { href: '#ingredients', label: 'Ingredients' },
    { href: '#how-to-use', label: 'How to Use' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link href="/" className="logo">
            Pure Herbal Tooth Powder
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="nav-mobile" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </header>
      <style jsx>{`
        .header {
          background-color: var(--color-header-bg);
          border-bottom: 1px solid var(--color-header-border);
          position: sticky;
          top: 0;
          z-index: 50;
          box-shadow: var(--shadow-sm);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: var(--spacing-lg) var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 80px;
        }

        .logo {
          font-family: var(--font-heading);
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-header-text);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .logo:hover {
          color: var(--color-primary-hover);
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: flex;
          gap: var(--spacing-xl);
          align-items: center;
        }

        .nav-link {
          color: var(--color-header-text);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s ease;
          padding: var(--spacing-sm) 0;
        }

        .nav-link:hover {
          color: var(--color-primary-main);
        }

        .nav-link:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 4px;
          border-radius: var(--radius-sm);
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: var(--spacing-sm);
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-toggle:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 24px;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: var(--color-header-text);
          transition: all 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* Mobile Navigation */
        .nav-mobile {
          display: none;
          flex-direction: column;
          background-color: var(--color-header-bg);
          border-top: 1px solid var(--color-header-border);
          padding: var(--spacing-lg);
          gap: var(--spacing-md);
        }

        .nav-mobile-link {
          color: var(--color-header-text);
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          padding: var(--spacing-md);
          transition: color 0.2s ease;
          min-height: 44px;
          display: flex;
          align-items: center;
        }

        .nav-mobile-link:hover {
          color: var(--color-primary-main);
        }

        .nav-mobile-link:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 768px) {
          .header-container {
            padding: var(--spacing-md);
          }

          .logo {
            font-size: 1.25rem;
          }

          .nav-desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .nav-mobile {
            display: flex;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hamburger span,
          .nav-link,
          .nav-mobile-link,
          .logo {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
