"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ui/ProjectCard";
import {
  projectCards,
  filterCategories,
  type FilterCategory,
} from "@/content/projectCards";

export function ProjectsPageClient() {
  const [active, setActive] = useState<FilterCategory>("All");

  const filtered =
    active === "All"
      ? projectCards
      : projectCards.filter((p) => p.filterCategory === active);

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mt-6">
        {filterCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-[var(--radius-sm)] border transition-colors duration-[var(--duration-fast)] cursor-pointer ${
              active === cat
                ? "bg-accent text-white border-accent"
                : "text-text-muted border-border hover:text-text-primary hover:border-text-muted"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project cards */}
      <div className="space-y-6 mt-8 md:mt-12">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </>
  );
}
