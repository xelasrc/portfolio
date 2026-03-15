export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-14 py-24 border-t border-border">
      <h2 className="font-syne font-bold text-bright text-4xl tracking-tight mb-10">Where I've worked</h2>
      <div className="max-w-2xl">
        <p className="font-mono text-accent text-xs tracking-widest mb-1">Nov 2025 — Feb 2026</p>
        <h3 className="font-syne font-bold text-bright text-xl mb-1">Data Science & Analytics Intern</h3>
        <p className="text-muted text-sm mb-5">Methanex NZ · New Plymouth, New Zealand</p>
        <ul className="flex flex-col gap-3">
          {[
            "Designed and built a pilot AI-driven Risk-Based Inspection (RBI) system to evaluate and prioritise industrial assets across multiple production sites.",
            "Determined system architecture and selected relevant asset data to implement benchmarking asset sister comparisons.",
            "Developed data processing pipelines to clean and structure large asset datasets for modelling and analysis.",
            "Built an internal AI chatbot using Azure OpenAI API for natural language querying of RBI insights, collaborating with engineers and stakeholders.",
          ].map((point) => (
            <li key={point} className="text-muted text-sm leading-relaxed pl-4 border-l border-border">{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}