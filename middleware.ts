import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { llmsMarkdown, pageMarkdown, pagePaths } from "@/lib/site-content";

export function middleware(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") return NextResponse.next();
  const path = request.nextUrl.pathname;
  const alias = path === "/index.md" ? "/" : path.endsWith(".md") ? path.slice(0, -3) : undefined;
  const page = pagePaths.includes(path);
  if (!page && !alias && path !== "/llms.txt") return NextResponse.next();
  const headers = new Headers({
    Vary: "Accept, Accept-Encoding, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch",
    "Cache-Control": "private, no-store",
    "Link": '</llms.txt>; rel="describedby"',
  });
  const send = (body: string, status = 200) => {
    headers.set("Content-Type", "text/markdown; charset=utf-8");
    return new NextResponse(request.method === "HEAD" ? null : body, { status, headers });
  };
  if (path === "/llms.txt") return send(llmsMarkdown);
  if (alias) {
    const body = pageMarkdown(alias);
    if (!body) return NextResponse.next();
    headers.set("X-Robots-Tag", "noindex");
    headers.append("Link", `<${alias}>; rel="canonical"`);
    return send(body);
  }
  headers.append("Link", `<${path === "/" ? "/index.md" : `${path}.md`}>; rel="alternate"; type="text/markdown"`);
  // RSC and prefetch requests belong to Next's internal representation protocol.
  if (!request.headers.has("rsc")) {
    const type = new Negotiator({ headers: { accept: request.headers.get("accept") ?? "*/*" } }).mediaType(["text/html", "text/markdown"]);
    if (!type) {
      headers.set("Content-Type", "text/plain; charset=utf-8");
      return new NextResponse(request.method === "HEAD" ? null : "Available representations: text/html, text/markdown.\n", { status: 406, headers });
    }
    if (type === "text/markdown") return send(pageMarkdown(path)!);
  }
  return NextResponse.next({ headers });
}
export const config = { matcher: ["/", "/about", "/contact", "/privacy", "/llms.txt", "/:path*.md"] };
