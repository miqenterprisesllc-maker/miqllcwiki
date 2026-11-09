import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { Container, Section } from "@/components/Section";

export const metadata = buildMetadata({ title: "Terms and Conditions", description: "Terms and Conditions for MIQ Enterprises LLC website and services inquiries.", path: "/terms-and-conditions" });

export default function TermsPage() {
  return (
    <Section><Container className="max-w-3xl"><h1 className="font-display text-4xl font-semibold text-navy">Terms and Conditions</h1><div className="mt-8 space-y-6 text-sm leading-7 text-muted">
      <p>These Terms and Conditions govern use of the {siteConfig.name} website. By accessing this site, you agree to these terms.</p>
      <div><h2 className="font-display text-xl font-semibold text-navy">Services and proposals</h2><p className="mt-2">Information on this website is provided for general informational purposes. Specific services, timelines, deliverables, fees, and responsibilities are defined in written proposals, statements of work, or agreements when applicable.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">No guarantees</h2><p className="mt-2">We do not guarantee specific rankings, publication outcomes, platform approvals, traffic levels, revenue, or third-party decisions. Results depend on scope, implementation, platform policies, competition, and factors outside our control. Wikipedia-related services are consulting-oriented and subject to independent editorial policies; publication and retention are never guaranteed.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Client responsibilities</h2><p className="mt-2">Clients are responsible for providing accurate information, timely approvals, and lawful materials. Clients must have rights to any content, assets, or data provided for use in a project.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Refunds and cancellations</h2><p className="mt-2">Refund, cancellation, and rescheduling terms, if applicable, are determined by the written agreement or proposal for the relevant service. Unless otherwise agreed in writing, work already performed, third-party costs, and committed resources may be non-refundable.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Intellectual property</h2><p className="mt-2">Website content, branding, and materials are owned by or licensed to {siteConfig.name} unless otherwise stated. Project-specific ownership and usage rights are addressed in the applicable agreement.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Limitation of liability</h2><p className="mt-2">To the maximum extent permitted by law, {siteConfig.name} is not liable for indirect, incidental, special, or consequential damages arising from use of this website or reliance on general information provided here.</p></div>
      <div><h2 className="font-display text-xl font-semibold text-navy">Contact</h2><p className="mt-2">Questions about these terms may be sent to <a className="text-electric" href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p></div>
    </div></Container></Section>
  );
}
