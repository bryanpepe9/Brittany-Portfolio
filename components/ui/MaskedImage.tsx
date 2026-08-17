"use client";

import Image from "next/image";
import { useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useIsomorphicLayoutEffect } from "@/hooks/useIsomorphicLayoutEffect";
import { DESKTOP_QUERY, DURATION, EASE, MOTION_CONDITIONS, REVEAL_START } from "@/lib/motion";
import { cn } from "@/lib/cn";

type MaskedImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  sizes?: string;
  /** Above-the-fold images should preload rather than lazy-load. */
  priority?: boolean;
};

/**
 * Photograph inside a fixed frame, revealed by scaling out from a slight
 * over-crop rather than fading — the image is always opaque, so it never
 * looks like a half-loaded asset.
 *
 * Desktop gets a small counter-parallax on the inner image. The frame itself
 * never moves, so surrounding layout is unaffected.
 */
export function MaskedImage({
  src,
  alt,
  width,
  height,
  className,
  sizes = "(min-width: 1680px) 620px, (min-width: 1024px) 40vw, 100vw",
  priority = false,
}: MaskedImageProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useIsomorphicLayoutEffect(() => {
    const frame = frameRef.current;
    const image = imageRef.current;
    if (!frame || !image) return;

    const mm = gsap.matchMedia();

    mm.add(MOTION_CONDITIONS, (context) => {
      const { reduced } = context.conditions as { reduced: boolean };
      if (reduced) return;

      gsap.from(image, {
        scale: 1.14,
        duration: DURATION.slow,
        ease: EASE.mask,
        scrollTrigger: { trigger: frame, start: REVEAL_START, once: true },
      });
    });

    mm.add(DESKTOP_QUERY, () => {
      gsap.fromTo(
        image,
        { yPercent: -4 },
        {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: frame,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={frameRef} className={cn("relative overflow-hidden bg-shell", className)}>
      {/* Oversized so the parallax never exposes an edge of the frame. */}
      <div ref={imageRef} className="absolute -inset-y-[6%] inset-x-0 will-change-transform">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          priority={priority}
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
