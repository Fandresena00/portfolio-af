"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TerminalHeader } from "@/components/terminal-header";
import { SkillTags } from "@/components/skill-tags";

interface FrontendDemoProps {
  skills: string[];
}

export function FrontendDemo({ skills }: FrontendDemoProps) {
  const [done, setDone] = useState(false);

  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <TerminalHeader label="task-card.tsx" />
      <div className="p-6">
        <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
          Click the card to interact
        </p>

        <button
          onClick={() => setDone((d) => !d)}
          className="flex w-full items-center gap-4 rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-4 text-left transition-colors hover:border-[rgb(var(--blue)/40%)]"
        >
          <span
            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded border transition-colors ${
              done ? "border-[rgb(var(--blue))] bg-[rgb(var(--blue))]" : "border-[rgb(var(--border-strong))]"
            }`}
          >
            {done && (
              <svg viewBox="0 0 24 24" className="h-4 w-4">
                <motion.path
                  d="M5 13l4 4L19 7"
                  fill="none"
                  stroke="rgb(var(--bg))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </svg>
            )}
          </span>

          <span className="flex-1">
            <span className="relative inline-block text-sm text-[rgb(var(--text))]">
              Fix the authentication bug
              <motion.span
                initial={false}
                animate={{ width: done ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-1/2 h-px bg-[rgb(var(--muted))]"
              />
            </span>
            <span className="mt-1 block font-[family-name:var(--font-mono)] text-[11px] text-[rgb(var(--muted))]">
              Nexus · Current sprint
            </span>
          </span>

          <motion.span
            initial={false}
            animate={{
              color: done ? "rgb(var(--blue))" : "rgb(var(--amber))",
              borderColor: done ? "rgb(var(--blue)/0.4)" : "rgb(var(--amber)/0.4)",
            }}
            className="shrink-0 rounded-full border px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em]"
          >
            {done ? "Done" : "In progress"}
          </motion.span>
        </button>

        <div className="mt-4">
          <SkillTags skills={skills} />
        </div>
      </div>
    </div>
  );
}
