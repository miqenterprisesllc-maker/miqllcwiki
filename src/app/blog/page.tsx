import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { breadcrumbSchema, buildMetadata, itemListSchema, jsonLdScript, webPageSchema } from "@/lib/seo";
import { Container, Eyebrow, Section } from "@/components/Section";
import { NewsletterForm } from "@/components/NewsletterForm";
import { siteConfig } from "@/lib/site";
import { getBlogPosts } from "@/lib/blog";

export const metadata = buildMetadata({
  title: "Wikipedia Guides, Tips & Resources",
  description: `Wikipedia guides and resources from ${siteConfig.name} covering page creation, notability requirements, reliable sources, article guidelines, and responsible editorial process.`,
  path: "/blog",
  keywords: [
    "Wikipedia guides",
    "Wikipedia tips",
    "Wikipedia notability requirements",
    "how to create a Wikipedia page",
    "reliable sources for Wikipedia",
    ...siteConfig.wikipediaKeywords.slice(0, 5),
  ],
});

export default function BlogPage() {
  const posts = getBlogPosts();
  const schemas = [
    webPageSchema({ name: "Wikipedia Guides, Tips & Resources", description: metadata.description || "", path: "/blog", type: "CollectionPage" }),
    breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Insights", path: "/blog" }]),
    itemListSchema(
      posts.map((post) => ({ name: post.title, path: `/blog/${post.slug}`, description: post.description })),
      "Wikipedia guides and resources",
    ),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white">
        <div className="grid-lines">
          <Container className="py-20 md:py-24">
            <Eyebrow><span className="text-sky-300">Insights & Resources</span></Eyebrow>
            <h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">Wikipedia guides, tips, and editorial resources</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/78">Practical, policy-aware resources on Wikipedia page creation, notability, reliable sources, and responsible article preparation. These guides are informational and do not guarantee Wikipedia publication or retention.</p>
          </Container>
        </div>
      </section>

      <Section>
        <Container className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-3xl border border-border bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-electric">{post.category}</p>
              <h2 className="mt-2 font-display text-xl font-semibold text-navy">
                <Link href={`/blog/${post.slug}`} className="hover:text-electric">{post.title}</Link>
              </h2>
              <p className="mt-2 text-xs font-medium text-muted">Published {post.datePublished}</p>
              <p className="mt-3 text-sm leading-6 text-muted">{post.description}</p>
              <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-navy">
                Read guide <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </Container>
      </Section>

      <Section className="pt-0">
        <Container>
          <div className="rounded-3xl bg-navy p-8 text-white">
            <h2 className="font-display text-2xl font-semibold">Get updates</h2>
            <p className="mt-2 text-white/72">Subscribe for new MIQ Enterprises insights on Wikipedia consulting, SEO, AEO, GEO, and digital credibility.</p>
            <div className="mt-5 max-w-xl"><NewsletterForm /></div>
          </div>
        </Container>
      </Section>
    </>
  );
}
