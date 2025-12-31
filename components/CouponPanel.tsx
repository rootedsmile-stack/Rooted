'use client';

import { useState } from 'react';

export default function CouponPanel() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <>
      <div className="coupon-panel">
        <div className="coupon-content">
          <p className="coupon-text">
            🌿 Limited Time: <span className="coupon-highlight">Free Shipping</span> on orders over $50
          </p>
          <button 
            className="coupon-close"
            onClick={() => setIsVisible(false)}
            aria-label="Close announcement"
          >
            ×
          </button>
        </div>
      </div>
      <style jsx>{`
        .coupon-panel {
          background-color: var(--color-coupon-bg);
          color: var(--color-coupon-text);
          padding: var(--spacing-sm) 0;
          position: relative;
          z-index: 100;
        }

        .coupon-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-md);
          position: relative;
        }

        .coupon-text {
          margin: 0;
          font-size: 0.95rem;
          font-weight: 500;
          letter-spacing: 0.3px;
          text-align: center;
        }

        .coupon-highlight {
          color: var(--color-coupon-accent);
          font-weight: 600;
        }

        .coupon-close {
          background: transparent;
          border: none;
          color: var(--color-coupon-text);
          font-size: 1.5rem;
          line-height: 1;
          cursor: pointer;
          padding: var(--spacing-xs);
          position: absolute;
          right: var(--spacing-md);
          top: 50%;
          transform: translateY(-50%);
          opacity: 0.8;
          transition: opacity 0.2s ease;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .coupon-close:hover {
          opacity: 1;
        }

        .coupon-close:focus-visible {
          outline: 2px solid var(--color-coupon-accent);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }

        @media (max-width: 768px) {
          .coupon-content {
            padding: 0 var(--spacing-md);
          }

          .coupon-text {
            font-size: 0.875rem;
            padding-right: var(--spacing-3xl);
          }

          .coupon-close {
            right: var(--spacing-sm);
          }
        }
      `}</style>
    </>
  );
}
