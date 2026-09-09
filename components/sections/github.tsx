"use client";

import { Suspense, useRef } from "react";
import { useInView } from "motion/react";
import dynamic from "next/dynamic";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import {
  GitHubContributionsFallback,
} from "@/components/github-contributions-fallback";
import {
  GithubThemePicker,
  GithubThemeScope,
  useGithubTheme,
} from "@/components/github-theme-picker";
import { githubUsername } from "@/lib/data";

// This interactive visualization is progressive enhancement; the profile link
// and portfolio prose remain server-rendered for non-JavaScript readers.
const GitHubContributions = dynamic(
  () => import("@/components/github-contributions").then(module => module.GitHubContributions),
  { ssr: false, loading: GitHubContributionsFallback },
);

export function GitHubSection({
  contributionsPromise,
}: {
  contributionsPromise: Promise<
    import("@/components/contribution-graph").Activity[] | null
  >;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const visible = useInView(sectionRef, { once: true, margin: "300px" });
  const { theme, setTheme } = useGithubTheme();

  return (
    <section ref={sectionRef} id="github" className="scroll-mt-8">
      <SectionHeading
        emoji="📊"
        hint={`Live · @${githubUsername}`}
      >
        GitHub
      </SectionHeading>

      <p className="mt-3 text-[14px] text-[var(--text-soft)]">
        Last 12 months of commits. Pick a palette below.
      </p>

      <div className="mt-3 flex justify-end">
        <GithubThemePicker theme={theme} onChange={setTheme} />
      </div>

      <GithubThemeScope
        theme={theme}
        className="mt-3 rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] p-3 sm:p-4"
      >
        <Suspense fallback={<GitHubContributionsFallback />}>
          {visible ? <GitHubContributions
            contributions={contributionsPromise}
            githubProfileUrl={`https://github.com/${githubUsername}`}
          /> : <GitHubContributionsFallback />}
        </Suspense>

        <div className="mt-3 flex items-center justify-between border-t border-[var(--divider)] pt-3 text-[12px] font-mono text-[var(--muted)]">
          <span>cached · 24h</span>
          <Link
            href={`https://github.com/${githubUsername}`}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
          >
            <Github className="h-3 w-3" strokeWidth={1.75} />
            View profile
            <ArrowUpRight className="h-3 w-3" strokeWidth={1.75} />
          </Link>
        </div>
      </GithubThemeScope>
    </section>
  );
}
