import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PublicationItem } from "@/components/ui/PublicationItem";
import { Button } from "@/components/ui/Button";
import { publications } from "@/content/publications";
import { copy } from "@/content/copy";

const featuredTitles = [
  "When AI Has No Time to Think: Inference Under Extreme Latency and Compute Constraints in RANs",
  "From Intents to Actions: Agentic AI in Autonomous Networks",
  "Generalization in Reinforcement Learning for Radio Access Networks",
  "Design Principles for Model Generalization and Scalable AI in Radio Access Networks",
];

export function ResearchPreview() {
  const selected = featuredTitles
    .map((title) => publications.find((p) => p.title === title))
    .filter(Boolean) as typeof publications;

  return (
    <Section id="research" className="bg-bg-secondary">
      <SectionHeading
        title={copy.sections.research.title}
        subtitle={copy.sections.research.subtitle}
      />
      {/* Mobile: show 3 items */}
      <div className="space-y-3 md:hidden">
        {selected.slice(0, 3).map((pub, i) => (
          <PublicationItem key={pub.title} publication={pub} index={i} />
        ))}
      </div>
      {/* Desktop: show all */}
      <div className="hidden md:block space-y-4">
        {selected.map((pub, i) => (
          <PublicationItem key={pub.title} publication={pub} index={i} />
        ))}
      </div>
      <div className="mt-5 md:mt-8">
        <Button href="/research" variant="text">
          {copy.sections.research.viewAll}
        </Button>
      </div>
    </Section>
  );
}
