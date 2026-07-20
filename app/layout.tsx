import { ParallaxBackground } from "@/components/parallax-background";
import { ScanlineOverlay } from "@/components/scanline-overlay";
import { ThemeProvider } from "@/components/theme-provider";
import { bodyFont, displayFont, monoFont } from "@/lib/fonts";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./theme-tokens.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fandresena.fadevt.org"),

  title: "Anjara Fandresena — Développeur Full-Stack",
  description:
    "Portfolio d'Anjara Fandresena, développeur Full-Stack junior spécialisé en Next.js, React, NestJS et TypeScript — Antananarivo, Madagascar.",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Anjara Fandresena — Développeur Full-Stack",
    description:
      "Portfolio d'Anjara Fandresena, développeur Full-Stack junior spécialisé en Next.js, React, NestJS et TypeScript.",
    url: "https://fandresena.fadevt.org",
    siteName: "Anjara Fandresena",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio d'Anjara Fandresena",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Anjara Fandresena — Développeur Full-Stack",
    description:
      "Portfolio d'Anjara Fandresena, développeur Full-Stack junior spécialisé en Next.js, React, NestJS et TypeScript.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="bg-[rgb(var(--bg))] font-(family-name:--font-body) text-[rgb(var(--text))] antialiased selection:bg-[rgb(var(--blue)/30%)] selection:text-[rgb(var(--text))]">
        <ThemeProvider>
          <ParallaxBackground />
          <ScanlineOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
