import Image from "next/image";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { experience, education } from "@/content/experience";
import { copy } from "@/content/copy";

export const metadata = {
  title: `About — ${profile.name}`,
};

export default function AboutPage() {
  const labels = copy.pages.about.labels;

  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-2xl">
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

          <div className="space-y-4 text-text-secondary leading-relaxed">
            {profile.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
              {labels.focusAreas}
            </h2>
            <ul className="space-y-2 text-text-secondary text-sm">
              {profile.focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-6">
              {labels.experience}
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
                    <span className="text-xs text-text-muted">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    {exp.company}, {exp.location}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-text-muted">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-6">
              {labels.education}
            </h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div
                  key={`${edu.institution}-${edu.period}`}
                  className="p-5 rounded-[var(--radius-md)] border border-border bg-bg-secondary"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-sm font-medium text-text-primary">
                      {edu.degree}
                    </h3>
                    <span className="text-xs text-text-muted">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-secondary mt-1">
                    {edu.institution}, {edu.location}
                  </p>
                  {edu.detail && (
                    <p className="text-xs text-text-muted mt-1 italic">
                      {edu.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12">
            <Button href={`mailto:${profile.email}`}>
              {copy.sections.contact.cta}
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
