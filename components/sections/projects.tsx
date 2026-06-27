import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import {
  selectedWorkTiers,
  type AccentColor,
  type SelectedWorkItem,
} from "@/lib/data";
import { cn } from "@/lib/utils";

const totalWorkItems = selectedWorkTiers.reduce(
  (count, tier) => count + tier.items.length,
  0,
);

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-8">
      <SectionHeading hint={`${totalWorkItems} curated works`}>
        Selected work
      </SectionHeading>

      <p className="mt-3 max-w-[64ch] text-[14px] leading-[1.7] text-[var(--text-soft)]">
        A compact index of the work that best explains my current direction:
        products with real surfaces, research artifacts with public evidence,
        and agent infrastructure built around verification.
      </p>

      <div className="mt-6 space-y-7">
        {selectedWorkTiers.map((tier) => (
          <section
            key={tier.title}
            aria-labelledby={`work-tier-${slugify(tier.title)}`}
            className="grid gap-3 sm:grid-cols-[142px_1fr]"
          >
            <div className="sm:pt-2">
              <h3
                id={`work-tier-${slugify(tier.title)}`}
                className="text-[13px] font-semibold text-[var(--text)]"
              >
                {tier.title}
              </h3>
              <p className="mt-1.5 text-[12px] leading-[1.55] text-[var(--muted)]">
                {tier.description}
              </p>
            </div>

            <div className="space-y-2">
              {tier.items.map((item) => (
                <WorkItem key={item.title} item={item} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <p className="mt-5 text-[13px] text-[var(--muted)]">
        Secondary archive: Scriba, Aurion, Bite, OpenAlphaEvolve, GPT-2 from
        scratch, Stable Diffusion from scratch, and other experiments live on{" "}
        <Link
          href="https://github.com/metaforismo"
          target="_blank"
          rel="noopener"
          className="text-[var(--text)] link-underline hover:text-[var(--accent-yellow)]"
        >
          GitHub
        </Link>
        .
      </p>
    </section>
  );
}

function WorkItem({ item }: { item: SelectedWorkItem }) {
  const accentStyles = getAccentStyles(item.accent);

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] transition-colors hover:border-[var(--muted-soft)] hover:bg-[var(--bg-hover)]",
        item.featured ? "p-4" : "p-3",
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute inset-y-0 left-0 w-[3px] opacity-80 transition-opacity group-hover:opacity-100",
          item.featured ? "block" : "hidden sm:block",
        )}
        style={{ background: accentStyles.text }}
      />

      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className="rounded-sm border px-1.5 py-0.5 font-mono text-[10px] uppercase leading-none"
              style={{
                background: accentStyles.bg,
                borderColor: accentStyles.border,
                color: accentStyles.text,
              }}
            >
              {item.eyebrow}
            </span>
            <span className="font-mono text-[11px] text-[var(--muted)]">
              {item.year}
            </span>
          </div>

          <h3
            className={cn(
              "mt-2 font-semibold leading-tight text-[var(--text)]",
              item.featured ? "text-[18px]" : "text-[15px]",
            )}
          >
            {item.title}
          </h3>

          <p
            className={cn(
              "mt-1.5 text-pretty leading-[1.58] text-[var(--text-soft)]",
              item.featured ? "text-[14px]" : "text-[13px]",
            )}
          >
            {item.summary}
          </p>

          {item.detail && (
            <p className="mt-2 rounded-sm bg-[var(--bg-elevated)] px-2 py-1.5 font-mono text-[11px] leading-[1.55] text-[var(--muted)]">
              {item.detail}
            </p>
          )}
        </div>

        <LinkCluster item={item} />
      </div>

      <ul className="mt-3 flex flex-wrap gap-1">
        {item.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-sm bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[11px] font-mono text-[var(--text-soft)]"
          >
            {tag}
          </li>
        ))}
      </ul>
    </article>
  );
}

function LinkCluster({ item }: { item: SelectedWorkItem }) {
  const primaryLink = item.links[0];

  return (
    <div className="flex shrink-0 flex-wrap items-center gap-1 sm:justify-end">
      {item.links.map((link, index) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener"
          aria-label={`${item.title}: ${link.label}`}
          className={cn(
            "inline-flex h-8 items-center gap-1 rounded-md border px-2.5 text-[12px] transition-colors",
            index === 0
              ? "border-[var(--border-line)] bg-[var(--bg-elevated)] text-[var(--text)] hover:border-[var(--muted-soft)]"
              : "border-transparent text-[var(--muted)] hover:bg-[var(--bg-elevated)] hover:text-[var(--text)]",
          )}
        >
          <span>{link.label}</span>
          {link.href === primaryLink.href ? (
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} aria-hidden />
          ) : (
            <ExternalLink className="h-3 w-3" strokeWidth={1.75} aria-hidden />
          )}
        </Link>
      ))}
    </div>
  );
}

function getAccentStyles(accent: AccentColor) {
  return {
    bg: `var(--callout-${accent}-bg)`,
    border: `var(--callout-${accent}-border)`,
    text: `var(--callout-${accent}-text)`,
  };
}

function slugify(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
