import type { ProjectCardData } from "@/content/projectCards";
import Link from "next/link";

function MetricIcon({ label }: { label: string }) {
  const icon = (() => {
    if (label === "Constraint") {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-accent"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    }
    if (label === "System") {
      return (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className="text-accent"
        >
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    }
    return (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="text-accent"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    );
  })();

  return (
    <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-[5px] bg-accent/10 border border-accent/20">
      {icon}
    </span>
  );
}

export function ProjectCard({ project }: { project: ProjectCardData }) {
  return (
    <article className="p-5 md:p-7 lg:p-8 rounded-[var(--radius-lg)] border border-border bg-bg-secondary">
      {/* Top row: metadata + CTA */}
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em] mb-2">
            {project.category}
          </p>
          <h3 className="text-xl md:text-2xl font-semibold text-text-primary leading-tight">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-text-secondary leading-relaxed max-w-xl">
            {project.subtitle}
          </p>
        </div>
        <Link
          href={project.href}
          className="hidden md:inline-flex items-center gap-1 text-[13px] font-medium text-accent hover:text-accent-hover transition-colors duration-[var(--duration-fast)] whitespace-nowrap shrink-0 mt-5"
        >
          View full project <span>→</span>
        </Link>
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex items-start gap-2.5 px-3.5 py-3.5 rounded-[var(--radius-md)] border border-border bg-bg-primary"
          >
            <MetricIcon label={metric.label} />
            <div className="min-w-0 pt-px">
              <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1.5">
                {metric.label}
              </p>
              <p className="text-[13px] font-semibold text-text-primary whitespace-pre-line leading-relaxed">
                {metric.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Detail columns */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 mt-5 pt-5 border-t border-border">
        {project.details.map((detail) => (
          <div key={detail.label}>
            <p className="flex items-center gap-1.5 text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              {detail.label}
            </p>
            <p className="text-sm text-text-secondary leading-relaxed">
              {detail.text}
            </p>
          </div>
        ))}
      </div>

      {/* Stack */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-2">
          Stack
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-text-muted px-2.5 py-1 rounded-[var(--radius-sm)] border border-border bg-bg-primary"
            >
              {tech}
            </span>
          ))}
          <Link
            href={project.href}
            className="md:hidden ml-auto text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-[var(--duration-fast)]"
          >
            View full project →
          </Link>
        </div>
      </div>
    </article>
  );
}
