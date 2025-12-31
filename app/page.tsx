'use client';

import { useState } from 'react';
import CouponPanel from '../components/CouponPanel';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Container from '../components/Container';
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

      <main className="main-content">
        {/* Hero Product Section */}
        <section className="hero-section">
          <Container>
            <div className="hero-grid">
              <div className="hero-images">
                <div className="main-image-wrapper">
                  <div className="main-image">
                    <span className="placeholder-icon">🌿</span>
                  </div>
                </div>
                <div className="thumbnail-strip">
                  {[1, 2, 3, 4].map((i) => (
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

              <div className="product-info">
                <div className="product-info-inner">
                  <h1 className="product-title">{product.productName}</h1>
                  <p className="product-subtitle">{product.tagline}</p>
                  
                  <div className="price-display">
                    <span className="current-price">${(selectedVariant.price / 100).toFixed(2)}</span>
                    {selectedVariant.compareAtPrice && (
                      <span className="original-price">${(selectedVariant.compareAtPrice / 100).toFixed(2)}</span>
                    )}
                  </div>

                  <div className="size-selector">
                    <label className="size-label">Size</label>
                    <div className="size-buttons">
                      {product.variants.map((variant) => (
                        <button
                          key={variant.id}
                          className={`size-btn ${selectedVariant.id === variant.id ? 'active' : ''}`}
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

                  <div className="product-desc">
                    <p>{product.shortDescription}</p>
                  </div>

                  <div className="product-features">
                    <div className="feature">✓ Natural Ingredients</div>
                    <div className="feature">✓ Cruelty Free</div>
                    <div className="feature">✓ Eco-Friendly</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Description Section */}
        <section className="description-section">
          <Container>
            <div className="desc-content">
              <h2 className="desc-title">A Traditional Approach to Oral Care</h2>
              <p className="desc-text">
                Our herbal tooth powder combines time-honored botanical ingredients with modern oral care science. 
                Each carefully selected ingredient works in harmony to cleanse, strengthen, and refresh.
              </p>
            </div>
          </Container>
        </section>

        {/* Ingredients Section */}
        <section className="ingredients-section" id="ingredients">
          <Container>
            <h2 className="section-title">Ingredients</h2>
            <div className="ingredients-grid">
              {product.ingredients.map((ingredient, index) => (
                <div key={index} className="ingredient-item">
                  <h3 className="ingredient-name">{ingredient.name}</h3>
                  <p className="ingredient-purpose">{ingredient.purpose}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section" id="benefits">
          <Container>
            <h2 className="section-title">Benefits</h2>
            <div className="benefits-grid">
              {product.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <h3 className="benefit-name">{benefit.title}</h3>
                  <p className="benefit-text">{benefit.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* How to Use Section */}
        <section className="usage-section" id="how-to-use">
          <Container>
            <h2 className="section-title">How to Use</h2>
            <div className="steps-list">
              {product.howToUse.map((step) => (
                <div key={step.step} className="usage-step">
                  <span className="step-number">{step.step}</span>
                  <p className="step-instruction">{step.instruction}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* Reviews Section */}
        <section className="reviews-section" id="reviews">
          <Container>
            <h2 className="section-title">What Our Customers Say</h2>
            <div className="reviews-list">
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <div className="review-stars">{'★'.repeat(review.rating)}</div>
                  <p className="review-quote">"{review.comment}"</p>
                  <p className="review-author">— {review.name}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="faq-section" id="faq">
          <Container>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-list">
              {product.faqs.map((faq, index) => (
                <Accordion key={index} title={faq.question}>
                  <p className="faq-answer">{faq.answer}</p>
                </Accordion>
              ))}
            </div>
          </Container>
        </section>
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />

      <style jsx>{`
        .main-content {
          background-color: var(--color-body-bg);
        }

        /* Hero Section */
        .hero-section {
          padding: 3rem 0 4rem;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 1fr;
          gap: 4rem;
          align-items: start;
        }

        .hero-images {
          display: flex;
          gap: 1rem;
          flex-direction: row-reverse;
        }

        .main-image-wrapper {
          flex: 1;
        }

        .main-image {
          width: 100%;
          aspect-ratio: 2/3;
          background: linear-gradient(135deg, var(--color-accent-eucalyptus) 0%, var(--color-accent-peach) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
        }

        .placeholder-icon {
          font-size: 5rem;
          opacity: 0.6;
        }

        .thumbnail-strip {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .thumbnail {
          width: 70px;
          height: 90px;
          background: linear-gradient(135deg, var(--color-accent-eucalyptus) 0%, var(--color-accent-peach) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border: 2px solid transparent;
          transition: border-color 0.2s ease;
          border-radius: 2px;
        }

        .thumbnail:hover,
        .thumbnail.active {
          border-color: var(--color-primary-main);
        }

        .thumb-icon {
          font-size: 1.5rem;
          opacity: 0.7;
        }

        .product-info {
          padding-top: 1rem;
        }

        .product-info-inner {
          max-width: 500px;
        }

        .product-title {
          font-size: 2.25rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin: 0 0 0.5rem 0;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }

        .product-subtitle {
          font-size: 1rem;
          color: var(--color-body-text-light);
          margin: 0 0 1.5rem 0;
          font-style: italic;
          letter-spacing: 0.01em;
        }

        .price-display {
          display: flex;
          align-items: baseline;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }

        .current-price {
          font-size: 1.5rem;
          font-weight: 400;
          color: var(--color-primary-dark);
          letter-spacing: 0.01em;
        }

        .original-price {
          font-size: 1.125rem;
          color: var(--color-body-text-light);
          text-decoration: line-through;
        }

        .size-selector {
          margin-bottom: 1.5rem;
        }

        .size-label {
          display: block;
          font-size: 0.8125rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 0.75rem;
          color: var(--color-body-text);
          font-weight: 500;
        }

        .size-buttons {
          display: flex;
          gap: 0.5rem;
        }

        .size-btn {
          flex: 1;
          padding: 0.75rem 1rem;
          background: transparent;
          border: 1px solid var(--color-body-border);
          color: var(--color-body-text);
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          letter-spacing: 0.02em;
        }

        .size-btn:hover {
          border-color: var(--color-primary-main);
        }

        .size-btn.active {
          background: var(--color-primary-main);
          border-color: var(--color-primary-main);
          color: white;
        }

        .product-desc {
          margin: 2rem 0;
          padding: 1.5rem 0;
          border-top: 1px solid var(--color-body-border);
          border-bottom: 1px solid var(--color-body-border);
        }

        .product-desc p {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
          letter-spacing: 0.01em;
        }

        .product-features {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .feature {
          font-size: 0.875rem;
          color: var(--color-body-text);
          letter-spacing: 0.01em;
        }

        /* Description Section */
        .description-section {
          padding: 3rem 0;
          background-color: var(--color-accent-eucalyptus);
        }

        .desc-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
        }

        .desc-title {
          font-size: 1.75rem;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin: 0 0 1rem 0;
          color: var(--color-primary-dark);
        }

        .desc-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-body-text);
          margin: 0;
          letter-spacing: 0.01em;
        }

        /* Ingredients Section */
        .ingredients-section {
          padding: 4rem 0;
        }

        .section-title {
          font-size: 1.75rem;
          font-weight: 400;
          text-align: center;
          letter-spacing: 0.02em;
          margin: 0 0 3rem 0;
          color: var(--color-primary-dark);
        }

        .ingredients-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .ingredient-item {
          padding-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-body-border);
        }

        .ingredient-name {
          font-size: 1.0625rem;
          font-weight: 500;
          margin: 0 0 0.5rem 0;
          color: var(--color-primary-dark);
          letter-spacing: 0.01em;
        }

        .ingredient-purpose {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-body-text);
          margin: 0;
          letter-spacing: 0.01em;
        }

        /* Benefits Section */
        .benefits-section {
          padding: 4rem 0;
          background-color: var(--color-accent-peach);
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .benefit-item {
          text-align: left;
        }

        .benefit-name {
          font-size: 1.0625rem;
          font-weight: 500;
          margin: 0 0 0.75rem 0;
          color: var(--color-primary-dark);
          letter-spacing: 0.01em;
        }

        .benefit-text {
          font-size: 0.9375rem;
          line-height: 1.6;
          color: var(--color-body-text);
          margin: 0;
          letter-spacing: 0.01em;
        }

        /* Usage Section */
        .usage-section {
          padding: 4rem 0;
        }

        .steps-list {
          max-width: 700px;
          margin: 0 auto;
        }

        .usage-step {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 2rem;
          align-items: flex-start;
        }

        .step-number {
          min-width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: var(--color-primary-main);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.875rem;
          font-weight: 500;
          flex-shrink: 0;
        }

        .step-instruction {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: var(--color-body-text);
          margin: 0;
          padding-top: 0.5rem;
          letter-spacing: 0.01em;
        }

        /* Reviews Section */
        .reviews-section {
          padding: 4rem 0;
          background-color: var(--color-accent-eucalyptus);
        }

        .reviews-list {
          max-width: 800px;
          margin: 0 auto;
          display: grid;
          gap: 3rem;
        }

        .review-item {
          text-align: center;
          padding-bottom: 2rem;
          border-bottom: 1px solid var(--color-body-border);
        }

        .review-item:last-child {
          border-bottom: none;
        }

        .review-stars {
          font-size: 0.875rem;
          color: var(--color-secondary-main);
          margin-bottom: 1rem;
          letter-spacing: 0.15em;
        }

        .review-quote {
          font-size: 1.0625rem;
          line-height: 1.7;
          font-style: italic;
          color: var(--color-body-text);
          margin: 0 0 1rem 0;
          letter-spacing: 0.01em;
        }

        .review-author {
          font-size: 0.875rem;
          color: var(--color-body-text-light);
          margin: 0;
          font-weight: 500;
          letter-spacing: 0.02em;
        }

        /* FAQ Section */
        .faq-section {
          padding: 4rem 0 5rem;
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-answer {
          font-size: 0.9375rem;
          line-height: 1.7;
          letter-spacing: 0.01em;
        }

        /* Responsive */
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-images {
            flex-direction: column;
          }

          .thumbnail-strip {
            flex-direction: row;
            overflow-x: auto;
          }

          .product-title {
            font-size: 1.875rem;
          }

          .section-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .ingredients-grid,
          .benefits-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-section,
          .description-section,
          .ingredients-section,
          .benefits-section,
          .usage-section,
          .reviews-section,
          .faq-section {
            padding: 2.5rem 0;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .thumbnail,
          .size-btn {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
