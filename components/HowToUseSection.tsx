'use client';

import { product } from '../content/product';

export default function HowToUseSection() {
  return (
    <section id="how-to-use" className="section" style={{
      backgroundColor: 'var(--color-body-bg)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-primary-main)'
          }}>
            How to Use
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-body-text-light)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Simple steps for your daily oral care routine
          </p>
        </div>

        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {product.howToUse.map((step) => (
            <div 
              key={step.step}
              style={{
                display: 'flex',
                gap: 'var(--spacing-xl)',
                marginBottom: 'var(--spacing-2xl)',
                alignItems: 'flex-start'
              }}
            >
              {/* Step Number */}
              <div style={{
                minWidth: '60px',
                height: '60px',
                backgroundColor: 'var(--color-primary-main)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.5rem',
                fontWeight: 700,
                flexShrink: 0,
                boxShadow: 'var(--shadow-md)'
              }}>
                {step.step}
              </div>

              {/* Step Content */}
              <div style={{
                backgroundColor: 'var(--color-body-card-bg)',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-body-border)',
                flex: 1,
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateX(8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-md)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateX(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              >
                <p style={{
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: 'var(--color-body-text)',
                  margin: 0
                }}>
                  {step.instruction}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tips Box */}
        <div style={{
          maxWidth: '800px',
          margin: 'var(--spacing-3xl) auto 0',
          backgroundColor: 'var(--color-secondary-light)',
          padding: 'var(--spacing-xl)',
          borderRadius: 'var(--radius-lg)',
          border: '2px solid var(--color-secondary-main)'
        }}>
          <h3 style={{
            fontSize: '1.25rem',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-primary-main)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--spacing-sm)'
          }}>
            💡 Pro Tips
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--spacing-sm)'
          }}>
            <li style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--color-body-text)',
              paddingLeft: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--color-primary-main)',
                fontWeight: 600
              }}>✓</span>
              Use a small amount - a little goes a long way
            </li>
            <li style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--color-body-text)',
              paddingLeft: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--color-primary-main)',
                fontWeight: 600
              }}>✓</span>
              Keep the jar tightly closed to maintain freshness
            </li>
            <li style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--color-body-text)',
              paddingLeft: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--color-primary-main)',
                fontWeight: 600
              }}>✓</span>
              Use a clean, dry toothbrush each time
            </li>
            <li style={{
              fontSize: '0.95rem',
              lineHeight: 1.6,
              color: 'var(--color-body-text)',
              paddingLeft: 'var(--spacing-lg)',
              position: 'relative'
            }}>
              <span style={{
                position: 'absolute',
                left: 0,
                color: 'var(--color-primary-main)',
                fontWeight: 600
              }}>✓</span>
              For best results, use twice daily as part of your oral care routine
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
