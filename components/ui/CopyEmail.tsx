"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/cn";

type CopyEmailProps = {
  email: string;
  /** Light text, for use on the ink-ground sections. */
  invert?: boolean;
  className?: string;
};

/**
 * Click-to-copy address with a live-region announcement.
 *
 * The adjacent mailto link is not a fallback detail — it is the guaranteed
 * path. `navigator.clipboard` is unavailable on insecure origins and can be
 * denied by permissions policy, so the copy button is an enhancement layered
 * on top of a link that always works.
 */
export function CopyEmail({ email, invert = false, className }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeout.current) clearTimeout(timeout.current);
    };
  }, []);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard denied — the mailto link beside this button still works.
    }
  }

  return (
    <div className={cn("flex flex-wrap items-center gap-x-5 gap-y-3", className)}>
      <a
        href={`mailto:${email}`}
        className={cn(
          "link-underline font-display text-display-md leading-none break-all",
          invert ? "text-ivory" : "text-ink",
        )}
      >
        {email}
      </a>

      <button
        type="button"
        onClick={handleCopy}
        className={cn(
          "label inline-flex min-h-11 items-center gap-2 rounded-full border px-4 py-2",
          "transition-colors duration-500",
          invert
            ? "border-stone/50 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink"
            : "border-stone/60 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
        )}
      >
        {copied ? (
          <Check aria-hidden="true" className="size-3.5" />
        ) : (
          <Copy aria-hidden="true" className="size-3.5" />
        )}
        <span>{copied ? "Copied" : "Copy"}</span>
      </button>

      <span aria-live="polite" className="sr-only">
        {copied ? `${email} copied to clipboard` : ""}
      </span>
    </div>
  );
}
