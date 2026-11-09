import { buildMetadata } from "@/lib/seo";
import { Container, Eyebrow, Heading, Section } from "@/components/Section";
import { siteConfig } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Us",
  description: "Learn about MIQ Enterprises LLC, our mission, values, and client-focused approach to international digital services and technology solutions.",
  path: "/about",
});

const values = [
  ["Quality", "We prioritize professional standards, clarity, and dependable execution."],
  ["Integrity", "We communicate honestly about scope, timelines, and platform or policy constraints."],
  ["Innovation", "We apply modern tools and digital strategies to solve practical business needs."],
  ["Client Focus", "We align recommendations with each client’s goals, audience, and stage of growth."],
  ["Accountability", "We take responsibility for transparent process and service professionalism."],
];

export default function AboutPage() {
  return (
    <>
      <section className="hero-grid text-white"><div className="grid-lines"><Container className="py-20 md:py-24"><Eyebrow><span className="text-sky-300">About {siteConfig.name}</span></Eyebrow><h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">A client-focused digital services company serving the US and worldwide</h1><p className="mt-5 max-w-2xl text-lg text-white/78">{siteConfig.headline}</p></Container></div></section>
      <Section>
        <Container className="grid gap-10 lg:grid-cols-2">
          <div><Eyebrow>Overview</Eyebrow><Heading>Who we are</Heading><p className="mt-4 leading-7 text-muted">MIQ Enterprises LLC is an international digital services and technology solutions company. We help entrepreneurs, executives, organizations, startups, and established businesses strengthen credibility, improve visibility, and build effective digital systems.</p><p className="mt-4 leading-7 text-muted">Our services span Wikipedia consulting, SEO and digital marketing, website development, online reputation management, branding and creative solutions, and business technology consulting. We focus on practical, professional outcomes and clear communication.</p></div>
          <div className="rounded-3xl border border-border bg-surface p-8"><Eyebrow>Mission & Vision</Eyebrow><h3 className="font-display text-xl font-semibold text-navy">Mission</h3><p className="mt-2 text-muted">To help clients build trusted digital authority and achieve sustainable growth through professional, innovative, and ethical digital solutions.</p><h3 className="mt-6 font-display text-xl font-semibold text-navy">Vision</h3><p className="mt-2 text-muted">To be a globally trusted partner for businesses seeking premium digital services, modern technology adoption, and credible online presence.</p></div>
        </Container>
      </Section>
      <Section className="bg-surface">
        <Container><Eyebrow>Values</Eyebrow><Heading>What guides our work</Heading><div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{values.map(([t, d]) => <div key={t} className="rounded-2xl border border-border bg-white p-5"><h3 className="font-display font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-6 text-muted">{d}</p></div>)}</div></Container>
      </Section>
      <Section>
        <Container className="grid gap-6 md:grid-cols-3">
          {[["Service philosophy", "We combine strategy, design, and technology with transparent guidance so clients can make informed decisions."], ["Commitment to quality", "Every engagement is approached with attention to detail, usability, performance, and professional presentation."], ["International approach", "We serve clients across the United States and worldwide through a digital-first, responsive service model."]].map(([t, d]) => <div key={t} className="rounded-2xl border border-border p-6"><h3 className="font-display text-lg font-semibold text-navy">{t}</h3><p className="mt-2 text-sm leading-6 text-muted">{d}</p></div>)}
        </Container>
      </Section>
    </>
  );
}
