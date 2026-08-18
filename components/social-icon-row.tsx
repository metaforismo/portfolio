"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import {
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { socials, type SocialLink } from "@/lib/data";
import { cn } from "@/lib/utils";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "X / Twitter": Twitter,
  Instagram: Instagram,
  YouTube: Youtube,
};

const SOCIAL_HOVER_COLOR: Record<string, string> = {
  GitHub: "#e6edf3",
  LinkedIn: "#0a66c2",
  "X / Twitter": "#e7e9ea",
  Instagram: "#e1306c",
  YouTube: "#ff0000",
};

/**
 * Horizontal social row with a mouse-only hover preview card.
 * Touch devices keep native tap-to-open; the card never traps a tap target.
 */
export function SocialIconRow() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cardIndex, setCardIndex] = useState(0);
  const [fromLeft, setFromLeft] = useState(true);
  const rowRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const hideTimer = useRef<number | null>(null);
  const cardId = useId();

  const clearHide = () => {
    if (hideTimer.current !== null) {
      window.clearTimeout(hideTimer.current);
      hideTimer.current = null;
    }
  };

  const show = useCallback((index: number) => {
    clearHide();
    setActiveIndex((prev) => {
      if (prev !== null && prev !== index) {
        setFromLeft(index > prev);
      }
      return index;
    });
    setCardIndex(index);
  }, []);

  const hide = useCallback(() => {
    clearHide();
    hideTimer.current = window.setTimeout(() => setActiveIndex(null), 80);
  }, []);

  useEffect(() => () => clearHide(), []);

  const onPointerEnter = (index: number, event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    show(index);
  };

  const active = activeIndex !== null;
  const social = socials[cardIndex] ?? socials[0];
  const left = itemRefs.current[cardIndex]
    ? itemRefs.current[cardIndex]!.offsetLeft + itemRefs.current[cardIndex]!.offsetWidth / 2
    : 18;

  return (
    <nav
      ref={rowRef}
      aria-label="Social links"
      className="relative mt-6 flex flex-wrap items-center gap-1"
      onPointerLeave={hide}
    >
      {socials.map((s, index) => {
        const Icon = SOCIAL_ICONS[s.label];
        if (!Icon) return null;
        const isHot = activeIndex === index;
        return (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.label}
            aria-describedby={isHot ? cardId : undefined}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
            onPointerEnter={(event) => onPointerEnter(index, event)}
            onFocus={() => show(index)}
            onBlur={hide}
            className={cn(
              "inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted)] transition-[color,background-color,transform] duration-150 ease-out hover:bg-[var(--bg-hover)] active:scale-[0.97]",
              isHot && "bg-[var(--bg-hover)] text-[var(--text)]",
            )}
            style={isHot ? { color: SOCIAL_HOVER_COLOR[s.label] } : undefined}
          >
            <Icon className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        );
      })}

      <div
        aria-hidden={!active}
        id={cardId}
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+10px)] z-20 w-[240px] -translate-x-1/2 rounded-lg border border-[var(--border-line)] bg-[var(--bg-elevated)] p-3 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.65)] transition-[opacity,transform] duration-150 ease-out",
          active
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "opacity-0 translate-y-1",
        )}
        style={{ left }}
        onPointerEnter={clearHide}
        onPointerLeave={hide}
      >
        {/* Invisible bridge so the pointer can travel up into the card. */}
        <div className="absolute inset-x-0 top-full h-3" />
        <PreviewBody social={social} fromLeft={fromLeft} />
      </div>
    </nav>
  );
}

function PreviewBody({
  social,
  fromLeft,
}: {
  social: SocialLink;
  fromLeft: boolean;
}) {
  return (
    <div
      key={social.label}
      className="animate-social-preview"
      style={{
        ["--preview-x" as string]: fromLeft ? "8px" : "-8px",
      }}
    >
      <p className="text-[13px] font-medium text-[var(--text)]">{social.previewTitle}</p>
      <p className="mt-0.5 font-mono text-[11px] text-[var(--muted)]">{social.handle}</p>
      <p className="mt-2 text-[12px] leading-[1.5] text-[var(--text-soft)]">
        {social.previewBody}
      </p>
    </div>
  );
}
