import Image from "next/image";
import type { DisciplineId, GalleryImage } from "@/lib/types";
import { cn } from "@/lib/cn";

type EditorialPlateProps = {
  variant: DisciplineId;
  /**
   * The replacement seam. When real campaign imagery exists, pass it here and
   * the generated composition steps aside — no layout or sizing changes.
   */
  image?: GalleryImage;
  className?: string;
};

const STROKE = {
  vectorEffect: "non-scaling-stroke",
  strokeWidth: 1,
  fill: "none",
} as const;

/**
 * Hand-authored abstract compositions, one per discipline.
 *
 * These are art direction, not data: no axes, no values, no chart forms and
 * nothing that could be mistaken for a screenshot of real campaign
 * performance. Each is decorative and hidden from assistive technology.
 */
const compositions: Record<DisciplineId, React.ReactNode> = {
  "brand-strategy": (
    <>
      <circle cx={272} cy={186} r={132} stroke="var(--color-ink)" {...STROKE} />
      <circle cx={272} cy={186} r={84} stroke="var(--color-stone)" {...STROKE} />
      <rect x={52} y={150} width={22} height={22} fill="var(--color-oxblood)" />
      <path d="M40 344h320M40 376h320M40 408h248" stroke="var(--color-stone)" {...STROKE} />
    </>
  ),

  "social-media": (
    <>
      <rect x={48} y={96} width={196} height={244} stroke="var(--color-stone)" {...STROKE} />
      <rect x={92} y={140} width={196} height={244} stroke="var(--color-ink)" {...STROKE} />
      <rect x={136} y={184} width={196} height={244} fill="var(--color-ivory)" />
      <rect x={136} y={184} width={196} height={244} stroke="var(--color-ink)" {...STROKE} />
      <circle cx={234} cy={306} r={26} fill="var(--color-oxblood)" opacity={0.9} />
    </>
  ),

  "content-creative": (
    <>
      <rect x={64} y={128} width={184} height={184} fill="var(--color-ivory)" />
      <rect x={64} y={128} width={184} height={184} stroke="var(--color-ink)" {...STROKE} />
      <g transform="rotate(14 244 268)">
        <rect x={152} y={176} width={184} height={184} stroke="var(--color-oxblood)" {...STROKE} />
      </g>
      <path d="M40 424h320" stroke="var(--color-stone)" {...STROKE} />
      <path d="M200 76v72" stroke="var(--color-stone)" {...STROKE} />
    </>
  ),

  "seo-digital-growth": (
    <>
      {[92, 148, 204, 260, 316].map((radius, index) => (
        <path
          key={radius}
          d={`M56 ${452 - radius} A ${radius} ${radius} 0 0 1 ${56 + radius} 452`}
          stroke={index === 2 ? "var(--color-oxblood)" : "var(--color-stone)"}
          {...STROKE}
        />
      ))}
      <circle cx={56} cy={452} r={7} fill="var(--color-ink)" />
      <path d="M40 88h320" stroke="var(--color-ink)" {...STROKE} />
    </>
  ),

  "campaign-analysis": (
    <>
      <rect x={100} y={180} width={80} height={80} fill="var(--color-oxblood)" opacity={0.14} />
      {[40, 120, 200, 280, 360].map((x) => (
        <path key={`v${x}`} d={`M${x} 100v320`} stroke="var(--color-stone)" {...STROKE} />
      ))}
      {[100, 180, 260, 340, 420].map((y) => (
        <path key={`h${y}`} d={`M40 ${y}h320`} stroke="var(--color-stone)" {...STROKE} />
      ))}
      <rect x={100} y={180} width={80} height={80} stroke="var(--color-oxblood)" {...STROKE} />
      <circle cx={140} cy={220} r={5} fill="var(--color-oxblood)" />
    </>
  ),

  ecommerce: (
    <>
      <rect x={56} y={112} width={288} height={276} stroke="var(--color-stone)" {...STROKE} />
      <rect x={96} y={152} width={208} height={196} fill="var(--color-ivory)" />
      <rect x={96} y={152} width={208} height={196} stroke="var(--color-ink)" {...STROKE} />
      <path d="M96 348 304 152" stroke="var(--color-oxblood)" {...STROKE} />
      <circle cx={304} cy={152} r={6} fill="var(--color-oxblood)" />
      <path d="M40 428h320" stroke="var(--color-stone)" {...STROKE} />
    </>
  ),
};

export function EditorialPlate({ variant, image, className }: EditorialPlateProps) {
  return (
    <div
      className={cn(
        "relative aspect-4/5 w-full overflow-hidden bg-shell",
        className,
      )}
    >
      {image ? (
        <Image
          src={image.src}
          alt={image.alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
        />
      ) : (
        <svg
          viewBox="0 0 400 500"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          focusable="false"
          className="size-full transition-transform duration-[1200ms] ease-editorial group-hover:scale-[1.03]"
        >
          {compositions[variant]}
        </svg>
      )}
    </div>
  );
}
