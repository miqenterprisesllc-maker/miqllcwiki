# Google Search Console Setup Guide - MIQ LLC

## Prerequisites
- Access to domain DNS settings (for domain property verification)
- Google account with admin access
- Access to website hosting/deployment

## Step 1: Create/Search Console Property

### Option A: Domain Property (Recommended)
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add property" → "Domain"
3. Enter: `miqllcwiki.com`
4. Click "Continue"

### Verification for Domain Property
You'll need to add a DNS TXT record to your domain:
1. Copy the TXT record provided by Google (e.g., `google-site-verification=...`)
2. Add this as a TXT record in your DNS provider
3. Click "Verify" in Search Console

*Note: DNS changes can take a few minutes to propagate.*

### Option B: URL-prefix Property
Alternatively use `https://miqllcwiki.com/` as URL-prefix property with HTML file, meta tag, or other methods.

## Step 2: Submit XML Sitemap

1. In Search Console, go to "Indexing" → "Sitemaps"
2. Add sitemap URL: `https://miqllcwiki.com/sitemap.xml`
3. Click "Submit"
4. Monitor status - should show "Success" with discovered pages

## Step 3: Request Indexing for Priority Pages

Use URL Inspection tool for these priority URLs:
- `https://miqllcwiki.com/`
- `https://miqllcwiki.com/services`
- `https://miqllcwiki.com/services/wikipedia-services`
- `https://miqllcwiki.com/about`
- `https://miqllcwiki.com/contact`
- `https://miqllcwiki.com/blog`

For each URL:
1. Enter URL in URL Inspection
2. Click "Test Live URL"
3. If page is indexable, click "Request Indexing"

## Step 4: Configure Email Notifications

1. Go to Search Console Settings (gear icon) → "Users and permissions"
2. Ensure your email has appropriate access
3. Google automatically sends emails for critical issues to verified owners
4. Check Settings → "Email preferences" if available

**Critical alerts to watch for:**
- Manual actions
- Security issues (hacked site, malware)
- Indexing errors
- Coverage issues
- Core Web Vitals issues
- Mobile usability issues

## Step 5: Add Verification to Website (Optional)

The site already supports verification via environment variables in `src/app/layout.tsx`:
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- `NEXT_PUBLIC_BING_SITE_VERIFICATION`
- `NEXT_PUBLIC_YANDEX_SITE_VERIFICATION`

Add to your hosting environment variables if using meta tag verification.

## Step 6: Set Up API Access (For Automated Monitoring)

To enable automated monitoring as requested:

### Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Google Search Console API"

### Create Service Account
1. Go to IAM & Admin → Service Accounts
2. Create service account
3. Download JSON key (NEVER commit this to git)
4. Add service account email as user in Search Console with "Full" or "Restricted" permissions

### Required Permissions
- Search Console API access
- Service account added to GSC property

**Security Notes:**
- Store credentials securely (environment variables)
- Never hardcode credentials
- Use least privilege principle
- Rotate keys periodically
