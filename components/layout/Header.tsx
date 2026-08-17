"use client";

import { useEffect, useId, useRef, useState } from "react";
import { navItems } from "@/lib/data/navigation";
import { profile } from "@/lib/data/profile";
import { ScrollTrigger } from "@/lib/gsap";
import { MobileNav } from "@/components/layout/MobileNav";
import { cn } from "@/lib/cn";

export function Header() {
  const [compact, setCompact] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      start: "top -48",
      onEnter: () => setCompact(true),
      onLeaveBack: () => setCompact(false),
    });

    return () => trigger.kill();
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[padding,background-color,border-color] duration-500 ease-editorial",
          compact
            ? "border-b border-stone/45 bg-ivory py-3"
            : "border-b border-transparent bg-transparent py-6 md:py-8",
        )}
      >
        <div className="mx-auto flex max-w-[1680px] items-center justify-between gap-6 px-6 md:px-10">
          {/* The hero already sets the name at display scale, so the header
              mark only earns its place once that has scrolled away. Hidden
              from AT and keyboard while invisible, rather than just faded. */}
          <a
            href="#top"
            aria-hidden={!compact}
            tabIndex={compact ? undefined : -1}
            className={cn(
              "font-display text-lg leading-none text-ink transition-[opacity,transform] duration-500 ease-editorial",
              compact
                ? "translate-y-0 opacity-100"
                : "pointer-events-none -translate-y-1 opacity-0",
            )}
          >
            {profile.name}
          </a>

          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="link-underline label text-ink">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            className="label -mr-2 inline-flex min-h-11 min-w-11 items-center justify-end text-ink md:hidden"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileNav
        id={menuId}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        returnFocusTo={menuButtonRef}
      />
    </>
  );
}
