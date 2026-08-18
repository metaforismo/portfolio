import type { LucideIcon } from "lucide-react";
import {
  Brain,
  Cpu,
  FlaskConical,
  Smartphone,
} from "lucide-react";

/** Francesco was born on 1 February 2006 (Italy). Used by the live age counter. */
export const BIRTH_DATE = { year: 2006, month: 2, day: 1 } as const;

export const profile = {
  name: "Francesco Giannicola",
  handle: "@metaforismo",
  role: "Software Engineer & Builder",
  headline:
    "Building AI systems, developer tools, native apps, compilers & research · Founder of Limes Labs · CS & AI @ UniCal",
  university: "Università della Calabria",
  location: "Cosenza, Italy",
  email: "francescogiannicola1@gmail.com",
  avatar: "/images/inazuma.png",
  cv: "/cv.pdf",
  bio: [
    "Founder of Limes Labs. I engineer across AI systems, developer tools, native software, compilers, and product — and I tend to learn by shipping and verifying.",
    "The interesting part usually starts after the first demo works.",
  ],
  about: [
    "I like taking difficult ideas and turning them into working systems. Most of what I know comes from reverse-engineering papers, reading runtimes until they make sense, and shipping until the claim can be checked.",
    "The work sits where research, systems, and product meet: agent reliability and evaluation, native control surfaces, compilers with proof obligations, and public research artifacts with evidence attached.",
    "I tend to learn by shipping. The interesting part usually starts after the first demo works — traces, tests, verifiers, and the parts that have to survive contact with a real interface.",
    "Outside of code: Christopher Nolan (especially Interstellar), space exploration, football, and the timeless story of DragonBall. Different inputs, same loop. Patterns and structure everywhere.",
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
  previewTitle: string;
  previewBody: string;
};

export const socials: SocialLink[] = [
  {
    label: "GitHub",
    href: "https://github.com/metaforismo",
    handle: "metaforismo",
    previewTitle: "metaforismo",
    previewBody: "Public work across agents, native apps, compilers, and research.",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/francescogiannicola/",
    handle: "francescogiannicola",
    previewTitle: "Francesco Giannicola",
    previewBody: "Software Engineer & Builder · Cosenza, Italy",
  },
  {
    label: "X / Twitter",
    href: "https://x.com/fragiannicola",
    handle: "@fragiannicola",
    previewTitle: "@fragiannicola",
    previewBody: "Notes on building, research artifacts, and whatever I'm shipping.",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/francescogiannicolaa/",
    handle: "@francescogiannicolaa",
    previewTitle: "@francescogiannicolaa",
    previewBody: "Personal brand around tech, design, and storytelling.",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCYaWvTE2XvKI2u-9mqJysdw",
    handle: "channel",
    previewTitle: "YouTube",
    previewBody: "Longer-form clips from the same builder loop.",
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  blurb: string;
  stack: string[];
};

export const services: Service[] = [
  {
    icon: Brain,
    title: "AI & Agent Systems",
    blurb:
      "Tool-using agents, evals, traces, reliability, and model integrations that can be inspected after the demo.",
    stack: ["Evals", "Orchestration", "Providers"],
  },
  {
    icon: Cpu,
    title: "Developer Tools & Systems",
    blurb:
      "Compilers, verification, runtimes, CLIs, observability, and infrastructure for people who ship systems.",
    stack: ["Compilers", "CLIs", "Runtimes"],
  },
  {
    icon: Smartphone,
    title: "Native & Product Engineering",
    blurb:
      "End-to-end product systems across Swift/SwiftUI, Expo, React, and Next.js — from interface to backend.",
    stack: ["SwiftUI", "Expo", "Next.js"],
  },
  {
    icon: FlaskConical,
    title: "Research & Verification",
    blurb:
      "Reproducible experiments, benchmarks, evidence pipelines, and formal checks instead of vibes.",
    stack: ["SMT", "Benchmarks", "Artifacts"],
  },
];

export type AccentColor = "yellow" | "blue" | "green" | "purple" | "orange" | "red" | "gray";

export type WorkLink = {
  label: string;
  href: string;
};

export type SelectedWorkItem = {
  title: string;
  eyebrow: string;
  summary: string;
  detail?: string;
  tags: string[];
  year: string;
  accent: AccentColor;
  links: WorkLink[];
  featured?: boolean;
};

export type SelectedWorkTier = {
  title: string;
  description: string;
  items: SelectedWorkItem[];
};

export const selectedWorkTiers: SelectedWorkTier[] = [
  {
    title: "Products & interfaces",
    description: "Product-shaped systems with a real interface, user, or compilation target.",
    items: [
      {
        title: "IntentForm",
        eyebrow: "Local-first design environment",
        summary:
          "Humans and coding agents edit the same validated Semantic Interface Graph, then compile it deterministically to React, Web, Expo, and SwiftUI, with evidence bound to the current fingerprint.",
        detail:
          "Product + developer tooling + agents + compiler-like systems. Generated files are artifacts, not the source of truth.",
        tags: ["TypeScript", "React", "Expo", "SwiftUI", "MCP"],
        year: "2026",
        accent: "yellow",
        featured: true,
        links: [
          { label: "Demo", href: "https://intentform-amber.vercel.app" },
          { label: "GitHub", href: "https://github.com/metaforismo/IntentForm" },
        ],
      },
      {
        title: "Bite",
        eyebrow: "Native iOS health product",
        summary:
          "SwiftUI health coach with HealthKit, typed-tool AI workflows, long-term memory, lab-report handling, widgets, Live Activities, and a Cloudflare Worker backend.",
        tags: ["Swift", "SwiftUI", "HealthKit", "Cloudflare"],
        year: "2026",
        accent: "green",
        featured: true,
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/Bite" }],
      },
      {
        title: "Jurevo",
        eyebrow: "AI legal workspace",
        summary:
          "AI legal workspace for Italian legal professionals: public site, authenticated app, document workflows, and billing. The product repository is private; public evidence is the live site and the OSS workspace.",
        tags: ["Product", "TypeScript", "SaaS"],
        year: "2026",
        accent: "orange",
        links: [
          { label: "Website", href: "https://jurevo.it/" },
          { label: "OSS", href: "https://github.com/metaforismo/ossjurevo" },
        ],
      },
    ],
  },
  {
    title: "AI & developer infrastructure",
    description: "Tools for running, inspecting, and testing agents and developer workflows.",
    items: [
      {
        title: "TracePilot",
        eyebrow: "Reliability studio for computer-use agents",
        summary:
          "Open-source product and eval harness for browser and desktop agents: traces, replay, verifiers, recovery policies, cost/readiness evidence, and provider adapters.",
        tags: ["TypeScript", "Playwright", "Evals", "Agents"],
        year: "2026",
        accent: "gray",
        featured: true,
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/tracepilot" }],
      },
      {
        title: "OpenClaw",
        eyebrow: "Upstream open-source contributor",
        summary:
          "Contributor to the OpenClaw upstream codebase across agent runtime, Gateway, automation, native iOS, and messaging/provider integrations, with 18 merged PRs as of August 2026.",
        detail:
          "External engineering signal: reproducing issues, implementing fixes, building focused regression coverage, producing runtime evidence, and working through upstream review. 23 PRs opened / 18 merged upstream — not a claim of sole authorship on every line.",
        tags: ["Open Source", "TypeScript", "Swift", "Agents"],
        year: "2026",
        accent: "orange",
        featured: true,
        links: [
          {
            label: "Contributions",
            href: "https://github.com/openclaw/openclaw/pulls?q=is%3Apr+author%3Ametaforismo",
          },
        ],
      },
      {
        title: "AgentKeys",
        eyebrow: "Native iPhone control surface",
        summary:
          "Open-source tactile iOS console for coding agents: structured lifecycle events, real approval states, sessions, and provider-aware capabilities. The phone is a semantic remote control, not a remote shell.",
        tags: ["Swift", "SwiftUI", "Agents", "iOS"],
        year: "2026",
        accent: "blue",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/AgentKeys" }],
      },
      {
        title: "Atlas Loop",
        eyebrow: "iOS Simulator evidence loop",
        summary:
          "Local-first runtime evidence and testing tooling for agents and developers operating real iOS Simulator interfaces: screenshots, traces, metrics, and inspectable handoff artifacts.",
        tags: ["TypeScript", "iOS", "Observability"],
        year: "2026",
        accent: "purple",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/atlas-loop" }],
      },
      {
        title: "Benchforge",
        eyebrow: "Benchmark challenge factory",
        summary:
          "Local-first factory for benchmark arenas: challenge-specific CLIs, independent verification, submission bundles, verifier receipts, and hosted leaderboard exports.",
        tags: ["JavaScript", "Benchmarks", "Verifiers"],
        year: "2026",
        accent: "yellow",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/benchforge" }],
      },
    ],
  },
  {
    title: "Systems & research",
    description: "Compilers, governed platforms, publications, and certificate-first research.",
    items: [
      {
        title: "Sigil",
        eyebrow: "Experimental systems language",
        summary:
          "Compiler with first-class proof obligations, SMT-LIB verification, Z3, memory/ownership models, and a conditional GCC JIT native-lowering path. Research scaffold, not a production verifier.",
        tags: ["C++", "SMT", "Z3", "CMake"],
        year: "2026",
        accent: "purple",
        featured: true,
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/sigil-lang" }],
      },
      {
        title: "The Broadcast Ceiling",
        eyebrow: "Paper · RL credit assignment",
        summary:
          "Limes Labs paper on information and reliability limits of advantage estimators in long-horizon RL, released with source, PDF, GitHub archive, and Zenodo DOI.",
        detail: "DOI 10.5281/zenodo.20970205",
        tags: ["Paper", "RL", "Python", "Zenodo"],
        year: "2026",
        accent: "blue",
        featured: true,
        links: [
          { label: "DOI", href: "https://zenodo.org/records/20970205" },
          {
            label: "Release",
            href: "https://github.com/Limes-Labs/the-broadcast-ceiling/releases/tag/v0.1.0",
          },
          { label: "Repo", href: "https://github.com/Limes-Labs/the-broadcast-ceiling" },
        ],
      },
      {
        title: "Limes Axis",
        eyebrow: "Sovereign AI control plane",
        summary:
          "Open-source control plane for European operations: typed workflows, permissions, audit trails, model egress boundaries, approvals, and governed agent actions.",
        tags: ["Python", "Governance", "AI operations"],
        year: "2026",
        accent: "orange",
        links: [{ label: "GitHub", href: "https://github.com/Limes-Labs/limes-axis" }],
      },
      {
        title: "Elliptic Rank ≥ 30",
        eyebrow: "Certificate-first math research",
        summary:
          "Constructive pipeline toward rank E(Q) ≥ 30. Independently reproduces the public rank-29 baseline with exact, SageMath, and Magma evidence. No rank-30 certificate claimed.",
        tags: ["Python", "SageMath", "Magma", "Math"],
        year: "2026",
        accent: "green",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/elliptic-rank-30" }],
      },
      {
        title: "TarsGPT",
        eyebrow: "Physical AI runtime",
        summary:
          "Self-contained TARS-inspired robot runtime with voice, movement, dashboard, long-term memory, vision, skills, and bilingual build documentation.",
        tags: ["Python", "Robotics", "Open source"],
        year: "2025",
        accent: "blue",
        links: [
          { label: "Website", href: "https://tars-gpt.vercel.app" },
          { label: "GitHub", href: "https://github.com/metaforismo/TarsGPT" },
        ],
      },
    ],
  },
];

export const archiveProjects = [
  { title: "Hephaestus", href: "https://github.com/metaforismo/Hephaestus" },
  { title: "Cumea", href: "https://github.com/metaforismo/Cumea" },
  { title: "serve-droid", href: "https://github.com/metaforismo/serve-droid" },
  { title: "Scriba", href: "https://github.com/metaforismo/scriba" },
  { title: "VO Agent", href: "https://github.com/metaforismo/vo-agent" },
  { title: "limen", href: "https://github.com/Limes-Labs/limen" },
  { title: "Learning Signal Density", href: "https://github.com/Limes-Labs/learning-signal-density" },
] as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Swift", "Python", "Rust", "C++"],
  },
  {
    title: "Interfaces",
    items: ["React", "Next.js", "SwiftUI", "Expo", "Electron"],
  },
  {
    title: "Infrastructure",
    items: ["Node.js", "Cloudflare", "SQLite", "PostgreSQL", "Docker", "GitHub Actions", "Git"],
  },
  {
    title: "Systems",
    items: [
      "Tool-using agents",
      "LLM evals",
      "Tracing",
      "Playwright",
      "Z3 / SMT",
      "CMake",
      "Evidence tooling",
    ],
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  blurb: string;
  highlights?: string[];
  kind: "education" | "project" | "work" | "volunteer" | "founder" | "oss";
  href?: string;
  hrefLabel?: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Founder",
    org: "Limes Labs",
    period: "Jun 2026 · Present",
    blurb:
      "Building an open European AI research and engineering initiative across governed agent systems, model routing, evaluation infrastructure, reproducible research, and open-source AI tooling.",
    kind: "founder",
    href: "https://github.com/Limes-Labs",
    hrefLabel: "Organization",
  },
  {
    title: "Open Source Contributor",
    org: "OpenClaw",
    period: "Jul 2026 · Present",
    blurb:
      "23 upstream pull requests opened, 18 merged as of August 2026, across agent runtime, Gateway reliability and performance, automation, native iOS, and messaging/provider integrations including Mattermost, Feishu, and QQBot. Work typically goes from reproduction through implementation, focused regression tests, runtime evidence, review feedback, and upstream validation.",
    kind: "oss",
    href: "https://github.com/openclaw/openclaw/pulls?q=is%3Apr+author%3Ametaforismo",
    hrefLabel: "Pull requests",
  },
  {
    title: "BSc Computer Science & Artificial Intelligence",
    org: "Università della Calabria",
    period: "Sep 2024 · Expected 2027",
    blurb:
      "Active member of the teaching quality committee, advocating for student interests and academic improvements.",
    kind: "education",
  },
  {
    title: "Social Media Manager",
    org: "Personal Brand",
    period: "Mar 2020 · Present",
    blurb: "Built a personal media presence from zero around tech, design and storytelling.",
    highlights: ["18K+ Instagram", "50K+ TikTok", "4M+ views · 2.5M+ likes", "5+ brand partnerships"],
    kind: "work",
  },
  {
    title: "Hackathon · AI for Anti-Counterfeiting",
    org: "Codemotion × Poligrafico Italiano",
    period: "May · Jun 2024",
    blurb:
      "Delivered an MVP virtual assistant addressing global counterfeiting via AI-driven data tracing for the Made in Italy supply chain.",
    kind: "project",
  },
  {
    title: "Volunteer · ENSA & ASS.A.P.L.I.",
    org: "Italy",
    period: "2016 · Present",
    blurb:
      "Civil protection, road safety education, and community initiatives. Organised 'Babbo Natale in Corsia', featured on LaC News 24.",
    kind: "volunteer",
  },
];

