import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { breadcrumbSchema, buildMetadata, faqSchema, jsonLdScript, serviceSchema, webPageSchema } from "@/lib/seo";
import { getService, serviceCategories } from "@/lib/site";
import { Container, Eyebrow, Heading, Section } from "@/components/Section";
import { FAQ } from "@/components/FAQ";
import { ContactForm } from "@/components/ContactForm";

function howToSchema(service: { title: string; description: string; slug: string; process: { title: string; text: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How to get started with ${service.title}`,
    description: service.description,
    totalTime: "P14D",
    step: service.process.map((step, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: step.title,
      text: step.text,
    })),
  };
}

export function generateStaticParams() {
  return serviceCategories.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = serviceCategories.filter((s) => s.slug !== service.slug).slice(0, 3);
  const path = `/services/${service.slug}`;
  const schemas = [
    webPageSchema({ name: service.title, description: service.description, path }),
    serviceSchema({ name: service.title, description: service.description, path, serviceType: service.shortTitle }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
      { name: service.title, path },
    ]),
    faqSchema(service.faqs),
    ...(service.slug === "wikipedia-services" ? [howToSchema(service)] : []),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white">
        <div className="grid-lines">
          <Container className="py-20 md:py-28">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/65">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/services" className="hover:text-white">Services</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/85">{service.title}</li>
              </ol>
            </nav>
            <Eyebrow><span className="text-sky-300">Service</span></Eyebrow>
            <h1 className="font-display max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{service.heroTitle}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">{service.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy">Request a Free Consultation</Link>
              <Link href="/services" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10">All Services</Link>
            </div>
          </Container>
        </div>
      </section>
      {service.aeoSummary && (
        <Section className="border-b border-border bg-surface py-10 md:py-12">
          <Container>
            <div className="rounded-3xl border border-electric/15 bg-white p-6 shadow-sm md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">Quick answer</p>
              <p className="mt-3 max-w-4xl text-base leading-7 text-charcoal">{service.aeoSummary}</p>
            </div>
          </Container>
        </Section>
      )}
      <Section>
        <Container className="grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <Eyebrow>Overview</Eyebrow>
            <Heading>{service.title}</Heading>
            <p className="mt-4 text-lg leading-8 text-muted">{service.description}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {service.items.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-4 text-sm text-charcoal">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-electric" size={18} /> <span>{item}</span>
                </div>
              ))}
            </div>
            {service.slug === "wikipedia-services" && (
              <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/10 p-5 text-sm leading-6 text-charcoal">
                <strong>Important:</strong> Wikipedia consulting, Wikipedia page creation guidance, and Wikipedia editing services must follow independent editorial policies, notability guidelines, reliable sourcing requirements, and paid-contribution disclosure rules. MIQ Enterprises LLC does not guarantee publication or retention.
              </div>
            )}
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-navy">Start a Service Inquiry</h2>
            <p className="mt-2 text-sm text-muted">Tell us about your goals and we’ll respond with next steps.</p>
            <div className="mt-5"><ContactForm service={service.title} compact /></div>
          </div>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <Eyebrow>Benefits</Eyebrow>
            <Heading>Why clients choose this service</Heading>
            <ul className="mt-6 space-y-3">{service.benefits.map((b) => <li key={b} className="flex gap-3 text-muted"><CheckCircle2 className="mt-1 shrink-0 text-gold" size={18} />{b}</li>)}</ul>
          </div>
          <div>
            <Eyebrow>Deliverables</Eyebrow>
            <Heading>What this engagement can include</Heading>
            <ul className="mt-6 space-y-3">{service.deliverables.map((d) => <li key={d} className="flex gap-3 text-muted"><CheckCircle2 className="mt-1 shrink-0 text-electric" size={18} />{d}</li>)}</ul>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>Process</Eyebrow>
          <Heading>Our working process</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, i) => (
              <div key={step.title} className="rounded-2xl border border-border p-5">
                <div className="font-display text-sm font-semibold text-gold">0{i + 1}</div>
                <h3 className="mt-2 font-semibold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{step.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <Eyebrow>FAQ</Eyebrow>
            <Heading>Frequently asked questions</Heading>
            <p className="mt-4 text-muted">Clear answers to common questions about {service.title.toLowerCase()}.</p>
          </div>
          <FAQ items={service.faqs} />
        </Container>
      </Section>
      <Section>
        <Container>
          <Eyebrow>Related</Eyebrow>
          <Heading>Related services</Heading>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className="group rounded-2xl border border-border p-5 transition hover:border-electric/40 hover:shadow-sm">
                <h3 className="font-display font-semibold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-electric">Explore <ArrowRight size={16} className="transition group-hover:translate-x-0.5" /></span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
