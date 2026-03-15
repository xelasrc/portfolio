"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

const projects = [
  {
    title: "AI Interview Simulator",
    status: "In Progress",
    description: "A web app where users upload their CV and job description, go through a simulated AI interview, and receive evaluations on their responses.",
    stack: ["Python", "FastAPI", "React", "LLM"],
    github: "#",
  },
  {
    title: "AI Gym Mobile App",
    status: "Complete",
    description: "A mobile app helping users track workouts and receive AI-generated insights and personalised recommendations with a real-time Firebase backend.",
    stack: ["React Native", "TypeScript", "Firebase", "OpenAI API"],
    github: "#",
  },
  {
    title: "Hobby Detectives Game",
    status: "Complete",
    description: "A Cluedo-inspired detective game with full game logic and a graphical interface, built in a team of five over six months using agile workflows.",
    stack: ["Java", "JUnit", "GitLab"],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-14 py-24 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 04. Projects</p>
        <h2 className="font-syne font-bold text-bright text-4xl tracking-tight mb-10">Things I've built</h2>
      </Reveal>
      <div className="grid grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.15}>
            <motion.div
              className="relative bg-surface border border-border p-6 flex flex-col gap-3 h-full overflow-hidden"
              whileHover={{ y: -6, borderColor: "rgba(56,189,248,0.3)" }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              {/* top accent line */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-px bg-accent"
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
              <p className="font-mono text-accent text-xs tracking-widest">{p.status}</p>
              <h3 className="font-syne font-bold text-bright text-lg">{p.title}</h3>
              <p className="text-muted text-sm leading-relaxed flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tag) => (
                  <span key={tag} className="px-2 py-1 border border-border text-accent font-mono text-xs">
                    {tag}
                  </span>
                ))}
              </div>
              <a href={p.github} className="text-muted text-sm hover:text-accent transition-colors">
                GitHub ↗
              </a>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}