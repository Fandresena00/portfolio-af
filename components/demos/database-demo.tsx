"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TerminalHeader } from "@/components/terminal-header";
import { SkillTags } from "@/components/skill-tags";

const QUERY = `prisma.project.findMany({\n  where: { status: "active" }\n})`;

const ROWS = [
  { name: "Prosendia", status: "In production" },
  { name: "Nexus", status: "In development" },
  { name: "MH Store", status: "In production" },
];

interface DatabaseDemoProps {
  skills: string[];
}

export function DatabaseDemo({ skills }: DatabaseDemoProps) {
  const [typed, setTyped] = useState("");
  const [showRows, setShowRows] = useState(false);
  const [run, setRun] = useState(0);

  useEffect(() => {
    setTyped("");
    setShowRows(false);
    let i = 0;
    const id = setInterval(() => {
      i++;
      setTyped(QUERY.slice(0, i));
      if (i >= QUERY.length) {
        clearInterval(id);
        setTimeout(() => setShowRows(true), 300);
      }
    }, 22);
    return () => clearInterval(id);
  }, [run]);

  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <TerminalHeader label="query.prisma" />
      <div className="p-6">
        <pre className="min-h-[56px] whitespace-pre-wrap font-[family-name:var(--font-mono)] text-[12px] leading-relaxed text-[rgb(var(--blue))]">
          {typed}
          <span className="animate-pulse">▍</span>
        </pre>

        <div className="mt-4 overflow-hidden rounded-md border border-[rgb(var(--border))]">
          <div className="grid grid-cols-2 bg-[rgb(var(--panel))] px-3 py-2 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.1em] text-[rgb(var(--muted))]">
            <span>Project</span>
            <span>Status</span>
          </div>
          {ROWS.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: -8 }}
              animate={showRows ? { opacity: 1, x: 0 } : { opacity: 0, x: -8 }}
              transition={{ duration: 0.3, delay: i * 0.12 }}
              className="grid grid-cols-2 border-t border-[rgb(var(--border))] px-3 py-2 text-sm text-[rgb(var(--text))]"
            >
              <span>{row.name}</span>
              <span className="font-[family-name:var(--font-mono)] text-[11px] text-[rgb(var(--muted))]">{row.status}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setRun((r) => r + 1)}
            className="rounded-md border border-[rgb(var(--border))] px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--blue)/50%)] hover:text-[rgb(var(--blue))]"
          >
            Run
          </button>
        </div>

        <div className="mt-4">
          <SkillTags skills={skills} />
        </div>
      </div>
    </div>
  );
}
