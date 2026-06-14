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
    slug: "rhizome",
    title: "Rhizome",
    status: "Shipped",
    statusIcon: CheckCircle,
    description: "A self-hosted AI-powered Zettelkasten - write notes with wikilinks, get AI link suggestions, search semantically, and chat with your knowledge base using a hybrid RAG pipeline.",
    stack: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL", "pgvector", "Ollama", "Claude API", "Clerk", "Tailscale", "Raspberry Pi 5"],
    github: "https://github.com/xelasrc/zettelkasten.git",
    longDescription: "Rhizome is a fully self-hosted personal knowledge base built on a Raspberry Pi 5 with a 512GB NVMe SSD. Notes are connected through wikilinks ([[Note Title]]) that render as inline highlights and open linked notes on click. Embeddings are generated locally using Ollama and nomic-embed-text, stored in PostgreSQL with pgvector for semantic search. The RAG chatbot uses Claude Haiku with streaming responses, grounding answers in your notes and citing which ones it used. Link suggestions are also powered by Claude Haiku - it reads the current note and recommends which existing notes to connect it to. Currently accessible remotely via Tailscale during development.",
    note: "Rhizome is a botanical term for a root network that grows laterally and connects - a fitting metaphor for a Zettelkasten where ideas branch and link across notes.",
    features: [
      "Self-hosted on Raspberry Pi 5 with 512GB NVMe - all data stays local",
      "BlockNote rich text editor with inline wikilinks - [[Note Title]] highlights in-text and opens the linked note on click",
      "Backlinks panel - each note shows which other notes link to it",
      "AI link suggestions via Claude Haiku - recommends which existing notes the current note should connect to",
      "RAG chatbot powered by Claude Haiku with streaming responses - answers grounded in your notes with source citations",
      "Semantic search using pgvector and nomic-embed-text embeddings generated locally via Ollama",
      "D3 force-directed knowledge graph visualising connections between notes via wikilinks",
      "Folder organisation with collapsible groups and drag-to-move",
      "Multi-tab note editing with auto-save",
      "Multi-user authentication with Clerk - each user sees only their own notes",
      "Remotely accessible via Tailscale VPN during development - public deployment planned",
    ],
    screenshots: [],
  },
  {
    slug: "deasil",
    title: "Deasil",
    status: "Live",
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
    slug: "travel-blog",
    title: "Personal Travel Blog",
    status: "Live",
    statusIcon: Zap,
    description: "A collaborative travel journal actively used by ~30 people, built for mobile and continuously improved based on real user feedback. Photo galleries, threaded comments, and pages that load instantly.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/xelasrc/mike-and-irene-travel-journal",
    longDescription: "A full-stack travel blog built for two authors to document their trips, with around 30 active readers following along in real time. The audience is almost entirely on mobile, so every design decision has been made with small screens first. Since launch I've been shipping improvements driven by real user feedback — from fixing subtle mobile quirks to adding the ability to reframe the cover photo of a post. Posts are tagged with locations and published with cover photos that can be cropped to frame the best part of the image. Pages load instantly and stay up to date automatically — new posts appear within a minute of being published.",
    features: [
      "~30 active readers following along in real time — continuously improved based on their feedback",
      "Mobile-first — the vast majority of readers are on phone, so every interaction is designed for small screens",
      "Post editor, and publish controls",
      "Cover photo upload with a framing tool to crop the best part of the image for any screen size",
      "Photo gallery per post with captions",
      "Threaded comments",
      "Automatic link preview image generated per post so sharing on WhatsApp or iMessage looks polished",
      "Pages load instantly and update within a minute of a new post going live — no manual deploys needed",
      "Admin panel for managing posts and user permissions",
      "Authors can only see and edit their own drafts",
    ],
    screenshots: [
      { src: "/screenshots/travel-blog-home.png", caption: "Post feed" },
      { src: "/screenshots/travel-blog-post.png", caption: "Published post with photo gallery" },
      { src: "/screenshots/travel-blog-editor.png", caption: "Post editor" },
      { src: "/screenshots/travel-blog-framing.png", caption: "Cover photo framing tool" },
      { src: "/screenshots/travel-blog-comments.png", caption: "Threaded comments" },
    ],
  },
  {
    slug: "ai-gym-mobile-app",
    title: "AI Gym Mobile App",
    status: "Shipped",
    statusIcon: CheckCircle,
    description: "A mobile app helping users track workouts and receive AI-generated insights and personalised recommendations with a real-time Firebase backend.",
    stack: ["React Native", "TypeScript", "Firebase", "OpenAI API"],
    github: "#",
  },
  {
    slug: "hobby-detectives-game",
    title: "Hobby Detectives Game",
    status: "Shipped",
    statusIcon: CheckCircle,
    description: "A Cluedo-inspired detective game with full game logic and a graphical interface, built in a team of five over six months using agile workflows.",
    stack: ["Java", "JUnit", "GitLab"],
    github: "#",
  },
];

export default projects;