export type Certification = {
  title: string;
  org: string;
  period: string;
};

export const certifications: Certification[] = [
  { title: "Boolean Coding Week · Arcade Collection", org: "Boolean", period: "Oct 2024" },
  { title: "OII · Italian Olympiad in Informatics", org: "MIUR", period: "Apr 2024" },
  { title: "Epicode Tech Camp · 9th Edition", org: "Epicode", period: "May 2024" },
  { title: "AICA ICDL Full Standard", org: "AICA", period: "Sep 2022" },
];

export const languages = [
  { name: "Italian", level: "Native" },
  { name: "English", level: "Intermediate B1" },
  { name: "French", level: "Basic" },
  { name: "Spanish", level: "Basic" },
];

/** A short piece of writing, published as a post or thread on X. */
export type Article = {
  title: string;
  /** Link to the post / thread on X. */
  href: string;
  /** Publication date, ISO "YYYY-MM-DD". */
  date: string;
  /** One-line summary shown under the title. */
  blurb?: string;
  /** Badge label, e.g. "Thread" | "Post". Defaults to "X". */
  source?: string;
};

/** Curated writing. Add a new article = add an entry here. */
export const articles: Article[] = [
  {
    title:
      "Personal Finance for Beginners: How to Build a Better Future with Your Money",
    href: "https://x.com/fragiannicola/status/2064069685662884021",
    date: "2026-06-08",
    blurb:
      "Before you invest, the most important thing isn't finding the perfect product — it's understanding yourself.",
    source: "Thread",
  },
];

