'use client';

import { product } from '../content/product';

export default function BenefitsSection() {
  // Icon mapping based on benefit.icon
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: string } = {
      leaf: '🌿',
      sparkles: '✨',
      wind: '💨',
      check: '✓',
      recycle: '♻️',
      clock: '⏰'
    };
    return icons[iconName] || '🌿';
  };

  return (
    <section id="benefits" className="section" style={{
      backgroundColor: 'var(--color-body-bg)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-primary-main)'
          }}>
            Why Choose Our Tooth Powder?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-body-text-light)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Discover the natural benefits of traditional herbal oral care
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 'var(--spacing-xl)'
        }}>
          {product.benefits.map((benefit, index) => (
            <div 
              key={index}
              style={{
                backgroundColor: 'var(--color-body-card-bg)',
                padding: 'var(--spacing-xl)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-body-border)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                e.currentTarget.style.borderColor = 'var(--color-primary-light)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.borderColor = 'var(--color-body-border)';
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                marginBottom: 'var(--spacing-md)',
                textAlign: 'center'
              }}>
                {getIcon(benefit.icon)}
              </div>
              
              <h3 style={{
                fontSize: '1.25rem',
                marginBottom: 'var(--spacing-md)',
                color: 'var(--color-primary-main)',
                textAlign: 'center'
              }}>
                {benefit.title}
              </h3>
              
              <p style={{
                fontSize: '0.95rem',
                lineHeight: 1.6,
                color: 'var(--color-body-text)',
                textAlign: 'center'
              }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
