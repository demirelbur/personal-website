"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "./Badge";
import { copy } from "@/content/copy";
import { viewportFadeInUp } from "@/lib/motion";
import type { Project } from "@/content/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article {...viewportFadeInUp}>
      <Link
        href={`/projects/${project.slug}`}
        className="block group p-6 rounded-[var(--radius-md)] border border-border bg-bg-secondary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[var(--shadow-md)]"
      >
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-[var(--radius-sm)] bg-accent-soft flex items-center justify-center shrink-0">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-accent"
            >
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>

        <div className="mt-4">
          <p className="text-xs text-text-muted">{project.outcome}</p>
        </div>
      </Link>
    </motion.article>
  );
}
