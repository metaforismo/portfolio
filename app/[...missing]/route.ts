import { recoveryMarkdown } from "@/lib/site-content";
export function GET() {
  return new Response(recoveryMarkdown, { status: 404, headers: { "Content-Type": "text/markdown; charset=utf-8", "X-Robots-Tag": "noindex", "Cache-Control": "no-store" } });
}
