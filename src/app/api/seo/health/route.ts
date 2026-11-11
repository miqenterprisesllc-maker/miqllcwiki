import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

export async function GET() {
  return NextResponse.json({
    status: "ok",
    site: siteConfig.name,
    url: siteConfig.url,
    timestamp: new Date().toISOString(),
    checks: {
      sitemap: `${siteConfig.url}/sitemap.xml`,
      robots: `${siteConfig.url}/robots.txt`,
      llms: `${siteConfig.url}/llms.txt`,
    },
  });
}
