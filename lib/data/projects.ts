export type ProjectStatus = "In production" | "In development" | "Completed";

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  type: "live" | "github";
}

export interface Project {
  id: string;
  codename: string;
  title: string;
  period: string;
  status: ProjectStatus;
  summary: string;
  description: string;
  highlights: string[];
  stack: string[];
  images: ProjectImage[];
  links: ProjectLink[];
}

// Screenshots live in /public/projects/<id>/... (recommended: 1600x1000, .png or .jpg)
export const projects: Project[] = [
  {
    id: "prosendia",
    codename: "OP-01",
    title: "Prosendia",
    period: "2025 — 2026",
    status: "In production",
    summary:
      "A SaaS platform that uses AI to automate the management of messages, comments and customer interactions on social media.",
    description:
      "Prosendia centralizes a company's social media conversations and lets AI handle part of the replies. I designed and built the platform end to end: interface, API, database, integrations and production deployment.",
    highlights: [
      "Designed a modern, responsive and performant web interface",
      "Secure REST APIs with authentication and user management",
      "Automated message replies via AI",
      "Integrated the Facebook/Meta APIs for customer interaction management",
      "Dashboard with statistics, subscriptions and activity tracking",
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
      "Facebook Graph API",
      "OpenRouter",
    ],
    images: [
      {
        src: "/projects/prosendia/capture1.png",
        alt: "Prosendia dashboard",
      },
      {
        src: "/projects/prosendia/capture2.png",
        alt: "AI-automated messaging",
      },
      {
        src: "/projects/prosendia/capture3.png",
        alt: "Subscription management",
      },
    ],
    links: [
      {
        label: "prosendia.genforus.com",
        url: "https://prosendia.genforus.com",
        type: "live",
      },
    ],
  },
  {
    id: "nexus",
    codename: "OP-02",
    title: "Nexus",
    period: "2025 — 2026",
    status: "In development",
    summary:
      "A collaborative project and task management app with workspaces and roles.",
    description:
      "Nexus lets a team organize its workspaces, projects, tasks and members, with precise status and priority tracking.",
    highlights: [
      "Workspace, project, task and member management",
      "Task creation, editing and tracking with statuses and priorities",
      "Secure authentication and user role management",
      "Modern, responsive interface built for smooth day-to-day use",
      "REST API and data handling with PostgreSQL",
    ],
    stack: [
      "Next.js",
      "React",
      "Prisma",
      "PostgreSQL",
      "Better-Auth",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    images: [
      { src: "/projects/nexus/capture1.png", alt: "Nexus task board" },
      { src: "/projects/nexus/capture2.png", alt: "Nexus workspace" },
    ],
    links: [
      {
        label: "nexus.fadevt.org",
        url: "https://nexus.fadevt.org",
        type: "live",
      },
      {
        label: "Source code",
        url: "https://github.com/Fandresena00/nexus",
        type: "github",
      },
    ],
  },
  {
    id: "mh-store",
    codename: "OP-03",
    title: "MH Store",
    period: "Since 2026",
    status: "In production",
    summary:
      "A headless e-commerce store built on Shopify, with a custom Next.js front end.",
    description:
      "MH Store decouples the Next.js front end from the Shopify back office to deliver a fast, tailored shopping experience while keeping product management on Shopify's side.",
    highlights: [
      "Modern, responsive interface built with Next.js",
      "Secure APIs built with NestJS",
      "Integrated the Shopify APIs (Storefront and Admin GraphQL)",
      "Product, collection, order and customer management",
      "Optimized performance, SEO and user experience",
    ],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Shopify Storefront API",
      "Shopify GraphQL Admin API",
    ],
    images: [
      {
        src: "/projects/mh-store/capture1.png",
        alt: "MH Store home page",
      },
      { src: "/projects/mh-store/capture2.png", alt: "MH Store product page" },
      { src: "/projects/mh-store/capture3.png", alt: "MH Store cart" },
      { src: "/projects/mh-store/capture4.png", alt: "MH Store checkout" },
    ],
    links: [
      {
        label: "mh-store-omega.vercel.app",
        url: "https://mh-store-omega.vercel.app",
        type: "live",
      },
    ],
  },
];
