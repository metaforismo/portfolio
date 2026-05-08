import { SectionHeading } from "@/components/section-heading";
import {
  certifications,
  experience,
  type ExperienceItem,
} from "@/lib/data";

const KIND_EMOJI: Record<ExperienceItem["kind"], string> = {
  education: "🎓",
  project: "🛠️",
  work: "📣",
  volunteer: "🤝",
};

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-8">
      <SectionHeading emoji="🧭">Experience & Education</SectionHeading>

      <ol className="mt-4 space-y-1">
        {experience.map((item) => (
          <li
            key={`${item.title}-${item.org}`}
            className="notion-row group rounded-md px-2 py-2.5 transition-colors"
          >
            <div className="grid grid-cols-[28px_1fr_auto] items-start gap-3">
              <span aria-hidden className="text-[18px] leading-[1.2]">
                {KIND_EMOJI[item.kind]}
              </span>
              <div className="min-w-0">
                <h3 className="text-[14px] font-medium text-[var(--text)]">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[var(--muted)]">
                  {item.org}
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.6] text-[var(--text-soft)]">
                  {item.blurb}
                </p>
                {item.highlights && (
                  <ul className="mt-2 flex flex-wrap gap-1">
                    {item.highlights.map((h) => (
                      <li
                        key={h}
                        className="rounded-sm bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[11px] font-mono text-[var(--text-soft)]"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <span className="font-mono text-[11px] text-[var(--muted)] whitespace-nowrap pt-0.5">
                {item.period}
              </span>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-8">
        <SectionHeading emoji="🏅" level={3}>Certifications</SectionHeading>
        <ul className="mt-3 space-y-0.5">
          {certifications.map((c) => (
            <li
              key={c.title}
              className="notion-row grid grid-cols-[1fr_auto] gap-3 rounded-md px-2 py-1.5 text-[13px]"
            >
              <span>
                <span className="text-[var(--text)]">{c.title}</span>
                <span className="text-[var(--muted)]"> · {c.org}</span>
              </span>
              <span className="font-mono text-[11px] text-[var(--muted)]">
                {c.period}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
