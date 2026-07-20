"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SPARKS = [
  { top: "12%", left: "8%", delay: 0, duration: 2.6 },
  { top: "24%", left: "84%", delay: 0.6, duration: 3.1 },
  { top: "46%", left: "18%", delay: 1.1, duration: 2.2 },
  { top: "63%", left: "90%", delay: 0.3, duration: 2.8 },
  { top: "81%", left: "42%", delay: 1.6, duration: 3.4 },
  { top: "94%", left: "70%", delay: 0.9, duration: 2.4 },
];

/**
 * Global electric parallax backdrop, fixed behind all page content.
 * Three depth layers (grid / glow orbs / circuit traces) drift at
 * different rates on scroll, plus flickering "spark" accents for an
 * electric console feel. Solid colors only — no color-blend gradients.
 */
export function ParallaxBackground() {
  const { scrollY } = useScroll();
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const gridY = useTransform(scrollY, [0, 4000], [0, -120]);
  const orbAY = useTransform(scrollY, [0, 4000], [0, 260]);
  const orbBY = useTransform(scrollY, [0, 4000], [0, -220]);
  const traceAY = useTransform(scrollY, [0, 4000], [0, 150]);
  const traceBY = useTransform(scrollY, [0, 4000], [0, -170]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[rgb(var(--bg))]">
      {/* grid floor — drifts slowest, deepest layer */}
      <motion.div
        style={{ y: reduced ? 0 : gridY }}
        className="absolute inset-[-10%] opacity-[0.12]"
      >
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgb(var(--grid-line)) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--grid-line)) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </motion.div>

      {/* ambient glow orbs — mid layer, opposite drift directions for depth */}
      <motion.div
        style={{ y: reduced ? 0 : orbAY }}
        animate={{ opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[rgb(var(--blue)/10%)] blur-[120px]"
      />
      <motion.div
        style={{ y: reduced ? 0 : orbBY }}
        className="absolute right-[8%] top-[55%] h-[380px] w-[380px] rounded-full bg-[rgb(var(--violet)/10%)] blur-[120px]"
      />
      <motion.div
        style={{ y: reduced ? 0 : orbAY }}
        className="absolute left-[4%] top-[120%] h-[320px] w-[320px] rounded-full bg-[rgb(var(--blue)/7%)] blur-[110px]"
      />

      {/* electric circuit traces — flicker independently, fastest drift */}
      <motion.svg
        style={{ y: reduced ? 0 : traceAY }}
        className="absolute left-[6%] top-[18%] h-[340px] w-[220px]"
        viewBox="0 0 220 340"
        fill="none"
      >
        <motion.path
          d="M10 10 L60 10 L60 90 L140 90 L140 180 L40 180 L40 260 L200 260 L200 330"
          stroke="rgb(var(--blue))"
          strokeWidth="1.5"
          animate={reduced ? { opacity: 0.3 } : { opacity: [0.12, 0.65, 0.18, 0.5, 0.12] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      <motion.svg
        style={{ y: reduced ? 0 : traceBY }}
        className="absolute right-[7%] top-[58%] h-[260px] w-[180px]"
        viewBox="0 0 180 260"
        fill="none"
      >
        <motion.path
          d="M170 5 L170 70 L100 70 L100 140 L20 140 L20 200 L90 200 L90 255"
          stroke="rgb(var(--violet))"
          strokeWidth="1.5"
          animate={reduced ? { opacity: 0.25 } : { opacity: [0.45, 0.12, 0.55, 0.18, 0.45] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>
      <motion.svg
        style={{ y: reduced ? 0 : traceAY }}
        className="absolute left-[12%] top-[92%] h-[220px] w-[160px]"
        viewBox="0 0 160 220"
        fill="none"
      >
        <motion.path
          d="M8 4 L8 60 L80 60 L80 120 L150 120 L150 216"
          stroke="rgb(var(--blue))"
          strokeWidth="1.5"
          animate={reduced ? { opacity: 0.2 } : { opacity: [0.4, 0.1, 0.5, 0.15, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.svg>

      {/* spark flickers */}
      {!reduced &&
        SPARKS.map((s, i) => (
          <motion.span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[rgb(var(--blue))]"
            style={{ top: s.top, left: s.left }}
            animate={{ opacity: [0, 1, 0], scale: [0.6, 1.5, 0.6] }}
            transition={{ duration: s.duration, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

      {/* flat scan texture, ties into hero grid density */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgb(var(--text)) 0px, rgb(var(--text)) 1px, transparent 1px, transparent 3px)",
        }}
      />
    </div>
  );
}
