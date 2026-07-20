"use client";

import { HudFrame } from "@/components/hud-frame";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { profile } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="relative border-t border-[rgb(var(--border-soft))] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="Profil" title="Qui je suis" />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <p className="text-base leading-relaxed text-[rgb(var(--muted-2))] sm:text-lg">
              {profile.summary}
            </p>

            <HudFrame className="mt-8 rounded-lg border border-[rgb(var(--border-soft))] bg-[rgb(var(--panel)/60%)] p-6">
              <div className="flex items-start gap-3">
                <GraduationCap
                  size={20}
                  className="mt-1 shrink-0 text-[rgb(var(--blue))]"
                />
                <div>
                  <p className="font-[family-name:var(--font-display)] text-base font-semibold text-[rgb(var(--text))]">
                    {profile.education.school}
                  </p>
                  <p className="mt-1 text-sm text-[rgb(var(--muted))]">
                    {profile.education.field} — {profile.education.location}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {profile.education.modules.map((m) => (
                      <li
                        key={m}
                        className="rounded border border-[rgb(var(--border-soft))] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[rgb(var(--muted))]"
                      >
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </HudFrame>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <HudFrame className="h-full rounded-lg border border-[rgb(var(--border-soft))] bg-[rgb(var(--panel)/60%)] p-6">
              <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
                Langues
              </p>
              <div className="mt-4 space-y-4">
                {profile.languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="mb-1.5 flex items-center justify-between">
                      <span className="text-sm text-[rgb(var(--text))]">
                        {lang.name}
                      </span>
                      <span className="font-[family-name:var(--font-mono)] text-xs text-[rgb(var(--muted))]">
                        {lang.level}
                      </span>
                    </div>
                    <Progress
                      value={lang.value}
                      className="h-1.5 bg-[rgb(var(--border-soft))] [&>div]:bg-[rgb(var(--blue))]"
                    />
                  </div>
                ))}
              </div>

              <p className="mt-6 font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
                Centres d&apos;intérêt
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant="outline"
                    className="border-[rgb(var(--border-soft))] bg-transparent font-normal text-[rgb(var(--muted-2))]"
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
