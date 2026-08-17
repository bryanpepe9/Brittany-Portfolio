"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single registration point. `registerPlugin` is idempotent, but routing every
 * animated component through this module means no component can forget to
 * register and silently lose its ScrollTrigger.
 */
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);

  // Dev-only handle for inspecting and stepping timelines from the console.
  // Stripped from production bundles by dead-code elimination.
  if (process.env.NODE_ENV !== "production") {
    Object.assign(window, { gsap, ScrollTrigger });
  }
}

export { gsap, ScrollTrigger };
