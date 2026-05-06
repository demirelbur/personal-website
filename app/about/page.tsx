import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";

export const metadata = {
  title: `About — ${profile.name}`,
};

const focusAreas = [
  {
    title: "AI for real-world networks",
    description:
      "Reinforcement learning and optimization methods for radio access networks, link adaptation, and autonomous control.",
    icon: "radio-tower",
  },
  {
    title: "Production ML systems",
    description:
      "Distributed training, low-latency inference, model compression, evaluation pipelines, and deployment under operational constraints.",
    icon: "layers",
  },
  {
    title: "Agentic AI",
    description:
      "LLM-based reasoning systems connected to optimization and control loops, especially for intent-based network automation.",
    icon: "brain",
  },
  {
    title: "Research-to-production translation",
    description:
      "Taking ideas from papers and prototypes into systems that engineers can run, measure, maintain, and improve.",
    icon: "git-branch",
  },
];

const workPrinciples = [
  {
    title: "Real-system first",
    text: "I care about AI that survives contact with real systems.",
    icon: "check-circle",
  },
  {
    title: "Beyond accuracy",
    text: "Latency, throughput, system boundaries, and reliability matter as much as model quality.",
    icon: "clock",
  },
  {
    title: "Operational thinking",
    text: "Data flow, failure modes, evaluation, and maintainability shape whether AI systems work in practice.",
    icon: "database",
  },
  {
    title: "Deployment-aware ML",
    text: "A good model is not enough if it cannot run where decisions actually happen.",
    icon: "shield",
  },
];

