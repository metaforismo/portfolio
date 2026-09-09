# Agent readiness verification — 2026-09-09

Implemented locally; no deployment or new Ora score is claimed.

## Changes

- Real 404 Markdown recovery responses for unknown paths, including nested paths and missing files; links to the homepage, sitemap, agent guidance, and contact page.
- HTML/Markdown negotiation on `/`, `/about`, `/contact`, `/privacy`, using Negotiator for Accept quality factors and wildcards. Unsupported representations return 406. GET and HEAD are supported. Next RSC navigation is preserved.
- Negotiated responses include `Vary: Accept, Accept-Encoding` plus Next router dimensions. Markdown is private/no-store to prevent shared-cache variant contamination. Explicit `/index.md`, `/about.md`, `/contact.md`, `/privacy.md` alternatives and HTTP discovery links are available.
- Markdown uses the existing portfolio data, including project descriptions, evidence links, dates, skills, experience, and research.
- Person JSON-LD, canonicals, generated 1200×630 PNG Open Graph image, robots.txt, XML sitemap with editorial modification dates, and llms.txt with specific when-to-use guidance.
- About, Contact and Privacy pages contain over 500 characters of meaningful server-rendered content and share prose with their Markdown variants.
- No-JavaScript project descriptions include evidence links, dates and tags. Decorative image stacks and the contribution visualization render after hydration. Existing folder geometry, animation, drawers, chart controls and styling remain. Repeated chart color utilities moved into shared CSS.

## Verification

`npm run build`: PASS. The existing config skips type/lint checks during build, so these were run separately.

`npm run typecheck`: PASS. Targeted ESLint on changed TypeScript/TSX files: PASS. `git diff --check`: PASS.

Start the production server with `npm start -- --hostname 127.0.0.1 --port 3000`, then run `npm test`. The 18 integration tests pass. They exercise every new public endpoint, HTML and Markdown content types, HEAD, q=0, wildcards, case-insensitive media types, 406s, 404 bodies, JSON-LD, metadata, heading order, llms structure and local links, sitemap destinations, PNG response, and alternating HTML/Markdown/RSC requests.

Raw homepage: 165,723 characters; extracted non-script/style text: 8,697 characters (5.25%). This test includes noscript content, collapses whitespace, and strips tags. It is a reproducible local measure, not a claim that Ora uses the same extraction algorithm.

Browser checks: desktop folder stacks displayed; IntentForm drawer opened and closed; contribution chart loaded with its cells and totals; Winter theme selection changed the palette. At 390×844 the About page rendered legibly; Contact and Privacy client navigation succeeded. No browser console errors were recorded during those checks.

GitHub Actions now runs the production build, typecheck, and endpoint suite on pull requests and main. CI uses a deterministic local contribution fixture through the existing provider URL override; it does not claim live GitHub-provider validation.

## Public-site baseline

Live requests on 2026-09-09 confirmed `/` returned HTML for both HTML and Markdown Accept headers and lacked Vary: Accept. All new paths listed above, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/opengraph-image`, and the three trust pages returned 404. `/cv.pdf` returned 200 application/pdf. A nonexistent path returned 404 HTML. These are pre-deployment results.

After deployment, run `TEST_BASE_URL=https://francescogiannicola.com npm test`, verify alternating representations through the actual CDN, and rerun the Ora audit. Purge old cached HTML if the delivery platform retains it. Check canonical and image metadata in the hosted output.

## Decisions still needed

- The publisher is a person. Person schema is appropriate; Organization completeness remains intentionally unresolved. Supply a verified organization identity, organizational contact, and approved public PostalAddress before adding that assertion. Francesco’s personal location is not evidence of a Limes Labs business address.
- The privacy page describes observed application behavior and links to Vercel’s analytics documentation. Confirm provider settings, hosting and email retention practices, and any further required operator disclosures before treating it as a comprehensive privacy policy.
- Keep `contentUpdated` in `lib/site-content.ts` and the CV modification date in `app/sitemap.ts` aligned with substantive content changes. The current CV date was verified from Git history (2026-08-19).
- The existing build emits a workspace-root warning because of a parent lockfile. This did not block the build; scope any build-root change separately.

## Protocol references

- https://acceptmarkdown.com/guides/accept-parsing
- https://acceptmarkdown.com/guides/caching-cdn
- https://llmstxt.org/ (H1, summary blockquote, detail prose, H2 file lists)
- https://www.sitemaps.org/protocol.html
- https://schema.org/Person
- https://vercel.com/docs/analytics/privacy-policy

## Vercel response-header correction

The first production deployment exposed behavior not reproduced by `next start`: static HTML responses replaced middleware Vary with Next router dimensions, and empty middleware HEAD responses lost Content-Type. A scoped Vercel response transform appends Accept and Accept-Encoding without replacing router dimensions. Middleware now supplies the representation body to the HTTP adapter for both GET and HEAD, letting the server suppress HEAD bytes while retaining representation metadata. Additional tests cover HEAD discovery files and 406s; the original HTML Vary assertions remain unchanged.

Configuration reference: https://vercel.com/docs/project-configuration/vercel-json#transform-object-definition
