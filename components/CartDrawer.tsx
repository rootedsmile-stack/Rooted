'use client';

import { useState, useEffect } from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="cart-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Drawer */}
      <aside
        className="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cart-title"
      >
        <div className="cart-header">
          <h2 id="cart-title" className="cart-title">Your Cart</h2>
          <button
            className="cart-close"
            onClick={onClose}
            aria-label="Close cart"
            type="button"
          >
            ×
          </button>
        </div>

        <div className="cart-body">
          <div className="cart-empty">
            <p className="cart-empty-icon">🛒</p>
            <p className="cart-empty-text">Your cart is empty</p>
            <p className="cart-empty-subtext">Add items to get started</p>
          </div>
        </div>

        <div className="cart-footer">
          <div className="cart-total">
            <span className="cart-total-label">Subtotal</span>
            <span className="cart-total-amount">$0.00</span>
          </div>
          <button className="cart-checkout-btn" disabled>
            Checkout
          </button>
          <p className="cart-footer-text">Shipping calculated at checkout</p>
        </div>
      </aside>

      <style jsx>{`
        .cart-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 400px;
          background-color: var(--color-body-card-bg);
          box-shadow: var(--shadow-lg);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .cart-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--color-body-border);
        }

        .cart-title {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--color-primary-main);
          margin: 0;
        }

        .cart-close {
          background: transparent;
          border: none;
          font-size: 2rem;
          line-height: 1;
          cursor: pointer;
          color: var(--color-body-text);
          padding: var(--spacing-xs);
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: color 0.2s ease;
        }

        .cart-close:hover {
          color: var(--color-primary-main);
        }

        .cart-close:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }

        .cart-body {
          flex: 1;
          overflow-y: auto;
          padding: var(--spacing-lg);
        }

        .cart-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: var(--spacing-3xl) var(--spacing-lg);
        }

        .cart-empty-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-md);
        }

        .cart-empty-text {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-body-text);
          margin: 0 0 var(--spacing-xs) 0;
        }

        .cart-empty-subtext {
          font-size: 0.95rem;
          color: var(--color-body-text-light);
          margin: 0;
        }

        .cart-footer {
          border-top: 1px solid var(--color-body-border);
          padding: var(--spacing-lg);
          background-color: var(--color-body-bg);
        }

        .cart-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
        }

        .cart-total-label {
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--color-body-text);
        }

        .cart-total-amount {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--color-primary-main);
        }

        .cart-checkout-btn {
          width: 100%;
          padding: var(--spacing-lg);
          background-color: var(--color-primary-main);
          color: white;
          border: none;
          border-radius: var(--radius-md);
          font-size: 1.125rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
          min-height: 56px;
        }

        .cart-checkout-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .cart-checkout-btn:not(:disabled):hover {
          background-color: var(--color-primary-hover);
        }

        .cart-checkout-btn:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
        }

        .cart-footer-text {
          font-size: 0.85rem;
          color: var(--color-body-text-light);
          text-align: center;
          margin: var(--spacing-sm) 0 0 0;
        }

        @media (max-width: 480px) {
          .cart-drawer {
            max-width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cart-backdrop,
          .cart-drawer {
            animation: none;
          }

          .cart-close,
          .cart-checkout-btn {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
