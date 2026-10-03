interface BadgeProps {
  children: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'sage' | 'blue' | 'amber';
  className?: string;
}

const variantClasses = {
  default: 'bg-cream border-border text-text-muted',
  success: 'bg-sage text-success border-success/20',
  warning: 'bg-soft-amber text-warning border-warning/20',
  danger: 'bg-soft-rose text-danger border-danger/20',
  sage: 'bg-sage text-primary border-sage',
  blue: 'bg-soft-blue text-primary border-soft-blue',
  amber: 'bg-soft-amber text-warning border-soft-amber',
};

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 text-xs font-medium border rounded ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}

export function SourceBadge({ source }: { source: string }) {
  return <Badge variant="default">{source}</Badge>;
}

export function ConfidenceBadge({ confidence }: { confidence: 'high' | 'medium' | 'low' }) {
  const v = confidence === 'high' ? 'success' : confidence === 'medium' ? 'warning' : 'danger';
  return <Badge variant={v}>{`Confidence: ${confidence.charAt(0).toUpperCase() + confidence.slice(1)}`}</Badge>;
}

export function NumberBadge({ number }: { number: number | string | import('react').ReactNode }) {
  return <div className="number-badge">{number}</div>;
}
