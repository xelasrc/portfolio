export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-14 py-24">
      <h2 className="font-syne font-bold text-bright text-4xl tracking-tight mb-10">Who I am</h2>
      <div className="max-w-2xl flex flex-col gap-5 text-muted leading-relaxed">
        <p>I'm a Software Engineering graduate from Victoria University of Wellington, specialising in AI, with real industry experience delivering AI systems that people actually use.</p>
        <p>At Methanex NZ, I designed and deployed a pilot AI-driven Risk-Based Inspection system across multiple production sites, and built an internal chatbot using Azure OpenAI for natural language querying of engineering data.</p>
        <p>I'm most at home working on backend systems, data pipelines, and applied ML. Actively looking for graduate software engineering roles in Australia.</p>
      </div>
    </section>
  );
}