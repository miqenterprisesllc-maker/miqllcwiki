import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import { jsonLdScript, organizationSchema, webSiteSchema } from "@/lib/seo";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1b33",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: {
    default: `${siteConfig.name} (MIQ) | Worldwide Wikipedia Consulting, SEO, AEO & GEO Services`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    ...siteConfig.genericNames,
    "worldwide Wikipedia consulting",
    "international Wikipedia consultant",
    "Wikipedia page creation service",
    "Wikipedia notability assessment",
    "Wikipedia editing services",
    "hire Wikipedia editor worldwide",
    "SEO services",
    "Answer Engine Optimization",
    "AEO",
    "Generative Engine Optimization",
    "GEO",
    "digital marketing",
    "website development",
    "online reputation management",
  ],
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      "x-default": siteConfig.url,
    },
  },
  openGraph: {
    title: `${siteConfig.name} (MIQ) | Worldwide Wikipedia Consulting & Digital Services`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} (MIQ) | Worldwide Wikipedia Consulting & Digital Services`,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION } }
    : {}),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  category: "technology",
  formatDetection: { telephone: false, email: false, address: false },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-background text-foreground antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(webSiteSchema())} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
