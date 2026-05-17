// Generator for /og/forgewing.png — run `npm run og:rebuild` to regenerate.
// Font lives in app/forgewing/_og_assets/ so we don't depend on a network fetch.
import { ImageResponse } from "next/og";
import fs from "node:fs";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Forgewing — Product Delivery Engine by VaultScaler";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const aniBuffer = fs.readFileSync(
    path.join(process.cwd(), "app/forgewing/ani-landing-transparent.png"),
  );
  const aniSrc = `data:image/png;base64,${aniBuffer.toString("base64")}`;

  const serifFont = fs.readFileSync(
    path.join(
      process.cwd(),
      "app/forgewing/_og_assets/DMSerifDisplay-Regular.ttf",
    ),
  );
  const sansFont = fs.readFileSync(
    path.join(process.cwd(), "app/forgewing/_og_assets/DMSans-Regular.ttf"),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          backgroundColor: "#1E3340",
          position: "relative",
          fontFamily: "DM Serif Display, serif",
        }}
      >
        {/* Parchment radial glow, upper-right */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "radial-gradient(circle at 78% 28%, rgba(232,213,181,0.22) 0%, rgba(232,213,181,0.08) 35%, rgba(232,213,181,0) 60%)",
          }}
        />

        {/* Ani mascot — anchored to right edge, partially cropped, sized so
            its leftmost visible wing pixel is well past the text column.
            Numbers chosen empirically; tweak right/width if Ani's silhouette changes. */}
        <div
          style={{
            position: "absolute",
            right: -500,
            top: 20,
            width: 1000,
            height: 1000,
            display: "flex",
          }}
        >
          <img
            src={aniSrc}
            width={600}
            height={600}
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Text column — left-anchored, capped width so the wordmark
            never grows into mascot territory. */}
        <div
          style={{
            position: "absolute",
            left: 80,
            top: 0,
            bottom: 0,
            width: 640,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: 124,
              color: "#E8732A",
              lineHeight: 1.0,
              letterSpacing: -1,
            }}
          >
            Forgewing
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: 40,
              color: "#E8D5B5",
              marginTop: 28,
              lineHeight: 1.1,
            }}
          >
            Product Delivery Engine
          </div>
          <div
            style={{
              fontFamily: "DM Sans",
              fontSize: 22,
              color: "#E8D5B5",
              marginTop: 18,
            }}
          >
            by VaultScaler
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "DM Serif Display",
          data: serifFont,
          style: "normal",
          weight: 400,
        },
        {
          name: "DM Sans",
          data: sansFont,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
