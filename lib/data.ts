import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Brain,
  Layers,
  Smartphone,
} from "lucide-react";

/** Francesco was born on 1 February 2006 (Italy). Used by the live age counter. */
export const BIRTH_DATE = { year: 2006, month: 2, day: 1 } as const;

export const profile = {
  name: "Francesco Giannicola",
  handle: "@metaforismo",
  role: "Computer Science & AI Student",
  headline:
    "Founder of Limes Labs · Computer Science & AI student at Università della Calabria",
  university: "Università della Calabria",
  location: "Cosenza, Italy",
  email: "francescogiannicola1@gmail.com",
  avatar: "/images/inazuma.png",
  cv: "/cv.pdf",
  bio: [
    "Founder of Limes Labs and Computer Science & AI student at the University of Calabria, building products, research artifacts, and open-source AI systems.",
    "I like ambitious ideas: legal AI workspaces, evidence-gated agent workflows, benchmark infrastructure, robotics, and small research loops that turn claims into artifacts.",
  ],
  about: [
    "I'm a self-taught engineer with a soft spot for systems that look impossible at first sight. Most of what I know I learned by reverse-engineering papers, breaking SDKs apart, and shipping side projects until something clicks.",
    "My current work sits between product and research: Jurevo as a legal AI workspace, Limes Labs as a public research umbrella, and agent infrastructure that makes AI work inspectable instead of just impressive.",
    "Outside of code: Christopher Nolan (especially Interstellar), space exploration, football, and the timeless story of DragonBall. Different inputs, same loop. Patterns and structure everywhere.",
    "I run on organisation and precision. I'd rather ship one thing properly than three half-baked ones.",
  ],
};

