"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { experience } from "@/content/experience";
import { copy } from "@/content/copy";

export function AboutPreview() {
  const latestRole = experience[0];
  const bioParas = profile.bio.split("\n\n").filter((p) => !p.startsWith("#"));

  return (
    <Section id="about" className="bg-bg-secondary">
      <FadeIn>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-[40px] md:leading-[48px] font-semibold tracking-tight text-text-primary">
            {copy.sections.about.title}
          </h2>
          <p className="mt-6 text-text-secondary leading-relaxed">
            {bioParas[0]}
          </p>
          <p className="mt-4 text-text-secondary leading-relaxed">
            {bioParas[1]}
          </p>

          <div className="mt-8 p-4 rounded-[var(--radius-md)] border border-border bg-bg-primary">
            <p className="text-xs text-text-muted uppercase tracking-wide">
              {copy.ui.current}
            </p>
            <p className="mt-1 text-sm font-medium text-text-primary">
              {latestRole.role}
            </p>
            <p className="text-sm text-text-secondary">
              {latestRole.company} · {latestRole.period}
            </p>
          </div>

          <div className="mt-8">
            <Button href="/about" variant="text">
              {copy.sections.about.cta}
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
