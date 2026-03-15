export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-14 max-w-6xl mx-auto">

      <h1
        className="font-syne font-extrabold text-bright leading-none tracking-tighter mb-5"
        style={{ fontSize: "clamp(3.6rem, 9vw, 7.5rem)" }}
      >
        Alexander
        <br />
        <span className="text-accent">Wells.</span>
      </h1>

      <p className="font-mono text-muted text-sm tracking-widest mb-8">
        // Software Engineer · Focused on AI & ML
      </p>

      <p className="text-muted text-lg leading-relaxed max-w-lg mb-12">
        Building AI-driven solutions at the intersection of backend engineering,
        data pipelines, and applied machine learning. Based in NZ, seeking roles
        in Australia.
      </p>
      
    </section>
  );
}