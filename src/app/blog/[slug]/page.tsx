import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { FAQ } from "@/components/FAQ";
import { Container, Eyebrow, Section } from "@/components/Section";
import { articleSchema, breadcrumbSchema, buildMetadata, jsonLdScript, webPageSchema } from "@/lib/seo";
import { blogPosts, getBlogPost } from "@/lib/blog";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    type: "article",
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const path = `/blog/${post.slug}`;
  const schemas = [
    webPageSchema({ name: post.title, description: post.description, path, type: "WebPage" }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Insights", path: "/blog" },
      { name: post.title, path },
    ]),
    articleSchema({
      headline: post.title,
      description: post.description,
      path,
      datePublished: post.datePublished,
      dateModified: post.dateModified,
      keywords: post.keywords,
      faq: post.faqs,
    }),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(schema)} />
      ))}
      <section className="hero-grid text-white">
        <div className="grid-lines">
          <Container className="py-20 md:py-24">
            <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/65">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/blog" className="hover:text-white">Insights</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white/85">{post.title}</li>
              </ol>
            </nav>
            <Eyebrow><span className="text-sky-300">{post.category} Guide</span></Eyebrow>
            <h1 className="font-display max-w-4xl text-4xl font-semibold md:text-5xl">{post.title}</h1>
            <p className="mt-5 max-w-3xl text-lg text-white/78">{post.summary}</p>
            <p className="mt-4 text-sm text-white/60">Published {post.datePublished} · Updated {post.dateModified}</p>
          </Container>
        </div>
      </section>

      <Section>
        <Container className="grid gap-10 lg:grid-cols-[.28fr_.72fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-3xl border border-border bg-surface p-5">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-electric">On this page</p>
              <ul className="mt-4 space-y-2 text-sm text-muted">
                {post.sections.map((section) => (
                  <li key={section.id}><a href={`#${section.id}`} className="hover:text-navy">{section.heading}</a></li>
                ))}
                {post.faqs?.length ? <li><a href="#faqs" className="hover:text-navy">Frequently asked questions</a></li> : null}
                <li><a href="#references" className="hover:text-navy">References</a></li>
              </ul>
            </div>
          </aside>

          <article className="max-w-3xl">
            {post.sections.map((section) => (
              <section key={section.id} id={section.id} className="mb-10 scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">{section.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-muted">
                  {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
              </section>
            ))}

            {post.faqs?.length ? (
              <section id="faqs" className="mb-10 scroll-mt-28">
                <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">Frequently asked questions</h2>
                <div className="mt-5"><FAQ items={post.faqs} /></div>
              </section>
            ) : null}

            <section id="references" className="mb-10 scroll-mt-28 rounded-3xl border border-border bg-surface p-6">
              <h2 className="font-display text-2xl font-semibold text-navy">References</h2>
              <p className="mt-3 text-sm leading-6 text-muted">External references are provided for general guidance. Wikipedia policies and community practices can change, so review the current source pages before making decisions.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {post.references.map((ref) => (
                  <li key={ref.href}>
                    <a href={ref.href} target="_blank" rel="noopener noreferrer" className="text-electric hover:underline">{ref.label}</a>
                  </li>
                ))}
              </ul>
            </section>

            {post.cta ? (
              <div className="rounded-3xl bg-navy p-7 text-white">
                <p className="text-lg font-semibold">{post.cta.text}</p>
                <Link href={post.cta.href} className="mt-4 inline-flex items-center gap-1 rounded-full bg-white px-5 py-3 text-sm font-semibold text-navy">
                  {post.cta.label} <ArrowRight size={16} />
                </Link>
              </div>
            ) : null}
          </article>
        </Container>
      </Section>
    </>
  );
}
