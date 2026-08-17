const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** "2025-08" → "Aug 2025" */
export function formatMonthYear(value: string): string {
  const [year, month] = value.split("-");
  const index = Number(month) - 1;
  return `${MONTHS[index] ?? ""} ${year}`.trim();
}

/** "2025-08" → "2025" */
export function yearOf(value: string): string {
  return value.slice(0, 4);
}

/** Full range for the role header, e.g. "Aug 2025 — Present". */
export function formatRange(start: string, end: string | null): string {
  return `${formatMonthYear(start)} — ${end ? formatMonthYear(end) : "Present"}`;
}

/** Compact range for the timeline gutter, e.g. "2025 —" or "2021 — 2024". */
export function formatYearRange(start: string, end: string | null): string {
  const from = yearOf(start);
  if (!end) return `${from} —`;
  const to = yearOf(end);
  return from === to ? from : `${from} — ${to}`;
}

/** Machine-readable value for <time dateTime>. */
export function dateTimeRange(start: string, end: string | null): string {
  return end ? `${start}/${end}` : start;
}
