import { ParallaxBackground } from "@/components/parallax-background";
import { ScanlineOverlay } from "@/components/scanline-overlay";
import { SplashScreen } from "@/components/splash-screen";
import { ThemeProvider } from "@/components/theme-provider";
import { bodyFont, displayFont, monoFont } from "@/lib/fonts";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import "./theme-tokens.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://fandresena.fadevt.org"),

  title: "Anjara Fandresena — Full-Stack Developer",
  description:
    "Portfolio of Anjara Fandresena, a Full-Stack Developer specializing in Next.js, React, NestJS, TypeScript, PostgreSQL, and modern web technologies. Based in Antananarivo, Madagascar.",

  keywords: [
    "Anjara Fandresena",
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Next.js",
    "React",
    "NestJS",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "PostgreSQL",
    "Prisma",
    "Node.js",
    "Portfolio",
    "Madagascar",
    "Antananarivo",
  ],

  authors: [
    {
      name: "Anjara Fandresena",
      url: "https://fandresena.fadevt.org",
    },
  ],

  creator: "Anjara Fandresena",
  publisher: "Anjara Fandresena",

  category: "Technology",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://fandresena.fadevt.org",
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Anjara Fandresena — Full-Stack Developer",
    description:
      "Discover the portfolio of Anjara Fandresena, a Full-Stack Developer building modern, scalable web applications with Next.js, React, NestJS, TypeScript, and PostgreSQL.",
    url: "https://fandresena.fadevt.org",
    siteName: "Anjara Fandresena",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Anjara Fandresena Portfolio",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}
    >
      <body className="bg-[rgb(var(--bg))] font-(family-name:--font-body) text-[rgb(var(--text))] antialiased selection:bg-[rgb(var(--blue)/30%)] selection:text-[rgb(var(--text))]">
        <ThemeProvider>
          <ParallaxBackground />
          <ScanlineOverlay />
          <SplashScreen>{children}</SplashScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}
