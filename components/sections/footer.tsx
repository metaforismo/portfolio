import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { CopyEmailButton } from "@/components/copy-email-button";
import { Callout, SectionHeading } from "@/components/section-heading";
import { profile, socials } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <section id="contact" className="scroll-mt-8">
      <SectionHeading emoji="✉️">Get in touch</SectionHeading>

      <Callout emoji="🤝" color="blue" className="mt-4">
        <p className="text-[var(--text)]">
          Interested in working together? Drop me a line, I read everything.
        </p>
        <div className="mt-3">
          <CopyEmailButton email={profile.email} variant="footer" />
        </div>
      </Callout>

      <div className="mt-8">
        <SectionHeading emoji="🔗" level={3}>Links</SectionHeading>
        <ul className="mt-3 space-y-0.5 text-[13px]">
          {socials.map((s) => (
            <li
              key={s.label}
              className="notion-row grid grid-cols-[120px_1fr_auto] gap-3 rounded-md px-2 py-1.5"
            >
              <span className="text-[var(--muted)]">{s.label}</span>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-1 truncate text-[var(--text)] hover:text-[var(--accent-yellow)] transition-colors"
              >
                <span className="link-underline truncate">{s.handle}</span>
              </Link>
              <ArrowUpRight
                className="h-3.5 w-3.5 shrink-0 text-[var(--muted)]"
                strokeWidth={1.75}
                aria-hidden
              />
            </li>
          ))}
          <li className="notion-row grid grid-cols-[120px_1fr_auto] gap-3 rounded-md px-2 py-1.5">
            <span className="text-[var(--muted)]">Source</span>
            <Link
              href="https://github.com/metaforismo/portfolio"
              target="_blank"
              rel="noopener"
              className="text-[var(--text)] link-underline hover:text-[var(--accent-yellow)] transition-colors"
            >
              github.com/metaforismo/portfolio
            </Link>
            <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-[var(--muted)]" strokeWidth={1.75} />
          </li>
        </ul>
      </div>

      <footer className="mt-14 border-t border-[var(--divider)] pt-6 pb-4 text-[12px] text-[var(--muted)]">
        <span>© {year} Francesco Giannicola</span>
      </footer>
    </section>
  );
}
