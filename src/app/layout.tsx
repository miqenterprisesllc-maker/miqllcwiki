import type { Metadata, Viewport } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { GoogleAnalytics } from "@/components/GoogleAnalytics";
import { Header } from "@/components/Header";
import { WhatsAppHelpButton } from "@/components/WhatsAppHelpButton";
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

const verification = {
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION
    ? { yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION }
    : {}),
  ...(process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
    ? { other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION } }
    : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  title: {
    default: `${siteConfig.name} | Worldwide Wikipedia Consulting, SEO, AEO & GEO`,
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
    title: `${siteConfig.name} | Worldwide Wikipedia Consulting & Editorial Guidance`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Worldwide Wikipedia Consulting & Editorial Guidance`,
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
  ...(Object.keys(verification).length ? { verification } : {}),
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
        <GoogleAnalytics />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(organizationSchema())} />
        <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(webSiteSchema())} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppHelpButton />
      </body>
    </html>
  );
}
