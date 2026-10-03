import type { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  background?: 'cream' | 'cream-light' | 'primary';
  noPadding?: boolean;
}

export default function Section({ id, children, className = '', background = 'cream', noPadding }: SectionProps) {
  const bgClass =
    background === 'cream-light'
      ? 'bg-cream-light'
      : background === 'primary'
      ? 'bg-primary text-cream-light'
      : 'bg-cream';

  return (
    <section
      id={id}
      className={`${bgClass} ${noPadding ? '' : 'py-20 lg:py-28'} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
