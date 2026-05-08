import Link from "next/link";
import { ArrowUpRight, Github, Star } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

const STATUS_COLORS: Record<Project["status"], { dot: string; label: string; text: string }> = {
  shipped: { dot: "bg-[var(--callout-green-text)]", label: "Shipped", text: "text-[var(--callout-green-text)]" },
  wip: { dot: "bg-[var(--callout-yellow-text)]", label: "In progress", text: "text-[var(--callout-yellow-text)]" },
  research: { dot: "bg-[var(--callout-purple-text)]", label: "Research", text: "text-[var(--callout-purple-text)]" },
};

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-8">
      <SectionHeading
        emoji="🚀"
        hint={`${projects.length} projects · 6 of 10 repos`}
      >
        Selected work
      </SectionHeading>

      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectPageCard key={project.slug} project={project} />
        ))}
      </div>

      <p className="mt-4 text-[13px] text-[var(--muted)]">
        More on{" "}
        <Link
          href="https://github.com/metaforismo"
          target="_blank"
          rel="noopener"
          className="text-[var(--text)] link-underline hover:text-[var(--accent-yellow)]"
        >
          github.com/metaforismo
        </Link>
        .
      </p>
    </section>
  );
}

function ProjectPageCard({ project }: { project: Project }) {
  const accent = project.accent ?? "gray";
  const statusStyle = STATUS_COLORS[project.status];

  return (
    <Link
      href={project.href}
      target="_blank"
      rel="noopener"
      aria-label={`${project.title}, view on GitHub`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] transition-all hover:bg-[var(--bg-hover)] hover:border-[var(--muted-soft)]",
      )}
    >
      <div
        aria-hidden
        className="h-16 w-full border-b border-[var(--border-line)]"
        style={{
          background: `linear-gradient(135deg, var(--callout-${accent}-bg) 0%, var(--bg-soft) 100%)`,
        }}
      >
        <div className="relative h-full w-full overflow-hidden">
          <span
            className="absolute -bottom-3 left-4 grid h-12 w-12 place-items-center rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] text-[24px] shadow-sm transition-transform group-hover:-translate-y-0.5"
            aria-hidden
          >
            {project.emoji}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 pt-7">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-[16px] font-semibold text-[var(--text)]">
            {project.title}
          </h3>
          <ArrowUpRight
            className="h-3.5 w-3.5 shrink-0 text-[var(--muted)] transition-all group-hover:text-[var(--accent-yellow)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </div>

        <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--text-soft)]">
          {project.blurb}
        </p>

        {/* Notion property rows */}
        <dl className="mt-4 space-y-1 text-[12px]">
          <PropRow label="Category">
            <span
              className="inline-flex items-center rounded-sm px-1.5 py-0.5 text-[11px] font-medium"
              style={{
                background: `var(--callout-${accent}-bg)`,
                color: `var(--callout-${accent}-text)`,
              }}
            >
              {project.category}
            </span>
          </PropRow>

          <PropRow label="Status">
            <span className={cn("inline-flex items-center gap-1.5", statusStyle.text)}>
              <span className={cn("h-1.5 w-1.5 rounded-full", statusStyle.dot)} />
              {statusStyle.label}
            </span>
          </PropRow>

          <PropRow label="Year">
            <span className="font-mono text-[var(--text-soft)]">{project.year}</span>
          </PropRow>

          {typeof project.stars === "number" && (
            <PropRow label="Stars">
              <span className="inline-flex items-center gap-1 text-[var(--text-soft)]">
                <Star className="h-3 w-3 fill-[var(--accent-yellow)] text-[var(--accent-yellow)]" />
                <span className="font-mono">{project.stars}</span>
              </span>
            </PropRow>
          )}
        </dl>

        <div className="mt-3 flex flex-wrap gap-1">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-sm bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[11px] font-mono text-[var(--text-soft)]"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-3 flex items-center gap-1 border-t border-[var(--divider)] pt-3 font-mono text-[11px] text-[var(--muted)]">
          <Github className="h-3 w-3" strokeWidth={2} />
          metaforismo/{project.slug}
        </div>
      </div>
    </Link>
  );
}

function PropRow({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[64px_1fr] items-center gap-2">
      <span className="text-[var(--muted)]">{label}</span>
      <span className="min-w-0">{children}</span>
    </div>
  );
}
