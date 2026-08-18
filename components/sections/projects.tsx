"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, X } from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { WorkFolder } from "@/components/work-folder";
import {
  archiveProjects,
  featuredWork,
  moreWork,
  type SelectedWorkItem,
} from "@/lib/data";
import { lockScroll } from "@/lib/lock-scroll";

const DRAWER_EASE = [0.32, 0.72, 0, 1] as const;

export function Projects() {
  const [open, setOpen] = useState<SelectedWorkItem | null>(null);

  return (
    <section id="projects" className="scroll-mt-8">
      <SectionHeading>Selected work</SectionHeading>

      <div className="mt-7 grid overflow-visible gap-x-6 gap-y-12 sm:grid-cols-2">
        {featuredWork.map((item) => (
          <WorkFolder key={item.title} item={item} onOpen={() => setOpen(item)} />
        ))}
      </div>

      {moreWork.length > 0 && (
        <div className="mt-10">
          <h3 className="text-[13px] font-semibold text-[var(--text)]">Also in the cabinet</h3>
          <ul className="mt-3 divide-y divide-[var(--divider)] border-y border-[var(--divider)]">
            {moreWork.map((item) => (
              <li key={item.title}>
                <button
                  type="button"
                  onClick={() => setOpen(item)}
                  className="notion-row flex w-full items-baseline justify-between gap-4 rounded-md px-1.5 py-2.5 text-left"
                >
                  <span className="min-w-0 text-[14px] font-medium text-[var(--text)]">{item.title}</span>
                  <span className="shrink-0 font-mono text-[11px] text-[var(--muted)]">
                    {item.year}
                    <span className="hidden sm:inline"> · {item.eyebrow}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-6 text-[13px] leading-[1.6] text-[var(--muted)]">
        Also public:{" "}
        {archiveProjects.map((project, index) => (
          <span key={project.href}>
            <Link
              href={project.href}
              target="_blank"
              rel="noopener"
              className="text-[var(--text)] link-underline hover:text-[var(--accent-yellow)]"
            >
              {project.title}
            </Link>
            {index < archiveProjects.length - 1 ? ", " : ""}
          </span>
        ))}
        , and older experiments on{" "}
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

      <WorkSheet item={open} onClose={() => setOpen(null)} />
    </section>
  );
}

function WorkSheet({
  item,
  onClose,
}: {
  item: SelectedWorkItem | null;
  onClose: () => void;
}) {
  const titleId = useId();

  useEffect(() => {
    if (!item) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    const unlock = lockScroll();
    window.addEventListener("keydown", onKey);
    return () => {
      unlock();
      window.removeEventListener("keydown", onKey);
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center">
          <motion.button
            type="button"
            aria-label="Close project"
            className="absolute inset-0 bg-black/55"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: DRAWER_EASE }}
            onClick={onClose}
          />
          <motion.article
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="relative z-10 max-h-[88vh] w-full max-w-[560px] overflow-y-auto rounded-t-2xl border border-white/[0.06] bg-[#0e0e0d] p-5 shadow-[0_-24px_80px_-32px_rgba(0,0,0,0.8)] sm:rounded-2xl sm:p-6"
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: DRAWER_EASE }}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/40">
                  {item.eyebrow} · {item.year}
                </p>
                <h3 id={titleId} className="mt-1.5 text-[22px] font-semibold tracking-tight text-white">
                  {item.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] text-white/70 transition-[transform,background-color] duration-150 ease-out hover:bg-white/10 hover:text-white active:scale-[0.97]"
                aria-label="Close"
              >
                <X className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>

            <p className="mt-4 text-[15px] leading-[1.65] text-white/70">{item.summary}</p>
            {item.detail && (
              <p className="mt-3 rounded-md bg-white/[0.04] px-3 py-2 font-mono text-[12px] leading-[1.55] text-white/45">
                {item.detail}
              </p>
            )}

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {item.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full bg-white/[0.06] px-2 py-0.5 font-mono text-[11px] text-white/55"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {item.links.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener"
                  className={
                    index === 0
                      ? "inline-flex h-9 items-center gap-1.5 rounded-full bg-white px-3.5 text-[13px] font-medium text-black transition-transform duration-150 ease-out hover:bg-white/90 active:scale-[0.97]"
                      : "inline-flex h-9 items-center gap-1.5 rounded-full bg-white/[0.06] px-3.5 text-[13px] text-white/80 transition-colors hover:bg-white/10"
                  }
                >
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.75} />
                </Link>
              ))}
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