export type SocialLink = {
  label: string;
  href: string;
  handle: string;
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/metaforismo", handle: "metaforismo" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/francescogiannicola/", handle: "francescogiannicola" },
  { label: "X / Twitter", href: "https://x.com/fragiannicola", handle: "@fragiannicola" },
  { label: "Instagram", href: "https://www.instagram.com/francescogiannicolaa/", handle: "@francescogiannicolaa" },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCYaWvTE2XvKI2u-9mqJysdw", handle: "channel" },
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
    title: "AI / ML Engineering",
    blurb:
      "Models, agents and inference pipelines, from fine-tuning to LLM-powered products.",
    stack: ["Python", "PyTorch", "OpenAI APIs"],
  },
  {
    icon: Layers,
    title: "Full-Stack Development",
    blurb:
      "Type-safe web apps with the React and Next.js stack, deployed on Vercel.",
    stack: ["TypeScript", "Next.js", "Tailwind"],
  },
  {
    icon: Blocks,
    title: "Blockchain & Web3",
    blurb:
      "Decentralised applications and smart contracts on Ethereum-compatible chains.",
    stack: ["Solidity", "Web3.js", "Ethereum"],
  },
  {
    icon: Smartphone,
    title: "Robotics & Computer Vision",
    blurb:
      "Real-time perception and control loops bridging hardware and ML models.",
    stack: ["YOLO", "OpenCV", "ROS"],
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
    title: "Products",
    description: "Live or product-shaped systems where the work has a real user and business surface.",
    items: [
      {
        title: "Jurevo",
        eyebrow: "AI legal workspace",
        summary:
          "AI legal workspace for Italian legal professionals, combining a public site, authenticated web app, backend API, mobile app, billing, storage, and versioned workflow packs.",
        detail: "Flagship product. The strongest proof that the research and engineering loop can become a usable SaaS surface.",
        tags: ["Product", "TypeScript", "SaaS", "Legal AI"],
        year: "2026",
        accent: "yellow",
        featured: true,
        links: [
          { label: "Website", href: "https://jurevo.it/" },
          { label: "GitHub", href: "https://github.com/metaforismo/Jurevo" },
        ],
      },
      {
        title: "Limes Labs",
        eyebrow: "Founder · research umbrella",
        summary:
          "Public research lab for European AI systems, benchmarks, orchestration, model cards, compute-access notes, and reproducible research artifacts.",
        detail: "The umbrella that connects the papers, benchmark infrastructure, agent tooling, and governance work.",
        tags: ["Founder", "Research", "European AI"],
        year: "2026",
        accent: "green",
        featured: true,
        links: [{ label: "Organization", href: "https://github.com/Limes-Labs" }],
      },
    ],
  },
  {
    title: "Research artifacts",
    description: "Source-backed work where the important output is an argument, a release, or a reproducible artifact.",
    items: [
      {
        title: "The Broadcast Ceiling",
        eyebrow: "Paper · RL credit assignment",
        summary:
          "Limes Labs paper on information and reliability limits of advantage estimators in long-horizon RL, released with source, PDF, GitHub archive, and Zenodo DOI.",
        detail: "DOI 10.5281/zenodo.20970205",
        tags: ["Paper", "RL", "LaTeX", "Zenodo"],
        year: "2026",
        accent: "blue",
        featured: true,
        links: [
          { label: "Release", href: "https://github.com/Limes-Labs/the-broadcast-ceiling/releases/tag/v0.1.0" },
          { label: "DOI", href: "https://zenodo.org/records/20970205" },
          { label: "Repo", href: "https://github.com/Limes-Labs/the-broadcast-ceiling" },
        ],
      },
      {
        title: "Limes Axis",
        eyebrow: "Sovereign AI platform",
        summary:
          "Open-source control plane for European operations: typed workflows, permissions, audit trails, model egress boundaries, approvals, and governed agent actions.",
        tags: ["Platform", "Governance", "AI operations"],
        year: "2026",
        accent: "orange",
        links: [{ label: "GitHub", href: "https://github.com/Limes-Labs/limes-axis" }],
      },
      {
        title: "Learning Signal Density",
        eyebrow: "Research workstream",
        summary:
          "Controlled causal-domain audit studying how much useful learning signal can be extracted from each external observation through selection, transformation, replay, feedback, and internal compute.",
        tags: ["Research", "Efficiency", "Python"],
        year: "2026",
        accent: "green",
        links: [{ label: "GitHub", href: "https://github.com/Limes-Labs/learning-signal-density" }],
      },
      {
        title: "Limen",
        eyebrow: "Routing and orchestration",
        summary:
          "Open orchestration primitives for routing tasks across models, roles, workflows, LoRA adapters, and verifier-style execution loops.",
        tags: ["Python", "Routing", "Agents"],
        year: "2026",
        accent: "purple",
        links: [{ label: "GitHub", href: "https://github.com/Limes-Labs/limen" }],
      },
    ],
  },
  {
    title: "Agent and open-source systems",
    description: "Libraries and tools for making AI systems observable, verifiable, and easier to operate.",
    items: [
      {
        title: "TarsGPT",
        eyebrow: "Open-source robot runtime",
        summary:
          "Self-contained TARS-inspired robot runtime with voice, movement, dashboard, long-term memory, vision, skills, and bilingual build documentation.",
        tags: ["Python", "Robotics", "OpenAI"],
        year: "2025",
        accent: "blue",
        featured: true,
        links: [
          { label: "Website", href: "https://tars-gpt.vercel.app" },
          { label: "GitHub", href: "https://github.com/metaforismo/TarsGPT" },
        ],
      },
      {
        title: "TracePilot",
        eyebrow: "Reliability studio for computer-use agents",
        summary:
          "Product and eval harness for browser and desktop agents: traces, replay, verifiers, recovery policies, and reliability metrics.",
        tags: ["TypeScript", "Agents", "Evals"],
        year: "2026",
        accent: "gray",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/tracepilot" }],
      },
      {
        title: "VO Agent",
        eyebrow: "Evidence-gated agent workflows",
        summary:
          "Python library for coordinating agent workflows where claims advance only after command or Python verifiers produce evidence.",
        tags: ["Python", "Verification", "Workflows"],
        year: "2026",
        accent: "green",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/vo-agent" }],
      },
      {
        title: "Benchforge",
        eyebrow: "Benchmark challenge factory",
        summary:
          "Local-first factory for benchmark arenas with challenge-specific CLIs, submission bundles, verifier receipts, and hosted leaderboard exports.",
        tags: ["JavaScript", "Benchmarks", "Verifiers"],
        year: "2026",
        accent: "yellow",
        links: [{ label: "GitHub", href: "https://github.com/metaforismo/benchforge" }],
      },
    ],
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Swift", "Solidity", "Rust"],
  },
  {
    title: "Frameworks & Runtimes",
    items: ["React", "Next.js", "Node.js", "Electron", "SwiftUI", "PyTorch", "Tailwind"],
  },
  {
    title: "AI / ML",
    items: ["OpenAI APIs", "LLM agents", "YOLO", "OpenCV", "Stable Diffusion", "GPT-2 from scratch"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "Docker", "Vercel", "Web3.js", "Ethereum", "Linux"],
  },
];

export type ExperienceItem = {
  title: string;
  org: string;
  period: string;
  blurb: string;
  highlights?: string[];
  kind: "education" | "project" | "work" | "volunteer";
};

export const experience: ExperienceItem[] = [
  {
    title: "BSc Computer Science & Artificial Intelligence",
    org: "Università della Calabria",
    period: "Sep 2024 · Expected 2027",
    blurb:
      "Active member of the teaching quality committee, advocating for student interests and academic improvements.",
    kind: "education",
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
    title: "Social Media Manager",
    org: "Personal Brand",
    period: "Mar 2020 · Present",
    blurb: "Built a personal media presence from zero around tech, design and storytelling.",
    highlights: ["18K+ Instagram", "50K+ TikTok", "4M+ views · 2.5M+ likes", "5+ brand partnerships"],
    kind: "work",
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
