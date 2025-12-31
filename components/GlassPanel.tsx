// components/GlassPanel.tsx
import React from 'react';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'light' | 'dark' | 'teal';
  blur?: 'sm' | 'md' | 'lg';
  border?: boolean;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  className = '',
  variant = 'dark',
  blur = 'md',
  border = true,
}) => {
  const variantStyles = {
    light: 'bg-white/10 text-teal-50',
    dark: 'bg-slate-900/40 text-teal-50',
    teal: 'bg-teal-500/10 text-teal-50',
  };

  const blurStyles = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
  };

  const borderStyle = border ? 'border border-white/10' : '';

  return (
    <div
      className={`
        ${variantStyles[variant]}
        ${blurStyles[blur]}
        ${borderStyle}
        rounded-lg
        shadow-xl
        ${className}
      `}
    >
      {children}
    </div>
  );
};
