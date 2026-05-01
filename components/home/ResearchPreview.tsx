"use client";

import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationItem } from "@/components/ui/PublicationItem";
import { Button } from "@/components/ui/Button";
import { publications } from "@/content/publications";
import { copy } from "@/content/copy";

export function ResearchPreview() {
  const selected = publications.slice(0, 4);

  return (
    <Section id="research" className="bg-bg-secondary">
      <SectionHeading
        title={copy.sections.research.title}
        subtitle={copy.sections.research.subtitle}
      />
      <div className="space-y-4">
        {selected.map((pub, i) => (
          <PublicationItem key={pub.title} publication={pub} index={i} />
        ))}
      </div>
      <div className="mt-8">
        <Button href="/research" variant="text">
          {copy.sections.research.viewAll}
        </Button>
      </div>
    </Section>
  );
}
