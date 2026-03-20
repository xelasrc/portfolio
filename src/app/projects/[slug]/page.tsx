import { notFound } from "next/navigation";
import projects from "@/data/projects";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";

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

        {/* Status */}
        <div className="flex items-center gap-2 mb-3">
          <StatusIcon size={13} className="text-accent" />
          <p className="font-mono text-accent text-xs tracking-widest">{project.status}</p>
        </div>

        {/* Title */}
        <h1
          className="font-syne font-extrabold text-bright tracking-tight mb-6"
          style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
        >
          {project.title}
        </h1>

        {/* Stack tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.stack.map((tag) => (
            <span key={tag} className="px-3 py-1 border border-border text-accent font-mono text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="text-muted text-lg leading-relaxed max-w-2xl mb-16">
          {project.longDescription ?? project.description}
        </p>

        {/* Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">// Screenshots</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.screenshots.map((s) => (
                <div key={s.src} className="border border-border overflow-hidden">
                  <img
                    src={s.src}
                    alt={s.caption}
                    className="w-full object-cover"
                  />
                  <p className="font-mono text-muted text-xs px-4 py-2 border-t border-border">
                    {s.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-16">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-6">// Features</p>
            <ul className="flex flex-col gap-3">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <span className="text-accent font-mono text-xs mt-1 shrink-0">→</span>
                  <span className="text-muted text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* No detail fallback */}
        {!project.features && !project.screenshots && (
          <div className="border-t border-border pt-10 mt-4">
            <p className="font-mono text-muted text-xs tracking-widest uppercase">
              More details coming soon
            </p>
          </div>
        )}

        {/* Footer links */}
        {(project.liveUrl || (project.github && project.github !== "#")) && (
          <div className="border-t border-border pt-10 mt-10 flex flex-wrap gap-6">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-accent text-sm hover:text-bright transition-colors"
              >
                <ExternalLink size={14} />
                {project.liveUrl.replace("https://", "")}
              </a>
            )}
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-accent text-sm hover:text-bright transition-colors"
              >
                <Github size={14} />
                GitHub Repository
              </a>
            )}
          </div>
        )}
      </div>
    </main>
  );
}