import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema, buildMetadata, itemListSchema, jsonLdScript, webPageSchema } from "@/lib/seo";
import { serviceCategories, siteConfig } from "@/lib/site";
import { Container, Eyebrow, Section } from "@/components/Section";

export const metadata = buildMetadata({
  title: "Services: Wikipedia Consulting, SEO, AEO, GEO & Digital Solutions",
  description: "Explore MIQ Enterprises LLC services including Wikipedia consulting, Wikipedia page creation guidance, notability assessment, Wikipedia editing, SEO, AEO, GEO, website development, reputation management, branding, and business technology solutions.",
  path: "/services",
  keywords: [
    ...siteConfig.wikipediaKeywords,
    "SEO services",
    "AEO",
    "GEO",
    "website development",
    "online reputation management",
    "branding",
    "business technology solutions",
  ],
});

export default function ServicesPage() {
  const schemas = [
    webPageSchema({ name: "Services", description: metadata.description || "", path: "/services", type: "CollectionPage" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]),
    itemListSchema(
      serviceCategories.map((service) => ({
        name: service.title,
        path: `/services/${service.slug}`,
        description: service.description,
      })),
      "MIQ Enterprises services",
    ),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white"><div className="grid-lines"><Container className="py-20 md:py-24"><Eyebrow><span className="text-sky-300">Our Services</span></Eyebrow><h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">Wikipedia consulting, AEO/GEO, and premium digital services</h1><p className="mt-5 max-w-2xl text-lg text-white/78">MIQ Enterprises LLC delivers focused solutions across Wikipedia consulting and policy-aware page guidance, SEO/AEO/GEO, web development, reputation, branding, and technology.</p></Container></div></section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {serviceCategories.map((s) => (
            <div key={s.slug} className="flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">{s.shortTitle}</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-navy">{s.title}</h2>
              <p className="mt-3 text-sm leading-6 text-muted">{s.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-charcoal">{s.items.slice(0, 4).map((i) => <li key={i}>• {i}</li>)}</ul>
              <Link href={`/services/${s.slug}`} className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-navy">View service <ArrowRight size={16} /></Link>
            </div>
          ))}
        </Container>
      </Section>
    </>
  );
}
