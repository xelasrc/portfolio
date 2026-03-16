"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";
import Link from "next/link";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 md:px-14 py-24 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 03. Projects</p>
        <h2 className="font-syne font-bold text-bright text-3xl md:text-4xl tracking-tight mb-10">Things I've built</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((p, i) => {
          const StatusIcon = p.statusIcon;
          return (
            <Reveal key={p.title} delay={i * 0.15}>
              <Link href={`/projects/${p.slug}`}>
                <motion.div
                  className="relative bg-surface border border-border p-6 flex flex-col gap-3 h-full overflow-hidden cursor-pointer"
                  whileHover={{ y: -6, borderColor: "rgba(249,115,22,0.35)" }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <motion.div
                    className="absolute top-0 left-0 right-0 h-px bg-accent"
                    initial={{ scaleX: 0, transformOrigin: "left" }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <div className="flex items-center gap-1.5">
                    <StatusIcon size={12} className="text-accent" />
                    <p className="font-mono text-accent text-xs tracking-widest">{p.status}</p>
                  </div>
                  <h3 className="font-syne font-bold text-bright text-lg">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map((tag) => (
                      <span key={tag} className="px-2 py-1 border border-border text-accent font-mono text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted text-sm">View project →</p>
                </motion.div>
              </Link>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}