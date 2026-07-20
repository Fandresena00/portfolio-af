"use client";

import { motion } from "framer-motion";

/**
 * Ambient HUD scanline sweep — a single orchestrated atmosphere effect
 * tying the whole page together, rather than scattered animations everywhere.
 * Fixed, low-opacity, non-interactive, disabled under prefers-reduced-motion.
 */
export function ScanlineOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-40 overflow-hidden motion-reduce:hidden"
    >
      <motion.div
        className="absolute inset-x-0 h-32 bg-[rgb(var(--blue)/5%)] blur-2xl"
        animate={{ top: ["-15%", "115%"] }}
        transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      />
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgb(var(--text)) 0px, rgb(var(--text)) 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
