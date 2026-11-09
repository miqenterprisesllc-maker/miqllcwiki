import { buildMetadata } from "@/lib/seo";
import { Container, Section } from "@/components/Section";

export const metadata = buildMetadata({ title: "Disclaimer", description: "Service and website disclaimer for MIQ Enterprises LLC.", path: "/disclaimer" });

export default function DisclaimerPage() {
  return (
    <Section><Container className="max-w-3xl"><h1 className="font-display text-4xl font-semibold text-navy">Disclaimer</h1><div className="mt-8 space-y-6 text-sm leading-7 text-muted">
      <p>The information provided on this website is for general informational purposes only. It does not constitute legal, financial, or guaranteed professional advice for every situation.</p>
      <p>MIQ Enterprises LLC makes reasonable efforts to present accurate and current information, but website content may change and may not reflect the most recent developments. Service outcomes depend on project scope, client inputs, platform rules, search algorithms, editorial decisions, and other external factors.</p>
      <p>Wikipedia consulting services are provided in accordance with an emphasis on independent editorial policies, notability requirements, reliable sourcing, neutrality, and paid-contribution disclosure. MIQ Enterprises LLC does not guarantee article creation, publication, approval, ranking, or retention.</p>
      <p>Any examples, process descriptions, or demonstration portfolio items are illustrative unless explicitly identified as verified client work provided with permission.</p>
    </div></Container></Section>
  );
}
