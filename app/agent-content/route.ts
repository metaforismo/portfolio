import { llmsMarkdown, pageMarkdown, recoveryMarkdown } from "@/lib/site-content";

// Route handlers preserve representation metadata on HEAD in Vercel's adapter.
export function GET(request: Request) {
  const url = new URL(request.url);
  const path = url.searchParams.get("path") || "";
  const canonical = path === "/index.md" ? "/" : path.endsWith(".md") ? path.slice(0, -3) : path;
  const unacceptable = url.searchParams.get("unacceptable") === "1";
  const content = path === "/llms.txt" ? llmsMarkdown : pageMarkdown(canonical);
  const status = unacceptable ? 406 : content ? 200 : 404;
  const headers = new Headers({
    "Content-Type": unacceptable ? "text/plain; charset=utf-8" : "text/markdown; charset=utf-8",
    "Cache-Control": "private, no-store",
    "Vary": "Accept, Accept-Encoding, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch",
    "Link": '</llms.txt>; rel="describedby"',
    "X-Robots-Tag": "noindex",
  });
  if (content && path !== "/llms.txt") headers.append("Link", `<${canonical}>; rel="canonical"`);
  return new Response(unacceptable ? "Available representations: text/html, text/markdown.\n" : content || recoveryMarkdown, { status, headers });
}
export function HEAD(request: Request) {
  const response = GET(request);
  return new Response(null, { status: response.status, headers: response.headers });
}
