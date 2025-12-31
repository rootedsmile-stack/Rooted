'use client';

import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
  size?: 'small' | 'medium' | 'large';
}

export default function Button({ 
  children, 
  variant = 'primary',
  fullWidth = false,
  size = 'medium',
  className = '',
  disabled = false,
  ...props 
}: ButtonProps) {
  return (
    <>
      <button 
        className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full' : ''} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
      <style jsx>{`
        .btn {
          font-family: var(--font-body);
          font-weight: 600;
          border: none;
          border-radius: var(--radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: 44px;
          line-height: 1.5;
        }

        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .btn:not(:disabled):hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .btn:not(:disabled):active {
          transform: translateY(0);
        }

        /* Variants */
        .btn-primary {
          background-color: var(--color-primary-main);
          color: white;
        }

        .btn-primary:not(:disabled):hover {
          background-color: var(--color-primary-hover);
        }

        .btn-secondary {
          background-color: var(--color-secondary-main);
          color: var(--color-primary-dark);
        }

        .btn-secondary:not(:disabled):hover {
          background-color: var(--color-secondary-hover);
        }

        /* Sizes */
        .btn-small {
          padding: var(--spacing-sm) var(--spacing-lg);
          font-size: 0.875rem;
        }

        .btn-medium {
          padding: var(--spacing-md) var(--spacing-xl);
          font-size: 1rem;
        }

        .btn-large {
          padding: var(--spacing-lg) var(--spacing-2xl);
          font-size: 1.125rem;
        }

        /* Full width */
        .btn-full {
          width: 100%;
        }

        /* Accessibility */
        .btn:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
        }

        @media (prefers-reduced-motion: reduce) {
          .btn {
            transition: none;
          }
          
          .btn:not(:disabled):hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
