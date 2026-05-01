"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { FeaturedProject } from "@/components/ui/FeaturedProject";
import { Button } from "@/components/ui/Button";
import { projects } from "@/content/projects";
import { copy } from "@/content/copy";

export function SelectedProjects() {
  const flagship = projects.find((p) => p.flagship);
  const featured = projects.filter((p) => p.featured && !p.flagship);

  return (
    <Section id="projects">
      <SectionHeading
        title={copy.sections.projects.title}
        subtitle={copy.sections.projects.subtitle}
      />
      {flagship && <FeaturedProject project={flagship} />}
      <div className="grid md:grid-cols-2 gap-6">
        {featured.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
      <div className="mt-8">
        <Button href="/projects" variant="text">
          {copy.sections.projects.viewAll}
        </Button>
      </div>
    </Section>
  );
}
