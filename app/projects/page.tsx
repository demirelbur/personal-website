import { Section } from "@/components/layout/Section";
import { ProjectsPageClient } from "@/components/ProjectsPageClient";

export const metadata = {
  title: "Projects",
  description:
    "Research-to-production AI systems — distributed RL training, AI-native link adaptation, agentic AI for autonomous networks.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        {/* Page header */}
        <div className="mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary tracking-tight">
            Projects
          </h1>
          <p className="mt-3 text-base text-text-secondary max-w-xl">
            Research-to-production AI systems, shown as projects.
          </p>
        </div>

        <ProjectsPageClient />
      </Section>
    </div>
  );
}
