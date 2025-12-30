import { product } from '../content/product';

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="section" style={{
      backgroundColor: 'var(--color-accent-cream)'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-3xl)' }}>
          <h2 style={{
            fontSize: '2.5rem',
            marginBottom: 'var(--spacing-md)',
            color: 'var(--color-primary-main)'
          }}>
            Natural Ingredients
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'var(--color-body-text-light)',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Every ingredient is carefully selected for its traditional use in oral care
          </p>
        </div>

        <div style={{
          backgroundColor: 'var(--color-body-card-bg)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--spacing-2xl)',
          boxShadow: 'var(--shadow-md)',
          border: '1px solid var(--color-body-border)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--spacing-xl)'
          }}>
            {product.ingredients.map((ingredient, index) => (
              <div 
                key={index}
                style={{
                  padding: 'var(--spacing-lg)',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-body-bg)',
                  border: '1px solid var(--color-body-border)',
                  transition: 'all 0.2s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-accent-cream)';
                  e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-body-bg)';
                  e.currentTarget.style.borderColor = 'var(--color-body-border)';
                }}
              >
                <h4 style={{
                  fontSize: '1.1rem',
                  marginBottom: 'var(--spacing-sm)',
                  color: 'var(--color-primary-main)',
                  fontWeight: 600
                }}>
                  {ingredient.name}
                </h4>
                <p style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  color: 'var(--color-body-text)',
                  margin: 0
                }}>
                  {ingredient.purpose}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 'var(--spacing-2xl)',
            padding: 'var(--spacing-lg)',
            backgroundColor: 'var(--color-accent-sage)',
            borderRadius: 'var(--radius-md)',
            textAlign: 'center'
          }}>
            <p style={{
              fontSize: '0.95rem',
              color: 'white',
              fontWeight: 500,
              margin: 0
            }}>
              ✓ No Artificial Colors • ✓ No Synthetic Additives • ✓ Natural Ingredients Only
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
