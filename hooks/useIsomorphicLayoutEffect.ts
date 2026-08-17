import { useEffect, useLayoutEffect } from "react";

/**
 * useLayoutEffect on the client, useEffect on the server.
 *
 * Animations must set their "from" state before the browser paints, otherwise
 * content flashes at full opacity and then jumps to hidden. useEffect is the
 * server-safe fallback that keeps React from warning during SSR.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
