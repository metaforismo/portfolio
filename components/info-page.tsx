import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { infoPages, type InfoSlug } from "@/lib/site-content";
import { profile, socials } from "@/lib/data";

export async function generateMetadata({ params }: { params: Promise<{ info: string }> }): Promise<Metadata> {
  const { info } = await params;
  const page = infoPages[info as InfoSlug];
  return page ? { title: page.title, description: page.paragraphs[0], alternates: { canonical: `/${info}` }, openGraph: { type: "website", title: page.title, url: `/${info}`, images: [{ url: "/opengraph-image", width: 1200, height: 630 }] } } : {};
}
export default async function InfoPage({ params }: { params: Promise<{ info: string }> }) {
  const { info } = await params;
  const page = infoPages[info as InfoSlug];
  if (!page) notFound();
  return <main className="mx-auto w-full max-w-[680px] px-5 py-16 sm:max-w-[760px] sm:px-8">
    <Link href="/" className="link-underline text-[var(--muted)]">← Portfolio</Link>
    <h1 className="mt-8 text-3xl font-semibold">{page.title}</h1>
    <div className="mt-6 space-y-4 text-[15px] leading-[1.7] text-[var(--text-soft)]">{page.paragraphs.map(p => <p key={p}>{p}</p>)}</div>
    {info === "contact" && <ul className="mt-6 space-y-2"><li><a href={`mailto:${profile.email}`} className="link-underline">{profile.email}</a></li>{socials.slice(0, 2).map(s => <li key={s.href}><a href={s.href} className="link-underline">{s.label}</a></li>)}</ul>}
    {info === "privacy" && <p className="mt-6"><a className="link-underline" href="https://vercel.com/docs/analytics/privacy-policy">Vercel Web Analytics privacy documentation</a></p>}
    <nav aria-label="Site information" className="mt-10 flex gap-5 text-sm">{Object.keys(infoPages).map(p => <Link key={p} href={`/${p}`} className="link-underline">{infoPages[p as InfoSlug].title}</Link>)}</nav>
  </main>;
}
