import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = `${siteConfig.name} — Worldwide Wikipedia Consulting, Editorial Guidance & Digital Services`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #081427 0%, #0b1b33 55%, #10284d 100%)",
          color: "white",
          padding: "56px 64px",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "rgba(200,162,74,0.18)",
              border: "1px solid rgba(200,162,74,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 24,
              fontWeight: 700,
              color: "#c8a24a",
            }}
          >
            M
          </div>
          <div style={{ fontSize: 28, fontWeight: 700 }}>{siteConfig.shortName}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 58, fontWeight: 700, lineHeight: 1.08, maxWidth: 980 }}>
            Worldwide Wikipedia Consulting, SEO, AEO & GEO
          </div>
          <div style={{ fontSize: 26, color: "rgba(255,255,255,0.78)", maxWidth: 920, lineHeight: 1.35 }}>
            Notability assessment, policy-aware page guidance, and modern search visibility for US and worldwide clients.
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "rgba(255,255,255,0.62)" }}>
          <span>{siteConfig.url.replace("https://", "")}</span>
          <span>United States & Worldwide</span>
        </div>
      </div>
    ),
    { ...size },
  );
}