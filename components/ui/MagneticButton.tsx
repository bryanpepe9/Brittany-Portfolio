"use client";

import { type ReactNode, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { DESKTOP_QUERY } from "@/lib/motion";
import { cn } from "@/lib/cn";

type MagneticButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  /** How far the element drifts toward the pointer, as a fraction of offset. */
  strength?: number;
  external?: boolean;
  ariaLabel?: string;
};

/**
 * Pointer-following CTA.
 *
 * The magnetic behavior is gated behind DESKTOP_QUERY, which also excludes
 * reduced-motion users — on touch and for anyone who asked for less motion
 * this is an ordinary link with no listeners attached at all.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  className,
  strength = 0.28,
  external = false,
  ariaLabel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement & HTMLButtonElement>(null);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const mm = gsap.matchMedia();

    mm.add(DESKTOP_QUERY, () => {
      const moveX = gsap.quickTo(element, "x", { duration: 0.5, ease: "power3.out" });
      const moveY = gsap.quickTo(element, "y", { duration: 0.5, ease: "power3.out" });

      const onPointerMove = (event: PointerEvent) => {
        const bounds = element.getBoundingClientRect();
        moveX((event.clientX - (bounds.left + bounds.width / 2)) * strength);
        moveY((event.clientY - (bounds.top + bounds.height / 2)) * strength);
      };

      const onPointerLeave = () => {
        moveX(0);
        moveY(0);
      };

      element.addEventListener("pointermove", onPointerMove);
      element.addEventListener("pointerleave", onPointerLeave);

      return () => {
        element.removeEventListener("pointermove", onPointerMove);
        element.removeEventListener("pointerleave", onPointerLeave);
      };
    });

    return () => mm.revert();
  }, [strength]);

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5",
    "text-[0.8125rem] uppercase tracking-[0.14em] transition-colors duration-500",
    "min-h-11", // keeps the tap target comfortable on touch
    className,
  );

  if (href) {
    return (
      <a
        ref={ref}
        href={href}
        aria-label={ariaLabel}
        className={classes}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button ref={ref} type="button" onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
