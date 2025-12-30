'use client';

import { product } from '../content/product';
import { useState } from 'react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section" style={{
      backgroundColor: 'var(--color-body-bg)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-primary-main)'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-body-text-light)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Everything you need to know about our herbal tooth powder
          </p>
        </div>

        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {product.faqs.map((faq, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--color-body-card-bg)',
                border: '1px solid var(--color-body-border)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 'var(--spacing-md)',
                overflow: 'hidden',
                transition: 'all 0.2s ease'
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                style={{
                  width: '100%',
                  padding: 'var(--spacing-lg)',
                  backgroundColor: openIndex === index ? 'var(--color-accent-cream)' : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseOver={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = 'var(--color-body-bg)';
                  }
                }}
                onMouseOut={(e) => {
                  if (openIndex !== index) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }
                }}
              >
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--color-primary-main)',
                  margin: 0,
                  flex: 1
                }}>
                  {faq.question}
                </h3>
                <span style={{
                  fontSize: '1.5rem',
                  color: 'var(--color-primary-main)',
                  fontWeight: 300,
                  transition: 'transform 0.2s ease',
                  transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                  flexShrink: 0
                }}>
                  +
                </span>
              </button>

              <div style={{
                maxHeight: openIndex === index ? '1000px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease'
              }}>
                <div style={{
                  padding: '0 var(--spacing-lg) var(--spacing-lg) var(--spacing-lg)'
                }}>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                    color: 'var(--color-body-text)',
                    margin: 0
                  }}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div style={{
          maxWidth: '700px',
          margin: 'var(--spacing-3xl) auto 0',
          textAlign: 'center',
          padding: 'var(--spacing-2xl)',
          backgroundColor: 'var(--color-primary-main)',
          borderRadius: 'var(--radius-lg)',
          color: 'white'
        }}>
          <h3 style={{
            fontSize: '1.5rem',
            marginBottom: 'var(--spacing-md)',
            color: 'white'
          }}>
            Still have questions?
          </h3>
          <p style={{
            fontSize: '1rem',
            marginBottom: 'var(--spacing-lg)',
            opacity: 0.9
          }}>
            We're here to help! Reach out to our customer support team.
          </p>
          <a 
            href="mailto:support@example.com"
            style={{
              display: 'inline-block',
              backgroundColor: 'white',
              color: 'var(--color-primary-main)',
              padding: 'var(--spacing-md) var(--spacing-xl)',
              borderRadius: 'var(--radius-md)',
              fontWeight: 600,
              fontSize: '1rem',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}
