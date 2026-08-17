"use client";

import { type ElementType, type ReactNode, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { DURATION, EASE, MOTION_CONDITIONS, REVEAL_START } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  delay?: number;
  y?: number;
  duration?: number;
};

/**
 * Scroll-triggered entrance.
 *
 * Uses `gsap.from` inside a layout effect so the hidden state is applied
 * before first paint — no flash of visible content, and if JavaScript never
 * runs the content simply stays visible.
 */
export function Reveal({
  children,
  className,
  as: Tag = "div",
  delay = 0,
  y = 28,
  duration = DURATION.base,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mm = gsap.matchMedia();

    mm.add(MOTION_CONDITIONS, (context) => {
      const { reduced } = context.conditions as { reduced: boolean };
      // Reduced motion: leave the element exactly where the markup put it.
      if (reduced) return;

      gsap.from(element, {
        opacity: 0,
        y,
        duration,
        delay,
        ease: EASE.out,
        scrollTrigger: { trigger: element, start: REVEAL_START, once: true },
      });
    });

    return () => mm.revert();
  }, [delay, duration, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
