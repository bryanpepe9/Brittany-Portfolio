import { ImageResponse } from "next/og";
import { OG_SERIF, loadOgFont } from "@/lib/og-fonts";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/** Single serif letterform — "BP" is unreadable at 16px, "B" holds. */
export default async function Icon() {
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
          fontSize: 26,
          paddingBottom: 3,
        }}
      >
        B
      </div>
    ),
    { ...size, fonts: [{ name: "Instrument Serif", data: serif, weight: 400, style: "normal" }] },
  );
}
