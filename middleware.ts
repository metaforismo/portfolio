import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { pagePaths } from "@/lib/site-content";

export function middleware(request: NextRequest) {
  if (request.method !== "GET" && request.method !== "HEAD") return NextResponse.next();
  const path = request.nextUrl.pathname;
  const alias = path === "/index.md" ? "/" : path.endsWith(".md") ? path.slice(0, -3) : undefined;
  const page = pagePaths.includes(path);
  if (!page && path !== "/llms.txt" && (!alias || !pagePaths.includes(alias))) return NextResponse.next();
  const headers = new Headers({
    Vary: "Accept, Accept-Encoding, RSC, Next-Router-State-Tree, Next-Router-Prefetch, Next-Router-Segment-Prefetch",
    "Cache-Control": "private, no-store",
    "Link": '</llms.txt>; rel="describedby"',
  });
  const machineResponse = (unacceptable = false) => {
    const target = request.nextUrl.clone();
    target.pathname = "/agent-content";
    target.search = "";
    target.searchParams.set("path", path);
    if (unacceptable) target.searchParams.set("unacceptable", "1");
    return NextResponse.rewrite(target, { headers });
  };
  if (path === "/llms.txt" || alias) return machineResponse();
  headers.append("Link", `<${path === "/" ? "/index.md" : `${path}.md`}>; rel="alternate"; type="text/markdown"`);
  // RSC and prefetch requests belong to Next's internal representation protocol.
  if (!request.headers.has("rsc")) {
    const type = new Negotiator({ headers: { accept: request.headers.get("accept") ?? "*/*" } }).mediaType(["text/html", "text/markdown"]);
    if (!type) return machineResponse(true);
    if (type === "text/markdown") return machineResponse();
  }
  return NextResponse.next({ headers });
}
export const config = { matcher: ["/", "/about", "/contact", "/privacy", "/llms.txt", "/:path*.md"] };
