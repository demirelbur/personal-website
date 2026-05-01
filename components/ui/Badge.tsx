interface BadgeProps {
  label: string;
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 text-xs rounded-[var(--radius-sm)] bg-bg-primary text-text-muted border border-border">
      {label}
    </span>
  );
}
