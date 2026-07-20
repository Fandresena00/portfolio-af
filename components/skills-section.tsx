"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { FrontendDemo } from "@/components/demos/frontend-demo";
import { BackendDemo } from "@/components/demos/backend-demo";
import { DatabaseDemo } from "@/components/demos/database-demo";
import { ToolsDemo } from "@/components/demos/tools-demo";
import { skillCategories } from "@/lib/data/skills";

const demoComponents: Record<string, ComponentType<{ skills: string[] }>> = {
  frontend: FrontendDemo,
  backend: BackendDemo,
  database: DatabaseDemo,
  tools: ToolsDemo,
};

export function SkillsSection() {
  return (
    <section id="skills" className="relative border-t border-[rgb(var(--border-soft))] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Stats"
          title="Compétences techniques"
          description="Plutôt qu'une jauge de pourcentage, une démo interactive par domaine — cliquez pour voir le comportement en action."
        />

        <Tabs defaultValue={skillCategories[0].id}>
          <TabsList className="mb-6 h-auto flex-wrap gap-2 bg-transparent p-0">
            {skillCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="border border-[rgb(var(--border))] bg-[rgb(var(--panel)/60%)] font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--muted))] data-[state=active]:border-[rgb(var(--blue)/50%)] data-[state=active]:bg-[rgb(var(--panel))] data-[state=active]:text-[rgb(var(--blue))] data-[state=active]:shadow-none"
              >
                [{cat.code}] {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((cat) => {
            const Demo = demoComponents[cat.id];
            return (
              <TabsContent key={cat.id} value={cat.id} className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p className="mb-4 text-sm text-[rgb(var(--muted))]">{cat.tagline}</p>
                  <Demo skills={cat.skills} />
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
