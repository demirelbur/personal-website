import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ResearchPageClient } from "@/components/ResearchPageClient";
import { copy } from "@/content/copy";

export const metadata = {
  title: "Research & Publications",
  description:
    "25+ peer-reviewed papers and 15+ patents in reinforcement learning, control systems, RAN optimization, and production ML. 700+ citations.",
};

export default function ResearchPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <SectionHeading
          title={copy.pages.research.title}
          subtitle={copy.pages.research.subtitle}
        />

        <ResearchPageClient />

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-lg font-semibold text-text-primary">
            From papers to production systems
          </h2>
          <p className="mt-2 text-sm text-text-secondary max-w-lg mx-auto">
            Explore how my research connects to deployed ML systems, distributed
            RL platforms, and autonomous network intelligence.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button href="/projects">View Projects</Button>
            <Button href="/blog" variant="secondary">
              Read Blog
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
