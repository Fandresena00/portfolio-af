"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data/profile";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "Profile" },
  { href: "#skills", label: "Stats" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const targets = links
      .map((l) => document.querySelector(l.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-[rgb(var(--border))] bg-[rgb(var(--bg)/85%)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-[family-name:var(--font-mono)] text-sm tracking-[0.2em] text-[rgb(var(--text))]"
        >
          <span className="text-[rgb(var(--blue))]">AF</span>_DEV.SYS
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href} className="relative py-1">
                <a
                  href={link.href}
                  className={`font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.15em] transition-colors ${
                    isActive
                      ? "text-[rgb(var(--blue))]"
                      : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                  }`}
                >
                  {link.label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute -bottom-1 left-0 right-0 h-px bg-[rgb(var(--blue))]"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <Button
            type="button"
            onClick={() => {
              window.location.href = `mailto:${profile.email}`;
            }}
            className="bg-[rgb(var(--blue))] font-mono text-xs uppercase tracking-widest text-[rgb(var(--bg))] hover:bg-[rgb(var(--blue)/90%)]"
          >
            Get in touch
          </Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="text-[rgb(var(--text))]"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg)/95%)] backdrop-blur-md md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block py-2 font-[family-name:var(--font-mono)] text-sm uppercase tracking-[0.15em] ${
                    active === link.href
                      ? "text-[rgb(var(--blue))]"
                      : "text-[rgb(var(--muted))] hover:text-[rgb(var(--text))]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={`mailto:${profile.email}`}
                className="inline-block w-full rounded-md bg-[rgb(var(--blue))] px-4 py-2 text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--bg))]"
              >
                Get in touch
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
