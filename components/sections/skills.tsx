import { SectionHeading } from "@/components/section-heading";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-8">
      <SectionHeading emoji="⚒️">Skills</SectionHeading>

      <dl className="mt-4 grid grid-cols-[110px_1fr] gap-x-3 gap-y-3 text-[14px]">
        {skillGroups.map(({ title, items }) => (
          <div key={title} className="contents">
            <dt className="py-1 text-[var(--muted)]">{title}</dt>
            <dd className="py-1">
              <ul className="flex flex-wrap gap-1">
                {items.map((item) => (
                  <li
                    key={item}
                    className="rounded-sm bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[12px] font-mono text-[var(--text-soft)] transition-colors hover:bg-[var(--bg-hover)] hover:text-[var(--text)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
