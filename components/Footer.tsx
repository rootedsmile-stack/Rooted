export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{
      backgroundColor: 'var(--color-footer-bg)',
      color: 'var(--color-footer-text)',
      marginTop: 'var(--spacing-3xl)',
      padding: 'var(--spacing-3xl) 0 var(--spacing-xl) 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'var(--spacing-2xl)',
          marginBottom: 'var(--spacing-2xl)'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '1.25rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-footer-text)'
            }}>
              Pure Herbal Tooth Powder
            </h3>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: 1.6,
              opacity: 0.9
            }}>
              Traditional oral care, naturally crafted with premium botanical ingredients.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-footer-text)'
            }}>
              Quick Links
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)'
            }}>
              <a 
                href="#benefits" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                Benefits
              </a>
              <a 
                href="#ingredients" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                Ingredients
              </a>
              <a 
                href="#how-to-use" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                How to Use
              </a>
              <a 
                href="#faq" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                FAQ
              </a>
            </nav>
          </div>

          {/* Customer Support */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-footer-text)'
            }}>
              Customer Support
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)',
              fontSize: '0.9rem',
              opacity: 0.9
            }}>
              <p>Email: support@example.com</p>
              <p>Hours: Mon-Fri 9am-5pm EST</p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              marginBottom: 'var(--spacing-md)',
              color: 'var(--color-footer-text)'
            }}>
              Legal
            </h4>
            <nav style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--spacing-sm)'
            }}>
              <a 
                href="/privacy" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                Terms of Service
              </a>
              <a 
                href="/shipping" 
                style={{
                  color: 'var(--color-footer-text)',
                  fontSize: '0.9rem',
                  opacity: 0.9,
                  transition: 'opacity 0.2s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.opacity = '1'}
                onMouseOut={(e) => e.currentTarget.style.opacity = '0.9'}
              >
                Shipping & Returns
              </a>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: 'var(--spacing-xl)',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          textAlign: 'center'
        }}>
          <p style={{
            fontSize: '0.85rem',
            opacity: 0.8,
            margin: 0
          }}>
            © {currentYear} Pure Herbal Tooth Powder. All rights reserved.
          </p>
          <p style={{
            fontSize: '0.8rem',
            opacity: 0.7,
            marginTop: 'var(--spacing-sm)'
          }}>
            This product is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </div>
    </footer>
  );
}
