"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

const TEXT = "Francesco Giannicola";

export function Signature({ className }: { className?: string }) {
  const [drawn, setDrawn] = React.useState(false);
  const [key, setKey] = React.useState(0);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setDrawn(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            window.requestAnimationFrame(() => setDrawn(true));
            observer.disconnect();
          }
        });
      },
      { threshold: 0.4 },
    );

    const el = document.getElementById("signature-anchor");
    if (el) observer.observe(el);
    else setDrawn(true);

    return () => observer.disconnect();
  }, [key]);

  const replay = React.useCallback(() => {
    setDrawn(false);
    setKey((k) => k + 1);
    window.setTimeout(() => setDrawn(true), 50);
  }, []);

  return (
    <span
      id="signature-anchor"
      onMouseEnter={replay}
      onClick={replay}
      className={cn(
        "group relative inline-flex select-none cursor-pointer text-[var(--muted)] transition-colors hover:text-[#fb923c]",
        className,
      )}
      style={{
        fontFamily: "var(--font-handwritten), 'Brush Script MT', cursive",
        fontSize: "30px",
        lineHeight: 1.4,
        letterSpacing: "0.005em",
        fontWeight: 400,
        paddingBottom: "2px",
      }}
      aria-label={TEXT}
      role="img"
    >
      <span
        aria-hidden
        className="whitespace-nowrap"
        style={{
          display: "inline-block",
          clipPath: drawn ? "inset(-30% -30% -30% 0)" : "inset(-30% 100% -30% 0)",
          WebkitClipPath: drawn ? "inset(-30% -30% -30% 0)" : "inset(-30% 100% -30% 0)",
          transition: "clip-path 3000ms cubic-bezier(0.4, 0.1, 0.6, 0.9)",
          willChange: "clip-path",
        }}
      >
        {TEXT}
      </span>
    </span>
  );
}
