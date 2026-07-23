"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { Project } from "@/lib/data/projects";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

interface ProjectDialogProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

export function ProjectDialog({ project, onOpenChange }: ProjectDialogProps) {
  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))] sm:max-w-3xl">
        {project && (
          <div className="space-y-5">
            <DialogHeader>
              <div className="flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-[rgb(var(--blue))]">
                <span>{project.codename}</span>
                <span className="text-[rgb(var(--muted))]">/</span>
                <span className="text-[rgb(var(--muted))]">
                  {project.period}
                </span>
              </div>
              <DialogTitle className="font-(family-name:--font-display) text-2xl text-[rgb(var(--text))]">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            <Carousel>
              <CarouselContent>
                {project.images.map((img) => (
                  <CarouselItem key={img.src}>
                    <div className="relative aspect-video overflow-hidden rounded-md border border-[rgb(var(--border))] bg-[rgb(var(--surface))]">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 700px"
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))]" />
              <CarouselNext className="right-2 border-[rgb(var(--border))] bg-[rgb(var(--surface))] text-[rgb(var(--text))]" />
            </Carousel>

            <p className="text-sm leading-relaxed text-[rgb(var(--muted-2))]">
              {project.description}
            </p>

            <ul className="space-y-2">
              {project.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-2 font-mono text-[13px] leading-relaxed text-[rgb(var(--muted))]"
                >
                  <span className="text-[rgb(var(--blue))]">{">"}</span>
                  {h}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge
                  key={tech}
                  variant="outline"
                  className="border-[rgb(var(--border))] bg-transparent font-normal text-[rgb(var(--muted-2))]"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-[rgb(var(--border))] px-4 py-2 font-mono text-xs uppercase tracking-widest text-[rgb(var(--text))] transition-colors hover:border-[rgb(var(--blue)/60%)] hover:text-[rgb(var(--blue))]"
                >
                  {link.type === "github" ? (
                    <FaGithub size={14} />
                  ) : (
                    <ExternalLink size={14} />
                  )}
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
