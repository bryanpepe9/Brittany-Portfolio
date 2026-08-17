import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  label: string;
  title: string;
  /** id for the <h2>, used by aria-labelledby on the parent section. */
  id: string;
  index?: string;
  className?: string;
};

export function SectionHeading({ label, title, id, index, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col gap-6", className)}>
      <div className="flex items-baseline justify-between gap-6 border-t border-stone/50 pt-5">
        <span className="label">{label}</span>
        {index ? <span className="label">{index}</span> : null}
      </div>
      <h2 id={id} className="font-display text-display-lg text-ink">
        {title}
      </h2>
    </Reveal>
  );
}
