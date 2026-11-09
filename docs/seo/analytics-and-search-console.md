# Analytics, Search Console & Verification Setup (miqllcwiki.com)

This project is prepared for common Google SEO tools. **Do not insert fake tracking IDs.** Add account-specific IDs only after creating/verifying properties.

## 1. Google Search Console

- Property: https://search.google.com/search-console
- Sitemap already submitted per project status: `https://miqllcwiki.com/sitemap.xml`
- Use GSC to verify indexing, coverage, sitemaps, Core Web Vitals, and enhancement reports.
- For HTML-tag verification, set the environment variable and redeploy:

```env
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-google-verification-token
```

Optional Bing/Yandex verification (supported in `src/app/layout.tsx`):

```env
NEXT_PUBLIC_BING_SITE_VERIFICATION=your-msvalidate-token
NEXT_PUBLIC_YANDEX_SITE_VERIFICATION=your-yandex-token
```

## 2. Google Analytics (GA4)

- Property: https://analytics.google.com/
- The codebase includes an optional GA4 component: `src/components/GoogleAnalytics.tsx`.
- It renders **only** when a real measurement ID is provided:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Add the variable in your hosting environment (e.g., Vercel/CheapName deployment settings) and redeploy. Do not commit real IDs to public repositories if they are considered sensitive by your team policy.

## 3. PageSpeed Insights / Core Web Vitals

- Test: https://pagespeed.web.dev/
- Test key URLs: `/`, `/services`, `/services/wikipedia-services`, `/blog`, `/contact`.
- Use GSC Core Web Vitals and field data after traffic accumulates; lab PSI results are diagnostic.

## 4. Google Trends

- Research: https://trends.google.com/
- Use for query demand validation (e.g., "Wikipedia page creation", "Wikipedia notability", "Wikipedia consultant") across USA/UK/worldwide. Validate before creating new pages.

## 5. Rich Results Test

- Test: https://search.google.com/test/rich-results
- Validate pages with JSON-LD: Organization/WebSite (sitewide), WebPage/Breadcrumb/FAQ/Service (key pages), BlogPosting/Article (blog posts).
- Only mark up visible, accurate content. FAQ schema is used on pages with genuine FAQ sections.

## Deployment checklist

1. Set required env vars in production.
2. Deploy.
3. Confirm `https://miqllcwiki.com/robots.txt` and `https://miqllcwiki.com/sitemap.xml` are reachable.
4. Re-run URL Inspection in GSC for updated/new pages (blog posts) after deployment.
5. Monitor coverage/indexing reports; do not assume indexing without GSC confirmation.
