import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Mail,
  MapPin,
  Sparkles,
} from "lucide-react";
import { VisitorCounter } from "@/components/VisitorCounter";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const skillGroups = [
  {
    label: "Full-Stack",
    skills: [
      "Angular",
      "React",
      "Python",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "SCSS",
      "React Native",
      "MongoDB",
      "AI-assisted development",
    ],
  },
  {
    label: "Engineering",
    skills: [
      "UI Architecture",
      "Planning",
      "GraphQL",
      "REST APIs",
      "RxJS",
      "Data Visualization",
      "Accessibility",
      "Performance",
    ],
  },
  {
    label: "Testing",
    skills: ["Automation", "qTest", "Virtuoso", "Jasmine", "Karma", "Jest"],
  },
  {
    label: "Security & Monitoring",
    skills: [
      "Black Duck",
      "Coverity SAST",
      "PSIRT",
      "Dynatrace",
      "Splunk",
      "CyberArk",
      "Secret Management",
    ],
  },
  {
    label: "CI/CD & DevOps",
    skills: ["Jenkins", "Docker", "AWS", "Kubernetes"],
  },
  {
    label: "Delivery & Tracking",
    skills: [
      "Technical Leadership",
      "Jira",
      "Confluence",
      "Agile / Scrum",
      "Application security",
      "ServiceNow",
    ],
  },
];

const roles = [
  {
    company: "Trianz · Client: NetApp",
    title: "Senior Technical Lead",
    period: "Mar 2020 — Present",
    description:
      "Leading front-end engineering across enterprise platforms, from UI architecture and technical design through release and production support.",
    highlights: [
      "Architected scalable Angular and React experiences for enterprise cloud products.",
      "Cut release times by 25% by streamlining Jenkins, Docker, and QA delivery.",
      "Mentor engineers and partner with product, UX, backend, and QA teams.",
    ],
    tags: ["Angular", "React", "TypeScript", "GraphQL", "Team leadership"],
  },
  {
    company: "Capita India",
    title: "Software Consultant",
    period: "Jul 2018 — Mar 2020",
    description:
      "Delivered responsive interfaces and reusable product modules for enterprise applications across housing and product configuration.",
    highlights: [
      "Built configurable UI modules, dashboards, and user-specific views.",
      "Integrated REST services and partnered across product, engineering, and QA.",
    ],
    tags: ["React", "Angular", "TypeScript", "Fabric UI", "REST APIs"],
  },
  {
    company: "Invendis Technologies",
    title: "UI Developer",
    period: "Dec 2015 — Jul 2018",
    description:
      "Created analytics, IoT, and solar-monitoring experiences for web and hybrid mobile products.",
    highlights: [
      "Built interactive data visualizations and deep-drill analytics views.",
      "Translated wireframes and information architecture into responsive interfaces.",
    ],
    tags: ["Angular", "TypeScript", "JavaScript", "Ionic", "Cordova"],
  },
];

