import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  Brain,
  Cpu,
  Gamepad2,
  Layers,
  NotebookPen,
  Smartphone,
  Telescope,
} from "lucide-react";

/** Francesco was born on 1 February 2006 (Italy). Used by the live age counter. */
export const BIRTH_DATE = { year: 2006, month: 2, day: 1 } as const;

export const profile = {
  name: "Francesco Giannicola",
  handle: "@metaforismo",
  role: "Computer Science & AI Student",
  university: "Università della Calabria",
  location: "Cosenza, Italy",
  email: "francescogiannicola1@gmail.com",
  avatar: "/images/inazuma.png",
  cv: "/cv.pdf",
  bio: [
    "Computer Science & AI student at the University of Calabria, building things at the intersection of robotics, blockchain, and machine learning.",
    "I like ambitious ideas. A real-life TARS, AlphaEvolve from scratch, an open rebuild of a SOTA agent: I take them apart, rebuild them, and learn what they're actually made of.",
  ],
  about: [
    "I'm a self-taught engineer with a soft spot for systems that look impossible at first sight. Most of what I know I learned by reverse-engineering papers, breaking SDKs apart, and shipping side projects until something clicks.",
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

export type ProjectStatus = "shipped" | "wip" | "research";

export type Project = {
  slug: string;
  emoji: string;
  title: string;
  category: string;
  blurb: string;
  metrics: string[];
  stack: string[];
  href: string;
  stars?: number;
  icon: LucideIcon;
  accent?: "yellow" | "blue" | "green" | "purple" | "orange" | "red" | "gray";
  status: ProjectStatus;
  year: string;
  large?: boolean;
};

export const projects: Project[] = [
  {
    slug: "TarsGPT",
    emoji: "🤖",
    title: "TarsGPT",
    category: "Robotics × LLM",
    blurb:
      "A real-life TARS from Interstellar — replicating most of the robot's behaviour with ChatGPT and Whisper for natural language, voice and motion.",
    metrics: ["Realtime voice", "Vision + motion", "Most-starred repo"],
    stack: ["Python", "OpenAI", "Whisper", "Computer Vision"],
    href: "https://github.com/metaforismo/TarsGPT",
    stars: 15,
    icon: Bot,
    accent: "blue",
    status: "shipped",
    year: "2025",
  },
  {
    slug: "OpenAlphaEvolve",
    emoji: "🧬",
    title: "OpenAlphaEvolve",
    category: "AI · Evolution",
    blurb:
      "DeepMind's AlphaEvolve, open-source and from scratch. LLM-driven evolutionary search that discovers and refines better algorithms.",
    metrics: ["From scratch", "LLM × evolution", "Research-grade"],
    stack: ["Python", "LLMs", "Genetic algorithms"],
    href: "https://github.com/metaforismo/OpenAlphaEvolve",
    icon: Telescope,
    accent: "purple",
    status: "research",
    year: "2025",
  },
  {
    slug: "Apex2",
    emoji: "🧠",
    title: "Apex2",
    category: "AI Agents",
    blurb:
      "Open rebuild of Apex2, the SOTA agent on Terminal-Bench. Tool use, planning, and recovery from failing terminal commands.",
    metrics: ["SOTA Terminal-Bench", "Tool-using agent", "Open rebuild"],
    stack: ["Python", "LLMs", "Tool calling"],
    href: "https://github.com/metaforismo/Apex2",
    icon: Cpu,
    accent: "yellow",
    status: "wip",
    year: "2025",
  },
  {
    slug: "aurion",
    emoji: "🌍",
    title: "Aurion",
    category: "Full-Stack · Strategy",
    blurb:
      "A real-time, pausable grand-strategy game: lead a small nation to global power through research, espionage, military, diplomacy and internal politics.",
    metrics: ["Live on Vercel", "Real-time sim", "Deep systems"],
    stack: ["TypeScript", "Next.js", "React", "Vercel"],
    href: "https://github.com/metaforismo/aurion",
    icon: Gamepad2,
    accent: "green",
    status: "wip",
    year: "2026",
  },
  {
    slug: "Ziba",
    emoji: "🗂️",
    title: "Ziba",
    category: "Personal Tools",
    blurb:
      "An open-source second brain fusing Notion's typed databases with Obsidian's local-first markdown and graph — built as an Electron desktop app.",
    metrics: ["Local-first", "Notion × Obsidian", "Desktop app"],
    stack: ["TypeScript", "Electron", "Markdown"],
    href: "https://github.com/metaforismo/Ziba",
    icon: NotebookPen,
    accent: "orange",
    status: "wip",
    year: "2026",
  },
  {
    slug: "LifeGrid",
    emoji: "🟩",
    title: "LifeGrid",
    category: "iOS · SwiftUI",
    blurb:
      "A private, local-only habit & goal tracker for iOS with a GitHub-style contribution heatmap. Your streaks, never leaving the device.",
    metrics: ["Local-only", "Contribution heatmap", "SwiftUI"],
    stack: ["Swift", "SwiftUI", "iOS"],
    href: "https://github.com/metaforismo/LifeGrid",
    icon: Smartphone,
    accent: "red",
    status: "wip",
    year: "2026",
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
  { id: "projects", label: "Projects" },
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
