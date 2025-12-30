import { product } from '../content/product';

export default function ProductHero() {
  return (
    <section style={{
      background: 'linear-gradient(135deg, var(--color-body-bg) 0%, var(--color-accent-cream) 100%)',
      padding: 'var(--spacing-3xl) 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'var(--spacing-3xl)',
          alignItems: 'center'
        }}>
          {/* Product Image Placeholder */}
          <div style={{
            backgroundColor: 'var(--color-body-card-bg)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-3xl)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '400px',
            boxShadow: 'var(--shadow-lg)',
            border: '1px solid var(--color-body-border)'
          }}>
            <div style={{
              textAlign: 'center',
              color: 'var(--color-body-text-light)'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: 'var(--spacing-md)'
              }}>
                🌿
              </div>
              <p style={{ fontSize: '1.1rem', fontWeight: 500 }}>
                Product Image
              </p>
              <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                Coming Soon
              </p>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 style={{
              fontSize: '2.5rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-primary-main)'
            }}>
              {product.productName}
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'var(--color-body-text-light)',
              marginBottom: 'var(--spacing-lg)',
              fontStyle: 'italic'
            }}>
              {product.tagline}
            </p>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: 1.7,
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--color-body-text)'
            }}>
              {product.shortDescription}
            </p>

            {/* Variants */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-md)',
              marginBottom: 'var(--spacing-xl)'
            }}>
              {product.variants.map((variant) => (
                <div 
                  key={variant.id}
                  style={{
                    backgroundColor: 'var(--color-body-card-bg)',
                    padding: 'var(--spacing-lg)',
                    borderRadius: 'var(--radius-md)',
                    border: '2px solid var(--color-body-border)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'all 0.2s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary-main)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-body-border)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div>
                    <h3 style={{
                      fontSize: '1.1rem',
                      marginBottom: 'var(--spacing-xs)',
                      color: 'var(--color-primary-main)'
                    }}>
                      {variant.size} - {variant.weight}
                    </h3>
                    <p style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-body-text-light)',
                      margin: 0
                    }}>
                      {variant.inStock ? '✓ In Stock' : '✗ Out of Stock'}
                    </p>
                  </div>
                  
                  <div style={{ textAlign: 'right' }}>
                    <div style={{
                      fontSize: '1.75rem',
                      fontWeight: 700,
                      color: 'var(--color-primary-main)'
                    }}>
                      ${(variant.price / 100).toFixed(2)}
                    </div>
                    {variant.compareAtPrice && (
                      <div style={{
                        fontSize: '0.95rem',
                        textDecoration: 'line-through',
                        color: 'var(--color-body-text-light)',
                        marginTop: 'var(--spacing-xs)'
                      }}>
                        ${(variant.compareAtPrice / 100).toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button style={{
              backgroundColor: 'var(--color-primary-main)',
              color: 'white',
              padding: 'var(--spacing-lg) var(--spacing-2xl)',
              fontSize: '1.1rem',
              fontWeight: 600,
              borderRadius: 'var(--radius-md)',
              width: '100%',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-primary-main)';
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
            >
              Add to Cart (Coming Soon)
            </button>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--color-body-text-light)',
              textAlign: 'center',
              marginTop: 'var(--spacing-md)'
            }}>
              🔒 Secure checkout • Free shipping over $50
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
