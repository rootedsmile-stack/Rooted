'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-column">
              <h3 className="footer-heading">Pure Herbal Tooth Powder</h3>
              <p className="footer-text">
                Traditional oral care, naturally crafted with premium botanical ingredients.
              </p>
            </div>

            {/* Quick Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Quick Links</h4>
              <nav className="footer-nav">
                <a href="#benefits" className="footer-link">Benefits</a>
                <a href="#ingredients" className="footer-link">Ingredients</a>
                <a href="#how-to-use" className="footer-link">How to Use</a>
                <a href="#reviews" className="footer-link">Reviews</a>
                <a href="#faq" className="footer-link">FAQ</a>
              </nav>
            </div>

            {/* Customer Support */}
            <div className="footer-column">
              <h4 className="footer-heading">Customer Support</h4>
              <div className="footer-contact">
                <p>Email: support@example.com</p>
                <p>Hours: Mon-Fri 9am-5pm EST</p>
              </div>
            </div>

            {/* Legal */}
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <nav className="footer-nav">
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
                <a href="/shipping" className="footer-link">Shipping & Returns</a>
              </nav>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              © {currentYear} Pure Herbal Tooth Powder. All rights reserved.
            </p>
            <p className="footer-disclaimer">
              This product is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </footer>
      <style jsx>{`
        .footer {
          background-color: var(--color-footer-bg);
          color: var(--color-footer-text);
          margin-top: var(--spacing-3xl);
          padding: var(--spacing-3xl) 0 var(--spacing-xl) 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-2xl);
          margin-bottom: var(--spacing-2xl);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .footer-heading {
          font-size: 1.25rem;
          margin: 0;
          color: var(--color-footer-text);
          font-weight: 600;
        }

        .footer-text {
          font-size: 0.9rem;
          line-height: 1.6;
          opacity: 0.9;
          margin: 0;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
        }

        .footer-link {
          color: var(--color-footer-text);
          text-decoration: none;
          font-size: 0.9rem;
          opacity: 0.9;
          transition: opacity 0.2s ease, color 0.2s ease;
          padding: var(--spacing-xs) 0;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--color-footer-link-hover);
        }

        .footer-link:focus-visible {
          outline: 2px solid var(--color-footer-link-hover);
          outline-offset: 2px;
          border-radius: var(--radius-sm);
        }

        .footer-contact {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          font-size: 0.9rem;
          opacity: 0.9;
        }

        .footer-contact p {
          margin: 0;
        }

        .footer-bottom {
          padding-top: var(--spacing-xl);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          text-align: center;
        }

        .footer-copyright {
          font-size: 0.85rem;
          opacity: 0.8;
          margin: 0 0 var(--spacing-sm) 0;
        }

        .footer-disclaimer {
          font-size: 0.8rem;
          opacity: 0.7;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer {
            padding: var(--spacing-2xl) 0 var(--spacing-lg) 0;
          }

          .footer-container {
            padding: 0 var(--spacing-md);
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: var(--spacing-xl);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-link {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
