import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      // Allow common AI/search crawlers to access public content for discovery/indexing.
      { userAgent: ["Googlebot", "Bingbot", "DuckDuckBot", "Applebot", "OAI-SearchBot"], allow: "/" },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
