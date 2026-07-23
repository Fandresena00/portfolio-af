interface SkillTagsProps {
  skills: string[];
}

export function SkillTags({ skills }: SkillTagsProps) {
  return (
    <p className="flex flex-wrap gap-1.5">
      {skills.map((t) => (
        <span
          key={t}
          className="rounded border border-[rgb(var(--border))] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--muted))]"
        >
          {t}
        </span>
      ))}
    </p>
  );
}
