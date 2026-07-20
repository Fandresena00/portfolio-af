import { profile } from "@/lib/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border-soft))] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-center sm:flex-row sm:text-left">
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-[rgb(var(--muted))]">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <p className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-[rgb(var(--muted))]">
          Construit avec Next.js · Tailwind CSS · shadcn/ui
        </p>
      </div>
    </footer>
  );
}
