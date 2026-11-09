# MIQ LLC (miqllcwiki.com) — Production Deployment Guide

**Project:** `C:\Users\DELL\miq-enterprises`  
**Framework:** Next.js 16.4.5 (App Router), React 19.3, TypeScript, Tailwind  
**Public brand:** MIQ LLC  
**Legal entity:** MIQ Enterprises LLC  
**Canonical domain:** `https://miqllcwiki.com` (configured in `src/lib/site.ts`)

> **Important:** Do not deploy automatically, change DNS, overwrite production files, or delete existing project files without your explicit approval and a verified backup. This guide is preparation only.

## 1. Runtime requirements (confirmed from project)

| Requirement | Status in this project |
|---|---|
| Node.js | **Required** for full production deployment (`next start` / Node server). |
| Node version | **Use Node 20.9+ (LTS recommended).** Local verified build used Node `v24.22.0` / npm `11.19.1`. Next.js 16 and React 19 require a modern Node runtime; confirm the exact minimum supported by your installed `next@16.4.5` in the target environment before go-live. |
| `next build` | Required. |
| `next start` | Required for Option 1 (Node server). |
| API routes | **Present:** `src/app/api/contact/route.ts`, `src/app/api/newsletter/route.ts` (dynamic `POST` handlers). |
| Dynamic/SSR behavior | **Present:** build output includes dynamic routes (`ƒ`) and partial prerender/static+streaming routes (`◐`). `cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`. |
| Static export (`output: 'export'`) | **Not configured** and **not compatible as-is** because of API routes and server/dynamic behavior. |
| Environment variables | Required for real GA4 and verification tokens (see Section 4). |

## 2. CheapName hosting compatibility (assessment)

**I cannot verify your specific CheapName plan from this repository.** You must confirm capabilities with CheapName support or your hosting control panel.

### Likely compatibility by hosting type

| Hosting type | Compatible with this app as-is? | Why |
|---|---|---|
| Ordinary shared hosting serving `public_html` static files only (no Node process manager) | **No** | This app needs a Node.js runtime for `next start`, API routes (`/api/contact`, `/api/newsletter`), and Next server behavior. Uploading only static files will not run the application correctly. |
| CheapName/shared plan with **Node.js application support** (correct Node version, process manager, custom app root/port/proxy) | **Maybe — confirm first** | Only compatible if the plan supports the required Node version, persistent Node process, npm install/build (or deploy of built app), environment variables, HTTPS, and reverse proxy to the Next server. |
| VPS / cloud / dedicated server where you control Node | **Yes** | You can install Node 20.9+ (or required version), run build/start, set env vars, and configure Nginx/Apache reverse proxy + SSL. |

### Before choosing CheapName for Node deployment, confirm

1. Supported Node.js versions (must meet Next 16 requirements).
2. Can you run `npm install` and `npm run build` on the server (or deploy prebuilt output)?
3. Can you run `npm run start` / `next start` as a long-running process (PM2/passenger/app manager)?
4. Can you set environment variables securely?
5. Can you bind/proxy the app to your domain with HTTPS (port 80/443 via reverse proxy)?
6. Are there memory/CPU/time limits that could break builds or runtime?
7. Are filesystem permissions and deployment paths compatible?

## 3. Deployment options

### Option 1 — Full Next.js deployment on Node.js-supported hosting (recommended for this codebase)

**Use when:** The host supports Node.js, `next start`, env vars, and reverse proxy/SSL.

**Advantages**
- Preserves current functionality: API routes, metadata/OG generation, sitemap/robots routes, dynamic behavior, and future server features.
- No code rewrite required.
- Matches the current production build output.

**Limitations / requirements**
- Requires Node.js hosting (not plain static `public_html`).
- Needs process management (app must stay running) and correct restart on failure.
- Needs environment variables configured on the host.
- Contact/newsletter APIs currently validate input and log to server console (`console.info`) but do **not** persist to a database or send email/CRM notifications; integrate email/CRM/lead storage before relying on production lead capture.

**Build/start commands**
```bash
npm install
npm run build
npm run start
```

For CI/clean installs where lockfile is authoritative:
```bash
npm ci
npm run build
npm run start
```

**Typical runtime**
- `next start` listens on `PORT` (default `3000`). Set `PORT` if your host requires a specific port.
- Put Nginx/Apache/CheapName proxy in front of the Node process and terminate SSL at the proxy/platform.

### Option 2 — Static export (only after major rework; not compatible now)

**Use when:** You intentionally convert the app to a fully static site and accept feature loss/rework.

**Current blockers (must be removed/changed before static export)**
- API routes: `/api/contact`, `/api/newsletter` cannot run as Next server handlers on static hosting. Replace with a third-party form endpoint, serverless provider, or external backend.
- Dynamic/SSR/Next runtime features: review all `ƒ`/`◐` behavior, `cacheComponents`, `partialPrefetching`, headers behavior, and any server-only logic.
- Add and validate `output: 'export'` in `next.config.ts` only after compatibility work; `next export` behavior in modern Next.js depends on configuration and route support.

