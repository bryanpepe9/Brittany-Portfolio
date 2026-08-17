"use client";

import { Fragment, type ElementType, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { DURATION, EASE, MOTION_CONDITIONS, REVEAL_START, STAGGER } from "@/lib/motion";
import { cn } from "@/lib/cn";

type AnimatedTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  /** Animate immediately on mount (hero) rather than on scroll. */
  animateOnMount?: boolean;
};

/**
 * Masked, staggered word reveal.
 *
 * The split happens in JSX rather than by rewriting innerHTML, and the full
 * sentence is carried by a visually-hidden copy while the animated fragments
 * are hidden from assistive tech — so a screen reader hears one clean sentence
 * instead of a stream of disconnected words.
 *
 * The sentence is a real text node rather than an `aria-label`: ARIA forbids
 * labelling generic elements like <span> and <p>, and axe flags it as a
 * serious violation.
 */
export function AnimatedText({
  text,
  as: Tag = "span",
  className,
  delay = 0,
  stagger = STAGGER.word,
  animateOnMount = false,
}: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const words = text.split(" ");

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mm = gsap.matchMedia();

    mm.add(MOTION_CONDITIONS, (context) => {
      const { reduced } = context.conditions as { reduced: boolean };
      if (reduced) return;

      const targets = element.querySelectorAll<HTMLElement>("[data-word]");

      gsap.from(targets, {
        yPercent: 118,
        duration: DURATION.slow,
        ease: EASE.out,
        stagger,
        delay,
        ...(animateOnMount
          ? {}
          : {
              scrollTrigger: {
                trigger: element,
                start: REVEAL_START,
                once: true,
              },
            }),
      });
    });

    return () => mm.revert();
  }, [animateOnMount, delay, stagger, text]);

  return (
    <Tag ref={ref} className={cn("block", className)}>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {words.map((word, index) => (
          <Fragment key={`${word}-${index}`}>
            {/* pb/-mb pair keeps descenders out of the mask without shifting layout */}
            <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em]">
              <span data-word className="inline-block will-change-transform">
                {word}
              </span>
            </span>
            {index < words.length - 1 ? " " : null}
          </Fragment>
        ))}
      </span>
    </Tag>
  );
}
