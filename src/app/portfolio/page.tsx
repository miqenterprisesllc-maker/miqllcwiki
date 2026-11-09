import Link from "next/link";
import { breadcrumbSchema, buildMetadata, jsonLdScript, webPageSchema } from "@/lib/seo";
import { Container, Eyebrow, Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Portfolio",
  description: "MIQ Enterprises LLC portfolio categories including Wikipedia consulting, Wikipedia notability assessment, SEO, AEO, GEO, website development, branding, and digital marketing. Demonstration items are clearly labeled when applicable.",
  path: "/portfolio",
  keywords: ["Wikipedia consulting portfolio", "Wikipedia notability assessment process", "SEO AEO GEO", ...siteConfig.wikipediaKeywords.slice(0, 6)],
});

const categories = ["Wikipedia Consulting", "Website Development", "SEO, AEO & GEO", "Branding", "Digital Marketing"];
const samples = [
  { category: "Website Development", title: "Corporate Service Website Concept", type: "Demonstration project", summary: "A premium, conversion-focused website structure designed for a professional services brand, emphasizing trust, clarity, and mobile responsiveness." },
  { category: "SEO, AEO & GEO", title: "Search & Answer Visibility Planning Framework", type: "Demonstration project", summary: "An example planning workflow covering technical review, keyword/entity intent mapping, direct-answer content opportunities, structured data guidance, and measurement priorities." },
  { category: "Branding", title: "Brand Identity System Concept", type: "Demonstration project", summary: "A sample identity direction with logo usage, typography, color strategy, and marketing asset consistency for a B2B service company." },
  { category: "Wikipedia Consulting", title: "Wikipedia Notability & Source Review Process", type: "Service process example", summary: "An illustrative Wikipedia consulting workflow for evaluating independent reliable sources, notability guidelines, neutral drafting considerations, conflict-of-interest disclosure, and editorial policy risks. No publication outcomes are implied." },
  { category: "Digital Marketing", title: "Multi-Channel Growth Roadmap", type: "Demonstration project", summary: "A sample campaign planning structure aligning content, search, and social touchpoints with lead generation goals." },
];

export default function PortfolioPage() {
  const schemas = [
    webPageSchema({ name: "Portfolio", description: metadata.description || "", path: "/portfolio", type: "CollectionPage" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Portfolio", path: "/portfolio" }]),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white"><div className="grid-lines"><Container className="py-20 md:py-24"><Eyebrow><span className="text-sky-300">Portfolio</span></Eyebrow><h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">Work categories and representative project examples</h1><p className="mt-5 max-w-2xl text-lg text-white/78">Verified client work can be added as it is supplied. Demonstration projects and process examples are clearly labeled and do not represent fabricated testimonials, client logos, or performance statistics.</p></Container></div></section>
      <Section>
        <Container>
          <div className="flex flex-wrap gap-2">{categories.map((c) => <span key={c} className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-charcoal">{c}</span>)}</div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {samples.map((s) => (
              <article key={s.title} className="rounded-3xl border border-border bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">{s.category}</p>
                <h2 className="mt-2 font-display text-xl font-semibold text-navy">{s.title}</h2>
                <p className="mt-2 inline-flex rounded-full bg-gold/12 px-2.5 py-1 text-xs font-medium text-charcoal">{s.type}</p>
                <p className="mt-4 text-sm leading-6 text-muted">{s.summary}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-3xl bg-navy p-8 text-white"><h2 className="font-display text-2xl font-semibold">Have a project in mind?</h2><p className="mt-2 text-white/72">Contact MIQ Enterprises LLC for a consultation and a service recommendation tailored to your goals.</p><Link href="/contact" className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy">Start a Conversation</Link></div>
        </Container>
      </Section>
    </>
  );
}
