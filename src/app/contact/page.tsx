import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { breadcrumbSchema, buildMetadata, jsonLdScript, webPageSchema } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container, Eyebrow, Heading, Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5a4.25 4.25 0 0 0 4.25 4.25h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5a4.25 4.25 0 0 0-4.25-4.25h-8.5Zm8.88 1.94a1.13 1.13 0 1 1 0 2.25 1.13 1.13 0 0 1 0-2.25ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    </svg>
  );
}

export const metadata = buildMetadata({
  title: `Contact ${siteConfig.name} – Wikipedia Consulting Services`,
  description: `Contact ${siteConfig.name} (${siteConfig.legalName}) for Wikipedia consulting, notability research, article preparation guidance, and editorial support. Serving clients in the USA, UK, and worldwide.`,
  path: "/contact",
  keywords: [`contact ${siteConfig.name}`, "Wikipedia consulting services", "Wikipedia notability research", "Wikipedia article preparation", "Wikipedia editorial guidance", ...siteConfig.wikipediaKeywords.slice(0, 6)],
});

export default function ContactPage() {
  const schemas = [
    webPageSchema({ name: `Contact ${siteConfig.name}`, description: metadata.description || "", path: "/contact", type: "ContactPage" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }]),
  ];
  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white"><div className="grid-lines"><Container className="py-20 md:py-24"><Eyebrow><span className="text-sky-300">Contact Us</span></Eyebrow><h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">Let’s discuss your digital goals</h1><p className="mt-5 max-w-2xl text-lg text-white/78">Request a free consultation, ask about a service, or send project details. We serve clients in the United States and worldwide.</p></Container></div></section>
      <Section>
        <Container className="grid gap-8 lg:grid-cols-[.85fr_1.15fr]">
          <div className="rounded-3xl border border-border bg-surface p-6 md:p-8">
            <Heading>Get in touch</Heading>
            <p className="mt-3 text-muted">Use the form or reach us directly. Phone and WhatsApp are available at the same number.</p>
            <div className="mt-6 space-y-4 text-sm">
              <a href={siteConfig.phoneHref} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-charcoal border border-border"><Phone className="text-electric" size={18} /><span><strong className="block text-navy">Phone</strong>{siteConfig.phone}</span></a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 text-charcoal border border-border"><MessageCircle className="text-electric" size={18} /><span><strong className="block text-navy">WhatsApp</strong>{siteConfig.phone} (available on WhatsApp)</span></a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 rounded-2xl bg-white p-4 text-charcoal border border-border"><Mail className="text-electric" size={18} /><span><strong className="block text-navy">Email</strong>{siteConfig.email}</span></a>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-4 text-charcoal border border-border"><MapPin className="mt-0.5 text-electric" size={18} /><span><strong className="block text-navy">Address</strong>{siteConfig.address.full}</span></div>
              <a href={siteConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 text-charcoal border border-border"><span className="text-electric"><FacebookIcon /></span><span><strong className="block text-navy">Facebook</strong>Follow MIQ Enterprises on Facebook</span></a>
              <a href={siteConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-2xl bg-white p-4 text-charcoal border border-border"><span className="text-electric"><InstagramIcon /></span><span><strong className="block text-navy">Instagram</strong>@miqenterprisesllc</span></a>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-white p-6 shadow-sm md:p-8">
            <h2 className="font-display text-2xl font-semibold text-navy">Free consultation / inquiry form</h2>
            <p className="mt-2 text-sm text-muted">Share your requirements and we’ll follow up with relevant next steps.</p>
            <div className="mt-6"><ContactForm /></div>
          </div>
        </Container>
      </Section>
    </>
  );
}
