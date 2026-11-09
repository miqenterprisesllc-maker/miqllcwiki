export const siteConfig = {
  name: "MIQ Enterprises LLC",
  shortName: "MIQ Enterprises",
  tagline: "Your Vision. Our Digital Expertise.",
  headline: "Building Digital Authority. Empowering Business Growth.",
  description:
    "MIQ Enterprises LLC is an international digital services and technology solutions company delivering professional Wikipedia consulting, Wikipedia page creation guidance, Wikipedia editing and notability research, digital marketing, website development, branding, reputation management, and business technology solutions for clients in the United States and worldwide.",
  url: "https://miqenterprises.com",
  email: "info@miqenterprises.com",
  phone: "+1 (914) 730-2443",
  phoneHref: "tel:+19147302443",
  whatsapp: "https://wa.me/19147302443",
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61573317345036",
    instagram: "https://www.instagram.com/miqenterprisesllc/",
  },
  address: {
    street: "15442 Ventura Blvd, Ste 201-1756",
    city: "Sherman Oaks",
    region: "CA",
    postalCode: "91403",
    country: "US",
    full: "15442 Ventura Blvd, Ste 201-1756, Sherman Oaks, CA 91403",
  },
  locale: "en_US",
  market: "United States and Worldwide",
  /** Researched keyword themes used across metadata/content for AEO & GEO. */
  wikipediaKeywords: [
    "worldwide Wikipedia consulting",
    "international Wikipedia consultant",
    "Wikipedia consulting",
    "Wikipedia consultant",
    "Wikipedia page creation",
    "Wikipedia page creation service",
    "create a Wikipedia page",
    "Wikipedia page creation agency worldwide",
    "Wikipedia editing services",
    "Wikipedia editor",
    "hire a Wikipedia editor",
    "hire Wikipedia editor worldwide",
    "Wikipedia writing service",
    "Wikipedia article writing",
    "Wikipedia notability assessment",
    "Wikipedia notability research",
    "Wikipedia notability guidelines",
    "Wikipedia page maintenance",
    "Wikipedia monitoring",
    "Wikipedia citation research",
    "Wikipedia policy consultation",
    "conflict of interest disclosure",
    "paid contribution disclosure",
    "neutral point of view",
    "reliable independent sources",
    "Articles for Creation",
    "Wikipedia draft creation",
    "company Wikipedia page",
    "biography Wikipedia page",
    "Wikidata",
    "USA and worldwide Wikipedia services",
  ],
};

