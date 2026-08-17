import { ImageResponse } from "next/og";
import { OG_SANS, OG_SERIF, loadOgFont } from "@/lib/og-fonts";
import { SITE_URL } from "@/lib/site";

/** Bare host for the card footer, so a domain change updates the artwork too. */
const displayDomain = SITE_URL.replace(/^https?:\/\//, "").replace(/\/$/, "");

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt =
  "Brittany Pepe — Brand Manager & Digital Marketing, Miami, Florida";

const IVORY = "#F7F4EF";
const INK = "#14110E";
const STONE = "#A8A29A";
const MUTED = "#5F5A54";
const OXBLOOD = "#6B2737";

/**
 * Share card built from the same palette and type as the site, so a link
 * preview reads as part of the identity rather than a screenshot of it.
 */
export default async function OpenGraphImage() {
  const [serif, sans] = await Promise.all([
    loadOgFont(OG_SERIF),
    loadOgFont(OG_SANS),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: IVORY,
          padding: 72,
          fontFamily: "Geist",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `1px solid ${STONE}`,
            paddingTop: 28,
          }}
        >
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Miami, Florida
          </span>
          <span
            style={{
              fontSize: 20,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: MUTED,
            }}
          >
            Portfolio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <div style={{ display: "flex", width: 28, height: 28, backgroundColor: OXBLOOD }} />
            <span
              style={{
                fontFamily: "Instrument Serif",
                fontSize: 156,
                lineHeight: 1,
                color: INK,
              }}
            >
              Brittany Pepe
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: `1px solid ${STONE}`,
            paddingTop: 28,
          }}
        >
          <span
            style={{
              fontSize: 26,
              letterSpacing: 5,
              textTransform: "uppercase",
              color: INK,
            }}
          >
            Brand Manager &amp; Digital Marketing
          </span>
          <span
            style={{
              fontFamily: "Instrument Serif",
              fontSize: 30,
              fontStyle: "italic",
              color: MUTED,
            }}
          >
            {displayDomain}
          </span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Geist", data: sans, style: "normal", weight: 400 },
      ],
    },
  );
}
