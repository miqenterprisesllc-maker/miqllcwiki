import type { Metadata } from "next";
import { siteConfig } from "./site";

export function buildMetadata({
  title,
  description,
  path = "/",
  keywords,
  type = "website",
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
}): Metadata {
  const url = new URL(path, siteConfig.url).toString();
  const fullTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`;
  return {
    title: fullTitle,
    description,
    ...(keywords?.length ? { keywords } : {}),
    alternates: {
      canonical: url,
      languages: { en: url, "x-default": url },
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.genericNames,
    url: siteConfig.url,
    logo: absoluteUrl("/favicon.svg"),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      "Worldwide",
    ],
    sameAs: [siteConfig.socials.facebook, siteConfig.socials.instagram, siteConfig.relatedSites.miqenterprises].filter(Boolean),
    knowsAbout: [
      "Wikipedia consulting",
      "Wikipedia page creation guidance",
      "Wikipedia notability assessment",
      "Wikipedia editing services",
      "Wikipedia policy compliance",
      "Search engine optimization",
      "Answer Engine Optimization",
      "Generative Engine Optimization",
      "Digital marketing",
      "Website development",
      "Online reputation management",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Worldwide Wikipedia Services & Consulting", url: absoluteUrl("/services/wikipedia-services") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO, AEO & GEO Digital Marketing", url: absoluteUrl("/services/seo-digital-marketing") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Development", url: absoluteUrl("/services/website-development") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Reputation Management", url: absoluteUrl("/services/online-reputation-management") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Branding & Creative Solutions", url: absoluteUrl("/services/branding-creative-solutions") } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business & Technology Solutions", url: absoluteUrl("/services/business-technology-solutions") } },
      ],
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        email: siteConfig.email,
        contactType: "sales",
        areaServed: ["US", "Worldwide"],
        availableLanguage: ["English", "en"],
      },
      {
        "@type": "ContactPoint",
        telephone: siteConfig.phone,
        contactType: "customer service",
        contactOption: "TollFree",
        areaServed: "Worldwide",
        availableLanguage: ["English"],
      },
    ],
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.genericNames,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  serviceType,
  areaServed = ["United States", "Worldwide"],
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  areaServed?: string | string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType: serviceType || name,
    url: absoluteUrl(path),
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed,
    audience: { "@type": "BusinessAudience", audienceType: "Companies, executives, organizations, and entrepreneurs worldwide" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl("/contact"),
      availableLanguage: ["English", "en"],
    },
  };
}

export function webPageSchema({
  name,
  description,
  path,
  type = "WebPage",
}: {
  name: string;
  description: string;
  path: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: "en-US",
  };
}
