interface TerminalHeaderProps {
  label: string;
}

export function TerminalHeader({ label }: TerminalHeaderProps) {
  return (
    <div className="flex items-center gap-2 border-b border-[rgb(var(--border-soft))] px-4 py-2.5">
      <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--muted)/30%)]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--muted)/30%)]" />
      <span className="h-2.5 w-2.5 rounded-full bg-[rgb(var(--blue)/60%)]" />
      <span className="ml-2 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.1em] text-[rgb(var(--muted))]">
        {label}
      </span>
    </div>
  );
}
