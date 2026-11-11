import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/blog";
import { serviceCategories, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date().toISOString();
  const routes: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
  const services: MetadataRoute.Sitemap = serviceCategories.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: s.slug === "wikipedia-services" ? 0.95 : 0.9,
  }));
  const posts: MetadataRoute.Sitemap = getBlogPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: post.dateModified || post.datePublished || now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));
  return [...routes, ...services, ...posts];
}
