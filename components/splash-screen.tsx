"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { ElectricSurgeLoader } from "./electric-surge-loader";

const MIN_DISPLAY_MS = 1200;

interface SplashScreenProps {
  children: ReactNode;
}

/**
 * Wraps the app to guarantee the loading splash is visible for at least
 * MIN_DISPLAY_MS, purely for the branding moment — this never delays the
 * real page: `children` mounts and loads normally underneath the splash
 * the whole time, so nothing is held back. Only the splash's own visibility
 * is timed. Mounted once in the root layout, so it only shows on first
 * load, never on in-page navigation.
 */
export function SplashScreen({ children }: SplashScreenProps) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), MIN_DISPLAY_MS);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {children}
      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-999"
          >
            <ElectricSurgeLoader />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
