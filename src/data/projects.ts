import { Clock, CheckCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Project = {
  slug: string;
  title: string;
  status: string;
  statusIcon: LucideIcon;
  description: string;
  stack: string[];
  github: string;
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