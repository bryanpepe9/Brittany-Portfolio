import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/cn";

type ArrowLinkProps = {
  href: string;
  label: string;
  external?: boolean;
  /** Light text, for use on the ink-ground sections. */
  invert?: boolean;
  className?: string;
};

/**
 * Text link with an arrow that steps forward on hover and keyboard focus.
 * Focus is included deliberately — hover-only affordances leave keyboard
 * users without the feedback everyone else gets.
 */
export function ArrowLink({
  href,
  label,
  external = false,
  invert = false,
  className,
}: ArrowLinkProps) {
  const Icon = external ? ArrowUpRight : ArrowRight;

  return (
    <a
      href={href}
      className={cn(
        "group inline-flex items-center gap-2",
        invert ? "text-ivory" : "text-ink",
        "text-[0.8125rem] uppercase tracking-[0.14em]",
        className,
      )}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
    >
      <span className="link-underline">{label}</span>
      <Icon
        aria-hidden="true"
        className={cn(
          "size-3.5 shrink-0 transition-transform duration-500 ease-editorial",
          external
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-focus-visible:translate-x-0.5 group-focus-visible:-translate-y-0.5"
            : "group-hover:translate-x-1 group-focus-visible:translate-x-1",
        )}
      />
    </a>
  );
}
