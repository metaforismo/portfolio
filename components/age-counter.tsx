"use client";

import { useEffect, useState } from "react";

import { BIRTH_DATE } from "@/lib/data";

/** Born 1 Feb 2006, local midnight. */
const BIRTH_MS = new Date(BIRTH_DATE.year, BIRTH_DATE.month - 1, BIRTH_DATE.day).getTime();

/** Average Gregorian year, so the count matches calendar age over time. */
const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

/** Decimals shown. The last few tick every frame, giving the "scrolling" feel. */
const DECIMALS = 9;

function ageNow() {
  return (Date.now() - BIRTH_MS) / MS_PER_YEAR;
}

export function AgeCounter() {
  // Start from null so the server-rendered markup and the first client render
  // match (no hydration mismatch); the real value kicks in after mount.
  const [age, setAge] = useState<number | null>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      // No animation: show a stable, settled value.
      setAge(ageNow());
      return;
    }

    let raf = 0;
    const tick = () => {
      setAge(ageNow());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const display = (age ?? Math.floor(ageNow())).toFixed(age === null ? 0 : DECIMALS);
  const [whole, frac] = display.split(".");

  return (
    <span
      className="inline-flex items-baseline gap-1 font-mono tabular-nums"
      suppressHydrationWarning
      title="Live age, counting in real time"
    >
      <span>
        <span className="text-[var(--text)]">{whole}</span>
        {frac && <span className="text-[var(--muted)]">.{frac}</span>}
      </span>
      <span className="text-[11px] text-[var(--muted)]">years</span>
    </span>
  );
}
