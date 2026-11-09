# Google Indexing Checklist — MIQ LLC (miqllcwiki.com)

**Goal:** Make important pages eligible for crawling and indexing. Indexing is controlled by Google; this checklist covers what you and the site must do correctly.

## 1. Codebase readiness (completed in repo)

- [x] No `noindex` on important pages; `not-found` uses `index: false, follow: true`.
- [x] `robots.txt` allows `/`, disallows `/api/`, references `https://miqllcwiki.com/sitemap.xml`.
- [x] `sitemap.xml` includes canonical URLs for static pages, service pages, and all 10 blog posts.
- [x] Canonical URLs set per page via metadata; `trailingSlash: false` configured.
- [x] Unique titles/meta descriptions on key pages; semantic headings; internal links.
- [x] JSON-LD present (Organization/WebSite sitewide; WebPage/Breadcrumb/FAQ/Service/ItemList/BlogPosting as applicable).
- [x] `llms.txt` and `llms-full.txt` published in `public/`.
- [x] HTTPS expected at canonical domain (`https://miqllcwiki.com`).
- [x] Production build passed.

## 2. Required actions (you/hosting/GSC — I cannot do these)

1. **Deploy the latest build** to the live `https://miqllcwiki.com` on Node.js-capable hosting (this app is not static-only). Do not overwrite production without backup.
2. **Verify live endpoints** (after deploy):
   - `https://miqllcwiki.com/robots.txt`
   - `https://miqllcwiki.com/sitemap.xml`
   - `https://miqllcwiki.com/` and key pages return `200` with correct canonical/indexable HTML.
3. **Google Search Console** (property must be verified): sitemap is already submitted (`Success`, 15 discovered before blog expansion). After deploy, use **Sitemaps** to confirm the updated sitemap is read and **URL Inspection** to request indexing for priority URLs.
4. **Priority URLs for URL Inspection** (request indexing after deploy; do not spam):
   - `https://miqllcwiki.com/`
   - `https://miqllcwiki.com/services`
   - `https://miqllcwiki.com/services/wikipedia-services`
   - `https://miqllcwiki.com/contact`
   - `https://miqllcwiki.com/about`
   - `https://miqllcwiki.com/blog`
   - All 10 blog posts:
     - `/blog/how-to-create-a-wikipedia-page-for-your-company`
     - `/blog/wikipedia-notability-requirements-explained`
     - `/blog/why-wikipedia-articles-get-deleted`
     - `/blog/reliable-sources-for-wikipedia`
     - `/blog/how-to-get-your-business-on-wikipedia`
     - `/blog/wikipedia-article-guidelines-for-businesses`
     - `/blog/wikipedia-conflict-of-interest-policy-explained`
     - `/blog/how-wikipedia-editors-review-articles`
     - `/blog/wikipedia-page-vs-company-website`
     - `/blog/common-wikipedia-submission-mistakes`
5. **Monitor GSC**: Page indexing/Coverage, Sitemaps, Enhancements, Core Web Vitals. Fix only real reported issues.
6. **Do not block crawling** via hosting rules, basic auth, firewall/country blocks, `X-Robots-Tag: noindex`, or mistaken robots directives.

## 3. What “correct to get indexed” does NOT mean

- No one can guarantee indexing, ranking, traffic, or timing.
- URL Inspection “Request Indexing” is a request; Google decides.
- Avoid duplicate/misleading content, fabricated claims, or manipulative structured data.

## 4. If pages are not indexed

Check in GSC: “Discovered – currently not indexed”, “Crawled – currently not indexed”, canonical chosen by Google, redirects, server errors, blocked resources, or low-value/duplicate signals. Resolve the specific cause shown by GSC; do not resubmit sitemaps unnecessarily.