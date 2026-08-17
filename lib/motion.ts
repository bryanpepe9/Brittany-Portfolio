/**
 * One motion vocabulary for the whole site.
 *
 * Every animated component pulls easing, duration and stagger from here so
 * timing stays consistent — the difference between "art-directed" and
 * "a pile of separate animations".
 *
 * Plain constants, no GSAP import: safe to pull into server components.
 */

/** GSAP eases chosen to sit closest to --ease-editorial in globals.css. */
export const EASE = {
  /** Decelerating entrances — the default for anything arriving on screen. */
  out: "expo.out",
  /** Symmetric moves: nav compaction, overlays, toggles. */
  inOut: "power3.inOut",
  /** Mask wipes and scale reveals. */
  mask: "power2.inOut",
} as const;

export const DURATION = {
  fast: 0.6,
  base: 0.9,
  slow: 1.2,
} as const;

export const STAGGER = {
  word: 0.028,
  line: 0.09,
  item: 0.07,
} as const;

/** ScrollTrigger start position for entrance reveals. */
export const REVEAL_START = "top 85%";

/** Desktop-only gate. Parallax, magnetic buttons and hover-scale live behind this. */
export const DESKTOP_QUERY = "(min-width: 768px) and (prefers-reduced-motion: no-preference)";

/**
 * Condition set for `gsap.matchMedia().add()`.
 *
 * Both halves are listed on purpose. matchMedia only invokes the callback when
 * at least one condition currently matches — registering `reduced` alone means
 * that on a no-preference browser (the common case) the callback never runs and
 * the animation silently never happens. Listing the complement guarantees
 * exactly one branch matches at all times.
 */
export const MOTION_CONDITIONS = {
  reduced: "(prefers-reduced-motion: reduce)",
  motion: "(prefers-reduced-motion: no-preference)",
} as const;
