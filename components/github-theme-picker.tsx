"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type GhTheme = {
  id: "default" | "winter" | "halloween";
  label: string;
  emoji: string;
  cells: [string, string, string, string, string];
};

export const GH_THEMES: GhTheme[] = [
  {
    id: "default",
    label: "GitHub",
    emoji: "🟩",
    cells: ["#1f1f1f", "#0e4429", "#006d32", "#26a641", "#39d353"],
  },
  {
    id: "winter",
    label: "Winter",
    emoji: "❄️",
    cells: ["#1f1f1f", "#1e3a5f", "#2563eb", "#60a5fa", "#bae6fd"],
  },
  {
    id: "halloween",
    label: "Halloween",
    emoji: "🎃",
    cells: ["#1f1f1f", "#4a1a05", "#8a3a05", "#d4632b", "#fb923c"],
  },
];

const STORAGE_KEY = "github-theme";

export function useGithubTheme() {
  const [theme, setTheme] = React.useState<GhTheme["id"]>("default");

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "winter" || stored === "halloween" || stored === "default") {
      setTheme(stored);
    }
  }, []);

  const update = React.useCallback((id: GhTheme["id"]) => {
    setTheme(id);
    window.localStorage.setItem(STORAGE_KEY, id);
  }, []);

  return { theme, setTheme: update };
}

export function GithubThemePicker({
  theme,
  onChange,
  className,
}: {
  theme: GhTheme["id"];
  onChange: (id: GhTheme["id"]) => void;
  className?: string;
}) {
  return (
    <div
      role="radiogroup"
      aria-label="GitHub contributions theme"
      className={cn(
        "inline-flex items-center gap-0.5 rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] p-0.5",
        className,
      )}
    >
      {GH_THEMES.map((t) => {
        const active = theme === t.id;
        return (
          <button
            key={t.id}
            type="button"
            role="radio"
            aria-checked={active}
            onClick={() => onChange(t.id)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-[5px] px-2 py-1 text-[12px] transition-colors",
              active
                ? "bg-[var(--bg-elevated)] text-[var(--text)] shadow-sm"
                : "text-[var(--muted)] hover:text-[var(--text)]",
            )}
          >
            <span aria-hidden className="text-[12px] leading-none">
              {t.emoji}
            </span>
            <span>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

/**
 * Wrapper that scopes --gh-l0..l4 CSS vars to its children based on the picked theme.
 */
export function GithubThemeScope({
  theme,
  children,
  className,
}: {
  theme: GhTheme["id"];
  children: React.ReactNode;
  className?: string;
}) {
  const cells = React.useMemo(
    () => GH_THEMES.find((t) => t.id === theme)?.cells ?? GH_THEMES[0].cells,
    [theme],
  );
  const style = {
    "--gh-l0": cells[0],
    "--gh-l1": cells[1],
    "--gh-l2": cells[2],
    "--gh-l3": cells[3],
    "--gh-l4": cells[4],
  } as React.CSSProperties;

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
