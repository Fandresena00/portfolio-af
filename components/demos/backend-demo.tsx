"use client";

import { SkillTags } from "@/components/skill-tags";
import { TerminalHeader } from "@/components/terminal-header";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type Status = "idle" | "sending" | "done";

interface BackendDemoProps {
  skills: string[];
}

export function BackendDemo({ skills }: BackendDemoProps) {
  const [status, setStatus] = useState<Status>("idle");

  const run = () => {
    if (status === "sending") return;
    setStatus("sending");
    setTimeout(() => setStatus("done"), 1400);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--border-soft))] bg-[rgb(var(--surface))]">
      <TerminalHeader label="api-request.ts" />
      <div className="p-6">
        <div className="relative flex items-center justify-between px-2 pt-1">
          <span className="absolute left-9 right-9 top-6 h-px bg-[rgb(var(--border-soft))]" />
          {status !== "idle" && (
            <motion.span
              initial={{ left: "6%" }}
              animate={{
                left: status === "sending" ? ["6%", "94%", "6%"] : "6%",
              }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute top-[22px] h-2 w-2 rounded-full bg-[rgb(var(--blue))] shadow-[0_0_8px_rgb(var(--blue)/0.8)]"
            />
          )}
          {["Client", "API", "Base de données"].map((node, i) => (
            <div key={node} className="z-10 flex flex-col items-center gap-2">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-md border font-[family-name:var(--font-mono)] text-[10px] transition-colors ${
                  status !== "idle"
                    ? "border-[rgb(var(--blue)/40%)] text-[rgb(var(--blue))]"
                    : "border-[rgb(var(--border-soft))] text-[rgb(var(--muted))]"
                }`}
              >
                {i === 0 ? "C" : i === 1 ? "API" : "DB"}
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--muted))]">
                {node}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 min-h-[80px] rounded-md border border-[rgb(var(--border-soft))] bg-[rgb(var(--panel))] p-3 font-[family-name:var(--font-mono)] text-[12px] leading-relaxed text-[rgb(var(--muted))]">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.p
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <span className="text-[rgb(var(--blue))]">GET</span>{" "}
                /api/projects/status
              </motion.p>
            )}
            {status === "sending" && (
              <motion.p
                key="sending"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                En attente de la réponse<span className="animate-pulse">…</span>
              </motion.p>
            )}
            {status === "done" && (
              <motion.pre
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="whitespace-pre-wrap"
              >
                {`{
  "status": 200,
  "service": "prosendia-api",
  "uptime": "ok"
}`}
              </motion.pre>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={run}
            disabled={status === "sending"}
            className="rounded-md border border-[rgb(var(--border-soft))] px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--blue)/30%)] hover:text-[rgb(var(--blue))] disabled:opacity-50"
          >
            {status === "done"
              ? "Rejouer"
              : status === "sending"
                ? "Envoi…"
                : "Envoyer la requête"}
          </button>
          {status === "done" && (
            <span className="rounded-full border border-[rgb(var(--blue)/40%)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--blue))]">
              200 OK
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
