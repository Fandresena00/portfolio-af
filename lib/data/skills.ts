export interface SkillCategory {
  id: string;
  label: string;
  code: string;
  tagline: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Front-end",
    code: "FE",
    tagline: "Interfaces réactives avec React, Next.js et shadcn/ui.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "backend",
    label: "Back-end",
    code: "BE",
    tagline: "API REST sécurisées avec NestJS et Node.js.",
    skills: ["NestJS", "Node.js", "REST API", "Prisma ORM"],
  },
  {
    id: "database",
    label: "Base de données",
    code: "DB",
    tagline: "Modélisation et requêtes avec Prisma et PostgreSQL.",
    skills: ["PostgreSQL", "Prisma ORM"],
  },
  {
    id: "tools",
    label: "Outils",
    code: "OP",
    tagline: "Versioning et déploiement avec Git, Vercel et Render.",
    skills: ["Git", "GitHub", "Vercel", "Render"],
  },
];
