import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/Section";

export const metadata = buildMetadata({ title: "Privacy Policy", description: "Privacy Policy for MIQ Enterprises LLC website inquiries and communications.", path: "/privacy-policy" });

export default function PrivacyPage() {
  return (
    <Section><Container className="max-w-3xl"><h1 className="font-display text-4xl font-semibold text-navy">Privacy Policy</h1><p className="mt-4 text-sm text-muted">Last updated: November 9, 2026</p><div className="mt-8 space-y-6 text-sm leading-7 text-muted">
      <p>This Privacy Policy explains how {siteConfig.name} may collect, use, and protect information submitted through this website. By using the site or submitting a form, you consent to the practices described here.</p>
      <div><h2 className="font-display text-xl font-semibold text-navy">Information we collect</h2><p className="mt-2">We may collect information you provide directly, such as your name, email address, phone number, company details, service interests, and message content. We may also collect limited technical data such as browser/device information and usage data through standard analytics tools if enabled.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">How we use information</h2><p className="mt-2">We use submitted information to respond to inquiries, provide consultations, evaluate service requests, communicate about services, improve the website, and maintain business records. We do not sell personal information.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Sharing</h2><p className="mt-2">Information may be shared with service providers that help operate the website, communications, analytics, or business systems, only as needed for those purposes, or when required by law.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Data security and retention</h2><p className="mt-2">We take reasonable measures to protect submitted information, but no online transmission or storage method is completely secure. Information is retained as needed for business, legal, and operational purposes.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Your choices</h2><p className="mt-2">You may contact us to request updates or ask questions about information you submitted. Marketing communications, if any, will include applicable opt-out options.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Contact</h2><p className="mt-2">For privacy questions, contact {siteConfig.name} at <a className="text-electric" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or {siteConfig.address.full}.</p></div>
    </div></Container></Section>
  );
}
