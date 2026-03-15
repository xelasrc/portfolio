export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-14 max-w-6xl mx-auto">
      <p className="font-mono text-accent text-sm tracking-widest mb-6">
        // Graduate Software Engineer · AI Specialisation
      </p>
      <h1
        className="font-syne font-extrabold text-bright leading-none tracking-tighter mb-6"
        style={{ fontSize: "clamp(3.6rem, 9vw, 7.5rem)" }}
      >
        Alexander
        <br />
        <span className="text-accent">Wells.</span>
      </h1>
      <p className="text-muted text-lg leading-relaxed max-w-lg mb-10">
        Building AI-driven solutions at the intersection of backend engineering,
        data pipelines, and applied machine learning. Based in NZ, seeking roles
        in Australia.
      </p>
      <div className="flex flex-wrap gap-3">
        <a href="#projects" className="px-6 py-3 bg-accent text-bg font-bold text-sm">
          View Projects →
        </a>
        <a href="/CV_AW.pdf" download className="px-6 py-3 border border-border text-accent font-bold text-sm">
          Download CV ↓
        </a>
      </div>
    </section>
  );
}