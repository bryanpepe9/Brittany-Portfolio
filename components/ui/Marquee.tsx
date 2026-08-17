"use client";

import { Fragment, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { MOTION_CONDITIONS } from "@/lib/motion";
import { cn } from "@/lib/cn";

type MarqueeProps = {
  items: readonly string[];
  /** Desired travel, as a percentage of track width. Clamped to what fits. */
  distance?: number;
  className?: string;
  itemClassName?: string;
};

/** Three passes so the track is reliably wider than any viewport. */
const COPIES = 3;

/**
 * Horizontal editorial movement, driven by scroll rather than a timer.
 *
 * Scroll-scrubbing instead of auto-playing is an accessibility decision as
 * much as an aesthetic one: an auto-playing marquee is moving content under
 * WCAG 2.2.2 and would owe the user a pause control. Here the motion only
 * happens because the user caused it, and stops the moment they do.
 *
 * Travel is centred inside the track's real overflow and clamped to it, so
 * neither edge can ever be exposed — including at first paint, when a
 * scrubbed trigger is already partway through its range.
 */
export function Marquee({ items, distance = 26, className, itemClassName }: MarqueeProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    const mm = gsap.matchMedia();

    mm.add(MOTION_CONDITIONS, (context) => {
      const { reduced } = context.conditions as { reduced: boolean };
      if (reduced) return;

      /** Percentage of track width that can scroll past before an edge shows. */
      const overflowPercent = () => {
        const trackWidth = track.scrollWidth;
        const visible = viewport.clientWidth;
        if (trackWidth <= visible) return 0;
        return ((trackWidth - visible) / trackWidth) * 100;
      };

      const travel = () => Math.min(distance, overflowPercent());
      // Centre the travel band inside the available overflow.
      const start = () => -(overflowPercent() - travel()) / 2;

      gsap.fromTo(
        track,
        { xPercent: start },
        {
          xPercent: () => start() - travel(),
          ease: "none",
          scrollTrigger: {
            trigger: viewport,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );
    });

    return () => mm.revert();
  }, [distance]);

  const renderItems = () =>
    items.map((item, index) => (
      <Fragment key={`${item}-${index}`}>
        <li className={cn("shrink-0", itemClassName)}>{item}</li>
        <li aria-hidden="true" className="shrink-0 select-none text-muted">
          ·
        </li>
      </Fragment>
    ));

  return (
    <div ref={viewportRef} className={cn("overflow-hidden", className)}>
      <div ref={trackRef} className="flex w-max will-change-transform">
        {Array.from({ length: COPIES }, (_, copy) => (
          <ul
            key={copy}
            /* Only the first pass is real content; the rest are visual tail. */
            aria-hidden={copy > 0 ? "true" : undefined}
            className="flex items-center gap-6 pr-6"
          >
            {renderItems()}
          </ul>
        ))}
      </div>
    </div>
  );
}
