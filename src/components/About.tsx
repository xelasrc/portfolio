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
          <p>
            I&apos;m a software engineer based in New Zealand, recently graduated with a Bachelor of Engineering (Hons) in Software with an AI specialisation from Victoria University of Wellington.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p>
            I have a genuine interest in AI and ML. I enjoy keeping up with the latest research, experimenting with new tools and models, and building projects in my own time just to explore what&apos;s possible.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <p>
            I&apos;m actively looking for graduate software / AI engineering roles and open to opportunities anywhere. Relocation isn&apos;t a problem, and if you think I could be a good fit for your team, I&apos;d love to hear from you.
          </p>
        </Reveal>
      </div>
    </section>
  );
}