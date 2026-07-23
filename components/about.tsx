"use client";

import { motion } from "framer-motion";
import { HudFrame } from "@/components/hud-frame";
import { SectionHeading } from "@/components/section-heading";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/lib/data/profile";
import { skillCategories } from "@/lib/data/skills";

export function About() {
  return (
    <section id="about" className="relative border-t border-[rgb(var(--border-soft))] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="Profile" title="Who I am" />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-base leading-relaxed text-[rgb(var(--muted-2))] sm:text-lg">{profile.summary}</p>
            <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--muted))]">
              I work across the whole stack on every project: a Next.js/React front end wired to a
              NestJS API, PostgreSQL modeled through Prisma, authentication and third-party
              integrations (Facebook, Shopify, AI providers), then shipped and monitored on
              Vercel or Render.
            </p>

            <p className="mt-8 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
              Stack breakdown
            </p>
            <div className="mt-3 grid gap-4 sm:grid-cols-2">
              {skillCategories.map((cat) => (
                <HudFrame
                  key={cat.id}
                  className="rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--panel)/60%)] p-4"
                >
                  <div className="flex items-center justify-between">
                    <p className="font-[family-name:var(--font-display)] text-sm font-semibold text-[rgb(var(--text))]">
                      {cat.label}
                    </p>
                    <span className="font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--blue))]">
                      [{cat.code}]
                    </span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-[rgb(var(--muted))]">{cat.tagline}</p>
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => (
                      <li
                        key={skill}
                        className="rounded border border-[rgb(var(--border))] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--muted-2))]"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </HudFrame>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <HudFrame className="h-full rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--panel)/60%)] p-6">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
                Languages
              </p>
              <div className="mt-4 space-y-4">
                {profile.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-[rgb(var(--text))]">{lang.name}</span>
                      <span className="font-[family-name:var(--font-mono)] text-xs text-[rgb(var(--muted))]">
                        {lang.level}
                      </span>
                    </div>
                    <Progress value={lang.value} className="h-1.5 bg-[rgb(var(--border-soft))] [&>div]:bg-[rgb(var(--blue))]" />
                  </div>
                ))}
              </div>

              <p className="mt-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
                Interests
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="border-[rgb(var(--border))] bg-transparent font-normal text-[rgb(var(--muted-2))]"
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
            </HudFrame>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
