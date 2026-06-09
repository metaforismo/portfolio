"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CornerDownLeft, Search } from "lucide-react";

import { navAnchors, type NavAnchorId } from "@/lib/data";
import { cn } from "@/lib/utils";

/**
 * ⌘K command palette for jumping between sections of the one-page layout.
 * Opens with ⌘K / Ctrl+K or the floating trigger; type to filter, arrow keys
 * to move, Enter to jump, Esc to close.
 */
export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMac, setIsMac] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);

  const results = navAnchors.filter((anchor) =>
    anchor.label.toLowerCase().includes(query.trim().toLowerCase()),
  );

  // Platform-aware shortcut hint, set after mount to avoid hydration mismatch.
  useEffect(() => {
    setIsMac(/mac|iphone|ipad|ipod/i.test(navigator.platform || navigator.userAgent));
  }, []);

  const jumpTo = useCallback((id: NavAnchorId) => {
    const target = document.getElementById(id);
    setOpen(false);
    if (!target) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);

  // Global ⌘K / Ctrl+K toggle.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Reset state + lock body scroll + focus input while open.
  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActiveIndex(0);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    const id = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => {
      document.body.style.overflow = overflow;
      window.clearTimeout(id);
    };
  }, [open]);

  // Keep the highlighted item within bounds as the query narrows results.
  useEffect(() => {
    setActiveIndex((prev) => Math.min(prev, Math.max(results.length - 1, 0)));
  }, [results.length]);

  const onInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setOpen(false);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((i) => (results.length ? (i - 1 + results.length) % results.length : 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const selected = results[activeIndex];
      if (selected) jumpTo(selected.id);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open navigation menu"
        aria-keyshortcuts="Meta+K Control+K"
        className="group fixed bottom-5 left-5 z-40 inline-flex items-center gap-2 rounded-full border border-[var(--border-line)] bg-[var(--bg-soft)]/90 px-3 py-2 text-[12px] text-[var(--muted)] shadow-sm backdrop-blur transition-colors hover:border-[var(--muted-soft)] hover:text-[var(--text)]"
      >
        <Search className="h-3.5 w-3.5" strokeWidth={1.75} />
        <span className="hidden sm:inline">Jump to…</span>
        <kbd className="ml-0.5 hidden rounded border border-[var(--border-line)] bg-[var(--bg-elevated)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)] sm:inline">
          {isMac ? "⌘K" : "Ctrl K"}
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-[18vh]"
          role="dialog"
          aria-modal="true"
          aria-label="Jump to section"
        >
          <button
            type="button"
            aria-label="Close menu"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-black/40 backdrop-blur-sm animate-in fade-in-0"
          />

          <div className="relative w-full max-w-[460px] overflow-hidden rounded-xl border border-[var(--border-line)] bg-[var(--bg-soft)] shadow-2xl animate-in fade-in-0 zoom-in-95">
            <div className="flex items-center gap-2.5 border-b border-[var(--border-line)] px-3.5 py-3">
              <Search className="h-4 w-4 shrink-0 text-[var(--muted)]" strokeWidth={1.75} />
              <input
                ref={inputRef}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Jump to…"
                aria-label="Search sections"
                className="w-full bg-transparent text-[14px] text-[var(--text)] outline-none placeholder:text-[var(--muted)]"
              />
            </div>

            <ul role="listbox" aria-label="Sections" className="max-h-[280px] overflow-y-auto p-1.5">
              {results.length === 0 ? (
                <li className="px-3 py-6 text-center text-[13px] text-[var(--muted)]">
                  No section found.
                </li>
              ) : (
                results.map((anchor, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <li key={anchor.id} role="option" aria-selected={isActive}>
                      <button
                        type="button"
                        onClick={() => jumpTo(anchor.id)}
                        onMouseMove={() => setActiveIndex(index)}
                        className={cn(
                          "flex w-full items-center justify-between gap-3 rounded-md px-3 py-2 text-left text-[14px] transition-colors",
                          isActive
                            ? "bg-[var(--bg-hover)] text-[var(--text)]"
                            : "text-[var(--text-soft)]",
                        )}
                      >
                        <span>{anchor.label}</span>
                        {isActive && (
                          <CornerDownLeft className="h-3.5 w-3.5 text-[var(--muted)]" strokeWidth={1.75} aria-hidden />
                        )}
                      </button>
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
