"use client";

import { useEffect, useRef, type RefObject } from "react";
import { navItems } from "@/lib/data/navigation";
import { profile } from "@/lib/data/profile";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { DURATION, EASE, MOTION_CONDITIONS, STAGGER } from "@/lib/motion";

type MobileNavProps = {
  open: boolean;
  onClose: () => void;
  id: string;
  /** Focus returns here on close — the button that opened the overlay. */
  returnFocusTo: RefObject<HTMLButtonElement | null>;
};

export function MobileNav({ open, onClose, id, returnFocusTo }: MobileNavProps) {
  const panelRef = useRef<HTMLDivElement>(null);

  /* Escape to close, plus a focus trap while the overlay owns the screen. */
  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    // Captured now so the cleanup closes over the element, not a live ref.
    const trigger = returnFocusTo.current;

    const focusables = () =>
      Array.from(
        panel?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [],
      );

    focusables()[0]?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const items = focusables();
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    // Scroll lock without layout shift from the disappearing scrollbar.
    const { overflow, paddingRight } = document.body.style;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (scrollbar > 0) document.body.style.paddingRight = `${scrollbar}px`;

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
      trigger?.focus();
    };
  }, [open, onClose, returnFocusTo]);

  useIsomorphicLayoutEffect(() => {
    const panel = panelRef.current;
    if (!panel || !open) return;

    const mm = gsap.matchMedia();

    mm.add(MOTION_CONDITIONS, (context) => {
      const { reduced } = context.conditions as { reduced: boolean };
      if (reduced) return;

      gsap
        .timeline()
        .from(panel, { yPercent: -100, duration: DURATION.base, ease: EASE.inOut })
        .from(
          panel.querySelectorAll("[data-nav-item]"),
          { yPercent: 110, duration: DURATION.base, ease: EASE.out, stagger: STAGGER.item },
          "-=0.45",
        )
        .from(
          panel.querySelectorAll("[data-nav-meta]"),
          { opacity: 0, duration: DURATION.fast, ease: EASE.out },
          "-=0.4",
        );
    });

    return () => mm.revert();
  }, [open]);

  if (!open) return null;

  return (
    <div
      ref={panelRef}
      id={id}
      className="fixed inset-0 z-50 flex flex-col bg-ivory md:hidden"
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <span className="label">Menu</span>
        <button
          type="button"
          onClick={onClose}
          className="label -mr-2 inline-flex min-h-11 min-w-11 items-center justify-end text-ink"
        >
          Close
        </button>
      </div>

      <nav aria-label="Primary" className="flex flex-1 flex-col justify-center px-6">
        <ul className="flex flex-col gap-2">
          {navItems.map((item) => (
            <li key={item.href} className="overflow-hidden pb-[0.12em]">
              <a
                data-nav-item
                href={item.href}
                onClick={onClose}
                className="block py-2 font-display text-display-lg leading-none text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div data-nav-meta className="flex flex-col gap-3 border-t border-stone/50 px-6 py-8">
        <a href={`mailto:${profile.email}`} className="link-underline w-fit text-sm text-ink">
          {profile.email}
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer noopener"
          className="link-underline w-fit text-sm text-ink"
        >
          LinkedIn
        </a>
        <span className="label pt-2">{profile.location}</span>
      </div>
    </div>
  );
}
