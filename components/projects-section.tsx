"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { HudFrame } from "@/components/hud-frame";
import { SectionHeading } from "@/components/section-heading";
import { ProjectDialog } from "@/components/project-dialog";
import { projects, type Project, type ProjectStatus } from "@/lib/data/projects";

const statusStyles: Record<ProjectStatus, string> = {
  "En production": "border-[rgb(var(--blue)/40%)] text-[rgb(var(--blue))]",
  "En développement": "border-[rgb(var(--amber)/40%)] text-[rgb(var(--amber))]",
  "Terminé": "border-[rgb(var(--muted)/40%)] text-[rgb(var(--muted))]",
};

export function ProjectsSection() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative border-t border-[rgb(var(--border-soft))] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Projets"
          title="Missions réalisées"
          description="Trois plateformes conçues et développées de bout en bout, de l'interface à la base de données."
        />

        <Carousel opts={{ align: "start", loop: false }} className="relative">
          <CarouselContent className="-ml-6">
            {projects.map((project, i) => (
              <CarouselItem key={project.id} className="basis-full pl-6 sm:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="h-full"
                >
                  <HudFrame className="group h-full overflow-hidden rounded-lg border border-[rgb(var(--border))] bg-[rgb(var(--panel)/60%)] transition-shadow duration-300 hover:border-[rgb(var(--blue)/40%)] hover:shadow-[0_0_28px_-10px_rgb(var(--blue)/0.5)]">
                    <div className="relative aspect-video overflow-hidden border-b border-[rgb(var(--border))]">
                      <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute left-3 top-3 rounded border border-[rgb(var(--blue)/40%)] bg-[rgb(var(--bg)/80%)] px-2 py-1 font-[family-name:var(--font-mono)] text-[11px] tracking-[0.2em] text-[rgb(var(--blue))] backdrop-blur-sm">
                        {project.codename}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-[rgb(var(--text))]">
                          {project.title}
                        </h3>
                        <Badge
                          variant="outline"
                          className={`bg-transparent font-[family-name:var(--font-mono)] text-[10px] font-normal ${statusStyles[project.status]}`}
                        >
                          {project.status}
                        </Badge>
                      </div>

                      <p className="text-sm leading-relaxed text-[rgb(var(--muted))]">{project.summary}</p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="rounded border border-[rgb(var(--border))] px-2 py-0.5 font-[family-name:var(--font-mono)] text-[10px] text-[rgb(var(--muted))]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => setActive(project)}
                        className="mt-6 inline-flex items-center gap-1.5 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--blue))] transition-transform hover:translate-x-0.5"
                      >
                        Voir le dossier
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  </HudFrame>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="mt-8 flex justify-end gap-3">
            <CarouselPrevious className="static translate-y-0 border-[rgb(var(--border))] bg-transparent text-[rgb(var(--text))] hover:bg-[rgb(var(--panel))]" />
            <CarouselNext className="static translate-y-0 border-[rgb(var(--border))] bg-transparent text-[rgb(var(--text))] hover:bg-[rgb(var(--panel))]" />
          </div>
        </Carousel>
      </div>

      <ProjectDialog project={active} onOpenChange={(open) => !open && setActive(null)} />
    </section>
  );
}
