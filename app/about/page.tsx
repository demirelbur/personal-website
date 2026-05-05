import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";
import { copy } from "@/content/copy";

export const metadata = {
  title: `About — ${profile.name}`,
};

const focusCards = [
  {
    title: "AI for real-world networks",
    text: "Reinforcement learning and optimization methods for radio access networks, link adaptation, and autonomous control.",
  },
  {
    title: "Production ML systems",
    text: "Distributed training, low-latency inference, model compression, evaluation pipelines, and deployment under operational constraints.",
  },
  {
    title: "Agentic AI",
    text: "LLM-based reasoning systems connected to optimization and control loops, especially for intent-based network automation.",
  },
  {
    title: "Research-to-production translation",
    text: "Taking ideas from papers and prototypes into systems that engineers can run, measure, maintain, and improve.",
  },
];

const proofPoints = [
  { value: "25+", label: "Publications" },
  { value: "15+", label: "Patents" },
  { value: "500+", label: "Citations" },
  { value: "100+", label: "Internal Users" },
];

export default function AboutPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-3xl">
          {/* Hero */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-10">
            <Image
              src="/burak_demirel.jpg"
              alt={profile.name}
              width={120}
              height={120}
              className="rounded-[var(--radius-lg)] border border-border object-cover w-[120px] h-[120px]"
              priority
            />
            <div>
              <h1 className="text-[36px] md:text-[40px] md:leading-[48px] font-bold tracking-tight">
                {copy.pages.about.title}
              </h1>
              <p className="mt-2 text-sm text-text-muted">{profile.role}</p>
            </div>
          </div>

          {/* Opening positioning */}
          <div className="space-y-4 text-text-secondary leading-relaxed">
            <p>
              I build AI systems for environments where models do not get
              unlimited time, data, or compute.
            </p>
            <p>
              My work sits at the intersection of reinforcement learning, agentic
              AI, control, and distributed systems — with a focus on turning
              research ideas into reliable production systems for real-world
              networks.
            </p>
          </div>

          {/* From control to production AI */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              From control to production AI
            </h2>
            <div className="space-y-3 text-text-secondary leading-relaxed">
              <p>
                My background began in control and optimization, where the
                central question was how to make systems behave reliably under
                uncertainty. Over time, that question led me toward reinforcement
                learning, distributed training, and AI systems that must operate
                under strict latency, reliability, and compute constraints.
              </p>
              <p>
                Today, I build production-grade ML systems for telecom networks,
                including AI-native RAN optimization, agentic AI for autonomous
                networks, and scalable reinforcement learning platforms.
              </p>
            </div>
          </div>

          {/* What I focus on — 2x2 grid */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-text-primary mb-4">
              What I focus on
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {focusCards.map((card) => (
                <div
                  key={card.title}
                  className="p-4 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
                >
                  <h3 className="text-sm font-medium text-text-primary mb-1.5">
                    {card.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* How I work */}
          <div className="mt-10">
            <h2 className="text-lg font-semibold text-text-primary mb-3">
              How I work
            </h2>
            <div className="space-y-3 text-text-secondary leading-relaxed">
              <p>I care about AI that survives contact with real systems.</p>
              <p>
                That means I usually think beyond model accuracy: latency,
                throughput, system boundaries, data flow, failure modes,
                evaluation, and maintainability matter just as much. A good model
                is not enough if it cannot run where decisions actually happen.
              </p>
              <p>
                My favorite problems are the ones where machine learning, systems
                engineering, and domain knowledge all matter at the same time.
              </p>
            </div>
          </div>

          {/* Proof points */}
          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4 py-5 px-6 rounded-[var(--radius-md)] border border-border bg-bg-secondary">
            {proofPoints.map((point) => (
              <div key={point.label} className="flex flex-col">
                <span className="text-lg font-semibold text-text-primary">
                  {point.value}
                </span>
                <span className="text-xs text-text-muted">{point.label}</span>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div className="mt-12">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">
              Experience
            </h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div
                  key={`${exp.company}-${exp.period}`}
                  className="p-5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-medium text-text-primary">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-text-muted shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    {exp.company}, {exp.location}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {exp.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="text-xs text-text-muted leading-relaxed pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-text-muted"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education — compact */}
          <div className="mt-12">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-5">
              Education
            </h2>
            <div className="space-y-2">
              {education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.period}`}
                  className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-0.5 py-3 px-4 rounded-[var(--radius-sm)] border border-border bg-bg-secondary"
                >
                  <div className="min-w-0">
                    <span className="text-sm font-medium text-text-primary">
                      {edu.degree}
                    </span>
                    <span className="text-sm text-text-secondary">
                      {" — "}
                      {edu.institution}, {edu.location}
                    </span>
                    {edu.detail && (
                      <p className="text-xs text-text-muted mt-0.5 italic">
                        {edu.detail}
                      </p>
                    )}
                  </div>
                  <span className="text-xs text-text-muted shrink-0">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 flex items-center gap-4">
            <Button href={`mailto:${profile.email}`}>
              {copy.sections.contact.cta}
            </Button>
            <Button href="/projects" variant="text">
              {copy.sections.contact.ctaSecondary}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
