import { product } from '../content/product';

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <section className="section">
          <h1>{product.productName}</h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-body-text-light)' }}>
            {product.tagline}
          </p>
          
          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>About Our Product</h2>
            <p>{product.shortDescription}</p>
            <p>{product.longDescription}</p>
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>Available Sizes</h2>
            {product.variants.map((variant) => (
              <div 
                key={variant.id}
                style={{
                  backgroundColor: 'var(--color-body-card-bg)',
                  padding: 'var(--spacing-lg)',
                  marginBottom: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-body-border)'
                }}
              >
                <h3>{variant.size} - {variant.weight}</h3>
                <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-primary-main)' }}>
                  ${(variant.price / 100).toFixed(2)}
                </p>
                {variant.compareAtPrice && (
                  <p style={{ 
                    textDecoration: 'line-through', 
                    color: 'var(--color-body-text-light)' 
                  }}>
                    ${(variant.compareAtPrice / 100).toFixed(2)}
                  </p>
                )}
                <p style={{ color: variant.inStock ? 'var(--color-status-success)' : 'var(--color-status-error)' }}>
                  {variant.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>Benefits</h2>
            <div style={{ display: 'grid', gap: 'var(--spacing-lg)' }}>
              {product.benefits.map((benefit, index) => (
                <div key={index}>
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>Ingredients</h2>
            {product.ingredients.map((ingredient, index) => (
              <div key={index} style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>{ingredient.name}</strong>: {ingredient.purpose}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>How To Use</h2>
            {product.howToUse.map((step) => (
              <div key={step.step} style={{ marginBottom: 'var(--spacing-md)' }}>
                <strong>Step {step.step}:</strong> {step.instruction}
              </div>
            ))}
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>Important Information</h2>
            
            <h3 style={{ marginTop: 'var(--spacing-lg)' }}>Warnings</h3>
            <ul>
              {product.warnings.map((warning, index) => (
                <li key={index}>{warning}</li>
              ))}
            </ul>

            <h3 style={{ marginTop: 'var(--spacing-lg)' }}>Disclaimers</h3>
            <ul>
              {product.disclaimers.map((disclaimer, index) => (
                <li key={index}>{disclaimer}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: 'var(--spacing-2xl)' }}>
            <h2>Frequently Asked Questions</h2>
            {product.faqs.map((faq, index) => (
              <div 
                key={index}
                style={{
                  backgroundColor: 'var(--color-body-card-bg)',
                  padding: 'var(--spacing-lg)',
                  marginBottom: 'var(--spacing-md)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-body-border)'
                }}
              >
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
