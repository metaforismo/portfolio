"use client";

import { Suspense } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

import { SectionHeading } from "@/components/section-heading";
import {
  GitHubContributions,
  GitHubContributionsFallback,
} from "@/components/github-contributions";
import {
  GithubThemePicker,
  GithubThemeScope,
  useGithubTheme,
} from "@/components/github-theme-picker";
import { githubUsername } from "@/lib/data";

export function GitHubSection({
  contributionsPromise,
}: {
  contributionsPromise: Promise<
    import("@/components/contribution-graph").Activity[]
  >;
}) {
  const { theme, setTheme } = useGithubTheme();

  return (
    <section id="github" className="scroll-mt-8">
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
          <GitHubContributions
            contributions={contributionsPromise}
            githubProfileUrl={`https://github.com/${githubUsername}`}
          />
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
