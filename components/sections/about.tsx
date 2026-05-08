import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="scroll-mt-8">
      <SectionHeading emoji="🧠">About</SectionHeading>

      <div className="mt-4 space-y-4 text-[15px] leading-[1.7] text-[var(--text-soft)]">
        {profile.about.map((paragraph, i) => (
          <p key={i} className="text-pretty">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}
