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
    role: "Développeur Full-Stack",
    company: "Prosendia",
    companyUrl: "https://prosendia.genforus.com",
    period: "2025 — 2026",
    summary:
      "Plateforme SaaS utilisant l'intelligence artificielle pour automatiser la gestion des messages, commentaires et interactions clients sur les réseaux sociaux.",
    achievements: [
      "Conception et développement d'une plateforme SaaS d'automatisation basée sur l'IA",
      "Développement d'une interface web moderne, responsive et performante",
      "Conception et développement d'API REST sécurisées, avec authentification et gestion des utilisateurs",
      "Intégration de l'IA pour automatiser les réponses aux messages et commentaires des entreprises",
      "Intégration avec les API Facebook/Meta pour la gestion des interactions clients",
      "Conception et gestion de la base de données PostgreSQL avec Prisma ORM",
      "Développement d'un tableau de bord avec statistiques, abonnements et suivi de l'activité",
      "Intégration des solutions de paiement et gestion des abonnements associée",
      "Déploiement et maintenance en production, avec optimisation des performances et de la sécurité",
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
