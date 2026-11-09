import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container, Eyebrow, Heading, Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Contact MIQ Enterprises LLC for a free consultation, service inquiry, or quote. Serving the United States and worldwide.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
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
