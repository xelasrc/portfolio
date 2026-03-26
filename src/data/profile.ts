import projects from "./projects";

function formatProjectsForContext() {
  // Filter out projects without GitHub access and format the rest
  const activeProjects = projects.filter(p => 
    !p.github.includes("#") // Skip projects with "#" placeholder
  );

  return activeProjects.map((p) => {
    const baseInfo = `
**${p.title}** (${p.status})${p.liveUrl ? ` - LIVE at ${p.liveUrl}` : ""}
${p.description}
Stack: ${p.stack.join(", ")}
GitHub: ${p.github}`;

    if (p.longDescription) {
      return `${baseInfo}

${p.longDescription}

Key Features:
${p.features?.map((f) => `- ${f}`).join("\n") || ""}${p.note ? `\n\n${p.note}` : ""}`;
    }

    return baseInfo;
  }).join("\n\n---\n\n");
}

const profile = `
NAME: Alexander Wells (22)

CONTACT: 
- Email: amwells2003@gmail.com
- GitHub: github.com/xelasrc
- LinkedIn: linkedin.com/in/alexander-wells-b0a5aa309

EDUCATION:
Bachelor of Engineering (Honours) in Software Engineering with AI Specialisation
Victoria University of Wellington, New Zealand
Degree conferred: March 23, 2026
Graduation ceremony: May 27, 2026

WORK EXPERIENCE:

Data Science & Analytics Intern | Methanex NZ (Nov 2025 - Feb 2026, New Plymouth)
- Designed and built a pilot AI-driven Risk-Based Inspection (RBI) system to evaluate and prioritise industrial assets across multiple production sites
- Determined system architecture and selected relevant asset data for benchmarking comparisons between sister assets
- Developed data processing pipelines to clean and structure large asset datasets for modelling and analysis
- Built a chatbot using Azure OpenAI API for natural language querying of RBI insights
- Collaborated closely with engineers and stakeholders to deliver practical, production-ready solutions

This was real pilot work with tangible impact

CURRENT PROJECTS:

${formatProjectsForContext()}

TECHNICAL SKILLS:
Languages: Python, TypeScript, JavaScript, Java, SQL
Frontend: React, Next.js, React Native, Tailwind CSS
Backend: FastAPI, Node.js, Firebase
AI/ML: Azure OpenAI API, Claude API, Anthropic API, LLM integration, RAG systems, vector databases (pgvector), Ollama, prompt engineering
Data: PostgreSQL, data pipelines, pandas, data cleaning
Infrastructure: Self-hosting (Raspberry Pi), Tailscale VPN, GitHub Actions, CI/CD, Vercel, Azure
Tools: Git, Clerk (auth), REST APIs

CURRENTLY LEARNING:
Advanced RAG architectures, LangChain, AI agents, vector database optimization

PERSONAL INTERESTS:
Outside of tech, I'm into fitness (regular gym-goer), music (been playing drums since I was young, currently learning guitar, and I make beats on my laptop), and quiz nights with friends. I also stay current with AI advancements - following new model releases, research papers, and industry developments.

WHAT I'M PASSIONATE ABOUT:
- Building AI-powered products that actually solve real problems
- Self-hosted solutions and owning my infrastructure (hence Rhizome running on my own hardware)
- Shipping projects end-to-end - from idea to live deployment
- Staying current with AI/ML developments and experimenting with new tools
- Clean, maintainable code and good developer experience

AVAILABILITY & JOB SEARCH:
STATUS: Actively seeking roles - available to start IMMEDIATELY (degree already conferred)
TARGET ROLES: Graduate/Junior positions in AI/ML Engineering, Software Engineering, Full-Stack, Backend, or Data Science
LOCATION: Prefer Australia (easiest visa path from NZ), but genuinely open to relocation anywhere globally for the right opportunity
WORK AUTHORIZATION: New Zealand citizen (can work in Australia without visa sponsorship)

WHY HIRE ME:
- Real production AI experience from Methanex internship, not just academic projects
- Shipped multiple live projects (Deasil is playable right now, Rhizome runs 24/7 on my Pi)
- Self-directed learner who builds things independently
- Comfortable across the full stack but especially strong with AI/ML integration
- Ready to start immediately and hit the ground running
`;

export default profile;