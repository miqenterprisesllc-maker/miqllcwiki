import { breadcrumbSchema, buildMetadata, jsonLdScript, webPageSchema } from "@/lib/seo";
import { Container, Eyebrow, Section } from "@/components/Section";
import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Insights & Resources",
  description: "Insights and resources from MIQ Enterprises LLC on Wikipedia consulting, notability, SEO, AEO, GEO, digital visibility, branding, web strategy, and business technology.",
  path: "/blog",
  keywords: ["Wikipedia consulting insights", "Wikipedia notability guide", "AEO GEO SEO insights", ...siteConfig.wikipediaKeywords.slice(0, 6)],
});

const planned = [
  { title: "How to Evaluate Digital Service Partners", category: "Business", summary: "A practical guide to assessing scope, communication, transparency, and fit when selecting a digital services provider." },
  { title: "Website Foundations That Support Lead Generation", category: "Web", summary: "Key elements that help business websites communicate trust and convert qualified visitors into inquiries." },
  { title: "Responsible Wikipedia Consulting: What to Know", category: "Wikipedia", summary: "An overview of Wikipedia notability assessment, independent reliable sources, neutral point of view, conflict-of-interest disclosure, Articles for Creation considerations, and realistic expectations in Wikipedia consulting." },
];

export default function BlogPage() {
  const schemas = [
    webPageSchema({ name: "Insights & Resources", description: metadata.description || "", path: "/blog", type: "CollectionPage" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/blog" }]),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white"><div className="grid-lines"><Container className="py-20 md:py-24"><Eyebrow><span className="text-sky-300">Insights & Resources</span></Eyebrow><h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">Practical resources for digital credibility and growth</h1><p className="mt-5 max-w-2xl text-lg text-white/78">This section is structured for future articles and resource publishing. Subscribe to receive updates when new insights are available.</p></Container></div></section>
      <Section>
        <Container className="grid gap-5 md:grid-cols-3">
          {planned.map((p) => (
            <article key={p.title} className="rounded-3xl border border-border bg-white p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">{p.category}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-navy">{p.title}</h2>
              <p className="mt-2 text-xs font-medium text-muted">Planned resource</p>
              <p className="mt-3 text-sm leading-6 text-muted">{p.summary}</p>
            </article>
          ))}
        </Container>
      </Section>
      <Section className="pt-0"><Container><div className="rounded-3xl bg-navy p-8 text-white"><h2 className="font-display text-2xl font-semibold">Get updates</h2><p className="mt-2 text-white/72">Subscribe for new MIQ Enterprises insights.</p><div className="mt-5 max-w-xl"><NewsletterForm /></div></div></Container></Section>
    </>
  );
}
