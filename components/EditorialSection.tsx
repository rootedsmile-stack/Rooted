import { ReactNode } from 'react';

interface EditorialSectionProps {
  label?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  background?: 'default' | 'cream' | 'sage';
  id?: string;
}

export default function EditorialSection({
  label,
  title,
  intro,
  children,
  background = 'default',
  id,
}: EditorialSectionProps) {
  const getBackgroundStyle = () => {
    switch (background) {
      case 'cream':
        return {
          backgroundColor: 'var(--color-accent-cream)',
          backgroundImage:
            'linear-gradient(to bottom, transparent, var(--color-accent-cream) 10%, var(--color-accent-cream) 90%, transparent)',
        };
      case 'sage':
        return {
          backgroundColor: 'var(--color-accent-eucalyptus)',
          backgroundImage:
            'linear-gradient(to bottom, transparent, var(--color-accent-eucalyptus) 10%, var(--color-accent-eucalyptus) 90%, transparent)',
        };
      default:
        return {};
    }
  };

  return (
    <>
      <section id={id} className="editorial-section" style={getBackgroundStyle()}>
        <div className="editorial-container">
          {label && <div className="editorial-label">{label}</div>}
          <h2 className="editorial-title">{title}</h2>
          {intro && <p className="editorial-intro">{intro}</p>}
          <div className="editorial-content">{children}</div>
        </div>
      </section>
      <style jsx>{`
        .editorial-section {
          padding: 3rem 0;
        }

        .editorial-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .editorial-label {
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          text-align: center;
          margin-bottom: 1rem;
          color: var(--color-body-text-light);
          font-weight: 500;
        }

        .editorial-title {
          font-family: var(--font-display);
          font-size: clamp(1.5rem, 4vw, 2rem);
          font-weight: 400;
          text-align: center;
          letter-spacing: 0.02em;
          margin: 0 0 2rem 0;
          color: var(--color-primary-dark);
          line-height: 1.2;
        }

        .editorial-intro {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 2.5rem;
          font-size: 1rem;
          line-height: 1.8;
          color: var(--color-body-text);
          letter-spacing: 0.01em;
          opacity: 0.9;
        }

        .editorial-content {
          /* Content styling handled by children */
        }

        @media (max-width: 768px) {
          .editorial-section {
            padding: 2rem 0;
          }

          .editorial-container {
            padding: 0 1rem;
          }

          .editorial-title {
            margin-bottom: 1.5rem;
          }

          .editorial-intro {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </>
  );
}
