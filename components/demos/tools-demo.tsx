"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { TerminalHeader } from "@/components/terminal-header";
import { SkillTags } from "@/components/skill-tags";

const STEPS = ["Commit", "Build", "Test", "Deploy"];

interface ToolsDemoProps {
  skills: string[];
}

export function ToolsDemo({ skills }: ToolsDemoProps) {
  const [active, setActive] = useState(-1);
  const running = active >= 0 && active < STEPS.length;
  const done = active >= STEPS.length;

  const run = () => {
    if (running) return;
    setActive(0);
    STEPS.forEach((_, i) => {
      setTimeout(() => setActive(i + 1), (i + 1) * 550);
    });
  };

  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <TerminalHeader label="deploy.yml" />
      <div className="p-6">
        <div className="flex items-center">
          {STEPS.map((step, i) => {
            const isDone = active > i;
            const isCurrent = active === i;
            return (
              <div key={step} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full border font-[family-name:var(--font-mono)] text-[11px] transition-colors ${
                      isDone
                        ? "border-[rgb(var(--blue))] bg-[rgb(var(--blue))] text-[rgb(var(--bg))]"
                        : isCurrent
                          ? "animate-pulse border-[rgb(var(--blue))] text-[rgb(var(--blue))]"
                          : "border-[rgb(var(--border))] text-[rgb(var(--muted))]"
                    }`}
                  >
                    {isDone ? <Check size={14} /> : i + 1}
                  </span>
                  <span className="font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--muted))]">{step}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div className="mx-2 h-px flex-1 bg-[rgb(var(--border))]">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: active > i ? "100%" : "0%" }}
                      transition={{ duration: 0.4 }}
                      className="h-px bg-[rgb(var(--blue))]"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            onClick={run}
            disabled={running}
            className="rounded-md border border-[rgb(var(--border))] px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--blue)/50%)] hover:text-[rgb(var(--blue))] disabled:opacity-50"
          >
            {done ? "Replay" : running ? "Deploying…" : "Start deployment"}
          </button>
          {done && (
            <span className="rounded-full border border-[rgb(var(--blue)/40%)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--blue))]">
              Deployed to Vercel ✓
            </span>
          )}
        </div>

        <div className="mt-4">
          <SkillTags skills={skills} />
        </div>
      </div>
    </div>
  );
}
