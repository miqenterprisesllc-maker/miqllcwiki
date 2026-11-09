export const siteConfig = {
  name: "MIQ Enterprises LLC",
  shortName: "MIQ Enterprises",
  tagline: "Your Vision. Our Digital Expertise.",
  headline: "Building Digital Authority. Empowering Business Growth.",
  description:
    "MIQ Enterprises LLC is an international digital services and technology solutions company delivering professional Wikipedia consulting, digital marketing, website development, branding, reputation management, and business technology solutions.",
  url: "https://miqenterprises.com",
  email: "info@miqenterprises.com",
  phone: "+1 (914) 730-2443",
  phoneHref: "tel:+19147302443",
  whatsapp: "https://wa.me/19147302443",
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
};

export type ServiceCategory = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  heroTitle: string;
  heroText: string;
  deliverables: string[];
  benefits: string[];
  process: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    slug: "wikipedia-services",
    title: "Wikipedia Services",
    shortTitle: "Wikipedia",
    description:
      "Professional Wikipedia consulting focused on research, policy awareness, neutral drafting, and responsible page maintenance guidance.",
    heroTitle: "Wikipedia Consulting with Policy-Aware Guidance",
    heroText:
      "We provide Wikipedia consulting services grounded in independent editorial policies, notability standards, reliable sourcing, and paid-contribution disclosure requirements.",
    items: [
      "Wikipedia Article Creation Consultancy",
      "Wikipedia Article Writing",
      "Wikipedia Editing",
      "Wikipedia Notability Research",
      "Wikipedia Citation Research",
      "Wikipedia Page Maintenance",
      "Wikipedia Policy Consultation",
    ],
    deliverables: [
      "Notability and topic assessment based on independent reliable sources",
      "Source research and citation recommendations",
      "Neutral, policy-aware draft or edit guidance",
      "Disclosure and conflict-of-interest guidance for paid contributions",
      "Page maintenance recommendations and editorial review support",
    ],
    benefits: [
      "Clear understanding of Wikipedia expectations before work begins",
      "Research-driven approach focused on verifiability",
      "Responsible guidance aligned with community policies",
      "Transparent communication about eligibility and risks",
    ],
    process: [
      { title: "Discovery", text: "We review your goals, background, and available public information." },
      { title: "Notability Research", text: "We assess independent reliable sources and evaluate whether the topic may meet Wikipedia standards." },
      { title: "Source & Draft Planning", text: "We organize citations and recommend neutral, verifiable content structure." },
      { title: "Consultation & Review", text: "We provide policy-aware guidance, revisions, and next-step recommendations." },
    ],
    faqs: [
      { q: "Do you guarantee Wikipedia publication or retention?", a: "No. Wikipedia decisions are made by independent editors and are subject to community policies. We do not guarantee publication, approval, or retention." },
      { q: "Do you follow paid-contribution disclosure rules?", a: "Yes. Our consulting approach emphasizes transparency and compliance with Wikipedia's paid-contribution disclosure and conflict-of-interest expectations." },
      { q: "What do you need to start?", a: "We typically need background information, goals, and any relevant independent coverage or source materials for an initial assessment." },
    ],
  },
  {
    slug: "seo-digital-marketing",
    title: "SEO & Digital Marketing",
    shortTitle: "SEO & Marketing",
    description:
      "Data-informed SEO and digital marketing strategies designed to improve visibility, attract qualified audiences, and support sustainable growth.",
    heroTitle: "SEO and Digital Marketing Built for Growth",
    heroText:
      "MIQ Enterprises LLC helps businesses improve search visibility and digital reach through strategic SEO, content, and marketing solutions tailored to your goals.",
    items: [
      "Search Engine Optimization",
      "Local SEO",
      "Technical SEO",
      "AI Search Optimization",
      "Social Media Marketing",
      "Content Marketing",
      "Keyword Research",
      "Competitor Analysis",
      "Link Building Strategy",
    ],
    deliverables: [
      "SEO audit and prioritized recommendations",
      "Keyword and competitor research",
      "On-page and technical optimization guidance",
      "Content strategy aligned with search intent",
      "Performance tracking recommendations",
    ],
    benefits: [
      "Stronger organic visibility strategy",
      "Better alignment between content and customer intent",
      "Actionable insights from research and audits",
      "Marketing foundations that scale with your business",
    ],
    process: [
      { title: "Audit", text: "We evaluate your current presence, technical health, and opportunities." },
      { title: "Strategy", text: "We define target audiences, keywords, and a practical roadmap." },
      { title: "Implementation Support", text: "We deliver optimization guidance, content plans, and campaign recommendations." },
      { title: "Measurement", text: "We help you track meaningful metrics and refine strategy over time." },
    ],
    faqs: [
      { q: "Can you guarantee #1 rankings?", a: "No ethical provider can guarantee specific rankings. We focus on best practices, quality improvements, and measurable progress." },
      { q: "Do you work with US and international audiences?", a: "Yes. Strategies can be tailored for US and international markets based on your goals and available information." },
      { q: "What is AI search optimization?", a: "It involves structuring clear, authoritative, and helpful content so your expertise can be better understood across modern search experiences." },
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
