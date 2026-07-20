import type { Metadata } from "next";
import type { ReactNode } from "react";
import { displayFont, bodyFont, monoFont } from "@/lib/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { ParallaxBackground } from "@/components/parallax-background";
import { ScanlineOverlay } from "@/components/scanline-overlay";
import "./theme-tokens.css";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fandresena.fadevt.org"),
  title: "Anjara Fandresena — Développeur Full-Stack",
  description:
    "Portfolio d'Anjara Fandresena, développeur Full-Stack junior spécialisé en Next.js, React, NestJS et TypeScript — Antananarivo, Madagascar.",
  openGraph: {
    title: "Anjara Fandresena — Développeur Full-Stack",
    description:
      "Portfolio d'Anjara Fandresena, développeur Full-Stack junior spécialisé en Next.js, React, NestJS et TypeScript.",
    url: "https://fandresena.fadevt.org",
    siteName: "Anjara Fandresena",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjara Fandresena — Développeur Full-Stack",
    description:
      "Portfolio d'Anjara Fandresena, développeur Full-Stack junior spécialisé en Next.js, React, NestJS et TypeScript.",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="bg-[rgb(var(--bg))] font-[family-name:var(--font-body)] text-[rgb(var(--text))] antialiased selection:bg-[rgb(var(--blue)/30%)] selection:text-[rgb(var(--text))]">
        <ThemeProvider>
          <ParallaxBackground />
          <ScanlineOverlay />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
