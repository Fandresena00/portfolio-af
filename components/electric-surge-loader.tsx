"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const SURGE_PATH =
  "M0 60 L48 60 L62 22 L80 102 L98 10 L112 60 L166 60 L180 26 L198 100 L216 14 L230 60 L284 60 L298 24 L316 104 L334 12 L348 60 L410 60";

export function ElectricSurgeLoader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 bg-[rgb(var(--bg))]">
      {/* ambient surge glow — solid blurred circle, pulses like a power fluctuation */}
      <motion.div
        aria-hidden
        animate={{ opacity: [0.15, 0.5, 0.15] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-105 w-105 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--blue)/12%)] blur-[100px]"
      />

      {/* HUD corner brackets framing the viewport */}
      <span className="pointer-events-none absolute left-6 top-6 h-4 w-4 border-l-2 border-t-2 border-[rgb(var(--blue)/50%)]" />
      <span className="pointer-events-none absolute right-6 top-6 h-4 w-4 border-r-2 border-t-2 border-[rgb(var(--blue)/50%)]" />
      <span className="pointer-events-none absolute bottom-6 left-6 h-4 w-4 border-b-2 border-l-2 border-[rgb(var(--blue)/50%)]" />
      <span className="pointer-events-none absolute bottom-6 right-6 h-4 w-4 border-b-2 border-r-2 border-[rgb(var(--blue)/50%)]" />

      <div className="relative flex flex-col items-center gap-6">
        <motion.div
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Image src="/icon.png" alt="AF" width={44} height={44} priority />
        </motion.div>

        {/* electric surge waveform — a bright pulse travels the circuit on loop */}
        <svg
          viewBox="0 0 410 120"
          className="h-16 w-64 sm:h-20 sm:w-96"
          fill="none"
        >
          <path
            d={SURGE_PATH}
            stroke="rgb(var(--border))"
            strokeWidth="1.5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
          <motion.path
            d={SURGE_PATH}
            stroke="rgb(var(--blue))"
            strokeWidth="2.5"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray="90 900"
            animate={{ strokeDashoffset: [0, -990] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            style={{ filter: "drop-shadow(0 0 6px rgb(var(--blue)))" }}
          />
        </svg>
      </div>
    </div>
  );
}
