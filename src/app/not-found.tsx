import type { Metadata } from "next";
import Link from "next/link";
import { Container, Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <Section>
      <Container className="max-w-2xl text-center">
        <h1 className="font-display text-4xl font-semibold text-navy">Page not found</h1>
        <p className="mt-4 text-muted">The page you’re looking for doesn’t exist or may have moved.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Return home</Link>
          <Link href="/services/wikipedia-services" className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy">Wikipedia Services</Link>
          <Link href="/contact" className="inline-flex rounded-full border border-border px-5 py-3 text-sm font-semibold text-navy">Contact</Link>
        </div>
      </Container>
    </Section>
  );
}
