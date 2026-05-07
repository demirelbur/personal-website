interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-6 md:mb-8">
      <h2 className="text-2xl md:text-[40px] md:leading-[48px] font-semibold tracking-tight text-text-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-sm text-text-secondary">{subtitle}</p>
      )}
    </div>
  );
}
