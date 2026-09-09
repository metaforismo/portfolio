# Performance and dependency maintenance

## Baseline — 2026-09-09, commit 966c799

A desktop browser opened the production homepage without scrolling. Resource Timing reported all 60 project images loaded, totaling 3,355,721 encoded bytes. Initial document: 21,125 encoded bytes; 9 script resources: 212,579 encoded bytes; link resources: 244,721 encoded bytes. The page contained 1,683 DOM elements. Observed TTFB was 392 ms and DOMContentLoaded 911 ms in this one unthrottled sample; these timings are not field Core Web Vitals or a statistically controlled speed claim.

`npm audit --json` reported 8 vulnerable packages: next, sharp, postcss, nanoid, js-yaml, brace-expansion, @humanfs/node and postcss-selector-parser. The separately retrieved GitHub Dependabot list contained 8 open historical Next.js alerts targeting versions older than the current installation; the current npm audit is the dependency update baseline. Alerts are not dismissed merely to improve the count.

## Changes — 2026-09-10

- Next.js 15.5.25 and compatible transitive dependency patches. Next's pinned PostCSS is overridden with compatible 8.5.28; keep this override until upstream removes the vulnerable pin. `npm audit` reports **0 vulnerabilities** across 414 audited packages.
- Project stacks mount within 300px of the viewport, once per folder. Next Image serves responsive optimized thumbnails; original assets and folder geometry are preserved.
- The contribution fallback is a separate module, allowing the graph to remain a real dynamic chunk. The chart mounts near the viewport. Provider requests have a five-second timeout, status and payload validation, and an unavailable state. Failures are caught outside the data cache, rather than represented as zero activity.
- Build-time TypeScript and lint checks are enabled. The lint script supports ESLint 9; CI now runs lint and a dependency audit at high severity. The tracing root is explicitly this repository.

## Validation

Production-mode local build, lint and 23 tests pass (21 endpoint/discovery checks plus two provider-boundary tests covering valid data, HTTP errors, invalid JSON/schema, timeout and recovery). Both unavailable and successful fixture graph states were checked in the browser. Local fixtures are never production data.

At 1280×720 before scrolling, the new local build requested **zero project images**, compared with 60 / 3,355,721 encoded bytes on the old production build. Initial script resources measured 201,581 encoded bytes locally versus 212,579 on the baseline; transport environments differ, so this is diagnostic evidence, not a controlled speed claim. The old graph used live data and the local graph used a fixture, so DOM counts are not a like-for-like total-page comparison.

After scrolling to the first project rows, 30 optimized previews loaded successfully with 273,222 encoded bytes in that sample. IntentForm, Bite, Jurevo and TarsGPT drawers were opened and closed on desktop; Bite was also opened on a 390px emulated mobile viewport. The mobile chart displayed the expected 21 fixture contributions and palette switching worked. A screenshot review confirmed the desktop folder appearance and mobile chart. These checks are not a field Core Web Vitals measurement.
