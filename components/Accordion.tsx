'use client';

import { useState, useRef, useEffect } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export default function Accordion({ title, children, defaultOpen = false }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState<number>(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [children]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="accordion">
        <button
          className="accordion-button"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
          type="button"
        >
          <span className="accordion-title">{title}</span>
          <span className={`accordion-icon ${isOpen ? 'open' : ''}`} aria-hidden="true">
            +
          </span>
        </button>
        <div
          className="accordion-content"
          style={{
            maxHeight: isOpen ? `${contentHeight}px` : '0',
          }}
        >
          <div ref={contentRef} className="accordion-inner">
            {children}
          </div>
        </div>
      </div>
      <style jsx>{`
        .accordion {
          background-color: var(--color-body-card-bg);
          border: 1px solid var(--color-body-border);
          border-radius: var(--radius-md);
          margin-bottom: var(--spacing-md);
          overflow: hidden;
        }

        .accordion-button {
          width: 100%;
          padding: var(--spacing-lg);
          background-color: transparent;
          border: none;
          text-align: left;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: var(--spacing-md);
          transition: background-color 0.2s ease;
          min-height: 60px;
        }

        .accordion-button:hover {
          background-color: var(--color-accent-cream);
        }

        .accordion-button:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: -2px;
        }

        .accordion-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-primary-main);
          flex: 1;
          line-height: 1.4;
        }

        .accordion-icon {
          font-size: 1.5rem;
          color: var(--color-primary-main);
          font-weight: 300;
          transition: transform 0.3s ease;
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .accordion-icon.open {
          transform: rotate(45deg);
        }

        .accordion-content {
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .accordion-inner {
          padding: 0 var(--spacing-lg) var(--spacing-lg) var(--spacing-lg);
          color: var(--color-body-text);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .accordion-button {
            padding: var(--spacing-md);
          }

          .accordion-title {
            font-size: 1rem;
          }

          .accordion-inner {
            padding: 0 var(--spacing-md) var(--spacing-md) var(--spacing-md);
            font-size: 0.9rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .accordion-content,
          .accordion-icon,
          .accordion-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
