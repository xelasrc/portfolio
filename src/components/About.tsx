import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 md:px-14 py-24">
      <Reveal>
        <p className="font-mono text-accent text-xs tracking-widest mb-2">// 01. About</p>
        <h2 className="font-syne font-bold text-bright text-3xl md:text-4xl tracking-tight mb-10">Who I am</h2>
      </Reveal>
      <div className="max-w-2xl flex flex-col gap-5 text-muted leading-relaxed">
        <Reveal delay={0.1}>
          <p>I'm a final-year Software Engineering student at Victoria University of Wellington, specialising in AI, with real industry experience delivering AI systems that people actually use.</p>
        </Reveal>
        <Reveal delay={0.2}>
          <p>At Methanex NZ, I designed and deployed a pilot AI-driven Risk-Based Inspection system across multiple production sites, and built an internal chatbot using Azure OpenAI for natural language querying of engineering data.</p>
        </Reveal>
        <Reveal delay={0.3}>
          <p>I'm most at home working on backend systems, data pipelines, and applied ML. Graduating May 2026 and actively looking for graduate software engineering roles in Australia.</p>
        </Reveal>
      </div>
    </section>
  );
}