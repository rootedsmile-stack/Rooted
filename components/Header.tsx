'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: '#ingredients', label: 'Ingredients' },
    { href: '#benefits', label: 'Benefits' },
    { href: '#how-to-use', label: 'How to Use' },
    { href: '#reviews', label: 'Reviews' },
    { href: '#faq', label: 'FAQ' },
  ];

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

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
          <>
            <div className="mobile-backdrop" onClick={toggleMobileMenu} />
            <nav className="nav-mobile" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-mobile-link"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </>
        )}
      </header>
      <style jsx>{`
        .header {
          background-color: var(--color-header-bg);
          border-bottom: 1px solid var(--color-header-border);
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(8px);
          background-color: rgba(255, 249, 226, 0.95);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 70px;
        }

        .logo {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 400;
          color: var(--color-header-text);
          text-decoration: none;
          transition: color 0.2s ease;
          letter-spacing: 0.02em;
        }

        .logo:hover {
          color: var(--color-primary-main);
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          color: var(--color-header-text);
          text-decoration: none;
          font-weight: 400;
          font-size: 0.875rem;
          transition: color 0.2s ease;
          padding: 0.5rem 0;
          position: relative;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          font-size: 0.75rem;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 1px;
          background-color: var(--color-primary-main);
          transition: width 0.25s ease-out;
        }

        .nav-link:hover {
          color: var(--color-primary-main);
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 4px;
          border-radius: 2px;
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-toggle:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 4px;
          width: 22px;
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
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Backdrop */
        .mobile-backdrop {
          display: none;
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.4);
          z-index: 49;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        /* Mobile Navigation */
        .nav-mobile {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 70px;
          right: 0;
          width: 280px;
          max-width: 85vw;
          height: calc(100vh - 70px);
          background-color: var(--color-header-bg);
          border-left: 1px solid var(--color-header-border);
          padding: 2rem 1.5rem;
          gap: 0.5rem;
          z-index: 50;
          box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .nav-mobile-link {
          color: var(--color-header-text);
          text-decoration: none;
          font-weight: 400;
          font-size: 0.9375rem;
          padding: 1rem;
          transition: color 0.2s ease, background-color 0.2s ease;
          min-height: 44px;
          display: flex;
          align-items: center;
          border-radius: 4px;
          letter-spacing: 0.02em;
        }

        .nav-mobile-link:hover {
          color: var(--color-primary-main);
          background-color: var(--color-accent-cream);
        }

        .nav-mobile-link:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
        }

        @media (max-width: 768px) {
          .header-container {
            padding: 0.75rem 1rem;
            min-height: 60px;
          }

          .logo {
            font-size: 1rem;
          }

          .nav-desktop {
            display: none;
          }

          .mobile-menu-toggle {
            display: flex;
          }

          .mobile-backdrop {
            display: block;
          }

          .nav-mobile {
            display: flex;
            top: 60px;
            height: calc(100vh - 60px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hamburger span,
          .nav-link,
          .nav-mobile-link,
          .logo,
          .mobile-backdrop,
          .nav-mobile {
            transition: none;
            animation: none;
          }
          
          .nav-link::after {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
