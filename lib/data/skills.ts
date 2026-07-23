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
    tagline: "Reactive interfaces with React, Next.js and shadcn/ui.",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  },
  {
    id: "backend",
    label: "Back-end",
    code: "BE",
    tagline: "Secure REST APIs with NestJS and Node.js.",
    skills: ["NestJS", "Node.js", "REST API", "Prisma ORM"],
  },
  {
    id: "database",
    label: "Database",
    code: "DB",
    tagline: "Modeling and querying with Prisma and PostgreSQL.",
    skills: ["PostgreSQL", "Prisma ORM"],
  },
  {
    id: "tools",
    label: "Tools",
    code: "OP",
    tagline: "Versioning and deployment with Git, Vercel and Render.",
    skills: ["Git", "GitHub", "Vercel", "Render"],
  },
  {
    id: "integrations",
    label: "AI & Integrations",
    code: "AI",
    tagline: "Automating customer interactions with AI and third-party APIs.",
    skills: ["OpenRouter", "Facebook Graph API", "Shopify API", "Better-Auth"],
  },
];