export type ServiceCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroTitle: string;
  heroText: string;
  aeoSummary?: string;
  keywords?: string[];
  deliverables: string[];
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "wikipedia-services",
    title: "Worldwide Wikipedia Services & Consulting",
    shortTitle: "Wikipedia",
    description:
      "Worldwide Wikipedia consulting, Wikipedia page creation guidance, Wikipedia editing services, notability assessment, citation research, and policy-aware page maintenance for companies, brands, executives, and organizations in the United States and internationally.",
    heroTitle: "Worldwide Wikipedia Consulting, Page Creation Guidance & Editing Services",
    heroText:
      "MIQ Enterprises LLC provides worldwide Wikipedia consulting services for businesses and public figures, including Wikipedia notability research, reliable source assessment, neutral article drafting guidance, Wikipedia editing support, conflict-of-interest disclosure guidance, and responsible Wikipedia page maintenance for US and international clients.",
    aeoSummary:
      "Worldwide Wikipedia consulting helps eligible subjects in the United States and internationally understand whether they meet Wikipedia notability guidelines and how to approach Wikipedia page creation, Wikipedia article writing, or Wikipedia editing responsibly. A legitimate process starts with independent reliable sources, uses a neutral point of view, follows paid-contribution disclosure rules, and does not guarantee publication or retention because final decisions are made by independent Wikipedia editors.",
    keywords: [
      "worldwide Wikipedia consulting",
      "international Wikipedia consultant",
      "Wikipedia consulting",
      "Wikipedia consultant",
      "Wikipedia page creation",
      "Wikipedia page creation service",
      "Wikipedia page creation agency worldwide",
      "create a Wikipedia page",
      "Wikipedia page writing service",
      "Wikipedia article writing",
      "Wikipedia editing services",
      "Wikipedia editor",
      "hire a Wikipedia editor",
      "hire Wikipedia editor worldwide",
      "Wikipedia notability assessment",
      "Wikipedia notability research",
      "Wikipedia notability consultant",
      "Wikipedia citation research",
      "Wikipedia page maintenance",
      "Wikipedia monitoring",
      "Wikipedia policy consultation",
      "Articles for Creation",
      "AfC submission",
      "Wikipedia draft creation",
      "neutral point of view",
      "conflict of interest disclosure",
      "paid contribution disclosure",
      "reliable independent sources",
      "company Wikipedia page",
      "biography Wikipedia page",
      "Wikidata consulting",
      "Wikipedia services USA and worldwide",
    ],
    items: [
      "Wikipedia Page Creation Consultancy",
      "Wikipedia Article Writing & Neutral Drafting Guidance",
      "Wikipedia Editing & Content Updates",
      "Wikipedia Notability Assessment & Research",
      "Wikipedia Citation & Reliable Source Research",
      "Articles for Creation (AfC) Process Guidance",
      "Wikipedia Page Maintenance & Monitoring",
      "Wikipedia Policy & Conflict-of-Interest Consultation",
      "Company, Brand & Biography Wikipedia Page Guidance",
    ],
    deliverables: [
      "Wikipedia notability assessment based on independent, reliable secondary sources",
      "Source research, citation recommendations, and coverage gap analysis",
      "Neutral, encyclopedic, policy-aware draft or edit guidance",
      "Paid-contribution and conflict-of-interest disclosure guidance",
      "Articles for Creation (AfC) and editorial process recommendations where applicable",
      "Wikipedia page maintenance, monitoring, and update recommendations",
      "Clear next-step plan, including when more independent coverage may be needed",
    ],
    benefits: [
      "Clear understanding of Wikipedia notability guidelines before investing in page creation",
      "Research-driven approach focused on verifiability and neutral point of view (NPOV)",
      "Responsible Wikipedia consulting aligned with community and editorial policies",
      "Transparent communication about eligibility, sourcing gaps, and risks",
      "Support for companies, executives, organizations, and public figures seeking credible guidance",
    ],
    process: [
      { title: "Discovery & Goals", text: "We review your background, objectives, existing public profile, and whether you need Wikipedia page creation, editing, notability research, or policy consultation." },
      { title: "Notability & Source Assessment", text: "We evaluate independent reliable sources against Wikipedia notability standards, identify citation gaps, and determine whether the subject may be ready for a Wikipedia article or needs stronger third-party coverage." },
      { title: "Drafting, Citations & Policy Guidance", text: "We organize verifiable sources and provide neutral, encyclopedic drafting or Wikipedia editing guidance with attention to reliable sourcing, neutrality, and conflict-of-interest considerations." },
      { title: "Review, Disclosure & Maintenance", text: "We recommend compliant next steps, including paid-contribution disclosure guidance, Articles for Creation considerations where relevant, and ongoing Wikipedia page maintenance or monitoring recommendations." },
    ],
    faqs: [
      {
        q: "What is Wikipedia consulting?",
        a: "Wikipedia consulting is a professional service that helps individuals, companies, and organizations understand Wikipedia notability guidelines, reliable source requirements, neutral point of view, conflict-of-interest rules, and the appropriate process for Wikipedia page creation, article writing, editing, or page maintenance. A responsible Wikipedia consultant provides research and policy-aware guidance; they do not control independent Wikipedia editorial decisions.",
      },
      {
        q: "Can anyone get a Wikipedia page?",
        a: "No. A subject generally needs significant coverage in reliable, independent secondary sources to meet Wikipedia notability guidelines. Press releases, paid placements, company websites, social profiles, and routine announcements usually do not establish notability on their own. MIQ Enterprises LLC starts with a notability and source assessment before recommending Wikipedia page creation or drafting work.",
      },
      {
        q: "Do you guarantee Wikipedia publication or page retention?",
        a: "No. MIQ Enterprises LLC does not guarantee Wikipedia publication, approval, ranking, or retention. Wikipedia articles are reviewed and maintained by independent volunteer editors under community policies. Our role is to provide ethical, research-driven Wikipedia consulting, notability assessment, citation research, and policy-aware drafting or editing guidance.",
      },
      {
        q: "Do you follow Wikipedia paid-contribution and conflict-of-interest disclosure rules?",
        a: "Yes. Our Wikipedia consulting approach emphasizes transparency and alignment with Wikipedia paid-contribution disclosure and conflict-of-interest expectations. When paid editing or compensated contributions are involved, disclosure and policy-compliant processes should be followed. We provide guidance to help clients understand these obligations.",
      },
      {
        q: "What sources does Wikipedia consider reliable for notability?",
        a: "Wikipedia generally looks for significant coverage in reliable, independent secondary sources such as reputable newspapers, magazines, books, academic publications, and editorially controlled media. The sources should be independent of the subject. Self-published content, press releases, sponsored content, and routine business announcements are usually weak evidence of notability for Wikipedia page creation.",
      },
      {
        q: "What Wikipedia services do you provide?",
        a: "MIQ Enterprises LLC provides Wikipedia consulting services including Wikipedia notability assessment, citation and source research, Wikipedia article writing guidance, neutral draft planning, Wikipedia editing support, Articles for Creation (AfC) process guidance, policy consultation, conflict-of-interest guidance, and Wikipedia page maintenance or monitoring recommendations.",
      },
      {
        q: "Do you provide worldwide Wikipedia consulting for international clients?",
        a: "Yes. MIQ Enterprises LLC provides worldwide Wikipedia consulting for clients in the United States and internationally. We support Wikipedia notability assessment, independent source research, neutral drafting guidance, Wikipedia editing support, conflict-of-interest disclosure guidance, and policy-aware recommendations across time zones through a digital-first process.",
      },
      {
        q: "How do I start a Wikipedia page creation or notability assessment?",
        a: "To start, share your goals, background, and any independent media coverage or reliable sources related to the person, company, or organization. MIQ Enterprises LLC can review the available information, assess Wikipedia notability, identify source gaps, and recommend whether to proceed with Wikipedia page creation guidance, editing, or additional source development for US or worldwide needs.",
      },
    ],
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    shortTitle: "SEO & Marketing",
    description:
      "Data-informed SEO, AEO, GEO, and digital marketing strategies designed to improve visibility in traditional search, answer engines, and generative AI experiences.",
    heroTitle: "SEO, AEO & GEO Strategies Built for Growth",
    heroText:
      "MIQ Enterprises LLC helps businesses improve search visibility and digital reach through technical SEO, content strategy, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), and marketing solutions tailored to your goals.",
    aeoSummary:
      "SEO improves visibility in traditional search results. Answer Engine Optimization (AEO) structures content so direct questions get clear, extractable answers. Generative Engine Optimization (GEO) strengthens entity clarity, topical authority, and trustworthy signals so content can be accurately understood and cited across AI-powered search experiences. Effective AEO and GEO build on strong SEO fundamentals: crawlable pages, helpful content, clear structure, and accurate information.",
    keywords: [
      "SEO services",
      "search engine optimization",
      "Answer Engine Optimization",
      "AEO",
      "Generative Engine Optimization",
      "GEO",
      "AI search optimization",
      "technical SEO",
      "local SEO",
      "content marketing",
      "keyword research",
      "search intent",
      "digital marketing strategy",
    ],
    items: [
      "Search Engine Optimization (SEO)",
      "Answer Engine Optimization (AEO)",
      "Generative Engine Optimization (GEO)",
      "AI Search Optimization",
      "Local SEO",
      "Technical SEO",
      "Content Marketing & Search Intent Strategy",
      "Keyword & Entity Research",
      "Competitor Analysis",
      "Link Building Strategy",
    ],
    deliverables: [
      "SEO, AEO, and GEO audit with prioritized recommendations",
      "Keyword, entity, and competitor research",
      "On-page, technical, and structured-data guidance",
      "Content strategy aligned with search intent and direct-answer opportunities",
      "Performance tracking recommendations for search and visibility metrics",
    ],
    benefits: [
      "Stronger organic visibility across search experiences",
      "Content structured for users, answer engines, and generative AI systems",
      "Better alignment between expertise, entities, and customer intent",
      "Actionable insights from research, audits, and measurement",
    ],
    process: [
      { title: "Audit", text: "We evaluate your current presence, technical health, content structure, entity signals, and visibility opportunities." },
      { title: "Strategy", text: "We define target audiences, keywords, entities, and a practical roadmap for SEO, AEO, and GEO." },
      { title: "Implementation Support", text: "We deliver optimization guidance, content plans, schema recommendations, and campaign direction." },
      { title: "Measurement", text: "We help you track meaningful metrics and refine strategy over time across search experiences." },
    ],
    faqs: [
      { q: "Can you guarantee #1 rankings or AI citations?", a: "No. Ethical providers cannot guarantee specific rankings, answer placement, or AI citations. Search engines and AI systems control their own results. MIQ Enterprises LLC focuses on best practices: helpful content, technical quality, clear structure, entity clarity, and measurable progress." },
      { q: "What are AEO and GEO?", a: "AEO (Answer Engine Optimization) focuses on structuring content so answer engines can extract clear, direct responses to user questions. GEO (Generative Engine Optimization) focuses on making your expertise, entities, and supporting evidence easier for generative AI systems to understand and cite accurately. Both work best when built on strong SEO fundamentals." },
      { q: "Do you work with US and international audiences?", a: "Yes. SEO, AEO, and GEO strategies can be tailored for US and international markets based on your goals, audience, language, and available information." },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Web Development",
    description:
      "Modern, responsive, and performance-focused websites designed to communicate trust and convert visitors into inquiries.",
    heroTitle: "Professional Websites That Build Trust",
    heroText:
      "We design and develop business websites, landing pages, and scalable web experiences with a focus on usability, performance, and conversion.",
    items: [
      "Business Website Development",
      "WordPress Development",
      "E-commerce Development",
      "Landing Page Design",
      "Custom Website Development",
      "Website Redesign",
      "Website Maintenance",
      "Domain & Hosting Assistance",
    ],
    deliverables: [
      "Responsive UI/UX design and development",
      "Conversion-focused page structure",
      "SEO-ready technical foundations",
      "Contact and lead capture integrations",
      "Launch support and maintenance recommendations",
    ],
    benefits: [
      "Professional digital presence for your brand",
      "Mobile-first experience for modern users",
      "Clear pathways for leads and inquiries",
      "Scalable foundation for future growth",
    ],
    process: [
      { title: "Planning", text: "We define goals, audience, sitemap, and required features." },
      { title: "Design", text: "We create a premium visual direction and user-focused layouts." },
      { title: "Development", text: "We build responsive, accessible, and optimized pages." },
      { title: "Launch & Support", text: "We test, refine, and prepare the site for deployment." },
    ],
    faqs: [
      { q: "Will my website be mobile-friendly?", a: "Yes. Responsive, mobile-first design is a core requirement for our web projects." },
      { q: "Can you redesign an existing website?", a: "Yes. We can modernize structure, design, messaging, and performance based on your current site and objectives." },
      { q: "Do you provide ongoing maintenance?", a: "Maintenance options can be discussed based on your platform, scope, and support needs." },
    ],
  },
  {
    slug: "online-reputation-management",
    title: "Online Reputation Management",
    shortTitle: "Reputation",
    description:
      "Strategic reputation and visibility support to help individuals and businesses present a credible, professional online presence.",
    heroTitle: "Strengthen Your Digital Credibility",
    heroText:
      "We help clients improve brand visibility and manage their online presence with practical, ethical reputation strategies.",
    items: [
      "Personal Brand Development",
      "Corporate Reputation Strategy",
      "Online Presence Management",
      "Brand Visibility",
      "Search Engine Reputation Strategy",
      "Digital Brand Monitoring",
    ],
    deliverables: [
      "Online presence assessment",
      "Brand messaging and positioning recommendations",
      "Visibility and content strategy guidance",
      "Monitoring approach and reporting recommendations",
      "Priority action plan for reputation goals",
    ],
    benefits: [
      "Clearer and more credible digital presence",
      "Consistent messaging across platforms",
      "Proactive approach to visibility and trust",
      "Actionable priorities based on your goals",
    ],
    process: [
      { title: "Assessment", text: "We review public-facing assets, search presence, and brand signals." },
      { title: "Strategy", text: "We identify opportunities to improve clarity, authority, and visibility." },
      { title: "Execution Plan", text: "We recommend content, platform, and messaging actions." },
      { title: "Monitoring", text: "We define practical ways to track changes and maintain momentum." },
    ],
    faqs: [
      { q: "Can you remove negative content from the internet?", a: "We do not promise removal of third-party content. We focus on ethical strategies that improve visibility, credibility, and owned brand assets." },
      { q: "Is this service for individuals or companies?", a: "Both. We support entrepreneurs, executives, professionals, and organizations." },
      { q: "Do you offer monitoring?", a: "Yes. We can recommend digital brand monitoring approaches based on your needs and tools." },
    ],
  },
  {
    slug: "branding-creative-solutions",
    title: "Branding & Creative Solutions",
    shortTitle: "Branding",
    description:
      "Premium branding and creative assets that help businesses communicate clearly and present a consistent professional identity.",
    heroTitle: "Branding and Creative Assets with Impact",
    heroText:
      "From identity systems to marketing materials, we create visual and messaging assets that support a polished, trustworthy brand.",
    items: [
      "Professional Logo Design",
      "Brand Identity Development",
      "Graphic Design",
      "Business Profiles",
      "Corporate Presentations",
      "Social Media Graphics",
      "Marketing Materials",
    ],
    deliverables: [
      "Brand identity concepts and refinements",
      "Logo and visual asset deliverables",
      "Marketing and presentation design",
      "Consistent brand style recommendations",
      "Files prepared for digital and print use as needed",
    ],
    benefits: [
      "Consistent and professional brand presentation",
      "Creative assets aligned with business goals",
      "Improved recognition across channels",
      "Design that supports trust and credibility",
    ],
    process: [
      { title: "Brief", text: "We learn your audience, goals, and brand preferences." },
      { title: "Concept", text: "We develop creative directions and visual options." },
      { title: "Refinement", text: "We iterate based on feedback and selected direction." },
      { title: "Delivery", text: "We provide final assets and usage guidance." },
    ],
    faqs: [
      { q: "Do you create full brand identities?", a: "Yes. We can support logo design, visual direction, and related brand materials depending on project scope." },
      { q: "Can you design for social media and presentations?", a: "Yes. We create business profiles, presentations, social graphics, and marketing materials." },
      { q: "Will I receive usable files?", a: "Deliverables are defined per project and can include files suitable for digital and print applications." },
    ],
  },
  {
    slug: "business-technology-solutions",
    title: "Business & Technology Solutions",
    shortTitle: "Technology",
    description:
      "Practical technology and consulting solutions that help businesses streamline processes, generate leads, and adopt modern tools.",
    heroTitle: "Business Technology Solutions for Modern Teams",
    heroText:
      "We support business growth with digital consulting, automation, AI integration guidance, and technology solutions aligned with operational needs.",
    items: [
      "Lead Generation",
      "Business Automation",
      "AI Integration",
      "Google Business Profile Optimization",
      "Digital Consulting",
      "Business Process Optimization",
      "Technology Consulting",
    ],
    deliverables: [
      "Needs assessment and solution recommendations",
      "Process and workflow improvement plan",
      "Lead capture and optimization guidance",
      "Technology integration roadmap",
      "Implementation support based on agreed scope",
    ],
    benefits: [
      "More efficient digital workflows",
      "Better use of modern business tools",
      "Clearer path from inquiry to action",
      "Solutions aligned with practical business goals",
    ],
    process: [
      { title: "Assess", text: "We review your current process, tools, and challenges." },
      { title: "Plan", text: "We recommend practical improvements and implementation priorities." },
      { title: "Implement", text: "We support agreed solutions, integrations, or optimizations." },
      { title: "Optimize", text: "We refine workflows and identify future improvements." },
    ],
    faqs: [
      { q: "Do you provide custom AI integration?", a: "We provide AI integration guidance and implementation support based on your use case, tools, and project scope." },
      { q: "Can you help with lead generation systems?", a: "Yes. We can improve lead capture paths, forms, messaging, and digital touchpoints that support inquiry generation." },
      { q: "Is Google Business Profile optimization local-only?", a: "It is most relevant for businesses serving local areas. We recommend it only when it fits your business model." },
    ],
  },
];

export const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function getService(slug: string) {
  return serviceCategories.find((s) => s.slug === slug);
}
