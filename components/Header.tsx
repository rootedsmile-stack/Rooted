'use client';

export default function Header() {
  return (
    <header style={{
      backgroundColor: 'var(--color-header-bg)',
      borderBottom: '1px solid var(--color-header-border)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 'var(--spacing-lg) var(--spacing-lg)',
        minHeight: '80px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--spacing-md)'
        }}>
          <h1 style={{
            fontSize: '1.5rem',
            fontWeight: 600,
            color: 'var(--color-header-text)',
            margin: 0
          }}>
            Pure Herbal Tooth Powder
          </h1>
        </div>
        
        <nav style={{
          display: 'flex',
          gap: 'var(--spacing-xl)',
          alignItems: 'center'
        }}>
          <a 
            href="#benefits" 
            style={{
              color: 'var(--color-header-text)',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease'
            }}
          >
            Benefits
          </a>
          <a 
            href="#ingredients" 
            style={{
              color: 'var(--color-header-text)',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease'
            }}
          >
            Ingredients
          </a>
          <a 
            href="#faq" 
            style={{
              color: 'var(--color-header-text)',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'color 0.2s ease'
            }}
          >
            FAQ
          </a>
        </nav>
      </div>
    </header>
  );
}