**Advantages**
- Can run on ordinary static hosting/CDN if fully static.
- Simple file serving, often lower runtime cost.

**Limitations**
- Requires development work and regression testing.
- Loses native Next API routes; forms need external handling.
- May limit future dynamic/server features.
- **Do not choose this as a quick upload path for the current app.**

## 4. Production environment variables

Configure real values only in the hosting environment. **Do not commit real tokens/IDs to git if they are sensitive. Do not use fake values.**

| Variable | Purpose | Required? |
|---|---|---|
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | GA4 Measurement ID (e.g., real `G-...` ID). GA script renders only when set. | Optional but recommended if using GA4 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Google Search Console HTML-tag verification token. | Optional (use if verifying via meta tag) |
| `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Bing Webmaster Tools verification token. | Optional |
| `NEXT_PUBLIC_YANDEX_SITE_VERIFICATION` | Yandex verification token. | Optional |
| `NODE_ENV` | Set to `production` on the host/runtime. | Recommended/usually automatic |
| `PORT` | Port for `next start` if host requires a specific port. | Depends on host |

## 5. Files/folders for deployment

### Option 1 (Node server) — recommended approach

Deploy the **application source** (or an approved CI artifact) to a Node-capable environment, then install/build/start there **or** deploy a controlled build artifact produced by the same Node/OS/dependency constraints.

**Include (typical):**
- `package.json`, `package-lock.json`
- `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `eslint.config.mjs` (as applicable)
- `src/`
- `public/` (includes `favicon.svg`, `llms.txt`, `llms-full.txt`, etc.)
- `docs/` (optional on server; useful for operators)

**Generated during build (do not hand-edit):**
- `.next/` — produced by `npm run build`; required at runtime for `next start`.
- `next-env.d.ts` — generated; can be regenerated.

**Do not upload as source artifacts:**
- `node_modules/` (install on server with `npm ci`/`npm install`) unless your host explicitly requires vendored dependencies and you have validated compatibility.
- `.git/` unless needed.

**Do not overwrite/delete on production without backup:** existing live files, env settings, DNS, SSL config, databases, or unrelated directories.

## 6. Domain, SSL/HTTPS

- Canonical site URL in code: `https://miqllcwiki.com` (`src/lib/site.ts`). Keep production domain/protocol consistent.
- Enable SSL/TLS and force HTTPS redirects at the proxy/host level.
- Ensure `robots.txt` and `sitemap.xml` resolve on the canonical HTTPS domain.
- Do **not** change DNS until you have verified the new deployment on a staging/preview target or approved cutover plan.

## 7. Quality assurance checklist (pre-go-live)

### Verified in repo/build (local)
- [x] `package.json` / Next config inspected.
- [x] Node/npm observed locally: Node `v24.22.0`, npm `11.19.1`.
- [x] `node_modules` and `package-lock.json` present.
- [x] TypeScript: `npx tsc --noEmit` passed.
- [x] ESLint (source): `npx eslint src --max-warnings=0` passed after fixing source issues.
- [x] Production build: `npm run build` passed.
- [x] Build output includes blog routes: 10 blog post routes generated (`+8 more paths` shown with 2 listed = 10 total blog slugs).
- [x] Source endpoints present: `src/app/sitemap.ts`, `src/app/robots.ts`, `public/llms.txt`, `public/llms-full.txt`.

### Must verify after production deploy (I cannot do this here)
- [ ] All routes load with correct HTTP status (200 for canonical pages, 404 for unknown).
- [ ] All 10 blog posts render and canonical tags point to correct URLs.
- [ ] Sitemap lists canonical URLs only and is reachable.
- [ ] Robots allows important content and references sitemap.
- [ ] Metadata/OG/Twitter tags on key pages.
- [ ] Rich Results Test for JSON-LD (Organization, WebSite, Breadcrumb, FAQ, Service, BlogPosting/Article as applicable).
- [ ] Contact form submits successfully in production environment (and lead handling/integration works as intended; current API logs only).
- [ ] Newsletter form behavior.
- [ ] Mobile responsiveness/manual QA on key templates.
- [ ] Broken-link crawl.
- [ ] PageSpeed Insights on key URLs.
- [ ] GSC URL Inspection / indexing status.

## 8. Backup and rollback

1. **Backup before any change:** current hosting files, `.env`/host env settings, web server/proxy config, SSL settings, DNS records (export/screenshot), and any data stores.
2. **Deploy to a staging path/subdomain first** if CheapName supports it.
3. **Rollback plan:** keep previous known-good build artifact or release folder; restore previous `.next`/app files and env config; restart Node process; verify homepage, sitemap, robots, contact, and key service/blog URLs.
4. **Never delete** the only production copy until rollback is confirmed.

## 9. Known functional note (contact/newsletter)

The API routes currently validate input and write `console.info` logs. They do **not** send email or store leads in a CRM/database. For production lead capture, integrate a mail provider, CRM, webhook, or database before go-live, and test spam/validation behavior.
