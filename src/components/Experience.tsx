import Reveal from "@/components/Reveal";

const bullets = [
  "Designed and built a pilot AI-driven Risk-Based Inspection (RBI) system to evaluate and prioritise industrial assets across multiple production sites.",
  "Determined system architecture and selected relevant asset data to implement benchmarking asset sister comparisons.",
  "Developed data processing pipelines to clean and structure large asset datasets for modelling and analysis.",
  "Built an internal AI chatbot using Azure OpenAI API for natural language querying of RBI insights, collaborating with engineers and stakeholders.",
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 md:px-14 py-24 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 03. Experience</p>
        <h2 className="font-syne font-bold text-bright text-3xl md:text-4xl tracking-tight mb-10">Where I've worked</h2>
      </Reveal>
      <div className="max-w-2xl">
        <Reveal delay={0.1}>
          <p className="font-mono text-accent text-xs tracking-widest mb-1">Nov 2025 — Feb 2026</p>
          <h3 className="font-syne font-bold text-bright text-xl mb-1">Data Science & Analytics Intern</h3>
          <p className="text-muted text-sm mb-5">Methanex NZ · New Plymouth, New Zealand</p>
        </Reveal>
        <ul className="flex flex-col gap-3">
          {bullets.map((point, i) => (
            <Reveal key={i} delay={0.2 + i * 0.1}>
              <li className="text-muted text-sm leading-relaxed pl-4 border-l border-border">{point}</li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}