export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  summary: string;
  achievements: string[];
  stack: string[];
}

export const experiences: ExperienceEntry[] = [
  {
    id: "prosendia",
    role: "Full-Stack Developer",
    company: "Prosendia",
    companyUrl: "https://prosendia.genforus.com",
    period: "2025 — 2026",
    summary:
      "A SaaS platform using AI to automate the management of messages, comments and customer interactions on social media.",
    achievements: [
      "Designed and built an AI-powered automation SaaS platform",
      "Built a modern, responsive and performant web interface",
      "Designed and built secure REST APIs with authentication and user management",
      "Integrated AI to automate replies to customer messages and comments",
      "Integrated Facebook/Meta APIs for customer interaction management",
      "Designed and managed the PostgreSQL database with Prisma ORM",
      "Built a dashboard with statistics, subscriptions and activity tracking",
      "Integrated payment solutions and subscription management",
      "Deployed and maintained the app in production, optimizing performance and security",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "Prisma ORM",
      "PostgreSQL",
      "OpenRouter",
      "REST API",
      "Facebook Graph API",
      "Git",
      "GitHub",
      "Vercel",
      "Render",
    ],
  },
];
