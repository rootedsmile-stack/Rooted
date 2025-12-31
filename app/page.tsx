'use client';

import { useState } from 'react';
import Image from 'next/image';
import CouponPanel from '../components/CouponPanel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
import Section from '../components/Section';
import Button from '../components/Button';
import Accordion from '../components/Accordion';
import CartDrawer from '../components/CartDrawer';
import { product } from '../content/product';

export default function HomePage() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  // Static seed reviews
  const reviews = [
    {
      id: 1,
      name: 'Sarah M.',
      rating: 5,
      date: '2024-12-15',
      comment: 'Love this tooth powder! My teeth feel cleaner than ever, and I appreciate the natural ingredients.',
      verified: true,
    },
    {
      id: 2,
      name: 'James K.',
      rating: 5,
      date: '2024-12-10',
      comment: 'Took a few days to adjust to the powder format, but now I prefer it over paste. Great product!',
      verified: true,
    },
    {
      id: 3,
      name: 'Emily R.',
      rating: 4,
      date: '2024-12-05',
      comment: 'The taste is interesting - very herbal. Works well and the jar lasts a long time.',
      verified: true,
    },
  ];

  return (
    <>
      <CouponPanel />
      <Header />

      <main>
        {/* Hero Section */}
        <Section background="cream">
          <Container>
            <div className="hero-grid">
              <div className="hero-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🌿</span>
                  <p className="placeholder-text">Product Image</p>
                  <p className="placeholder-subtext">Coming Soon</p>
                </div>
              </div>

              <div className="hero-content">
                <h1 className="hero-title">{product.productName}</h1>
                <p className="hero-tagline">{product.tagline}</p>
                <p className="hero-description">{product.shortDescription}</p>

                {/* Variant Selection */}
                <div className="variant-section">
                  <h3 className="variant-label">Select Size</h3>
                  <div className="variant-options">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        className={`variant-option ${selectedVariant.id === variant.id ? 'selected' : ''}`}
                        onClick={() => setSelectedVariant(variant)}
                      >
                        <div className="variant-size">
                          {variant.size} - {variant.weight}
                        </div>
                        <div className="variant-price">
                          ${(variant.price / 100).toFixed(2)}
                        </div>
                        {variant.compareAtPrice && (
                          <div className="variant-compare-price">
                            ${(variant.compareAtPrice / 100).toFixed(2)}
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="large" fullWidth onClick={openCart}>
                  Add to Cart - ${(selectedVariant.price / 100).toFixed(2)}
                </Button>

                <p className="hero-guarantee">
                  🔒 Secure checkout • Free shipping over $50
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Benefits Section */}
        <Section id="benefits">
          <Container>
            <div className="section-header">
              <h2 className="section-title">Why Choose Our Tooth Powder?</h2>
              <p className="section-subtitle">
                Discover the natural benefits of traditional herbal oral care
              </p>
            </div>

            <div className="benefits-grid">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon === 'leaf' ? '🌿' : benefit.icon === 'sparkles' ? '✨' : benefit.icon === 'wind' ? '💨' : benefit.icon === 'check' ? '✓' : benefit.icon === 'recycle' ? '♻️' : '⏰'}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Ingredients Section */}
        <Section id="ingredients" background="cream">
          <Container>
            <div className="section-header">
              <h2 className="section-title">Natural Ingredients</h2>
              <p className="section-subtitle">
                Every ingredient is carefully selected for its traditional use in oral care
              </p>
            </div>

            <div className="ingredients-grid">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-card">
                  <h4 className="ingredient-name">{ingredient.name}</h4>
                  <p className="ingredient-purpose">{ingredient.purpose}</p>
                </div>
              ))}
            </div>

            <div className="ingredients-badge">
              <p>✓ No Artificial Colors • ✓ No Synthetic Additives • ✓ Natural Ingredients Only</p>
            </div>
          </Container>
        </Section>

        {/* How to Use Section */}
        <Section id="how-to-use">
          <Container>
            <div className="section-header">
              <h2 className="section-title">How to Use</h2>
              <p className="section-subtitle">
                Simple steps for your daily oral care routine
              </p>
            </div>

            <div className="steps-container">
              {product.howToUse.map((step) => (
                <div key={step.step} className="step-row">
                  <div className="step-number">{step.step}</div>
                  <div className="step-content">
                    <p>{step.instruction}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="tips-box">
              <h3 className="tips-title">💡 Pro Tips</h3>
              <ul className="tips-list">
                <li>Use a small amount - a little goes a long way</li>
                <li>Keep the jar tightly closed to maintain freshness</li>
                <li>Use a clean, dry toothbrush each time</li>
                <li>For best results, use twice daily as part of your oral care routine</li>
              </ul>
            </div>
          </Container>
        </Section>

        {/* Reviews Section */}
        <Section id="reviews" background="white">
          <Container>
            <div className="section-header">
              <h2 className="section-title">Customer Reviews</h2>
              <div className="reviews-summary">
                <div className="reviews-rating">
                  <span className="rating-number">4.7</span>
                  <div className="rating-stars">★★★★★</div>
                  <span className="rating-count">Based on {reviews.length} reviews</span>
                </div>
              </div>
            </div>

            <div className="reviews-grid">
              {reviews.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <div className="review-meta">
                      <span className="review-name">{review.name}</span>
                      {review.verified && <span className="review-verified">✓ Verified</span>}
                    </div>
                    <div className="review-stars">{'★'.repeat(review.rating)}</div>
                  </div>
                  <p className="review-comment">{review.comment}</p>
                  <p className="review-date">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* FAQ Section */}
        <Section id="faq">
          <Container>
            <div className="section-header">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about our herbal tooth powder
              </p>
            </div>

            <div className="faq-container">
              {product.faqs.map((faq, index) => (
                <Accordion key={index} title={faq.question}>
                  <p>{faq.answer}</p>
                </Accordion>
              ))}
            </div>

            <div className="faq-cta">
              <h3 className="faq-cta-title">Still have questions?</h3>
              <p className="faq-cta-text">We're here to help! Reach out to our customer support team.</p>
              <Button variant="primary" size="medium">
                Contact Support
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />

      <style jsx>{`
        /* Hero Section */
        .hero-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-3xl);
          align-items: center;
        }

        .hero-image {
          width: 100%;
        }

        .image-placeholder {
          background-color: var(--color-body-card-bg);
          border-radius: var(--radius-xl);
          padding: var(--spacing-3xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          border: 1px solid var(--color-body-border);
          box-shadow: var(--shadow-lg);
        }

        .placeholder-icon {
          font-size: 4rem;
          margin-bottom: var(--spacing-md);
        }

        .placeholder-text {
          font-size: 1.1rem;
          font-weight: 500;
          color: var(--color-body-text-light);
          margin: 0 0 var(--spacing-xs) 0;
        }

        .placeholder-subtext {
          font-size: 0.9rem;
          color: var(--color-body-text-light);
          opacity: 0.7;
          margin: 0;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .hero-title {
          font-size: 2.5rem;
          font-family: var(--font-heading);
          color: var(--color-primary-main);
          margin: 0;
          line-height: 1.2;
        }

        .hero-tagline {
          font-size: 1.25rem;
          color: var(--color-body-text-light);
          font-style: italic;
          margin: 0;
        }

        .hero-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
        }

        .variant-section {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .variant-label {
          font-size: 1rem;
          font-weight: 600;
          color: var(--color-body-text);
          margin: 0;
        }

        .variant-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .variant-option {
          background-color: var(--color-body-card-bg);
          border: 2px solid var(--color-body-border);
          border-radius: var(--radius-md);
          padding: var(--spacing-md) var(--spacing-lg);
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 60px;
          text-align: left;
        }

        .variant-option:hover {
          border-color: var(--color-primary-light);
          box-shadow: var(--shadow-sm);
        }

        .variant-option.selected {
          border-color: var(--color-primary-main);
          background-color: var(--color-accent-cream);
          box-shadow: var(--shadow-md);
        }

        .variant-option:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
        }

        .variant-size {
          font-weight: 600;
          color: var(--color-primary-main);
          font-size: 1rem;
        }

        .variant-price {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--color-primary-main);
        }

        .variant-compare-price {
          font-size: 0.9rem;
          color: var(--color-body-text-light);
          text-decoration: line-through;
        }

        .hero-guarantee {
          font-size: 0.85rem;
          color: var(--color-body-text-light);
          text-align: center;
          margin: 0;
        }

        /* Section Headers */
        .section-header {
          text-align: center;
          margin-bottom: var(--spacing-3xl);
        }

        .section-title {
          font-size: 2.5rem;
          font-family: var(--font-heading);
          color: var(--color-primary-main);
          margin: 0 0 var(--spacing-md) 0;
        }

        .section-subtitle {
          font-size: 1.1rem;
          color: var(--color-body-text-light);
          max-width: 700px;
          margin: 0 auto;
        }

        /* Benefits Grid */
        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-xl);
        }

        .benefit-card {
          background-color: var(--color-body-card-bg);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-body-border);
          text-align: center;
          transition: all 0.3s ease;
        }

        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg);
          border-color: var(--color-primary-light);
        }

        .benefit-icon {
          font-size: 2.5rem;
          margin-bottom: var(--spacing-md);
        }

        .benefit-title {
          font-size: 1.25rem;
          color: var(--color-primary-main);
          margin: 0 0 var(--spacing-md) 0;
        }

        .benefit-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-body-text);
          margin: 0;
        }

        /* Ingredients Grid */
        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-2xl);
        }

        .ingredient-card {
          background-color: var(--color-body-card-bg);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          border: 1px solid var(--color-body-border);
        }

        .ingredient-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-primary-main);
          margin: 0 0 var(--spacing-sm) 0;
        }

        .ingredient-purpose {
          font-size: 0.9rem;
          line-height: 1.6;
          color: var(--color-body-text);
          margin: 0;
        }

        .ingredients-badge {
          background-color: var(--color-accent-sage);
          padding: var(--spacing-lg);
          border-radius: var(--radius-md);
          text-align: center;
        }

        .ingredients-badge p {
          font-size: 0.95rem;
          color: white;
          font-weight: 500;
          margin: 0;
        }

        /* Steps */
        .steps-container {
          max-width: 800px;
          margin: 0 auto var(--spacing-3xl) auto;
        }

        .step-row {
          display: flex;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
          align-items: flex-start;
        }

        .step-number {
          min-width: 60px;
          height: 60px;
          background-color: var(--color-primary-main);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          flex-shrink: 0;
          box-shadow: var(--shadow-md);
        }

        .step-content {
          background-color: var(--color-body-card-bg);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-body-border);
          flex: 1;
        }

        .step-content p {
          font-size: 1.05rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
        }

        .tips-box {
          max-width: 800px;
          margin: 0 auto;
          background-color: var(--color-secondary-light);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 2px solid var(--color-secondary-main);
        }

        .tips-title {
          font-size: 1.25rem;
          color: var(--color-primary-main);
          margin: 0 0 var(--spacing-md) 0;
        }

        .tips-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .tips-list li {
          font-size: 0.95rem;
          line-height: 1.6;
          color: var(--color-body-text);
          padding-left: var(--spacing-lg);
          position: relative;
        }

        .tips-list li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: var(--color-primary-main);
          font-weight: 600;
        }

        /* Reviews */
        .reviews-summary {
          margin-top: var(--spacing-lg);
        }

        .reviews-rating {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-sm);
        }

        .rating-number {
          font-size: 3rem;
          font-weight: 700;
          color: var(--color-primary-main);
          line-height: 1;
        }

        .rating-stars {
          font-size: 1.5rem;
          color: var(--color-secondary-main);
          letter-spacing: 2px;
        }

        .rating-count {
          font-size: 0.9rem;
          color: var(--color-body-text-light);
        }

        .reviews-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--spacing-xl);
          margin-top: var(--spacing-3xl);
        }

        .review-card {
          background-color: var(--color-body-bg);
          padding: var(--spacing-xl);
          border-radius: var(--radius-lg);
          border: 1px solid var(--color-body-border);
        }

        .review-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: var(--spacing-md);
        }

        .review-meta {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs);
        }

        .review-name {
          font-weight: 600;
          color: var(--color-body-text);
        }

        .review-verified {
          font-size: 0.85rem;
          color: var(--color-status-success);
        }

        .review-stars {
          color: var(--color-secondary-main);
          font-size: 1.125rem;
        }

        .review-comment {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0 0 var(--spacing-md) 0;
        }

        .review-date {
          font-size: 0.85rem;
          color: var(--color-body-text-light);
          margin: 0;
        }

        /* FAQ */
        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-cta {
          max-width: 700px;
          margin: var(--spacing-3xl) auto 0;
          text-align: center;
          padding: var(--spacing-2xl);
          background-color: var(--color-primary-main);
          border-radius: var(--radius-lg);
          color: white;
        }

        .faq-cta-title {
          font-size: 1.5rem;
          margin: 0 0 var(--spacing-md) 0;
          color: white;
        }

        .faq-cta-text {
          font-size: 1rem;
          margin: 0 0 var(--spacing-lg) 0;
          opacity: 0.9;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .step-row {
            gap: var(--spacing-md);
          }

          .step-number {
            min-width: 50px;
            height: 50px;
            font-size: 1.25rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .benefit-card,
          .variant-option {
            transition: none;
          }

          .benefit-card:hover {
            transform: none;
          }
        }
      `}</style>
    </>
  );
}
