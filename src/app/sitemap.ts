import type { MetadataRoute } from "next";
import { siteConfig, serviceCategories } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const lastModified = "2026-11-10";
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy-policy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-and-conditions`, lastModified, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
  const services: MetadataRoute.Sitemap = serviceCategories.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified,
    changeFrequency: "weekly",
    priority: s.slug === "wikipedia-services" ? 0.95 : 0.9,
  }));
  return [...routes, ...services];
}
