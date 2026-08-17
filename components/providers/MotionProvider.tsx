"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

/**
 * Global ScrollTrigger lifecycle.
 *
 * The display type runs up to 12vw, so when Instrument Serif swaps in it
 * changes the height of nearly every section — which invalidates every trigger
 * position calculated before the swap. Refreshing on `fonts.ready` is what
 * keeps reveals from firing at the wrong scroll offset on a cold load.
 *
 * Renders nothing.
 */
export function MotionProvider() {
  useEffect(() => {
    let cancelled = false;

    document.fonts?.ready.then(() => {
      if (!cancelled) ScrollTrigger.refresh();
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}
