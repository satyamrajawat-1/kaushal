import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer border';

  const variants = {
    primary: 'bg-primary text-cream-light border-primary hover:bg-primary-light',
    secondary: 'bg-cream-light text-primary border-border hover:bg-sage',
    ghost: 'bg-transparent text-text-muted border-transparent hover:text-primary hover:bg-sage',
    outline: 'bg-transparent text-primary border-primary hover:bg-primary hover:text-cream-light',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs rounded',
    md: 'px-5 py-2.5 text-sm rounded',
    lg: 'px-7 py-3.5 text-base rounded',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
