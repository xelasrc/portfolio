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
    github: "#",
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
    features: [
      "10 AI-generated puzzles per day from real news headlines",
      "Automated daily generation via GitHub Actions cron job",
      "Fuzzy answer matching — typos and partial answers accepted",
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