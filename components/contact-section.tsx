"use client";

import { HudFrame } from "@/components/hud-frame";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { Globe, Mail, Phone } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Téléphone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "Site",
    value: profile.website.replace("https://", "fandresena.fadevt.org"),
    href: profile.website,
    icon: Globe,
  },
  {
    label: "GitHub",
    value: profile.github.replace(
      "https://",
      "https://github.com/Fandresena00/portfolio-af",
    ),
    href: profile.github,
    icon: FaGithub,
  },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative border-t border-[rgb(var(--border-soft))] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Contact"
          title="Lançons une mission ensemble"
          description="Ouvert aux opportunités freelance ou en équipe, à distance comme sur Antananarivo."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <HudFrame className="rounded-lg border border-[rgb(var(--border-soft))] bg-[rgb(var(--panel)/60%)] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {channels.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-md border border-[rgb(var(--border-soft))] p-4 transition-colors hover:border-[rgb(var(--blue)/30%)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-[rgb(var(--border-soft))] text-[rgb(var(--blue))] transition-colors group-hover:border-[rgb(var(--blue)/30%)]">
                    <Icon size={16} />
                  </span>
                  <span>
                    <span className="block font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
                      {label}
                    </span>
                    <span className="block text-sm text-[rgb(var(--text))]">
                      {value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </HudFrame>
        </motion.div>
      </div>
    </section>
  );
}
