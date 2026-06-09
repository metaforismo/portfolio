import { CopyEmailKeyboardListener } from "@/components/copy-email-listener";
import { PageHeader } from "@/components/page-header";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Footer } from "@/components/sections/footer";
import { GitHubSection } from "@/components/sections/github";
import { Projects } from "@/components/sections/projects";
import { SectionNav } from "@/components/section-nav";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { Writing } from "@/components/sections/writing";
import { getCachedContributions } from "@/lib/get-cached-contributions";
import { githubUsername } from "@/lib/data";

export default function HomePage() {
  const contributionsPromise = getCachedContributions(githubUsername);

  return (
    <>
      <CopyEmailKeyboardListener />
      <SectionNav />
      <main className="mx-auto w-full max-w-[760px] px-5 pb-24 sm:px-8">
        <PageHeader />

        <hr className="my-10" />
        <About />

        <hr className="my-10" />
        <Services />

        <hr className="my-10" />
        <Projects />

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