const proofPoints = [
  { value: "25+", label: "Publications", icon: "book-open" },
  { value: "15+", label: "Patents", icon: "file-text" },
  { value: "500+", label: "Citations", icon: "quote" },
  { value: "100+", label: "Internal Users", icon: "users" },
];

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "radio-tower":
      return (
        <svg {...props}>
          <path d="M4.9 16.1C1 12.2 1 5.8 4.9 1.9" />
          <path d="M7.8 13.2c-2.3-2.3-2.3-6.1 0-8.5" />
          <path d="M16.2 4.8c2.3 2.3 2.3 6.1 0 8.5" />
          <path d="M19.1 1.9c3.9 3.9 3.9 10.2 0 14.1" />
          <circle cx="12" cy="9" r="1" />
          <path d="M12 10v12" />
        </svg>
      );
    case "layers":
      return (
        <svg {...props}>
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      );
    case "brain":
      return (
        <svg {...props}>
          <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
          <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
          <path d="M12 5v13" />
        </svg>
      );
    case "git-branch":
      return (
        <svg {...props}>
          <line x1="6" y1="3" x2="6" y2="15" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <path d="M18 9a9 9 0 0 1-9 9" />
        </svg>
      );
    case "check-circle":
      return (
        <svg {...props}>
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    case "clock":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="9" ry="3" />
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        </svg>
      );
    case "shield":
      return (
        <svg {...props}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "book-open":
      return (
        <svg {...props}>
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      );
    case "file-text":
      return (
        <svg {...props}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      );
    case "quote":
      return (
        <svg {...props}>
          <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
          <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </svg>
      );
    case "users":
      return (
        <svg {...props}>
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "target":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case "building":
      return (
        <svg {...props}>
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
        </svg>
      );
    case "graduation-cap":
      return (
        <svg {...props}>
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Hero */}
          <div className="flex flex-col sm:flex-row items-start gap-8 mb-14">
            <img
              src="/burak_demirel.jpg"
              alt={profile.name}
              className="rounded-[var(--radius-lg)] border border-border object-cover w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] shrink-0"
            />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-text-primary">
                About
              </h1>
              <p className="mt-2 text-sm font-medium text-text-secondary">
                {profile.role}
              </p>
              <div className="mt-2 w-10 h-0.5 bg-accent rounded-full" />
              <div className="mt-5 space-y-3 text-text-secondary leading-relaxed">
                <p>
                  I build AI systems for environments where models do not get
                  unlimited time, data, or compute.
                </p>
                <p>
                  My work sits at the intersection of reinforcement learning,
                  agentic AI, control, and distributed systems — with a focus on
                  turning research ideas into reliable production systems for
                  real-world networks.
                </p>
              </div>
            </div>
          </div>

          {/* From control to production AI */}
          <div className="mb-14 py-8 px-6 md:py-10 md:px-14 rounded-[var(--radius-md)] border border-accent/20 bg-bg-secondary">
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-10">
              <div className="shrink-0">
                <div className="w-14 h-14 rounded-[var(--radius-md)] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <Icon name="target" className="w-5 h-5" />
                </div>
              </div>
              <div className="max-w-[720px]">
                <h2 className="text-lg font-semibold text-text-primary mb-3">
                  From control to production AI
                </h2>
                <div className="space-y-3 text-sm text-text-secondary leading-relaxed">
                  <p>
                    My background began in control and optimization, where the
                    central question was how to make systems behave reliably
                    under uncertainty. Over time, that question led me toward
                    reinforcement learning, distributed training, and AI systems
                    that operate under strict latency, reliability, and compute
                    constraints.
                  </p>
                  <p>
                    Today, I build production-grade ML systems for telecom
                    networks, including AI-native RAN optimization, agentic AI
                    for autonomous networks, and scalable reinforcement learning
                    platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What I focus on */}
          <div className="mb-14">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">
              What I focus on
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {focusAreas.map((area) => (
                <div
                  key={area.title}
                  className="p-5 rounded-[var(--radius-md)] border border-border bg-bg-secondary hover:border-accent/30 transition-colors duration-[var(--duration-base)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-14 h-14 rounded-[var(--radius-md)] bg-accent/10 flex items-center justify-center text-accent">
                      <Icon name={area.icon} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-text-primary mb-1.5">
                        {area.title}
                      </h3>
                      <p className="text-xs text-text-muted leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How I work */}
          <div className="mb-12">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">
              How I work
            </h2>
            <div className="max-w-4xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-5">
                {workPrinciples.map((principle) => (
                  <div
                    key={principle.title}
                    className="flex flex-col items-start min-w-0"
                  >
                    <div className="text-accent mb-2">
                      <Icon name={principle.icon} className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-medium text-text-primary whitespace-nowrap mb-1.5">
                      {principle.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {principle.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Proof-point stats strip */}
          <div className="mb-14 py-4 px-5 rounded-[var(--radius-md)] border border-accent/20 bg-bg-secondary">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 md:divide-x md:divide-border">
              {proofPoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center gap-4 px-5"
                >
                  <div className="text-accent">
                    <Icon name={point.icon} className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-accent">
                      {point.value}
                    </span>
                    <span className="text-xs text-text-secondary">
                      {point.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-14">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">
              Experience
            </h2>
            <div className="space-y-3">
              {experience.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="p-5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="hidden sm:flex shrink-0 w-14 h-14 rounded-[var(--radius-md)] bg-accent/10 items-center justify-center text-accent">
                      <Icon name="building" className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                        <h3 className="text-sm font-medium text-text-primary">
                          {exp.role}
                        </h3>
                        <span className="text-xs text-text-muted shrink-0">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {exp.company}, {exp.location}
                      </p>
                      <ul className="mt-3 space-y-1.5">
                        {exp.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-xs text-text-muted leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-accent/60"
                          >
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-14">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">
              Education
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.period}`}
                  className="p-4 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
                >
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 w-14 h-14 rounded-[var(--radius-md)] bg-accent/10 flex items-center justify-center text-accent">
                      <Icon name="graduation-cap" className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-medium text-text-primary">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-text-secondary mt-0.5">
                        {edu.institution}, {edu.location}
                      </p>
                      <p className="text-[10px] text-text-muted mt-1">
                        {edu.period}
                      </p>
                      {edu.detail && (
                        <p className="text-[11px] text-text-muted mt-1.5 italic">
                          {edu.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button href={`mailto:${profile.email}`}>Get in Touch</Button>
            <Button href="/projects" variant="secondary">
              View Projects
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
