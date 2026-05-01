import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export const metadata = {
  title: `Projects — ${profile.name}`,
};

export default function ProjectsPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <SectionHeading
          title={copy.pages.projects.title}
          subtitle={copy.pages.projects.subtitle}
        />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>
    </div>
  );
}
