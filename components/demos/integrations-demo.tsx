"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";
import { TerminalHeader } from "@/components/terminal-header";
import { SkillTags } from "@/components/skill-tags";

const INCOMING = "Hi! Do you ship to Madagascar, and how long does delivery take?";
const REPLY =
  "Yes, we ship worldwide including Madagascar — delivery usually takes 5 to 7 business days. Let me know if you'd like tracking info!";

type Status = "idle" | "thinking" | "done";

interface IntegrationsDemoProps {
  skills: string[];
}

export function IntegrationsDemo({ skills }: IntegrationsDemoProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [typed, setTyped] = useState("");

  const run = () => {
    if (status === "thinking") return;
    setStatus("thinking");
    setTyped("");
    setTimeout(() => {
      setStatus("done");
      let i = 0;
      const id = setInterval(() => {
        i++;
        setTyped(REPLY.slice(0, i));
        if (i >= REPLY.length) clearInterval(id);
      }, 16);
    }, 900);
  };

  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
      <TerminalHeader label="ai-reply.ts" />
      <div className="p-6">
        <p className="mb-4 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
          Incoming customer message
        </p>

        <div className="rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-3 text-sm text-[rgb(var(--text))]">
          {INCOMING}
        </div>

        <div className="mt-4 min-h-[92px] rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-3">
          <AnimatePresence mode="wait">
            {status === "idle" && (
              <motion.p
                key="idle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="font-[family-name:var(--font-mono)] text-[12px] text-[rgb(var(--muted))]"
              >
                Waiting to generate a reply…
              </motion.p>
            )}
            {status === "thinking" && (
              <motion.p
                key="thinking"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-2 font-[family-name:var(--font-mono)] text-[12px] text-[rgb(var(--blue))]"
              >
                <Sparkles size={13} className="animate-pulse" />
                Generating with AI<span className="animate-pulse">…</span>
              </motion.p>
            )}
            {status === "done" && (
              <motion.p
                key="done"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-[family-name:var(--font-mono)] text-[12px] leading-relaxed text-[rgb(var(--text))]"
              >
                {typed}
                <span className="animate-pulse">▍</span>
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={run}
            disabled={status === "thinking"}
            className="rounded-md border border-[rgb(var(--border))] px-4 py-2 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--blue)/50%)] hover:text-[rgb(var(--blue))] disabled:opacity-50"
          >
            {status === "done" ? "Replay" : status === "thinking" ? "Thinking…" : "Generate AI reply"}
          </button>
          {status === "done" && (
            <span className="flex items-center gap-1.5 rounded-full border border-[rgb(var(--blue)/40%)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--blue))]">
              <Sparkles size={11} />
              AI-generated
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
