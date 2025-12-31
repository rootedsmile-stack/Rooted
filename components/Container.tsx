import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`container ${className}`}>
      {children}
      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--spacing-lg);
          width: 100%;
        }

        @media (max-width: 768px) {
          .container {
            padding: 0 var(--spacing-md);
          }
        }
      `}</style>
    </div>
  );
}
