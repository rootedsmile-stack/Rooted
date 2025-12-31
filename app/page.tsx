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

      <main style={{ backgroundColor: 'var(--color-body-bg)' }}>
        {/* Hero Product Section */}
        <section style={{ padding: '2.5rem 0 3rem' }}>
          <Container>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '3rem',
              alignItems: 'start'
            }} className="hero-responsive-grid">
              {/* Product Image */}
              <div style={{
                aspectRatio: '3/4',
                background: 'linear-gradient(135deg, var(--color-accent-eucalyptus) 0%, var(--color-accent-peach) 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '500px',
                margin: '0 auto',
                width: '100%'
              }}>
                <span style={{ fontSize: '6rem', opacity: 0.6 }}>🌿</span>
              </div>

              {/* Product Info */}
              <div style={{ maxWidth: '550px', margin: '0 auto', width: '100%' }}>
                <h1 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 5vw, 2.75rem)',
                  fontWeight: 400,
                  letterSpacing: '0.02em',
                  margin: '0 0 0.5rem 0',
                  color: 'var(--color-primary-dark)',
                  lineHeight: 1.15
                }}>
                  {product.productName}
                </h1>
                
                <p style={{
                  fontSize: '1.0625rem',
                  color: 'var(--color-body-text-light)',
                  margin: '0 0 1.5rem 0',
                  fontStyle: 'italic',
                  letterSpacing: '0.01em'
                }}>
                  {product.tagline}
                </p>
                
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '0.75rem',
                  marginBottom: '1.5rem',
                  paddingTop: '0.5rem'
                }}>
                  <span style={{
                    fontSize: '2rem',
                    fontWeight: 400,
                    color: 'var(--color-primary-dark)',
                    letterSpacing: '0.01em'
                  }}>
                    ${(selectedVariant.price / 100).toFixed(2)}
                  </span>
                  {selectedVariant.compareAtPrice && (
                    <span style={{
                      fontSize: '1.25rem',
                      color: 'var(--color-body-text-light)',
                      textDecoration: 'line-through'
                    }}>
                      ${(selectedVariant.compareAtPrice / 100).toFixed(2)}
                    </span>
                  )}
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '0.8125rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    marginBottom: '0.75rem',
                    color: 'var(--color-body-text)',
                    fontWeight: 500
                  }}>
                    Size
                  </label>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {product.variants.map((variant) => (
                      <button
                        key={variant.id}
                        onClick={() => setSelectedVariant(variant)}
                        style={{
                          flex: '1 1 auto',
                          minWidth: '100px',
                          padding: '0.75rem 1rem',
                          background: selectedVariant.id === variant.id ? 'var(--color-primary-main)' : 'transparent',
                          border: '1px solid',
                          borderColor: selectedVariant.id === variant.id ? 'var(--color-primary-main)' : 'var(--color-body-border)',
                          color: selectedVariant.id === variant.id ? 'white' : 'var(--color-body-text)',
                          fontSize: '0.875rem',
                          cursor: 'pointer',
                          transition: 'all 0.2s ease',
                          letterSpacing: '0.02em',
                          minHeight: '44px'
                        }}
                        onMouseOver={(e) => {
                          if (selectedVariant.id !== variant.id) {
                            e.currentTarget.style.borderColor = 'var(--color-primary-main)';
                          }
                        }}
                        onMouseOut={(e) => {
                          if (selectedVariant.id !== variant.id) {
                            e.currentTarget.style.borderColor = 'var(--color-body-border)';
                          }
                        }}
                      >
                        {variant.size}
                      </button>
                    ))}
                  </div>
                </div>

                <Button variant="primary" size="large" fullWidth onClick={openCart}>
                  Add to Cart
                </Button>

                <div style={{
                  margin: '1.75rem 0',
                  padding: '1.25rem 0',
                  borderTop: '1px solid var(--color-body-border)',
                  borderBottom: '1px solid var(--color-body-border)'
                }}>
                  <p style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    color: 'var(--color-body-text)',
                    margin: 0,
                    letterSpacing: '0.01em'
                  }}>
                    {product.shortDescription}
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-body-border)', opacity: 0.6 }} />

        {/* Editorial Introduction */}
        <section style={{ padding: '3rem 0' }}>
          <Container>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
              <div style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                color: 'var(--color-body-text-light)',
                fontWeight: 500
              }}>
                OUR PHILOSOPHY
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 400,
                letterSpacing: '0.02em',
                margin: '0 0 1rem 0',
                color: 'var(--color-primary-dark)',
                lineHeight: 1.2
              }}>
                A Traditional Approach to Oral Care
              </h2>
              <p style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: 'var(--color-body-text)',
                margin: 0,
                letterSpacing: '0.01em'
              }}>
                Our herbal tooth powder combines time-honored botanical ingredients with modern oral care science. 
                Each carefully selected ingredient works in harmony to cleanse, strengthen, and refresh.
              </p>
            </div>
          </Container>
        </section>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-body-border)', opacity: 0.6 }} />

        {/* Ingredients Section */}
        <section id="ingredients" style={{ padding: '3rem 0' }}>
          <Container>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>
              <div style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                color: 'var(--color-body-text-light)',
                fontWeight: 500,
                textAlign: 'center'
              }}>
                FORMULATION
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '0.02em',
                margin: '0 0 2rem 0',
                color: 'var(--color-primary-dark)'
              }}>
                Ingredients
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem 3rem'
              }}>
                {product.ingredients.map((ingredient, index) => (
                  <div
                    key={index}
                    style={{
                      paddingBottom: '1.5rem',
                      borderBottom: '1px solid var(--color-body-border)'
                    }}
                  >
                    <h3 style={{
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      margin: '0 0 0.5rem 0',
                      color: 'var(--color-primary-dark)',
                      letterSpacing: '0.01em'
                    }}>
                      {ingredient.name}
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: 'var(--color-body-text)',
                      margin: 0,
                      letterSpacing: '0.01em',
                      opacity: 0.85
                    }}>
                      {ingredient.purpose}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Benefits Section with subtle background */}
        <section
          id="benefits"
          style={{
            padding: '3rem 0',
            backgroundColor: 'var(--color-accent-cream)',
            backgroundImage: 'linear-gradient(to bottom, transparent, var(--color-accent-cream) 10%, var(--color-accent-cream) 90%, transparent)'
          }}
        >
          <Container>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                color: 'var(--color-body-text-light)',
                fontWeight: 500,
                textAlign: 'center'
              }}>
                WHY CHOOSE
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '0.02em',
                margin: '0 0 2.5rem 0',
                color: 'var(--color-primary-dark)'
              }}>
                Benefits
              </h2>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '2rem'
              }}>
                {product.benefits.map((benefit, index) => (
                  <div key={index}>
                    <h3 style={{
                      fontSize: '1.0625rem',
                      fontWeight: 500,
                      margin: '0 0 0.75rem 0',
                      color: 'var(--color-primary-dark)',
                      letterSpacing: '0.01em'
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.6,
                      color: 'var(--color-body-text)',
                      margin: 0,
                      letterSpacing: '0.01em',
                      opacity: 0.85
                    }}>
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-body-border)', opacity: 0.6 }} />

        {/* How to Use Section */}
        <section id="how-to-use" style={{ padding: '3rem 0' }}>
          <Container>
            <div style={{ maxWidth: '700px', margin: '0 auto' }}>
              <div style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                color: 'var(--color-body-text-light)',
                fontWeight: 500,
                textAlign: 'center'
              }}>
                RITUAL
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '0.02em',
                margin: '0 0 2.5rem 0',
                color: 'var(--color-primary-dark)'
              }}>
                How to Use
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {product.howToUse.map((step) => (
                  <div
                    key={step.step}
                    style={{
                      display: 'flex',
                      gap: '1.25rem',
                      alignItems: 'flex-start'
                    }}
                  >
                    <div style={{
                      minWidth: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary-main)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.9375rem',
                      fontWeight: 500,
                      flexShrink: 0
                    }}>
                      {step.step}
                    </div>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      color: 'var(--color-body-text)',
                      margin: 0,
                      paddingTop: '0.5rem',
                      letterSpacing: '0.01em'
                    }}>
                      {step.instruction}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Reviews Section with subtle background */}
        <section
          id="reviews"
          style={{
            padding: '3rem 0',
            backgroundColor: 'var(--color-accent-eucalyptus)',
            backgroundImage: 'linear-gradient(to bottom, transparent, var(--color-accent-eucalyptus) 10%, var(--color-accent-eucalyptus) 90%, transparent)'
          }}
        >
          <Container>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <div style={{
                fontSize: '0.6875rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '1rem',
                color: 'var(--color-body-text-light)',
                fontWeight: 500,
                textAlign: 'center'
              }}>
                TESTIMONIALS
              </div>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '0.02em',
                margin: '0 0 2.5rem 0',
                color: 'var(--color-primary-dark)'
              }}>
                What Our Customers Say
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {reviews.map((review) => (
                  <div
                    key={review.id}
                    style={{
                      textAlign: 'center',
                      paddingBottom: '2rem',
                      borderBottom: '1px solid var(--color-body-border)',
                      opacity: 0.4
                    }}
                  >
                    <div style={{
                      fontSize: '1rem',
                      color: 'var(--color-secondary-main)',
                      marginBottom: '1rem',
                      letterSpacing: '0.2em'
                    }}>
                      {'★'.repeat(review.rating)}
                    </div>
                    <p style={{
                      fontSize: '1.125rem',
                      lineHeight: 1.7,
                      fontStyle: 'italic',
                      color: 'var(--color-body-text)',
                      margin: '0 0 1rem 0',
                      letterSpacing: '0.01em'
                    }}>
                      "{review.comment}"
                    </p>
                    <p style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-body-text-light)',
                      margin: 0,
                      fontWeight: 500,
                      letterSpacing: '0.02em'
                    }}>
                      — {review.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ padding: '3rem 0 4rem' }}>
          <Container>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 4vw, 2rem)',
                fontWeight: 400,
                textAlign: 'center',
                letterSpacing: '0.02em',
                margin: '0 0 2rem 0',
                color: 'var(--color-primary-dark)'
              }}>
                Frequently Asked Questions
              </h2>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {product.faqs.map((faq, index) => (
                  <Accordion key={index} title={faq.question}>
                    <p style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.7,
                      letterSpacing: '0.01em',
                      margin: 0
                    }}>
                      {faq.answer}
                    </p>
                  </Accordion>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--color-body-border)', opacity: 0.6 }} />
      </main>

      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />

      <style jsx>{`
        @media (min-width: 768px) {
          .hero-responsive-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 4rem !important;
          }
        }

        @media (max-width: 767px) {
          section {
            padding: 2rem 0 !important;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
}
