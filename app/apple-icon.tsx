import { ImageResponse } from "next/og";
import { OG_SERIF, loadOgFont } from "@/lib/og-fonts";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** At 180px there is room for the full monogram. */
export default async function AppleIcon() {
  const serif = await loadOgFont(OG_SERIF);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#14110E",
          color: "#F7F4EF",
          fontFamily: "Instrument Serif",
          fontSize: 96,
          letterSpacing: -2,
          paddingBottom: 12,
        }}
      >
        BP
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: serif, weight: 400, style: "normal" }] },
  );
}
