import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'default' | 'cream' | 'white';
  id?: string;
}

export default function Section({ 
  children, 
  className = '', 
  background = 'default',
  id 
}: SectionProps) {
  const getBackgroundColor = () => {
    switch (background) {
      case 'cream':
        return 'var(--color-accent-cream)';
      case 'white':
        return 'var(--color-body-card-bg)';
      default:
        return 'var(--color-body-bg)';
    }
  };

  return (
    <section id={id} className={`section ${className}`}>
      {children}
      <style jsx>{`
        .section {
          padding: var(--spacing-3xl) 0;
          background-color: ${getBackgroundColor()};
        }

        @media (max-width: 768px) {
          .section {
            padding: var(--spacing-2xl) 0;
          }
        }
      `}</style>
    </section>
  );
}
