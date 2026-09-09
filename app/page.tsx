import { CommandPalette } from "@/components/command-palette";
import { CopyEmailKeyboardListener } from "@/components/copy-email-listener";
import { PageHeader } from "@/components/page-header";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { GitHubSection } from "@/components/sections/github";
import { Projects } from "@/components/sections/projects";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import { featuredWork, githubUsername } from "@/lib/data";

import { personSchema } from "@/lib/site-content";

export const metadata = { alternates: { canonical: "/" } };

export default function HomePage() {
  const contributionsPromise = getCachedContributions(githubUsername);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema).replace(/</g, "\\u003c") }} />
      <CopyEmailKeyboardListener />
      <CommandPalette />
      <main className="mx-auto w-full max-w-[680px] px-5 pb-24 sm:max-w-[760px] sm:px-8">
        <PageHeader />

        <hr className="my-10" />
        <About />

        <hr className="my-10" />
        <Projects />
        <noscript>
          <section aria-label="Project details" className="mt-8 space-y-6">
            <h2 className="text-xl font-semibold">Project details</h2>
            {featuredWork.map(item => <article key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm">{item.eyebrow} · {item.year} · {item.tags.join(", ")}</p>
              <p className="mt-2 text-[15px] leading-relaxed">{item.summary}</p>
              {item.detail && <p className="mt-2 text-sm">{item.detail}</p>}
              <ul className="mt-2">{item.links.map(link => <li key={link.href}><a className="link-underline" href={link.href}>{link.label}</a></li>)}</ul>
            </article>)}
          </section>
        </noscript>

        <hr className="my-10" />
        <Skills />

        <hr className="my-10" />
        <GitHubSection contributionsPromise={contributionsPromise} />

        <hr className="my-10" />
        <Experience />

        <hr className="my-10" />
        <Writing />

        <hr className="my-10" />
        <Footer />
      </main>
    </>
  );
}
