import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Font data for `next/og`, read from disk rather than fetched.
 *
 * ImageResponse needs raw font bytes, which next/font cannot hand over — and
 * fetching Google Fonts at build time would make the build fail on a network
 * blip. The TTFs are vendored in app/fonts for exactly this reason.
 */
export async function loadOgFont(file: string): Promise<Buffer> {
  return readFile(join(process.cwd(), "app", "fonts", file));
}

export const OG_SERIF = "InstrumentSerif-Regular.ttf";
export const OG_SANS = "Geist-Regular.ttf";
