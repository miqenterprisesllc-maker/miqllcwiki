import Link from "next/link";
import { Container, Section } from "@/components/Section";
export default function NotFound() {
  return (
    <Section><Container className="max-w-2xl text-center"><h1 className="font-display text-4xl font-semibold text-navy">Page not found</h1><p className="mt-4 text-muted">The page you’re looking for doesn’t exist or may have moved.</p><Link href="/" className="mt-6 inline-flex rounded-full bg-navy px-5 py-3 text-sm font-semibold text-white">Return home</Link></Container></Section>
  );
}
