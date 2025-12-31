// components/Button.tsx
import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed';

  // Variant styles
  const variantStyles = {
    primary: 'bg-gradient-to-r from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 focus:ring-teal-500 shadow-lg hover:shadow-teal-500/50 hover:scale-105',
    
    secondary: 'bg-slate-800 text-teal-400 hover:bg-slate-700 focus:ring-slate-700 shadow-lg hover:shadow-slate-700/50',
    
    outline: 'border-2 border-teal-500 text-teal-400 hover:bg-teal-500/10 focus:ring-teal-500 backdrop-blur-sm',
    
    ghost: 'text-slate-300 hover:text-teal-400 hover:bg-slate-800/50 focus:ring-slate-700',
    
    gold: 'bg-gradient-to-r from-yellow-600 via-yellow-500 to-yellow-600 text-slate-900 hover:from-yellow-500 hover:via-yellow-400 hover:to-yellow-500 focus:ring-yellow-500 shadow-lg hover:shadow-yellow-500/50 hover:scale-105 font-bold',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-3 text-base gap-2',
    lg: 'px-8 py-4 text-lg gap-3',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
    >
      {children}
    </button>
  );
}
