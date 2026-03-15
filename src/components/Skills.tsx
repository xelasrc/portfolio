import Reveal from "@/components/Reveal";

const skills = [
  { category: "Languages", items: ["Python", "TypeScript", "Java", "JavaScript", "SQL"] },
  { category: "Frameworks", items: ["React Native", "FastAPI", "Next.js", "Node.js"] },
  { category: "AI & Data", items: ["OpenAI API", "Azure OpenAI", "LLM Integration", "Data Pipelines", "ML Modelling"] },
  { category: "Tools", items: ["Firebase", "Azure", "GitLab", "GitHub", "Vercel"] },
  { category: "Practices", items: ["Agile / Scrum", "REST APIs", "Code Review", "Data Modelling"] },
  { category: "Learning", items: ["RAG Systems", "Vector DBs", "LangChain", "AI Agents"] },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-14 py-24 border-t border-border">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 02. Skills</p>
        <h2 className="font-syne font-bold text-bright text-4xl tracking-tight mb-10">Technical toolkit</h2>
      </Reveal>
      <div className="grid grid-cols-3 gap-5">
        {skills.map((cat, i) => (
          <Reveal key={cat.category} delay={i * 0.1}>
            <div className="bg-surface border border-border p-6 h-full">
              <p className="font-mono text-accent text-xs tracking-widest uppercase mb-4">{cat.category}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="px-3 py-1 border border-border text-text text-sm">{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}