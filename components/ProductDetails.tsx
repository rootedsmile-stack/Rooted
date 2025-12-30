'use client';

import { product } from '../content/product';

export default function ProductDetails() {
  return (
    <section className="section" style={{
      backgroundColor: 'var(--color-body-card-bg)',
      borderTop: '1px solid var(--color-body-border)',
      borderBottom: '1px solid var(--color-body-border)'
    }}>
      <div className="container">
        <div style={{
          maxWidth: '900px',
          margin: '0 auto'
        }}>
          {/* Long Description */}
          <div style={{
            marginBottom: 'var(--spacing-3xl)',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: '2rem',
              marginBottom: 'var(--spacing-lg)',
              color: 'var(--color-primary-main)'
            }}>
              About Our Product
            </h2>
            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.8,
              color: 'var(--color-body-text)'
            }}>
              {product.longDescription}
            </p>
          </div>

          {/* Warnings */}
          <div style={{
            backgroundColor: 'var(--color-status-warning)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            marginBottom: 'var(--spacing-2xl)',
            border: '2px solid var(--color-secondary-dark)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-primary-dark)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              ⚠️ Important Warnings
            </h3>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)'
            }}>
              {product.warnings.map((warning, index) => (
                <li 
                  key={index}
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.6,
                    color: 'var(--color-primary-dark)',
                    paddingLeft: 'var(--spacing-lg)',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    fontWeight: 600
                  }}>•</span>
                  {warning}
                </li>
              ))}
            </ul>
          </div>

          {/* Disclaimers */}
          <div style={{
            backgroundColor: 'var(--color-body-bg)',
            padding: 'var(--spacing-xl)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--color-body-border)'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-primary-main)',
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--spacing-sm)'
            }}>
              ℹ️ Disclaimers
            </h3>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)'
            }}>
              {product.disclaimers.map((disclaimer, index) => (
                <p 
                  key={index}
                  style={{
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                    color: 'var(--color-body-text-light)',
                    margin: 0,
                    paddingLeft: 'var(--spacing-lg)',
                    position: 'relative'
                  }}
                >
                  <span style={{
                    position: 'absolute',
                    left: 0,
                    color: 'var(--color-primary-main)'
                  }}>•</span>
                  {disclaimer}
                </p>
              ))}
            </div>
          </div>

          {/* Quality Assurance */}
          <div style={{
            marginTop: 'var(--spacing-3xl)',
            textAlign: 'center',
            padding: 'var(--spacing-xl)',
            backgroundColor: 'var(--color-accent-sage)',
            borderRadius: 'var(--radius-lg)',
            color: 'white'
          }}>
            <h3 style={{
              fontSize: '1.5rem',
              marginBottom: 'var(--spacing-md)',
              color: 'white'
            }}>
              Quality You Can Trust
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--spacing-2xl)',
              flexWrap: 'wrap',
              marginTop: 'var(--spacing-lg)'
            }}>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>🌿</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Natural Ingredients</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>🧪</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Quality Tested</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>♻️</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Eco-Friendly</div>
              </div>
              <div>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--spacing-xs)' }}>🇺🇸</div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Made with Care</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
