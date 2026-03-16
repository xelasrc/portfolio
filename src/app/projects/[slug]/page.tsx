import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, Github } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const StatusIcon = project.statusIcon;

  return (
    <main className="relative min-h-screen px-6 md:px-14 max-w-6xl mx-auto py-32">

      {/* dot grid */}
      <div
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(circle, #1e3352 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          opacity: 0.35,
        }}
      />

      <div className="relative z-10">
        <Link
          href="/#projects"
          className="flex items-center gap-2 font-mono text-muted text-xs tracking-widest uppercase hover:text-accent transition-colors mb-12 w-fit"
        >
          <ArrowLeft size={13} />
          Back to projects
        </Link>

        <div className="flex items-center gap-2 mb-3">
          <StatusIcon size={13} className="text-accent" />
          <p className="font-mono text-accent text-xs tracking-widest">{project.status}</p>
        </div>

        <h1
          className="font-syne font-extrabold text-bright tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-10">
          {project.stack.map((tag) => (
            <span key={tag} className="px-3 py-1 border border-border text-accent font-mono text-xs">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-muted text-lg leading-relaxed max-w-2xl mb-12">
          {project.description}
        </p>

        <div className="border-t border-border pt-10 mt-10">
          <p className="font-mono text-muted text-xs tracking-widest uppercase mb-4">More details coming soon</p>
          <a
            href={project.github}
            className="flex items-center gap-2 font-mono text-accent text-sm hover:text-bright transition-colors w-fit"
          >
            <Github size={14} />
            View on GitHub
          </a>
        </div>
      </div>
    </main>
  );
}