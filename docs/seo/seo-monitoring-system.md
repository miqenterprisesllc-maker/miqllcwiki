# SEO Monitoring System

## Overview
This document outlines the SEO monitoring system for miqllcwiki.com. It covers what can be automated via Google Search Console API and what requires manual monitoring.

## Features to Monitor

### 1. Google Search Console Performance
**What to track:**
- Impressions, clicks, CTR, average position
- Top queries
- Top pages
- Countries, devices, search appearance
- Date ranges and trends

**Automation:** Via [Search Console API](https://developers.google.com/webmaster-tools/search-console-api-original/v3/how-tos/search_analytics) - requires OAuth/service account

### 2. Indexing Status
**What to track:**
- Pages indexed vs not indexed
- Coverage errors (Crawl errors, Server errors, Redirect errors)
- "Discovered - currently not indexed"
- "Crawled - currently not indexed"
- Excluded pages

**Automation:** Partial via API, full details in GSC UI

### 3. Sitemap Monitoring
**What to track:**
- Sitemap submission status
- Number of URLs discovered
- Sitemap errors
- Last read date

**Automation:** Via Search Console API

### 4. Core Web Vitals
**What to track:**
- LCP, FID/INP, CLS
- Mobile and desktop performance
- URLs needing improvement

**Automation:** Via [PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started) or CrUX API

### 5. Mobile Usability
**What to track:**
- Mobile usability errors
- Viewport issues
- Text too small, clickable elements too close

**Manual monitoring required via GSC**

### 6. Security Issues
**What to track:**
- Hacked content
- Malware
- Unwanted software
- Social engineering

**Critical - monitored by Google, alerts sent via email**

### 7. Broken Links/Redirects
**What to track:**
- 404 errors
- Redirect chains
- Soft 404s

**Can be monitored via GSC Coverage report and server logs**

## Implementation Options

### Option 1: Manual Weekly Review (Recommended to start)
Use the checklist in `indexing-checklist.md` and review GSC weekly.

### Option 2: Automated Monitoring Script
Create a script using Google APIs. Requires:
1. Service account credentials
2. Search Console API enabled
3. Appropriate permissions

**Sample structure:**
```typescript
// scripts/seo-monitor.ts
// Requires googleapis package and service account auth
// Tracks key metrics and can send alerts
```

### Option 3: Dashboard Integration
Integrate with tools like Google Looker Studio, or build custom dashboard.

## Alert Triggers
Set up alerts for:
- Sudden drop in clicks/impressions (>20% week over week)
- New coverage errors
- Sitemap failures
- Manual actions
- Security issues
- Core Web Vitals degradation

## Weekly SEO Report Template

Generate weekly reports including:
1. **Overview:** Clicks, impressions, CTR, average position (vs previous week)
2. **Top Performers:** Top 10 pages and queries
3. **Issues:** New errors/warnings
4. **Indexing:** Indexed pages count, new issues
5. **Action Items:** Prioritized fixes
6. **Recommendations:** Next steps

## Required Manual Authorization
The following require manual Google authorization/setup:
- Google Search Console property verification
- Search Console API OAuth/service account setup
- Adding service account to GSC property
- Email notification preferences
- Requesting indexing (manual action via UI or API with auth)

## Environment Variables Needed
```env
# For API access (if automated)
GOOGLE_CLIENT_EMAIL=...
GOOGLE_PRIVATE_KEY=...
GOOGLE_SEARCH_CONSOLE_SITE_URL=https://miqllcwiki.com

# For verification
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=...
NEXT_PUBLIC_BING_SITE_VERIFICATION=...
```

**Never commit credentials to version control.**

## Monitoring Schedule
- **Daily:** Check for critical alerts (security/manual actions)
- **Weekly:** Review performance, coverage, and Core Web Vitals
- **Monthly:** Comprehensive SEO audit review, competitor analysis
- **Quarterly:** Strategy review and updates
