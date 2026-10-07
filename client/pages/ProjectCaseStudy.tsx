import { ArrowLeft, ArrowUpRight, Check, Mail } from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import { useEffect } from "react";

type CaseStudy = {
  name: string;
  type: string;
  summary: string;
  role: string;
  stack: string[];
  contributions: string[];
  outcome: string;
};

const caseStudies: Record<string, CaseStudy> = {
  "active-iq": {
    name: "Active IQ",
    type: "AI-powered digital advisor",
    summary:
      "Predictive analytics and proactive support experiences for global hybrid-cloud infrastructure.",
    role: "Senior Technical Lead · Front-end architecture and delivery",
    stack: ["Angular", "React", "TypeScript", "GraphQL"],
    contributions: [
      "Architected scalable user interfaces for complex enterprise workflows.",
      "Partnered with product, UX, backend, QA, and security throughout delivery.",
      "Supported reliable releases and production operations for a global product.",
    ],
    outcome:
      "Helped teams deliver an approachable interface for infrastructure insights, predictive analytics, and proactive support workflows.",
  },
  neo: {
    name: "NEO",
    type: "Digital adoption platform",
    summary:
      "A full-stack platform built from the ground up across architecture, development, cloud delivery, security, and operations.",
    role: "Senior Technical Lead · End-to-end product ownership",
    stack: ["Next.js", "Python", "AWS", "Docker", "Jenkins"],
    contributions: [
      "Owned architecture and implementation across the web interface and Python services.",
      "Delivered AWS infrastructure, CI/CD pipelines, security scanning, and production support.",
      "Introduced delivery improvements that contributed to 25% faster release times.",
    ],
    outcome:
      "Established a maintainable product foundation and a more efficient path from implementation through production delivery.",
  },
  "bluexp-sustainability": {
    name: "BlueXP Sustainability",
    type: "Energy analytics",
    summary:
      "Enterprise dashboards for energy-consumption tracking and sustainability workflows.",
    role: "Senior Technical Lead · UI engineering",
    stack: ["React", "TypeScript", "GraphQL", "Data visualization"],
    contributions: [
      "Built clear dashboard experiences for energy and sustainability data.",
      "Created reusable, typed interface components for enterprise workflows.",
      "Collaborated across design, API, testing, and product teams.",
    ],
    outcome:
      "Made detailed energy information easier to navigate and use within sustainability workflows.",
  },
};

function setMeta(selector: string, attribute: string, value: string) {
  const tag = document.querySelector<HTMLMetaElement>(selector);
  if (tag) tag.setAttribute(attribute, value);
}

export default function ProjectCaseStudy() {
  const { slug = "" } = useParams();
  const project = caseStudies[slug];

  useEffect(() => {
    if (!project) return;

    const title = `${project.name} case study | Hemanth Palakaluri`;
    const canonical = `https://hemanthpalakaluri.netlify.app/projects/${slug}`;
    document.title = title;
    setMeta('meta[name="description"]', "content", project.summary);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", project.summary);
    setMeta('meta[property="og:url"]', "content", canonical);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", project.summary);
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", canonical);
    const structuredData =
      document.querySelector<HTMLScriptElement>("#structured-data");
    if (structuredData) {
      structuredData.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: project.name,
        description: project.summary,
        url: canonical,
        author: { "@type": "Person", name: "Hemanth Palakaluri" },
      });
    }
  }, [project, slug]);

  if (!project) return <Navigate to="/not-found" replace />;

  return (
    <main className="min-h-screen bg-paper text-ink selection:bg-lime selection:text-ink">
      <header className="border-b border-ink/10">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-moss hover:text-ink"
          >
            <ArrowLeft size={16} /> Portfolio
          </Link>
          <a
            href="mailto:hemanth.palakaluri@gmail.com?subject=Opportunity%20for%20Hemanth%20Palakaluri"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white hover:bg-moss"
          >
            Contact me <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      <article>
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-moss">
            {project.type}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl font-semibold tracking-[-0.065em] sm:text-7xl">
            {project.name}
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-ink/65 sm:text-xl">
            {project.summary}
          </p>

          <div className="mt-12 grid gap-6 border-y border-ink/10 py-7 sm:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                Role
              </p>
              <p className="mt-2 text-sm font-medium">{project.role}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink/40">
                Technology
              </p>
              <p className="mt-2 text-sm font-medium">
                {project.stack.join(" · ")}
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-10 md:grid-cols-[0.65fr_1.35fr]">
            <h2 className="font-display text-3xl font-semibold tracking-[-0.045em]">
              My contribution
            </h2>
            <ul className="space-y-4">
              {project.contributions.map((contribution) => (
                <li
                  key={contribution}
                  className="flex gap-3 rounded-2xl border border-ink/10 bg-white/50 p-5 text-sm leading-7 text-ink/70"
                >
                  <Check size={17} className="mt-1 shrink-0 text-moss" />
                  {contribution}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 rounded-[1.5rem] bg-ink p-7 text-paper sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lime">
              Outcome
            </p>
            <p className="mt-5 max-w-3xl font-display text-2xl leading-snug tracking-[-0.035em] sm:text-3xl">
              {project.outcome}
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-ink/10 pt-8">
            <Link
              to="/#work"
              className="inline-flex items-center gap-2 text-sm font-semibold text-moss hover:text-ink"
            >
              <ArrowLeft size={16} /> View all work
            </Link>
            <a
              href="mailto:hemanth.palakaluri@gmail.com"
              className="inline-flex items-center gap-2 text-sm font-semibold hover:text-moss"
            >
              <Mail size={16} /> Discuss an opportunity
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
