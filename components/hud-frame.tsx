import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface HudFrameProps {
  children: ReactNode;
  className?: string;
}

/**
 * Signature visual motif of the portfolio: a HUD-style bracket frame,
 * evoking a heads-up display / mission console readout. Reused across
 * hero stats, panels and project cards to unify the "game console" identity.
 */
export function HudFrame({ children, className }: HudFrameProps) {
  const corner = "absolute h-3 w-3 border-[rgb(var(--blue)/40%)]";
  return (
    <div className={cn("relative", className)}>
      <span className={cn(corner, "top-0 left-0 border-l border-t")} />
      <span className={cn(corner, "top-0 right-0 border-r border-t")} />
      <span className={cn(corner, "bottom-0 left-0 border-b border-l")} />
      <span className={cn(corner, "bottom-0 right-0 border-b border-r")} />
      {children}
    </div>
  );
}
