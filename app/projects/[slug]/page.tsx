import Link from "next/link";
import { notFound } from "next/navigation";
import { Section } from "@/components/layout/Section";
import { Badge } from "@/components/ui/Badge";
import { projects } from "@/content/projects";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return { title: `${project.title} — ${profile.name}` };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const labels = copy.pages.projectDetail.labels;

  return (
    <div className="pt-[72px]">
      <Section>
        <article className="max-w-2xl">
          <Link
            href="/projects"
            className="inline-flex items-center text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-[var(--duration-fast)] mb-8"
          >
            {copy.nav.backToProjects}
          </Link>

          <h1 className="text-[36px] md:text-[40px] md:leading-[48px] font-bold tracking-tight">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-text-secondary leading-relaxed">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Badge key={t} label={t} />
            ))}
          </div>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
                {labels.problem}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
                {labels.solution}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div>
              <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
                {labels.impact}
              </h2>
              <p className="text-accent font-medium text-lg">
                {project.outcome}
              </p>
            </div>

            {project.links && project.links.length > 0 && (
              <div>
                <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
                  {copy.pages.projectDetail.labels.links}
                </h2>
                <ul className="space-y-2">
                  {project.links.map((link) => (
                    <li key={link.url}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-text-secondary hover:text-accent transition-colors duration-[var(--duration-fast)]"
                      >
                        {link.label} <span className="text-accent">→</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </article>
      </Section>
    </div>
  );
}
