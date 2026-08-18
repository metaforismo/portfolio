import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";

import { Callout, SectionHeading } from "@/components/section-heading";
import {
  articles,
  publications,
  type Article,
  type Publication,
} from "@/lib/data";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-8">
      <SectionHeading
        emoji="✍️"
        hint={
          publications.length + articles.length > 0
            ? `${publications.length + articles.length} pieces`
            : undefined
        }
      >
        Writing & research
      </SectionHeading>

      {publications.length > 0 && (
        <div className="mt-4">
          <SectionHeading emoji="📜" level={3}>
            Research outputs
          </SectionHeading>
          <ul className="mt-3 space-y-2">
            {publications.map((publication) => (
              <li key={publication.href}>
                <PublicationRow publication={publication} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {articles.length > 0 ? (
        <ul className={publications.length > 0 ? "mt-6 space-y-2" : "mt-4 space-y-2"}>
          {articles.map((article) => (
            <li key={article.href}>
              <ArticleRow article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <Callout emoji="📝" color="yellow" className="mt-4">
          <span className="font-medium">Notes in progress.</span> Threads and
          write-ups land here when they are worth keeping.
        </Callout>
      )}
    </section>
  );
}

function PublicationRow({ publication }: { publication: Publication }) {
  return (
    <article className="rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] p-4">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
        <span>{publication.date}</span>
        <span aria-hidden>·</span>
        <span>{publication.venue}</span>
      </div>
      <h3 className="mt-1.5 text-[16px] font-semibold leading-snug text-[var(--text)]">
        {publication.title}
      </h3>
      <p className="mt-1 text-[13px] leading-[1.5] text-[var(--text-soft)]">
        {publication.blurb}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Link
          href={publication.href}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-1 rounded-md border border-[var(--border-line)] bg-[var(--bg-elevated)] px-2.5 py-1 text-[12px] text-[var(--text)] transition-colors hover:border-[var(--muted-soft)]"
        >
          DOI
          <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
        </Link>
        {publication.extraLinks?.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 px-1.5 py-1 text-[12px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            {link.label}
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
          </Link>
        ))}
      </div>
    </article>
  );
}

function ArticleRow({ article }: { article: Article }) {
  return (
    <Link
      href={article.href}
      target="_blank"
      rel="noopener"
      aria-label={`${article.title}, read on X`}
      className="group flex flex-col gap-1 rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] p-4 transition-all hover:bg-[var(--bg-hover)] hover:border-[var(--muted-soft)]"
    >
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--muted)]">
        <time dateTime={article.date}>
          {format(new Date(article.date), "MMM d, yyyy")}
        </time>
        <span aria-hidden>·</span>
        <span>{article.source ?? "X"}</span>
      </div>

      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[16px] font-semibold leading-snug text-[var(--text)]">
          {article.title}
        </h3>
        <ArrowUpRight
          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--muted)] transition-all group-hover:text-[var(--accent-yellow)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          strokeWidth={1.75}
        />
      </div>

      {article.blurb && (
        <p className="text-[13px] leading-[1.5] text-[var(--text-soft)]">
          {article.blurb}
        </p>
      )}
    </Link>
  );
}
