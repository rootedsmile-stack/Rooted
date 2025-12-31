'use client';

import { useState } from 'react';
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
  const [activeImageIndex, setActiveImageIndex] = useState(0);

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
        {/* Hero Product Section - Ranavat Style */}
        <Section background="white">
          <Container>
            <div className="hero-wrapper">
              <div className="hero-images">
                <div className="main-image">
                  <div className="image-placeholder">
                    <span className="placeholder-icon">🌿</span>
                  </div>
                </div>
                <div className="thumbnail-gallery">
                  {[1, 2, 3].map((i) => (
                    <div 
                      key={i} 
                      className={`thumbnail ${activeImageIndex === i - 1 ? 'active' : ''}`}
                      onClick={() => setActiveImageIndex(i - 1)}
                    >
                      <span className="thumb-icon">🌿</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="hero-details">
                <h1 className="product-name">{product.productName}</h1>
                <p className="product-tagline">{product.tagline}</p>
                
                <div className="price-section">
                  <span className="price">${(selectedVariant.price / 100).toFixed(2)}</span>
                  {selectedVariant.compareAtPrice && (
                    <span className="compare-price">${(selectedVariant.compareAtPrice / 100).toFixed(2)}</span>
                  )}
                </div>

                <div className="variant-selector">
                  <label className="variant-label">Size</label>
                  <div className="size-options">
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        className={`size-option ${selectedVariant.id === variant.id ? 'selected' : ''}`}
                        onClick={() => setSelectedVariant(variant)}
                      >
                        {variant.size}
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="large" fullWidth onClick={openCart}>
                  Add to Cart
                </Button>

                <div className="product-description">
                  <p>{product.shortDescription}</p>
                </div>

                <div className="product-highlights">
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span>Natural Ingredients</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span>Cruelty Free</span>
                  </div>
                  <div className="highlight-item">
                    <span className="highlight-icon">✓</span>
                    <span>Eco-Friendly Packaging</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Ingredients - Clean List */}
        <Section id="ingredients" background="cream">
          <Container>
            <div className="content-centered">
              <h2 className="section-heading">Ingredients</h2>
              <p className="section-intro">
                Every ingredient is carefully selected for its traditional use in oral care
              </p>
              
              <div className="ingredient-list">
                {product.ingredients.map((ingredient, index) => (
                  <div key={index} className="ingredient-row">
                    <h4 className="ingredient-title">{ingredient.name}</h4>
                    <p className="ingredient-desc">{ingredient.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Benefits - Minimal Cards */}
        <Section id="benefits" background="white">
          <Container>
            <div className="content-centered">
              <h2 className="section-heading">Benefits</h2>
              
              <div className="benefits-minimal">
                {product.benefits.map((benefit, index) => (
                  <div key={index} className="benefit-minimal">
                    <h3 className="benefit-minimal-title">{benefit.title}</h3>
                    <p className="benefit-minimal-text">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* How to Use - Simple Steps */}
        <Section id="how-to-use" background="cream">
          <Container>
            <div className="content-centered">
              <h2 className="section-heading">How to Use</h2>
              
              <div className="steps-simple">
                {product.howToUse.map((step) => (
                  <div key={step.step} className="step-simple">
                    <div className="step-num">{step.step}</div>
                    <p className="step-text">{step.instruction}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* Reviews - Elegant Layout */}
        <Section id="reviews" background="white">
          <Container>
            <div className="content-centered">
              <h2 className="section-heading">Reviews</h2>
              
              <div className="reviews-elegant">
                {reviews.map((review) => (
                  <div key={review.id} className="review-elegant">
                    <div className="review-stars-elegant">{'★'.repeat(review.rating)}</div>
                    <p className="review-text-elegant">"{review.comment}"</p>
                    <p className="review-author-elegant">— {review.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQ - Clean Accordion */}
        <Section id="faq" background="cream">
          <Container>
            <div className="content-centered">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              
              <div className="faq-elegant">
                {product.faqs.map((faq, index) => (
                  <Accordion key={index} title={faq.question}>
                    <p>{faq.answer}</p>
                  </Accordion>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />

      <style jsx>{`
        /* Hero Section - Ranavat Style */
        .hero-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-3xl);
          padding: var(--spacing-3xl) 0;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-images {
          display: flex;
          gap: var(--spacing-lg);
        }

        .thumbnail-gallery {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .thumbnail {
          width: 80px;
          height: 80px;
          background-color: var(--color-accent-cream);
          border: 2px solid transparent;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .thumbnail:hover,
        .thumbnail.active {
          border-color: var(--color-primary-main);
        }

        .thumb-icon {
          font-size: 1.5rem;
        }

        .main-image {
          flex: 1;
        }

        .image-placeholder {
          width: 100%;
          aspect-ratio: 3/4;
          background-color: var(--color-accent-cream);
          border-radius: var(--radius-md);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .placeholder-icon {
          font-size: 6rem;
        }

        .hero-details {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xl);
          padding: var(--spacing-xl) 0;
        }

        .product-name {
          font-size: 2.5rem;
          font-family: var(--font-heading);
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0;
          color: var(--color-primary-dark);
        }

        .product-tagline {
          font-size: 1rem;
          font-style: italic;
          color: var(--color-body-text-light);
          margin: 0;
          letter-spacing: 0.3px;
        }

        .price-section {
          display: flex;
          align-items: baseline;
          gap: var(--spacing-md);
        }

        .price {
          font-size: 1.5rem;
          font-weight: 500;
          color: var(--color-primary-dark);
        }

        .compare-price {
          font-size: 1.125rem;
          color: var(--color-body-text-light);
          text-decoration: line-through;
        }

        .variant-selector {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .variant-label {
          font-size: 0.875rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: var(--color-body-text);
          font-weight: 500;
        }

        .size-options {
          display: flex;
          gap: var(--spacing-sm);
        }

        .size-option {
          padding: var(--spacing-md) var(--spacing-xl);
          border: 1px solid var(--color-body-border);
          background-color: white;
          color: var(--color-body-text);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          min-width: 100px;
          text-align: center;
        }

        .size-option:hover {
          border-color: var(--color-primary-main);
        }

        .size-option.selected {
          border-color: var(--color-primary-main);
          background-color: var(--color-primary-main);
          color: white;
        }

        .product-description {
          padding: var(--spacing-lg) 0;
          border-top: 1px solid var(--color-body-border);
          border-bottom: 1px solid var(--color-body-border);
        }

        .product-description p {
          font-size: 0.95rem;
          line-height: 1.8;
          color: var(--color-body-text);
          margin: 0;
        }

        .product-highlights {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .highlight-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-size: 0.875rem;
          color: var(--color-body-text);
        }

        .highlight-icon {
          color: var(--color-primary-main);
          font-weight: 600;
        }

        /* Content Centered Layout */
        .content-centered {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .section-heading {
          font-size: 2rem;
          font-family: var(--font-heading);
          font-weight: 400;
          letter-spacing: 1px;
          margin: 0 0 var(--spacing-md) 0;
          color: var(--color-primary-dark);
        }

        .section-intro {
          font-size: 1rem;
          color: var(--color-body-text-light);
          margin: 0 0 var(--spacing-3xl) 0;
          line-height: 1.6;
        }

        /* Ingredients List */
        .ingredient-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
          text-align: left;
          max-width: 600px;
          margin: 0 auto;
        }

        .ingredient-row {
          padding-bottom: var(--spacing-lg);
          border-bottom: 1px solid var(--color-body-border);
        }

        .ingredient-row:last-child {
          border-bottom: none;
        }

        .ingredient-title {
          font-size: 1.125rem;
          font-weight: 500;
          margin: 0 0 var(--spacing-sm) 0;
          color: var(--color-primary-dark);
        }

        .ingredient-desc {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
        }

        /* Benefits Minimal */
        .benefits-minimal {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-3xl);
          text-align: left;
        }

        .benefit-minimal {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .benefit-minimal-title {
          font-size: 1.125rem;
          font-weight: 500;
          margin: 0;
          color: var(--color-primary-dark);
        }

        .benefit-minimal-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
        }

        /* Steps Simple */
        .steps-simple {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-2xl);
          text-align: left;
          max-width: 600px;
          margin: 0 auto;
        }

        .step-simple {
          display: flex;
          gap: var(--spacing-lg);
          align-items: flex-start;
        }

        .step-num {
          min-width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--color-primary-main);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 500;
          flex-shrink: 0;
        }

        .step-text {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
          padding-top: 8px;
        }

        /* Reviews Elegant */
        .reviews-elegant {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-3xl);
          max-width: 700px;
          margin: 0 auto;
        }

        .review-elegant {
          padding: var(--spacing-2xl) 0;
          border-bottom: 1px solid var(--color-body-border);
        }

        .review-elegant:last-child {
          border-bottom: none;
        }

        .review-stars-elegant {
          font-size: 1rem;
          color: var(--color-secondary-main);
          margin-bottom: var(--spacing-md);
          letter-spacing: 2px;
        }

        .review-text-elegant {
          font-size: 1.05rem;
          line-height: 1.8;
          font-style: italic;
          color: var(--color-body-text);
          margin: 0 0 var(--spacing-md) 0;
        }

        .review-author-elegant {
          font-size: 0.9rem;
          color: var(--color-body-text-light);
          margin: 0;
          font-weight: 500;
        }

        /* FAQ Elegant */
        .faq-elegant {
          max-width: 700px;
          margin: 0 auto;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .hero-wrapper {
            grid-template-columns: 1fr;
            gap: var(--spacing-2xl);
          }

          .hero-images {
            flex-direction: column-reverse;
          }

          .thumbnail-gallery {
            flex-direction: row;
          }

          .product-name {
            font-size: 2rem;
          }

          .section-heading {
            font-size: 1.75rem;
          }

          .benefits-minimal {
            grid-template-columns: 1fr;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .thumbnail,
          .size-option {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
