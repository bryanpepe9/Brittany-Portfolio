import type { WorkArea } from "@/lib/types";
import { companiesForArea } from "@/lib/data/work";
import { EditorialPlate } from "@/components/ui/EditorialPlate";

export function WorkCard({ area }: { area: WorkArea }) {
  const companies = companiesForArea(area);

  return (
    <article className="group flex flex-col">
      <EditorialPlate variant={area.id} />

      <div className="mt-6 flex items-baseline justify-between gap-6 border-t border-stone/50 pt-4">
        <span className="label">{area.index}</span>
        <span className="label text-right">
          <span className="sr-only">Practised at: </span>
          {companies.join(" · ")}
        </span>
      </div>

      <h3 className="mt-5 font-display text-display-md text-ink">{area.title}</h3>

      <p className="mt-4 max-w-[46ch] text-lede text-muted">{area.excerpt}</p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {area.practices.map((practice) => (
          <li
            key={practice}
            className="label rounded-full border border-stone/60 px-3.5 py-2 text-ink"
          >
            {practice}
          </li>
        ))}
      </ul>
    </article>
  );
}
