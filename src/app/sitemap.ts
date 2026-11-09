import type { MetadataRoute } from "next";
import { siteConfig, serviceCategories } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = "2026-11-09";
  const routes = ["", "/about", "/services", "/portfolio", "/blog", "/contact", "/privacy-policy", "/terms-and-conditions", "/disclaimer"].map((p) => ({ url: `${base}${p}`, lastModified }));
  const services = serviceCategories.map((s) => ({ url: `${base}/services/${s.slug}`, lastModified }));
  return [...routes, ...services];
}