const companies = [
  {
    name: "Trianz · Client: NetApp",
    role: "Senior Technical Lead / Team Leader / UI Developer",
    period: "Mar 2020 — Present",
    projects: [
      {
        name: "Active IQ",
        slug: "active-iq",
        type: "AI-powered digital advisor",
        copy: "Predictive analytics and proactive support for global hybrid-cloud infrastructure.",
        stack: "Angular · React · GraphQL",
        color: "bg-[#d9f27c]",
        mark: "AI",
      },
      {
        name: "NEO",
        slug: "neo",
        type: "Digital adoption platform",
        copy: "Built from the ground up across architecture, full-stack development, cloud delivery, and operations.",
        stack: "Next.js · Python · AWS",
        color: "bg-[#d6e2da]",
        mark: "N",
      },
      {
        name: "BlueXP Sustainability",
        slug: "bluexp-sustainability",
        type: "Energy analytics",
        copy: "Enterprise dashboards for energy-consumption tracking and sustainability workflows.",
        stack: "React · TypeScript · GraphQL",
        color: "bg-[#e5ddd0]",
        mark: "B",
      },
    ],
  },
  {
    name: "Capita India",
    role: "Software Consultant",
    period: "Jul 2018 — Mar 2020",
    projects: [
      {
        name: "Admin Catalogue",
        slug: undefined,
        type: "Product configuration",
        copy: "Configurable modules for product setup, user-specific views, charts, and block-based interfaces.",
        stack: "React · TypeScript · Fabric UI",
        color: "bg-[#d6e2da]",
        mark: "AC",
      },
      {
        name: "Advantage Housing",
        slug: undefined,
        type: "Housing management",
        copy: "Web-based housing workflows built with reusable Angular components and Kendo UI.",
        stack: "Angular · TypeScript · Kendo UI",
        color: "bg-[#e5ddd0]",
        mark: "AH",
      },
    ],
  },
  {
    name: "Invendis Technologies",
    role: "UI Developer",
    period: "Dec 2015 — Jul 2018",
    projects: [
      {
        name: "Solar Monitoring",
        slug: undefined,
        type: "Web & hybrid mobile",
        copy: "Solar-generation analytics with chart drilling and detailed energy views for enterprise clients.",
        stack: "Angular · Ionic · Cordova",
        color: "bg-[#d9f27c]",
        mark: "SM",
      },
      {
        name: "Analytics / Data Insights",
        slug: undefined,
        type: "Enterprise analytics",
        copy: "Analytics-oriented interfaces that connect business insights with backend services.",
        stack: "AngularJS · JavaScript · jQuery",
        color: "bg-[#d6e2da]",
        mark: "DI",
      },
    ],
  },
];

const personalProjects = [
  {
    name: "VertiPark",
    category: "Urban mobility · Automated parking",
    description:
      "An automated rotary parking concept for dense city neighborhoods, designed around secure storage, app-based reservations, and quick vehicle retrieval.",
    stack: "Product concept · Responsive web experience",
    mark: "VP",
    color: "bg-[#d9f27c]",
    href: "https://vertipark.netlify.app/",
  },
  {
    name: "SnapVend",
    category: "Smart retail · Managed vending",
    description:
      "A managed smart-vending service for workplaces, campuses, and residential communities, with contactless purchases and restocking support.",
    stack: "Product concept · Responsive web experience",
    mark: "SV",
    color: "bg-[#d6e2da]",
    href: "https://snapvend.netlify.app/",
  },
  {
    name: "CINEMALL",
    category: "Entertainment · Premium cinema",
    description:
      "A cinema discovery and booking experience for browsing films and showtimes, choosing seats, and exploring theatre dining and amenities.",
    stack: "Product concept · Booking experience",
    mark: "CM",
    color: "bg-[#e5ddd0]",
    href: "https://cinemall.netlify.app/",
  },
  {
    name: "AI Document Intelligence",
    category: "Applied AI · RAG chatbot",
    description:
      "A Gradio document assistant for PDF and text collections. It combines keyword and semantic retrieval to generate grounded answers with source citations, while keeping document processing local.",
    stack: "Python · RAG · Gradio · OpenRouter",
    mark: "RAG",
    color: "bg-[#d9e3ef]",
    href: "https://github.com/phsmartswb-ai/AI_book",
  },
];

const aiTools = [
  "Claude Code",
  "GitHub Copilot",
  "Antigravity",
  "Codex",
  "Cursor",
  "Cline",
];

function SectionLabel({
  number,
  children,
  className = "text-moss",
}: {
  number: string;
  children: string;
  className?: string;
}) {
  return (
    <div
      className={`mb-10 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.19em] ${className}`}
    >
      <span>{number}</span>
      <span className="h-px w-8 bg-moss/40" />
      <span>{children}</span>
    </div>
  );
}

