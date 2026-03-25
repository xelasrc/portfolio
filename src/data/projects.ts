import { Clock, CheckCircle, Zap } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  status: string;
  statusIcon: LucideIcon;
  description: string;
  stack: string[];
  github: string;
  liveUrl?: string;
  longDescription?: string;
  note?: string;
  features?: string[];
  screenshots?: { src: string; caption: string }[];
};


const projects: Project[] = [
  {
    slug: "ai-interview-simulator",
    title: "AI Interview Simulator",
    status: "In Progress",
    statusIcon: Clock,
    description: "A web app where users upload their CV and job description, go through a simulated AI interview, and receive evaluations on their responses.",
    stack: ["Python", "FastAPI", "React", "LLM"],
    github: "https://github.com/xelasrc/ai-interview-simulator.git",
  },
  {
    slug: "rhizome",
    title: "Rhizome",
    status: "In Progress",
    statusIcon: Clock,
    description: "A self-hosted AI-powered Zettelkasten - write notes, auto-generate tags with Claude, search semantically, and chat with your knowledge base using a local RAG pipeline.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "pgvector", "Ollama", "Claude API", "Clerk", "Tailscale", "Raspberry Pi 5"],
    github: "https://github.com/xelasrc/zettelkasten.git",
    longDescription: "Rhizome is a fully self-hosted personal knowledge base built on a Raspberry Pi 5 with a 512GB NVMe SSD. It combines a Zettelkasten-style note editor with AI-powered tagging, semantic search, and a local RAG chatbot - all running on hardware I own. Notes are stored in PostgreSQL with pgvector for vector similarity search. Embeddings are generated locally using Ollama and nomic-embed-text. The RAG chatbot runs Llama 3.2 entirely on-device. Auto-tagging uses the Claude API for higher quality suggestions. Currently accessible remotely via Tailscale during development.",
    note: "Rhizome is a botanical term for a root network that grows laterally and connects - a fitting metaphor for a Zettelkasten where ideas branch and link across notes.",
    features: [
      "Self-hosted on Raspberry Pi 5 with 512GB NVMe - all data stays local",
      "BlockNote rich text editor with support for images, code blocks and headings",
      "AI auto-tagging via Claude API - suggests tags, related concepts and note links",
      "Local RAG chatbot powered by Llama 3.2 3B running entirely on-device via Ollama",
      "Semantic search using pgvector and nomic-embed-text embeddings",
      "D3 force-directed knowledge graph - notes connected by shared tags",
      "Multi-user authentication with Clerk - each user sees only their own notes",
      "Tag-based and title-based search with sort by modified, created or alphabetical",
      "Remotely accessible via Tailscale VPN during development - public deployment planned",
    ],
    screenshots: [],
  },
  {
    slug: "deasil",
    title: "Deasil",
    status: "Live & Complete",
    statusIcon: Zap,
    description: "A daily news guessing game where you identify trending topics from category clues. Powered by AI-generated puzzles from real headlines.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Claude API", "NewsAPI", "GitHub Actions"],
    github: "https://github.com/xelasrc/deasil",
    liveUrl: "https://deasil.vercel.app",
    longDescription: "Deasil is a daily news puzzle game inspired by Wordle and Catfishing. Every day, 10 new puzzles are automatically generated from real trending headlines using the Claude AI API and NewsAPI. Players guess the topic from a set of category-style clues, earning points based on how few attempts they need. The game features a calendar archive, streak tracking, fuzzy answer matching, and a fully automated daily pipeline.",
    note: "Deasil is an archaic English word meaning 'clockwise' or 'in the direction of the sun' - a nod to the daily, time-driven nature of the game.",
    features: [
      "10 AI-generated puzzles per day from real news headlines",
      "Automated daily generation via GitHub Actions cron job",
      "Fuzzy answer matching - typos and partial answers accepted",
      "Streak tracking and score history via localStorage",
      "Calendar archive to replay any past day",
      "Mid-game progress saved so users can resume after leaving",
      "Article summary and image revealed after each answer",
      "Mobile-friendly with brutalist cream/orange design",
    ],
    screenshots: [
      { src: "/screenshots/deasil-home.png", caption: "Landing page" },
      { src: "/screenshots/deasil-game.png", caption: "Game in progress" },
      { src: "/screenshots/deasil-summary.png", caption: "Article summary reveal" },
      { src: "/screenshots/deasil-archive.png", caption: "Calendar archive" },
    ],
  },
  {
    slug: "ai-gym-mobile-app",
    title: "AI Gym Mobile App",
    status: "Complete",
    statusIcon: CheckCircle,
    description: "A mobile app helping users track workouts and receive AI-generated insights and personalised recommendations with a real-time Firebase backend.",
    stack: ["React Native", "TypeScript", "Firebase", "OpenAI API"],
    github: "#",
  },
  {
    slug: "hobby-detectives-game",
    title: "Hobby Detectives Game",
    status: "Complete",
    statusIcon: CheckCircle,
    description: "A Cluedo-inspired detective game with full game logic and a graphical interface, built in a team of five over six months using agile workflows.",
    stack: ["Java", "JUnit", "GitLab"],
    github: "#",
  },
];

export default projects;