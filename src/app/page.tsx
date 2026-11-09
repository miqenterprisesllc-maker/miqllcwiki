import Link from "next/link";
import { ArrowRight, BarChart3, Globe2, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { breadcrumbSchema, buildMetadata, faqSchema, jsonLdScript, webPageSchema } from "@/lib/seo";
import { serviceCategories, siteConfig } from "@/lib/site";
import { Container, Eyebrow, Heading, Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { FAQ } from "@/components/FAQ";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = buildMetadata({
  title: "Wikipedia Specialists & Consulting Services",
  description: "MIQ LLC provides Wikipedia consulting, notability research, article preparation guidance, editorial support, and policy-aware Wikipedia-related services for clients in the USA, UK, and worldwide.",
  path: "/",
  keywords: [
    ...siteConfig.wikipediaKeywords,
    "Wikipedia specialists",
    "Wikipedia consulting services",
    "Wikipedia notability research",
    "Wikipedia article preparation",
    "Wikipedia editorial guidance",
    "SEO",
    "AEO",
    "GEO",
  ],
});

const pillars = [
  { icon: ShieldCheck, title: "Trustworthy delivery", text: "Professional communication, clear scope, and responsible service practices." },
  { icon: Globe2, title: "International approach", text: "Digital solutions designed for US and worldwide audiences." },
  { icon: Sparkles, title: "Premium execution", text: "Modern design, strategic thinking, and technology-driven implementation." },
];

const homeFaqs = [
  {
    q: "What Wikipedia services does MIQ Enterprises provide?",
    a: "MIQ Enterprises LLC provides Wikipedia consulting services including Wikipedia notability assessment, citation and reliable source research, Wikipedia article writing guidance, neutral draft planning, Wikipedia editing support, Articles for Creation (AfC) process guidance, conflict-of-interest disclosure guidance, and Wikipedia page maintenance recommendations.",
  },
  {
    q: "What are AEO and GEO?",
    a: "AEO (Answer Engine Optimization) structures content so answer engines can extract clear, direct responses. GEO (Generative Engine Optimization) improves entity clarity, topical authority, and trustworthy signals so generative AI systems can understand and cite content accurately. MIQ Enterprises applies both alongside strong SEO fundamentals.",
  },
  {
    q: "Does MIQ Enterprises guarantee Wikipedia publication or #1 rankings?",
    a: "No. MIQ Enterprises LLC does not guarantee Wikipedia publication, approval, retention, rankings, or AI citations. Wikipedia decisions are made by independent editors, and search/AI systems control their own results. We focus on ethical, research-driven, best-practice guidance.",
  },
];

export default function Home() {
  const schemas = [
    webPageSchema({ name: metadata.title?.toString() || siteConfig.name, description: siteConfig.description, path: "/" }),
    breadcrumbSchema([{ name: "Home", path: "/" }]),
    faqSchema(homeFaqs),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid overflow-hidden text-white">
        <div className="grid-lines">
          <Container className="grid gap-10 py-20 md:grid-cols-[1.1fr_.9fr] md:py-28">
            <div>
              <p className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-sky-200">International Digital Services & Technology Solutions</p>
              <h1 className="mt-5 font-display max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Wikipedia Consulting, AEO/GEO Visibility & Digital Growth</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">MIQ LLC delivers professional Wikipedia consulting, Wikipedia page creation guidance, notability assessment, editorial support, and related digital services for clients in the United States, United Kingdom, and worldwide.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy hover:bg-slate-100">Get a Free Consultation</Link>
                <Link href="/services" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">Explore Our Services</Link>
              </div>
              <p className="mt-6 text-sm text-white/60">{siteConfig.tagline}</p>
            </div>
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-2xl backdrop-blur">
                <div className="flex items-center justify-between"><span className="text-sm font-semibold text-sky-200">Digital Growth Framework</span><BarChart3 className="text-gold" size={20} /></div>
                <div className="mt-6 space-y-3">
                  {[["Credibility", "Wikipedia consulting, reputation, brand trust"], ["Visibility", "SEO, content, AI search, digital marketing"], ["Conversion", "Web development, lead capture, user experience"], ["Scale", "Automation, AI integration, technology consulting"]].map(([t, d]) => (
                    <div key={t} className="rounded-2xl border border-white/10 bg-navy/35 p-4">
                      <div className="font-display font-semibold">{t}</div>
                      <div className="mt-1 text-sm text-white/68">{d}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
          <div>
            <Eyebrow>Company Introduction</Eyebrow>
            <Heading>International digital solutions with a premium standard</Heading>
          </div>
          <div className="text-lg leading-8 text-muted">
            <p>MIQ LLC is an international digital solutions company committed to helping businesses establish credibility, improve online visibility, and grow through innovative digital services.</p>
            <p className="mt-4">We work with entrepreneurs, business owners, executives, organizations, startups, and established companies seeking a professional partner for strategy, design, marketing, and technology execution.</p>
          </div>
        </Container>
        <Container className="mt-10 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-3xl border border-border bg-surface p-6">
              <p.icon className="text-electric" />
              <h3 className="mt-4 font-display text-xl font-semibold text-navy">{p.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{p.text}</p>
            </div>
          ))}
        </Container>
      </Section>

      <Section className="bg-surface" id="services">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div><Eyebrow>Our Services</Eyebrow><Heading>Specialized services for modern business growth</Heading></div>
            <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-navy">View all services <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {serviceCategories.map((s, i) => {
              const icons = [Layers3, BarChart3, Globe2, ShieldCheck, Sparkles, Workflow];
              const Icon = icons[i] || Layers3;
              return (
                <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-3xl border border-border bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-electric/30 hover:shadow-md">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-navy text-white"><Icon size={20} /></div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-navy">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{s.description}</p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-electric">Explore service <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></span>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-8 lg:grid-cols-[.95fr_1.05fr]">
          <div className="rounded-3xl bg-navy p-8 text-white md:p-10">
            <Eyebrow><span className="text-gold">Why MIQ Enterprises</span></Eyebrow>
            <h2 className="font-display text-3xl font-semibold tracking-tight">A premium partner for credibility and digital performance</h2>
            <ul className="mt-6 space-y-4 text-sm leading-6 text-white/75">
              <li><strong className="text-white">Client-focused strategy.</strong> Services are aligned with your goals, audience, and practical constraints.</li>
              <li><strong className="text-white">Responsible consulting.</strong> We communicate clearly, especially for policy-sensitive services such as Wikipedia consulting.</li>
              <li><strong className="text-white">Modern execution.</strong> We combine design, SEO, technology, and conversion thinking into cohesive solutions.</li>
              <li><strong className="text-white">Global mindset.</strong> Serving clients across the United States and worldwide with a professional digital-first approach.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
            <Eyebrow>Free Consultation</Eyebrow>
            <Heading>Request a quote or consultation</Heading>
            <p className="mt-3 text-muted">Share your goals and we’ll help identify the right service path.</p>
            <div className="mt-6"><ContactForm compact /></div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <Heading>Common questions about Wikipedia consulting, AEO & GEO</Heading>
            <p className="mt-4 text-muted">Direct answers to common questions about our Wikipedia services and modern search visibility approach.</p>
          </div>
          <FAQ items={homeFaqs} />
        </Container>
      </Section>

      <Section className="bg-navy text-white">
        <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <Eyebrow><span className="text-gold">Insights</span></Eyebrow>
            <h2 className="font-display text-3xl font-semibold">Subscribe for practical digital insights</h2>
            <p className="mt-3 text-white/72">Receive updates when MIQ Enterprises publishes resources on Wikipedia consulting, AEO, GEO, visibility, and technology.</p>
          </div>
          <div><NewsletterForm /></div>
        </Container>
      </Section>
    </>
  );
}
