import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpRight } from "lucide-react";

import { Callout, SectionHeading } from "@/components/section-heading";
import { articles, type Article } from "@/lib/data";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-8">
      <SectionHeading
        emoji="✍️"
        hint={articles.length > 0 ? `${articles.length} on X` : undefined}
      >
        Writing
      </SectionHeading>

      {articles.length > 0 ? (
        <ul className="mt-4 space-y-2">
          {articles.map((article) => (
            <li key={article.href}>
              <ArticleRow article={article} />
            </li>
          ))}
        </ul>
      ) : (
        <Callout emoji="📝" color="yellow" className="mt-4">
          <span className="font-medium">Articles coming soon.</span>{" "}
          Notes on building TarsGPT, why AlphaEvolve matters, and what I&apos;m
          learning at uni.
        </Callout>
      )}
    </section>
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
