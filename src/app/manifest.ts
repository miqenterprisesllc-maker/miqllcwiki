import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "MIQ",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b1b33",
    theme_color: "#0b1b33",
    lang: "en-US",
    categories: ["business", "consulting", "marketing", "technology"],
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
