export type ProjectStatus = "En production" | "En développement" | "Terminé";

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

// Remplacez les chemins d'images ci-dessous par vos propres captures d'écran,
// placées dans /public/projects/<id>/... (format recommandé : 1600x1000, .png ou .jpg)
export const projects: Project[] = [
  {
    id: "prosendia",
    codename: "OP-01",
    title: "Prosendia",
    period: "2025 — 2026",
    status: "En production",
    summary:
      "Plateforme SaaS qui automatise, grâce à l'IA, la gestion des messages, commentaires et interactions clients sur les réseaux sociaux.",
    description:
      "Prosendia centralise les échanges d'une entreprise sur les réseaux sociaux et laisse l'intelligence artificielle prendre en charge une partie des réponses. J'ai conçu et développé la plateforme de bout en bout : interface, API, base de données, intégrations et mise en production.",
    highlights: [
      "Conception d'une interface web moderne, responsive et performante",
      "API REST sécurisées avec authentification et gestion des utilisateurs",
      "Automatisation des réponses aux messages via l'IA",
      "Intégration des API Facebook/Meta pour la gestion des interactions clients",
      "Tableau de bord avec statistiques, abonnements et suivi de l'activité",
      "Intégration des paiements et gestion des abonnements",
      "Déploiement et maintenance en production, avec optimisation performance et sécurité",
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
      { src: "/projects/prosendia/capture1.png", alt: "Tableau de bord Prosendia" },
      { src: "/projects/prosendia/capture2.png", alt: "Messagerie automatisée par IA" },
      { src: "/projects/prosendia/capture3.png", alt: "Gestion des abonnements" },
    ],
    links: [
      { label: "prosendia.genforus.com", url: "https://prosendia.genforus.com", type: "live" },
    ],
  },
  {
    id: "nexus",
    codename: "OP-02",
    title: "Nexus",
    period: "2025 — 2026",
    status: "En développement",
    summary:
      "Application collaborative de gestion de projets et de tâches, avec espaces de travail et rôles.",
    description:
      "Nexus permet à une équipe d'organiser ses espaces de travail, projets, tâches et membres, avec un suivi précis des statuts et des priorités.",
    highlights: [
      "Gestion des espaces de travail, projets, tâches et membres",
      "Création, modification et suivi des tâches avec statuts et priorités",
      "Authentification sécurisée et gestion des rôles utilisateurs",
      "Interface moderne, responsive et optimisée pour une utilisation fluide",
      "API REST et gestion des données avec PostgreSQL",
    ],
    stack: ["Next.js", "React", "Prisma", "PostgreSQL", "Better-Auth", "Tailwind CSS", "shadcn/ui"],
    images: [
      { src: "/projects/nexus/capture1.png", alt: "Tableau de tâches Nexus" },
      { src: "/projects/nexus/capture2.png", alt: "Espace de travail Nexus" },
    ],
    links: [
      { label: "nexus.fadevt.org", url: "https://nexus.fadevt.org", type: "live" },
      { label: "Code source", url: "https://github.com/Fandresena00/nexus", type: "github" },
    ],
  },
  {
    id: "mh-store",
    codename: "OP-03",
    title: "MH Store",
    period: "Depuis 2026",
    status: "En production",
    summary: "Boutique e-commerce headless basée sur Shopify, avec une interface Next.js sur-mesure.",
    description:
      "MH Store découple le front-end Next.js du back-office Shopify pour offrir une expérience d'achat rapide et personnalisée, tout en gardant la gestion des produits côté Shopify.",
    highlights: [
      "Interface utilisateur moderne et responsive avec Next.js",
      "API sécurisées développées avec NestJS",
      "Intégration des API Shopify (Storefront et Admin GraphQL)",
      "Gestion des produits, collections, commandes et clients",
      "Optimisation des performances, du SEO et de l'expérience utilisateur",
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
      { src: "/projects/mh-store/capture1.png", alt: "Page d'accueil MH Store" },
      { src: "/projects/mh-store/capture2.png", alt: "Fiche produit MH Store" },
      { src: "/projects/mh-store/capture3.png", alt: "Panier MH Store" },     { src: "/projects/mh-store/capture4.png", alt: "Panier MH Store" },
    ],
    links: [
      { label: "mh-store-omega.vercel.app", url: "https://mh-store-omega.vercel.app", type: "live" },
    ],
  },
];
