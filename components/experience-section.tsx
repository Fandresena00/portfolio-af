"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { HudFrame } from "@/components/hud-frame";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="relative border-t border-[rgb(var(--border-soft))] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" eyebrow="Parcours" title="Expérience professionnelle" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative pl-8"
            >
              <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-[rgb(var(--blue))] shadow-[0_0_0_4px_rgb(var(--blue)/0.15)]" />

              <HudFrame className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--panel)/60%)] p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[rgb(var(--text))]">
                      {exp.role}
                    </h3>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-1 inline-flex items-center gap-1 text-sm text-[rgb(var(--blue))] hover:underline"
                    >
                      {exp.company}
                      <ExternalLink size={12} />
                    </a>
                  </div>
                  <span className="font-[family-name:var(--font-mono)] text-xs tracking-[0.1em] text-[rgb(var(--muted))]">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-3 text-sm text-[rgb(var(--muted-2))]">{exp.summary}</p>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((a) => (
                    <li
                      key={a}
                      className="flex gap-2 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed text-[rgb(var(--muted))]"
                    >
                      <span className="text-[rgb(var(--blue))]">{">"}</span>
                      {a}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {exp.stack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-[rgb(var(--border))] bg-transparent font-normal text-[rgb(var(--muted-2))]"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </HudFrame>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
