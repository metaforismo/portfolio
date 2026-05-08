import { Callout, SectionHeading } from "@/components/section-heading";

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-8">
      <SectionHeading emoji="✍️">Writing</SectionHeading>

      <Callout emoji="📝" color="yellow" className="mt-4">
        <span className="font-medium">Articles coming soon.</span>{" "}
        Notes on building TarsGPT, why AlphaEvolve matters, and what I&apos;m
        learning at uni.
      </Callout>
    </section>
  );
}