export type Publication = {
  title: string;
  venue: string;
  date: string;
  blurb: string;
  href: string;
  extraLinks?: WorkLink[];
};

export const publications: Publication[] = [
  {
    title: "The Broadcast Ceiling",
    venue: "Zenodo · Limes Labs",
    date: "2026-06",
    blurb:
      "Mechanism audits for long-horizon RL credit assignment. Canonical PDF, source experiments, and SHA-256 paper manifest.",
    href: "https://zenodo.org/records/20970205",
    extraLinks: [
      { label: "Repo", href: "https://github.com/Limes-Labs/the-broadcast-ceiling" },
      {
        label: "v0.1.0",
        href: "https://github.com/Limes-Labs/the-broadcast-ceiling/releases/tag/v0.1.0",
      },
    ],
  },
];

export const navAnchors = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "github", label: "GitHub" },
  { id: "experience", label: "Experience" },
  { id: "writing", label: "Writing" },
  { id: "contact", label: "Contact" },
] as const;

export type NavAnchorId = (typeof navAnchors)[number]["id"];

/** Notion-style accent → matches the callout-{color} CSS vars. */
export const projectAccents = {
  yellow: "yellow",
  blue: "blue",
  green: "green",
  purple: "purple",
  orange: "orange",
  red: "red",
  gray: "gray",
} as const;

export const githubUsername = "metaforismo";
