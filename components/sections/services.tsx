import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/data";

const COLOR_BY_INDEX = ["yellow", "blue", "green", "purple"] as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-8">
      <SectionHeading emoji="🛠️">What I do</SectionHeading>

      <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, blurb, stack }, i) => {
          const color = COLOR_BY_INDEX[i % COLOR_BY_INDEX.length];
          return (
            <article
              key={title}
              className="group rounded-md border border-[var(--border-line)] bg-[var(--bg-soft)] p-3.5 transition-colors hover:bg-[var(--bg-hover)]"
            >
              <div className="flex items-start gap-3">
                <div
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-[14px] border"
                  style={{
                    background: `var(--callout-${color}-bg)`,
                    borderColor: `var(--callout-${color}-border)`,
                    color: `var(--callout-${color}-text)`,
                  }}
                >
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-[14px] font-medium text-[var(--text)]">
                    {title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.55] text-[var(--text-soft)]">
                    {blurb}
                  </p>
                  <ul className="mt-2.5 flex flex-wrap gap-1">
                    {stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-sm bg-[var(--bg-elevated)] px-1.5 py-0.5 text-[11px] font-mono text-[var(--text-soft)]"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
