import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

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
  const corner = "absolute h-3 w-3 border-[rgb(var(--blue)/70%)]";
  return (
    <div className={cn("relative", className)}>
      <span className={cn(corner, "top-0 left-0 border-l-2 border-t-2")} />
      <span className={cn(corner, "top-0 right-0 border-r-2 border-t-2")} />
      <span className={cn(corner, "bottom-0 left-0 border-b-2 border-l-2")} />
      <span className={cn(corner, "bottom-0 right-0 border-b-2 border-r-2")} />
      {children}
    </div>
  );
}
