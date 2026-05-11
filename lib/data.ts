import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Bot,
  Brain,
  Cpu,
  FolderGit2,
  Layers,
  Network,
  Smartphone,
  Sparkles,
  Telescope,
  Zap,
} from "lucide-react";

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
    slug: "tarsgpt",
    emoji: "🤖",
    title: "TarsGPT",
    category: "Robotics × LLM",
    blurb:
      "A real-life TARS replicating ~95% of the original's functionalities, powered by ChatGPT and Whisper for natural language and motion.",
    metrics: ["95% replicated", "−30% latency", "Realtime voice"],
    stack: ["Python", "OpenAI", "Whisper", "Computer Vision"],
    href: "https://github.com/metaforismo/TarsGPT",
    stars: 15,
    icon: Bot,
    accent: "blue",
    status: "shipped",
    year: "2024",
  },
  {
    slug: "devosy",
    emoji: "🗳️",
    title: "DeVoSy",
    category: "Blockchain × Web3",
    blurb:
      "Decentralised voting on Ethereum. Immutable ballots, transparent tallying, scaled to thousands of concurrent voters.",
    metrics: ["+40% security", "10K+ voters", "On-chain audit"],
    stack: ["Solidity", "Web3.js", "React", "Ethereum"],
    href: "https://github.com/metaforismo/DeVoSy",
    icon: Network,
    accent: "green",
    status: "shipped",
    year: "2023",
  },
  {
    slug: "apex2",
    emoji: "🧠",
    title: "Apex2",
    category: "AI Agents",
    blurb:
      "Open rebuild of the Apex2 agent, current SOTA on TerminalBench. Tool use, planning, and recovery from terminal failures.",
    metrics: ["SOTA TerminalBench", "Tool-using agent", "Open rebuild"],
    stack: ["Python", "LLMs", "Tool calling"],
    href: "https://github.com/metaforismo/Apex2",
    icon: Cpu,
    accent: "yellow",
    status: "wip",
    year: "2026",
  },
  {
    slug: "openalphaevolve",
    emoji: "🧬",
    title: "OpenAlphaEvolve",
    category: "AI · Evolution",
    blurb:
      "DeepMind's AlphaEvolve, open-source and from scratch. LLM-driven evolutionary search to discover better algorithms.",
    metrics: ["From scratch", "LLM × evolution", "Research-grade"],
    stack: ["Python", "LLMs", "Genetic algorithms"],
    href: "https://github.com/metaforismo/OpenAlphaEvolve",
    icon: Telescope,
    accent: "purple",
    status: "research",
    year: "2026",
  },
  {
    slug: "synapsium",
    emoji: "💡",
    title: "Synapsium",
    category: "Personal Tools",
    blurb:
      "A second brain with first-class presets for Movies, Books and YouTube. One place to think across media.",
    metrics: ["Second brain", "Preset modules", "Cross-media"],
    stack: ["TypeScript", "Next.js", "Local-first"],
    href: "https://github.com/metaforismo/Synapsium",
    icon: Sparkles,
    accent: "orange",
    status: "wip",
    year: "2025",
  },
  {
    slug: "football-analysis",
    emoji: "⚽",
    title: "Football Analysis",
    category: "Computer Vision",
    blurb:
      "YOLO-based player and ball tracking pipeline. Extracts tactical insights from match footage.",
    metrics: ["+20% accuracy", "3× faster", "Tactical insights"],
    stack: ["Python", "YOLO", "OpenCV", "KMeans"],
    href: "https://github.com/metaforismo/football-analysis",
    icon: Zap,
    accent: "red",
    status: "shipped",
    year: "2024",
  },
];

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Solidity", "Rust", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Runtimes",
    items: ["React", "Next.js", "Node.js", "TensorFlow", "PyTorch", "Tailwind"],
  },
  {
    title: "AI / ML",
    items: ["OpenAI APIs", "YOLO", "OpenCV", "Stable Diffusion", "GPT2 from scratch", "LLM agents"],
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
