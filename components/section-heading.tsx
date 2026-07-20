interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <div className="mb-4 flex items-center gap-3">
        <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.3em] text-[rgb(var(--blue))]">
          {index}
        </span>
        <span className="h-px w-8 bg-[rgb(var(--border-soft))]" />
        <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[rgb(var(--muted))]">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-[rgb(var(--text))] md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl leading-relaxed text-[rgb(var(--muted))]">
          {description}
        </p>
      )}
    </div>
  );
}
