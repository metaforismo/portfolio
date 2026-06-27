import Link from "next/link";
import {
  ArrowUpRight,
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Twitter,
  Youtube,
  type LucideIcon,
} from "lucide-react";

import { AgeCounter } from "@/components/age-counter";
import { CopyEmailButton } from "@/components/copy-email-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile, socials } from "@/lib/data";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
  "X / Twitter": Twitter,
  Instagram: Instagram,
  YouTube: Youtube,
};

export function PageHeader() {
  return (
    <header id="home" className="scroll-mt-8 pt-12 sm:pt-20">
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/"
          className="group inline-flex items-center gap-2 font-mono text-[12px] text-[var(--muted)] transition-colors hover:text-[var(--text)]"
        >
          <span className="text-base leading-none transition-transform group-hover:-rotate-6">📘</span>
          Portfolio
        </Link>
        <ThemeToggle />
      </div>

      <div className="mb-1 flex items-center gap-3 text-[var(--muted)]">
        <span aria-hidden className="text-[42px] leading-none sm:text-[56px]">🧡</span>
      </div>

      <h1 className="text-[36px] font-semibold tracking-tight text-[var(--text)] sm:text-[44px] leading-[1.1]">
        {profile.name}
      </h1>

      <p className="mt-3 text-[15px] text-[var(--muted)] sm:text-[16px]">
        {profile.headline}.
      </p>

      <Properties />
      <SocialIconRow />
    </header>
  );
}

function SocialIconRow() {
  return (
    <nav aria-label="Social links" className="mt-6 flex flex-wrap items-center gap-1">
      {socials.map((s) => {
        const Icon = SOCIAL_ICONS[s.label];
        if (!Icon) return null;
        return (
          <Link
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener"
            aria-label={s.label}
            title={`${s.label} · ${s.handle}`}
            className="group inline-flex h-9 w-9 items-center justify-center rounded-md text-[var(--muted)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
          >
            <Icon className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        );
      })}
    </nav>
  );
}

function Properties() {
  return (
    <dl className="mt-8 grid grid-cols-[110px_1fr] gap-x-3 gap-y-1.5 text-[14px]">
      <Row icon={<MapPin className="h-3.5 w-3.5" strokeWidth={1.75} />} label="Location">
        <span className="text-[var(--text)]">{profile.location}</span>
      </Row>

      <Row icon={<span className="text-base leading-none">🎂</span>} label="Age">
        <AgeCounter />
      </Row>

      <Row icon={<span className="text-base leading-none">🎓</span>} label="Status">
        <span className="text-[var(--text)]">BSc Computer Science & AI</span>
        <span className="text-[var(--muted)]"> · Sep 2024 → Exp 2027</span>
      </Row>

      <Row icon={<span className="text-base leading-none">💼</span>} label="Open to">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-[var(--callout-green-bg)] px-1.5 py-0.5 text-[12px] text-[var(--callout-green-text)] border border-[var(--callout-green-border)]">
          <span className="h-1.5 w-1.5 rounded-full bg-current" /> Internships & collaborations
        </span>
      </Row>

      <Row icon={<span className="text-base leading-none">✉️</span>} label="Email">
        <CopyEmailButton email={profile.email} variant="inline" />
      </Row>

      <Row icon={<span className="text-base leading-none">🐙</span>} label="GitHub">
        <Link
          href="https://github.com/metaforismo"
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-1 text-[var(--text)] hover:text-[var(--accent-yellow)] transition-colors"
        >
          <span className="link-underline">@metaforismo</span>
          <ArrowUpRight className="h-3 w-3 opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
        </Link>
      </Row>

      <Row icon={<span className="text-base leading-none">📄</span>} label="CV">
        <Link
          href={profile.cv}
          target="_blank"
          rel="noopener"
          className="group inline-flex items-center gap-1 text-[var(--text)] hover:text-[var(--accent-yellow)] transition-colors"
        >
          <span className="link-underline">cv.pdf</span>
          <ArrowUpRight className="h-3 w-3 opacity-50 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" strokeWidth={1.75} />
        </Link>
      </Row>
    </dl>
  );
}

function Row({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <dt className="flex items-center gap-1.5 text-[var(--muted)] py-1">
        <span className="grid h-4 w-4 shrink-0 place-items-center text-[var(--muted)]">
          {icon}
        </span>
        <span className="truncate">{label}</span>
      </dt>
      <dd className="py-1 text-[var(--text)] leading-tight">{children}</dd>
    </>
  );
}
