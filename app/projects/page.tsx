import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export const metadata = {
  title: "Projects",
  description:
    "Production ML systems and platforms — distributed RL training, AI-native link adaptation, agentic AI for autonomous networks.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <SectionHeading
          title={copy.pages.projects.title}
          subtitle={copy.pages.projects.subtitle}
        />
        <div className="space-y-5">
          {projects.map((project) => {
            const tags = project.tech.slice(0, 4);
            return (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="block group"
              >
                <div className="p-5 md:p-10 rounded-[var(--radius-lg)] border border-border bg-bg-secondary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5">
                  {/* Category */}
                  {project.category && (
                    <p className="text-[10px] font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
                      {project.category}
                    </p>
                  )}

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)] leading-tight">
                    {project.title}
                  </h3>

                  {/* Divider */}
                  <div className="mt-5 mb-5 h-px bg-border" />

                  {/* Summary metrics */}
                  {project.summaryMetrics && (
                    <div className="flex gap-6 md:gap-8 mb-5">
                      {project.summaryMetrics.map((metric) => (
                        <div
                          key={metric.label}
                          className={`flex flex-col ${metric.label === "STACK" ? "hidden md:flex" : ""}`}
                        >
                          <span className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1">
                            {metric.label}
                          </span>
                          <span className="text-sm font-medium text-text-primary">
                            {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Accent bar */}
                  <div className="h-0.5 w-16 bg-accent rounded-full opacity-60 mb-5" />

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-4 line-clamp-2 md:line-clamp-none">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {tags.map((t, i) => (
                      <span
                        key={t}
                        className={`text-[10px] text-text-muted bg-bg-elevated px-2 py-0.5 rounded-[var(--radius-sm)] border border-border ${i >= 3 ? "hidden md:inline-flex" : ""}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Takeaway */}
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-text-muted leading-relaxed">
                      {project.takeaway || project.outcome}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-lg font-semibold text-text-primary">
            Want the research behind these systems?
          </h2>
          <p className="mt-2 text-sm text-text-secondary max-w-lg mx-auto">
            Many of these projects are connected to research in reinforcement
            learning, RAN optimization, agentic AI, and production ML systems.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button href="/research">Read Research</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
