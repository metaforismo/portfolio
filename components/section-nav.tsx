"use client";

import { useEffect, useState } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { navAnchors, type NavAnchorId } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * Fixed column of dots that tracks the section in view and lets the visitor
 * jump around the one-page layout. Hidden below `lg` to avoid clutter on
 * smaller screens.
 */
export function SectionNav() {
  const [active, setActive] = useState<NavAnchorId>(navAnchors[0].id);

  useEffect(() => {
    const sections = navAnchors
      .map((anchor) => document.getElementById(anchor.id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry closest to the top of the viewport that is visible.
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) {
          setActive(visible[0].target.id as NavAnchorId);
        }
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: NavAnchorId,
  ) => {
    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
    setActive(id);
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block xl:left-8"
    >
      <ul className="flex flex-col gap-3">
        {navAnchors.map((anchor) => {
          const isActive = anchor.id === active;
          return (
            <li key={anchor.id}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={`#${anchor.id}`}
                    onClick={(event) => handleClick(event, anchor.id)}
                    aria-label={anchor.label}
                    aria-current={isActive ? "true" : undefined}
                    className="group flex h-3 items-center"
                  >
                    <span
                      className={cn(
                        "block rounded-full transition-all duration-300",
                        isActive
                          ? "h-2.5 w-2.5 bg-[var(--accent-yellow)]"
                          : "h-1.5 w-1.5 bg-[var(--muted-soft)] group-hover:bg-[var(--text)]",
                      )}
                    />
                  </a>
                </TooltipTrigger>
                <TooltipContent side="right">{anchor.label}</TooltipContent>
              </Tooltip>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
