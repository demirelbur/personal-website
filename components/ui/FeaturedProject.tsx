"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { copy } from "@/content/copy";
import { viewportFadeInUp } from "@/lib/motion";
import type { Project } from "@/content/projects";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <motion.article {...viewportFadeInUp} className="mb-6">
      <Link
        href={`/projects/${project.slug}`}
        className="block group p-6 md:p-8 rounded-[var(--radius-md)] border border-border bg-bg-secondary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
      >
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-medium uppercase tracking-widest text-accent">
            {copy.ui.featuredProject}
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-2xl">
          {project.description}
        </p>

        {project.productionLine && (
          <p className="mt-4 text-sm font-medium text-text-primary">
            {project.productionLine}
          </p>
        )}

        {project.metrics && (
          <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg">
            {project.metrics.map((metric) => (
              <div key={metric.label}>
                <div className="text-xl md:text-2xl font-bold text-text-primary">
                  {metric.value}
                </div>
                <div className="text-xs text-text-muted mt-1">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {project.architecture && (
          <div className="mt-6">
            <div className="text-xs font-medium uppercase tracking-widest text-text-muted mb-3">
              {copy.ui.journey}
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {project.architecture.map((step, i) => (
                <span key={step} className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary">{step}</span>
                  {i < project.architecture!.length - 1 && (
                    <span className="text-text-muted" aria-hidden="true">
                      →
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>

        <div className="mt-5 text-sm font-medium text-accent group-hover:text-accent-hover transition-colors duration-[var(--duration-fast)]">
          {copy.ui.readCaseStudy}
        </div>
      </Link>
    </motion.article>
  );
}
