"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, MapPin, Radio } from "lucide-react";
import { HudFrame } from "@/components/hud-frame";
import { profile } from "@/lib/data/profile";

const NAME_WORDS = profile.displayName.split(" ");

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % profile.roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  let charOrder = 0;

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pb-20 pt-28">
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <motion.h1
          aria-label={profile.displayName}
          className="font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.05] text-[rgb(var(--text))] sm:text-6xl md:text-7xl"
        >
          <span aria-hidden>
            {NAME_WORDS.map((word, wi) => (
              <span key={word} className="inline-block whitespace-nowrap">
                {word.split("").map((char, ci) => {
                  const order = charOrder++;
                  return (
                    <motion.span
                      key={ci}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 + order * 0.035, duration: 0.4, ease: "easeOut" }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  );
                })}
                {wi < NAME_WORDS.length - 1 ? <span className="inline-block">&nbsp;</span> : null}
              </span>
            ))}
          </span>
        </motion.h1>

        <div className="mt-4 h-9 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={profile.roles[index]}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="font-[family-name:var(--font-mono)] text-lg text-[rgb(var(--blue))] sm:text-xl"
            >
              {profile.roles[index]}
            </motion.p>
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="mt-6 max-w-xl leading-relaxed text-[rgb(var(--muted))]"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -2, boxShadow: "0 0 24px -4px rgb(var(--blue)/0.55)" }}
            whileTap={{ y: 0, scale: 0.98 }}
            className="rounded-md bg-[rgb(var(--blue))] px-6 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--bg))]"
          >
            View my projects
          </motion.a>
          <motion.a
            href={`mailto:${profile.email}`}
            whileHover={{ y: -2, borderColor: "rgb(var(--blue)/0.6)", color: "rgb(var(--blue))" }}
            whileTap={{ y: 0, scale: 0.98 }}
            className="rounded-md border border-[rgb(var(--border))] px-6 py-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.1em] text-[rgb(var(--text))]"
          >
            Get in touch
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95 }}
          className="mt-16 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-3"
        >
          <HudFrame className="p-4">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
              Location
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-[rgb(var(--text))]">
              <MapPin size={14} className="text-[rgb(var(--blue))]" />
              {profile.location}
            </p>
          </HudFrame>
          <HudFrame className="p-4">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
              Missions
            </p>
            <p className="mt-2 flex items-center gap-1.5 text-sm text-[rgb(var(--text))]">
              <Radio size={14} className="text-[rgb(var(--blue))]" />
              3 projects shipped
            </p>
          </HudFrame>
          <HudFrame className="col-span-2 p-4 sm:col-span-1">
            <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.2em] text-[rgb(var(--muted))]">
              Languages
            </p>
            <p className="mt-2 text-sm text-[rgb(var(--text))]">
              {profile.languages.map((l) => l.name).join(" · ")}
            </p>
          </HudFrame>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to the next section"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[rgb(var(--muted))] transition-colors hover:text-[rgb(var(--blue))]"
      >
        <ArrowDown size={18} className="animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}
