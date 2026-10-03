import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  selected?: boolean;
  hoverable?: boolean;
}

export default function Card({ children, className = '', onClick, selected, hoverable }: CardProps) {
  return (
    <div
      className={`bg-cream-light border transition-all duration-200 ${
        selected ? 'border-primary ring-1 ring-primary/20' : 'border-border'
      } ${hoverable || onClick ? 'hover:border-primary/50 hover:shadow-sm cursor-pointer' : ''} ${className}`}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      {children}
    </div>
  );
}