export default function Index() {
  useEffect(() => {
    const title = "Hemanth Palakaluri | Senior Technical Lead";
    const description =
      "Hemanth Palakaluri is a Senior Technical Lead with 10+ years of experience building scalable enterprise products across front-end architecture, full-stack delivery, cloud, and technical leadership.";
    const url = "https://hemanthpalakaluri.netlify.app/";
    document.title = title;
    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute("content", description);
    document
      .querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.setAttribute(
        "content",
        "Senior Technical Lead building scalable enterprise products from interface to cloud.",
      );
    document
      .querySelector<HTMLMetaElement>('meta[property="og:url"]')
      ?.setAttribute("content", url);
    document
      .querySelector<HTMLMetaElement>('meta[name="twitter:title"]')
      ?.setAttribute("content", title);
    document
      .querySelector<HTMLLinkElement>('link[rel="canonical"]')
      ?.setAttribute("href", url);
    const structuredData =
      document.querySelector<HTMLScriptElement>("#structured-data");
    if (structuredData) {
      structuredData.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfilePage",
        mainEntity: {
          "@type": "Person",
          name: "Hemanth Palakaluri",
          jobTitle: "Senior Technical Lead",
          url,
          sameAs: [
            "https://www.linkedin.com/in/hemanth-palakaluri-5a44049a",
            "https://github.com/phsmartswb-ai",
          ],
          knowsAbout: [
            "React",
            "Angular",
            "TypeScript",
            "Front-end architecture",
            "Full-stack development",
            "AWS",
            "Technical leadership",
          ],
        },
      });
    }
  }, []);

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink selection:bg-lime selection:text-ink">
      <header className="sticky top-0 z-50 border-b border-ink/[0.07] bg-paper/90 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a
            href="#home"
            className="group flex items-center gap-3"
            aria-label="Hemanth Palakaluri home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-full bg-ink font-display text-sm font-bold text-lime transition-transform group-hover:rotate-12">
              H
            </span>
            <span className="font-display text-sm font-bold tracking-tight">
              Hemanth<span className="text-moss">.</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 text-[12px] font-semibold text-ink/60 md:flex"
            aria-label="Primary navigation"
          >
            <a className="transition-colors hover:text-moss" href="#about">
              About
            </a>
            <a className="transition-colors hover:text-moss" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-moss" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-moss" href="#expertise">
              Expertise
            </a>
            <a
              className="transition-colors hover:text-moss"
              href="#personal-ai"
            >
              Projects
            </a>
          </nav>
          <a
            href="mailto:hemanth.palakaluri@gmail.com?subject=Opportunity%20for%20Hemanth%20Palakaluri"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-moss"
          >
            Contact me{" "}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </header>

      <section
        id="home"
        className="mx-auto grid min-h-[620px] w-full max-w-7xl scroll-mt-24 items-center gap-10 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pb-28 md:pt-20 lg:px-12"
      >
        <div className="relative z-10">
          <div className="mb-7 flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-moss/20 bg-white/60 px-3.5 py-2 text-[11px] font-medium text-moss">
              <span className="h-2 w-2 rounded-full bg-[#6f9d70]" />
              Technical leadership · UI engineering
            </div>
            <VisitorCounter variant="badge" />
          </div>
          <p className="mb-4 font-mono text-xs tracking-wide text-ink/45">
            BENGALURU, INDIA · SENIOR TECHNICAL LEAD
          </p>
          <h1 className="max-w-3xl font-display text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.9] tracking-[-0.075em]">
            Hemanth
            <br />
            <span className="text-moss">Palakaluri</span>
            <span className="text-[#a5bd60]">.</span>
          </h1>
          <h2 className="mt-7 max-w-2xl text-xl font-semibold leading-snug tracking-[-0.025em] sm:text-2xl">
            Building scalable enterprise products from{" "}
            <span className="text-moss">interface to cloud.</span>
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ink/60 sm:text-base sm:leading-8">
            Senior Technical Lead with 10+ years of experience delivering
            secure, high-quality web platforms, shaping front-end architecture,
            and helping multidisciplinary teams ship with confidence.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-moss"
            >
              View selected work{" "}
              <ArrowDown
                size={15}
                className="transition-transform group-hover:translate-y-0.5"
              />
            </a>
            <a
              href="mailto:hemanth.palakaluri@gmail.com"
              className="inline-flex items-center gap-2 px-3 py-3 text-sm font-medium text-ink/65 transition hover:text-ink"
            >
              <Mail size={16} /> Discuss an opportunity
            </a>
            <a
              href="https://www.linkedin.com/in/hemanth-palakaluri-5a44049a"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-xs font-semibold transition hover:border-ink hover:bg-ink hover:text-paper"
            >
              <span className="grid h-3.5 w-3.5 place-items-center rounded-[2px] border border-current text-[9px] font-bold leading-none">
                in
              </span>
              LinkedIn
            </a>
            <a
              href="https://github.com/phsmartswb-ai"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2.5 text-xs font-semibold transition hover:border-ink hover:bg-ink hover:text-paper"
            >
              <Code2 size={14} /> GitHub
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-ink/50">
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} /> Bengaluru, India
            </span>
            <a
              className="inline-flex items-center gap-2 transition hover:text-ink"
              href="mailto:hemanth.palakaluri@gmail.com"
            >
              <Mail size={14} /> Email
            </a>
            <a
              className="inline-flex items-center gap-2 transition hover:text-ink"
              href="tel:+918548881454"
            >
              <span className="text-sm">↗</span> +91 85488 81454
            </a>
          </div>
        </div>

        <div className="relative mx-auto flex aspect-[0.95] w-full max-w-[490px] items-center justify-center md:aspect-square">
          <div className="absolute inset-[7%] rounded-full border border-ink/[0.08]" />
          <div className="absolute inset-[18%] rounded-full border border-dashed border-ink/[0.13]" />
          <div className="absolute inset-[29%] rounded-full border border-ink/[0.08]" />
          <div className="absolute right-[11%] top-[17%] h-3 w-3 rounded-full bg-moss" />
          <div className="absolute bottom-[18%] left-[10%] h-2 w-2 rounded-full bg-[#b5ca68]" />
          <div className="relative z-10 flex h-[48%] w-[48%] flex-col items-center justify-center rounded-full bg-ink text-center text-paper shadow-[0_25px_80px_-30px_rgba(23,35,31,0.5)]">
            <span className="font-display text-[clamp(4rem,10vw,7rem)] font-semibold leading-none tracking-[-0.09em]">
              10<span className="text-lime">+</span>
            </span>
            <span className="mt-3 text-[10px] font-medium uppercase tracking-[0.22em] text-paper/60">
              Years of craft
            </span>
          </div>
          <div className="absolute left-[2%] top-[27%] rotate-[-8deg] rounded-2xl border border-ink/10 bg-white/80 px-4 py-3 shadow-sm backdrop-blur-sm sm:left-[0%]">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#e5edcd] text-moss">
                <Code2 size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold">UI Engineering</p>
                <p className="mt-0.5 text-[10px] text-ink/45">
                  Crafting at scale
                </p>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[18%] right-[0%] rotate-[6deg] rounded-2xl border border-ink/10 bg-white/85 px-4 py-3 shadow-sm backdrop-blur-sm sm:right-[-2%]">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-[#f0eee6] text-moss">
                <Sparkles size={16} />
              </span>
              <div>
                <p className="text-xs font-semibold">AI-augmented</p>
                <p className="mt-0.5 text-[10px] text-ink/45">
                  Building what's next
                </p>
              </div>
            </div>
          </div>
          <span className="absolute right-[4%] top-[47%] font-mono text-[10px] tracking-[0.18em] text-ink/35">
            12° 58' N
          </span>
          <span className="absolute bottom-[5%] left-[28%] font-mono text-[10px] tracking-[0.18em] text-ink/35">
            IN · GMT+5:30
          </span>
        </div>
      </section>

      <div className="border-y border-ink/10 bg-[#eeefe7]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-5 sm:px-8 lg:px-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-ink/45">
            Recruiter snapshot
          </p>
          <div className="grid flex-1 grid-cols-2 gap-x-7 gap-y-4 sm:grid-cols-4 sm:gap-x-10">
            <div>
              <strong className="block font-display text-lg text-ink">
                10+ years
              </strong>
              <span className="text-[11px] text-ink/50">
                Product engineering
              </span>
            </div>
            <div>
              <strong className="block font-display text-lg text-ink">
                25% faster
              </strong>
              <span className="text-[11px] text-ink/50">Release cycle</span>
            </div>
            <div>
              <strong className="block font-display text-lg text-ink">
                3 companies
              </strong>
              <span className="text-[11px] text-ink/50">
                Enterprise delivery
              </span>
            </div>
            <div>
              <strong className="block font-display text-lg text-ink">
                Full stack
              </strong>
              <span className="text-[11px] text-ink/50">UI, APIs & cloud</span>
            </div>
          </div>
        </div>
      </div>

      <section
        id="about"
        className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:py-32 lg:px-12"
      >
        <div>
          <SectionLabel number="01">A little about me</SectionLabel>
          <p className="max-w-xs font-display text-3xl font-medium leading-tight tracking-[-0.055em] sm:text-4xl">
            Good software starts with{" "}
            <span className="text-moss">good questions.</span>
          </p>
        </div>
        <div className="max-w-2xl pt-1">
          <p className="text-lg leading-8 tracking-[-0.02em] text-ink/75 sm:text-xl sm:leading-9">
            I’m a hands-on engineering leader who turns complex requirements
            into maintainable products. For more than a decade, I’ve helped
            teams build enterprise applications that are intuitive, reliable,
            secure, and ready to scale.
          </p>
          <p className="mt-5 text-sm leading-7 text-ink/55 sm:text-base sm:leading-8">
            I work across architecture, implementation, delivery, and production
            support, partnering closely with product, UX, backend, QA, and
            security. I also apply AI-assisted development where it improves
            engineering speed, quality, and decision-making.
          </p>
          <div className="mt-9 grid grid-cols-2 gap-6 border-t border-ink/10 pt-7 sm:grid-cols-3">
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight">
                25<span className="text-moss">%</span>
              </p>
              <p className="mt-1 text-xs text-ink/50">Faster release times</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight">
                3<span className="text-moss">+</span>
              </p>
              <p className="mt-1 text-xs text-ink/50">Enterprise products</p>
            </div>
            <div>
              <p className="font-display text-3xl font-semibold tracking-tight">
                E2E
              </p>
              <p className="mt-1 text-xs text-ink/50">Product ownership</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="work"
        className="scroll-mt-20 bg-ink py-24 text-paper sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <SectionLabel number="02" className="text-lime">
                Selected work
              </SectionLabel>
              <h2 className="max-w-xl font-display text-4xl font-medium tracking-[-0.06em] sm:text-6xl">
                Enterprise work with{" "}
                <span className="text-lime">measurable impact.</span>
              </h2>
            </div>
            <p className="max-w-xs pb-1 text-sm leading-6 text-paper/55">
              Selected product work across three teams and a decade of building.
            </p>
          </div>
          <div className="mt-14 space-y-14">
            {companies.map((company) => (
              <section
                key={company.name}
                className="grid gap-6 border-t border-white/15 pt-6 lg:grid-cols-[210px_1fr] lg:gap-10"
              >
                <div className="flex flex-wrap items-start justify-between gap-3 lg:block">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-lime/75">
                      {company.period}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                      {company.name}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-paper/45">
                      {company.role}
                    </p>
                  </div>
                  <span className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] text-paper/60">
                    {company.projects.length} projects
                  </span>
                </div>
                <div
                  className={`grid gap-4 sm:grid-cols-2 ${
                    company.projects.length > 2
                      ? "lg:grid-cols-3"
                      : "lg:grid-cols-2"
                  }`}
                >
                  {company.projects.map((project, index) => {
                    const content = (
                      <>
                        <div
                          className={`relative mx-3 mt-3 flex aspect-[1.65] items-center justify-center overflow-hidden rounded-[0.9rem] ${project.color}`}
                        >
                          <div
                            className="absolute inset-0 opacity-30"
                            style={{
                              backgroundImage:
                                "radial-gradient(#17231f 0.7px, transparent 0.7px)",
                              backgroundSize: "12px 12px",
                            }}
                          />
                          <div className="absolute -right-8 -top-12 h-44 w-44 rounded-full border border-ink/15" />
                          <div className="absolute -right-2 -top-6 h-32 w-32 rounded-full border border-ink/15" />
                          <span className="relative font-display text-7xl font-semibold tracking-[-0.09em] text-ink/80">
                            {project.mark}
                          </span>
                          <span className="absolute left-4 top-4 font-mono text-[10px] text-ink/50">
                            0{index + 1} / 0{company.projects.length}
                          </span>
                          <span className="absolute bottom-3 right-3 grid h-8 w-8 place-items-center rounded-full bg-ink/90 text-lime transition-transform group-hover:rotate-45">
                            <ArrowUpRight size={15} />
                          </span>
                        </div>
                        <div className="p-4 pb-5">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-lime/75">
                            {project.type}
                          </p>
                          <h4 className="mt-2 font-display text-xl font-semibold tracking-tight">
                            {project.name}
                          </h4>
                          <p className="mt-2 min-h-[60px] text-xs leading-5 text-paper/55">
                            {project.copy}
                          </p>
                          <div className="mt-4 border-t border-white/10 pt-3 text-[10px] text-paper/45">
                            {project.stack}
                          </div>
                        </div>
                      </>
                    );

                    return project.slug ? (
                      <Link
                        key={project.name}
                        to={`/projects/${project.slug}`}
                        className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045] transition hover:-translate-y-1 hover:bg-white/[0.075]"
                        aria-label={`Read the ${project.name} case study`}
                      >
                        {content}
                      </Link>
                    ) : (
                      <article
                        key={project.name}
                        className="group overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.045]"
                      >
                        {content}
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section
        id="experience"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8 md:py-28 lg:px-12"
      >
        <div className="grid gap-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <SectionLabel number="03">Experience</SectionLabel>
            <h2 className="max-w-xs font-display text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl">
              A decade of making <span className="text-moss">things work.</span>
            </h2>
            <div className="mt-8 flex items-center gap-3 text-sm text-ink/55">
              <BriefcaseBusiness size={17} className="text-moss" /> 3 teams ·
              10+ years
            </div>
          </div>
          <div className="divide-y divide-ink/10 border-y border-ink/10">
            {roles.map((role, index) => (
              <article
                key={role.company}
                className="grid gap-4 py-7 sm:grid-cols-[135px_1fr] sm:gap-8 sm:py-8"
              >
                <div className="font-mono text-xs text-ink/45">
                  {role.period}
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-moss">
                    {role.company}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">
                    {role.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-ink/60">
                    {role.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {role.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2.5 text-xs leading-5 text-ink/65"
                      >
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0 text-moss"
                        />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] text-ink/55"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="expertise"
        className="relative scroll-mt-20 overflow-hidden border-y border-ink/10 bg-[#d9f27c] py-24 sm:py-28"
      >
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-ink/10 sm:h-[28rem] sm:w-[28rem]" />
        <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-ink/10 sm:h-80 sm:w-80" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 md:grid-cols-[0.7fr_1.3fr] lg:px-12">
          <div>
            <SectionLabel number="04">My toolkit</SectionLabel>
            <h2 className="max-w-xs font-display text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl">
              Curious by <span className="text-moss">default.</span>
            </h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-ink/65">
              The right tool matters. Knowing when and how to use it matters
              more.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-xs font-medium text-paper">
              <Sparkles size={14} className="text-lime" /> A decade of learning
              by building
            </div>
          </div>
          <div className="space-y-4">
            {skillGroups.map((group, index) => (
              <div
                key={group.label}
                className="rounded-2xl border border-ink/10 bg-white/65 p-5 sm:p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {group.label}
                  </h3>
                  <span className="font-mono text-[10px] text-ink/40">
                    0{index + 1}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-ink/10 bg-white/70 px-3 py-1.5 text-xs font-medium text-ink/75 transition hover:border-moss/40 hover:bg-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            <div className="rounded-2xl bg-ink p-5 text-paper sm:p-6">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles size={15} className="text-lime" />
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  AI-assisted development
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {aiTools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs font-medium text-paper/80"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="mx-auto grid max-w-7xl gap-12 px-5 py-24 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:py-28 lg:px-12">
        <div>
          <SectionLabel number="05">Beyond the browser</SectionLabel>
          <h2 className="max-w-xs font-display text-4xl font-medium leading-[1.05] tracking-[-0.06em] sm:text-5xl">
            A strong foundation, <span className="text-moss">always.</span>
          </h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink/10 p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5edcd] text-moss">
              <Code2 size={19} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">
              Full-stack perspective
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/55">
              Built NEO end-to-end, from Python and Next.js to AWS
              infrastructure, CI/CD, and production operations.
            </p>
          </div>
          <div className="rounded-2xl border border-ink/10 p-6">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#e5edcd] text-moss">
              <ArrowDownRight size={19} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold">
              Learning, always
            </h3>
            <p className="mt-2 text-sm leading-6 text-ink/55">
              B.Tech. in Electrical & Electronics Engineering, NRI Institute of
              Technology, 2014.
            </p>
          </div>
        </div>
      </section> */}

      <section className="border-y border-ink/10 bg-[#eeefe7] py-24 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-8">
            <div>
              <SectionLabel number="05">Beyond the browser</SectionLabel>
              <h2 className="max-w-lg font-display text-4xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl">
                Built for the <span className="text-moss">whole stack.</span>
              </h2>
            </div>
            <p className="max-w-md pb-1 text-sm leading-7 text-ink/55 sm:text-base">
              I bring product ideas from interface to infrastructure, backed by
              a strong engineering foundation.
            </p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <article className="flex flex-col rounded-[1.25rem] border border-ink/10 bg-paper p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5edcd] text-moss">
                  <Code2 size={20} />
                </span>
                <span className="font-mono text-[10px] text-ink/35">
                  01 / BUILD
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold tracking-tight">
                End-to-end product ownership
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink/60">
                Built NEO from scratch—owning architecture, Python and Next.js
                development, deployment, security, CI/CD, and production
                operations.
              </p>
              <div className="mt-5 border-t border-ink/10 pt-4 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/45">
                Architecture · Full-stack · Production
              </div>
            </article>
            <article className="flex flex-col rounded-[1.25rem] border border-ink/10 bg-paper p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5edcd] text-moss">
                  <BriefcaseBusiness size={20} />
                </span>
                <span className="font-mono text-[10px] text-ink/35">
                  02 / SHIP
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold tracking-tight">
                Cloud & delivery
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink/60">
                Delivered on AWS across EC2, ECS, S3, CloudFront, DynamoDB, and
                CloudWatch, with Docker, Kubernetes, Jenkins pipelines, and
                security scanning.
              </p>
              <div className="mt-5 border-t border-ink/10 pt-4 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/45">
                AWS · Docker · Kubernetes · Jenkins
              </div>
            </article>
            <article className="flex flex-col rounded-[1.25rem] border border-ink/10 bg-paper p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#e5edcd] text-moss">
                  <ArrowDownRight size={20} />
                </span>
                <span className="font-mono text-[10px] text-ink/35">
                  03 / ROOTS
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-semibold tracking-tight">
                Engineering foundation
              </h3>
              <p className="mt-3 flex-1 text-sm leading-6 text-ink/60">
                Bachelor of Engineering in Electrical & Electronics Engineering
                from NRI Institute of Technology, completed in 2014.
              </p>
              <div className="mt-5 border-t border-ink/10 pt-4 text-[10px] font-medium uppercase tracking-[0.12em] text-ink/45">
                NRI Institute of Technology · 2014
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        id="personal-ai"
        className="scroll-mt-20 border-y border-ink/10 bg-[#eeefe7] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 md:grid-cols-[0.72fr_1.28fr] md:items-end">
            <div>
              <SectionLabel number="06">Personal AI builds</SectionLabel>
              <h2 className="max-w-lg font-display text-4xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-6xl">
                Ideas into <span className="text-moss">experiences.</span>
              </h2>
            </div>
            <div className="max-w-xl">
              <p className="text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
                I use AI-assisted engineering and rapid prototyping to turn
                product concepts into working digital experiences. These
                independent builds demonstrate product thinking, technical
                range, and the ability to move from idea to usable interface.
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-moss">
                Independent products · From concept to working experience
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {personalProjects.map((project, index) => (
              <article
                key={project.name}
                className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-ink/10 bg-paper transition hover:-translate-y-1 hover:shadow-[0_20px_50px_-32px_rgba(23,35,31,0.35)]"
              >
                <div
                  className={`relative mx-3 mt-3 flex aspect-[2.1] items-center overflow-hidden rounded-[1rem] px-6 ${project.color}`}
                >
                  <div className="absolute -right-8 -top-20 h-64 w-64 rounded-full border border-ink/15" />
                  <div className="absolute -right-2 -top-12 h-48 w-48 rounded-full border border-ink/15" />
                  <div className="absolute right-11 -top-4 h-32 w-32 rounded-full border border-ink/15" />
                  <span className="relative font-display text-6xl font-semibold tracking-[-0.08em] text-ink/80 sm:text-7xl">
                    {project.mark}
                  </span>
                  <span className="absolute bottom-4 left-6 font-mono text-[10px] uppercase tracking-[0.16em] text-ink/55">
                    0{index + 1} / 04 · Personal project
                  </span>
                  <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-ink text-lime transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 pb-6 sm:p-6">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-moss">
                    {project.category}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    {project.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-ink/60">
                    {project.description}
                  </p>
                  <div className="mt-5 border-t border-ink/10 pt-4 text-xs text-ink/45">
                    {project.stack}
                  </div>
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex w-fit items-center gap-2 text-xs font-semibold text-ink transition-colors hover:text-moss"
                  >
                    View project <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-ink text-paper">
        <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12">
          <SectionLabel number="07">Get in touch</SectionLabel>
          <div className="flex flex-col justify-between gap-10 border-b border-white/15 pb-12 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-2xl font-display text-5xl font-medium leading-[0.98] tracking-[-0.07em] sm:text-7xl">
                Looking for a senior
                <br />
                engineering leader<span className="text-lime">?</span>
              </h2>
              <a
                href="mailto:hemanth.palakaluri@gmail.com"
                className="group mt-7 inline-flex items-center gap-3 text-lg font-medium text-lime transition hover:text-white sm:text-xl"
              >
                Start a conversation{" "}
                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </a>
            </div>
            <div className="flex flex-col gap-3 text-sm text-paper/60">
              <a
                className="flex items-center gap-2 transition hover:text-white"
                href="mailto:hemanth.palakaluri@gmail.com"
              >
                <Mail size={15} /> hemanth.palakaluri@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={15} /> Bengaluru, India
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 text-[11px] text-paper/40">
            <div className="flex flex-wrap items-center gap-4">
              <span>© {new Date().getFullYear()} Hemanth Palakaluri</span>
              <span className="hidden h-3 w-px bg-white/20 sm:inline-block" />
              <VisitorCounter variant="footer" />
            </div>
            <div className="flex items-center gap-4">
              <a
                className="transition hover:text-white"
                href="tel:+918548881454"
              >
                +91 85488 81454
              </a>
              <span className="h-3 w-px bg-white/20" />
              <span>Designed with intent. Built to last.</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
