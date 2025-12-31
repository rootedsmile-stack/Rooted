'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            {/* Column 1: Brand Statement */}
            <div className="footer-column">
              <h3 className="footer-brand">Pure Herbal Tooth Powder</h3>
              <p className="footer-description">
                Traditional oral care, crafted with premium botanical ingredients for your daily wellness ritual.
              </p>
            </div>

            {/* Column 2: Information Links */}
            <div className="footer-column">
              <h4 className="footer-heading">Information</h4>
              <nav className="footer-nav">
                <a href="/about" className="footer-link">About Us</a>
                <a href="/contact" className="footer-link">Contact</a>
                <a href="/shipping" className="footer-link">Shipping & Returns</a>
                <a href="/privacy" className="footer-link">Privacy Policy</a>
                <a href="/terms" className="footer-link">Terms of Service</a>
              </nav>
            </div>

            {/* Column 3: Stay Connected */}
            <div className="footer-column">
              <h4 className="footer-heading">Stay Connected</h4>
              <p className="footer-newsletter-text">
                Join our newsletter for updates on new products and wellness tips.
              </p>
              <div className="footer-email-placeholder">
                <input
                  type="email"
                  placeholder="Your email"
                  className="footer-email-input"
                  disabled
                />
                <button className="footer-email-button" disabled>
                  Subscribe
                </button>
              </div>
              <p className="footer-note">(Coming soon)</p>
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
          background-color: var(--color-accent-eucalyptus);
          padding: 3rem 0 2rem;
          margin-top: 0;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 3rem;
          margin-bottom: 2.5rem;
        }

        .footer-column {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .footer-brand {
          font-family: var(--font-display);
          font-size: 1.125rem;
          font-weight: 400;
          margin: 0;
          color: var(--color-primary-dark);
          letter-spacing: 0.02em;
        }

        .footer-description {
          font-size: 0.875rem;
          line-height: 1.6;
          color: var(--color-body-text);
          margin: 0;
          opacity: 0.85;
          letter-spacing: 0.01em;
        }

        .footer-heading {
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          margin: 0 0 0.75rem 0;
          color: var(--color-body-text);
          font-weight: 600;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          color: var(--color-body-text);
          text-decoration: none;
          font-size: 0.875rem;
          opacity: 0.85;
          transition: opacity 0.2s ease, color 0.2s ease;
          padding: 0.25rem 0;
          min-height: 32px;
          display: inline-flex;
          align-items: center;
          letter-spacing: 0.01em;
        }

        .footer-link:hover {
          opacity: 1;
          color: var(--color-primary-dark);
        }

        .footer-link:focus-visible {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 2px;
          border-radius: 2px;
        }

        .footer-newsletter-text {
          font-size: 0.875rem;
          line-height: 1.5;
          color: var(--color-body-text);
          margin: 0;
          opacity: 0.85;
          letter-spacing: 0.01em;
        }

        .footer-email-placeholder {
          display: flex;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .footer-email-input {
          flex: 1;
          padding: 0.625rem 0.875rem;
          border: 1px solid var(--color-body-border);
          background-color: rgba(255, 255, 255, 0.5);
          color: var(--color-body-text);
          font-size: 0.875rem;
          border-radius: 2px;
          letter-spacing: 0.01em;
        }

        .footer-email-input:focus {
          outline: 2px solid var(--color-primary-main);
          outline-offset: 0;
        }

        .footer-email-input:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .footer-email-button {
          padding: 0.625rem 1.25rem;
          background-color: var(--color-primary-main);
          color: white;
          border: none;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: background-color 0.2s ease;
          min-height: 44px;
          letter-spacing: 0.02em;
        }

        .footer-email-button:hover:not(:disabled) {
          background-color: var(--color-primary-hover);
        }

        .footer-email-button:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .footer-note {
          font-size: 0.75rem;
          color: var(--color-body-text-light);
          margin: 0.25rem 0 0 0;
          font-style: italic;
        }

        .footer-bottom {
          padding-top: 2rem;
          border-top: 1px solid var(--color-body-border);
          text-align: center;
        }

        .footer-copyright {
          font-size: 0.8125rem;
          color: var(--color-body-text);
          opacity: 0.7;
          margin: 0 0 0.5rem 0;
          letter-spacing: 0.01em;
        }

        .footer-disclaimer {
          font-size: 0.75rem;
          color: var(--color-body-text);
          opacity: 0.6;
          margin: 0;
          letter-spacing: 0.01em;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 2.5rem 0 1.5rem;
          }

          .footer-container {
            padding: 0 1rem;
          }

          .footer-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            margin-bottom: 2rem;
          }

          .footer-email-placeholder {
            flex-direction: column;
          }

          .footer-email-button {
            width: 100%;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-link,
          .footer-email-button {
            transition: none;
          }
        }
      `}</style>
    </>
  );
}
