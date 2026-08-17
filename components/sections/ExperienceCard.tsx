import type { ExperienceRole } from "@/lib/types";
import { dateTimeRange, formatRange, formatYearRange } from "@/lib/format";
import { cn } from "@/lib/cn";

export function ExperienceCard({ role }: { role: ExperienceRole }) {
  const isCurrent = role.end === null;

  return (
    <li
      className={cn(
        "grid gap-y-6 border-t py-12 md:grid-cols-12 md:gap-x-10 md:py-16",
        role.featured ? "border-ink" : "border-stone/50",
      )}
    >
      {/* Sticky identity column — holds position while the detail scrolls past. */}
      <div className="md:col-span-5 lg:col-span-4">
        <div className="md:sticky md:top-28">
          <div className="flex items-center gap-3">
            <span className="label">{formatYearRange(role.start, role.end)}</span>
            {isCurrent ? (
              <span className="label rounded-full bg-oxblood px-2.5 py-1 text-ivory">
                Current
              </span>
            ) : null}
          </div>

          <h3
            className={cn(
              "mt-4 font-display leading-[0.95] text-ink",
              role.featured ? "text-display-lg" : "text-display-md",
            )}
          >
            {role.company}
          </h3>

          <p className="mt-3 text-lede leading-snug text-ink">{role.role}</p>

          <p className="label mt-4">
            <time dateTime={dateTimeRange(role.start, role.end)}>
              {formatRange(role.start, role.end)}
            </time>
            {role.location ? ` · ${role.location}` : ""}
          </p>

          <p className="label mt-2">{role.industry}</p>
        </div>
      </div>

      <div className="md:col-span-7 lg:col-span-7 lg:col-start-6">
        <p
          className={cn(
            "max-w-[52ch] font-display text-ink",
            role.featured ? "text-display-md" : "text-2xl leading-snug md:text-3xl",
          )}
        >
          {role.summary}
        </p>

        <ul className="mt-8 flex flex-col">
          {role.contributions.map((contribution) => (
            <li
              key={contribution}
              className="flex items-baseline gap-5 border-b border-stone/40 py-3.5"
            >
              <span
                aria-hidden="true"
                className="mt-2 size-1 shrink-0 rounded-full bg-oxblood"
              />
              <span className="max-w-[58ch] text-ink">{contribution}</span>
            </li>
          ))}
        </ul>

        {/*
          Verified results only. Nothing populates `metrics` today — the block
          stays out of the DOM entirely until real, publishable numbers exist.
        */}
        {role.metrics && role.metrics.length > 0 ? (
          <dl className="mt-10 grid gap-8 border-t border-stone/50 pt-8 sm:grid-cols-3">
            {role.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col gap-2">
                <dt className="label">{metric.label}</dt>
                <dd className="font-display text-display-md leading-none text-ink">
                  {metric.value}
                </dd>
                {metric.note ? (
                  <p className="text-sm text-muted">{metric.note}</p>
                ) : null}
              </div>
            ))}
          </dl>
        ) : null}
      </div>
    </li>
  );
}
