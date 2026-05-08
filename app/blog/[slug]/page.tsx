import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";

const posts: Record<string, { title: string; content: string; date: string }> = {
  "future-of-ai-robotics": {
    title: "The Future of AI in Robotics",
    date: "2024-01-15",
    content:
      "Articolo in arrivo. Nel frattempo dai un'occhiata al progetto TarsGPT su GitHub.",
  },
  "blockchain-voting-systems": {
    title: "Blockchain Voting Systems",
    date: "2024-01-20",
    content:
      "Articolo in arrivo. Nel frattempo, DeVoSy è già su GitHub.",
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts[slug];

  if (!post) notFound();

  return (
    <main className="mx-auto w-full max-w-[720px] px-6 py-16">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-[0.18em] text-[var(--text-muted)] transition-colors hover:text-[var(--accent-color)]"
      >
        <ArrowLeft className="h-3 w-3" /> Back to home
      </Link>

      <article className="mt-10">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--text-muted)]">
          {post.date}
        </p>
        <h1 className="mt-2 font-serif text-3xl text-[var(--text-primary)] sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-6 text-[15px] font-light leading-[1.75] text-[var(--text-secondary)]">
          {post.content}
        </p>
      </article>
    </main>
  );
}
