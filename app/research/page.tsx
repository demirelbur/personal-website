import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { PublicationItem, BookItem } from "@/components/ui/PublicationItem";
import { publications, book } from "@/content/publications";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export const metadata = {
  title: `Research — ${profile.name}`,
};

export default function ResearchPage() {
  const journals = publications.filter((p) => p.type === "journal");
  const conferences = publications.filter((p) => p.type === "conference");
  const preprints = publications.filter((p) => p.type === "preprint");
  const techreports = publications.filter((p) => p.type === "techreport");
  const patents = publications.filter((p) => p.type === "patent");

  const categories = copy.pages.research.categories;

  return (
    <div className="pt-[72px]">
      <Section>
        <SectionHeading
          title={copy.pages.research.title}
          subtitle={copy.pages.research.subtitle}
        />

        <div className="mb-10">
          <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
            {categories.book}
          </h3>
          <BookItem book={book} />
        </div>

        {preprints.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
              {categories.preprints}
            </h3>
            <div className="space-y-4">
              {preprints.map((pub, i) => (
                <PublicationItem
                  key={pub.title}
                  publication={pub}
                  index={i}
                  showAuthors
                />
              ))}
            </div>
          </div>
        )}

        {techreports.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
              {categories.techreports}
            </h3>
            <div className="space-y-4">
              {techreports.map((pub, i) => (
                <PublicationItem
                  key={pub.title}
                  publication={pub}
                  index={i}
                  showAuthors
                />
              ))}
            </div>
          </div>
        )}

        {journals.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
              {categories.journal}
            </h3>
            <div className="space-y-4">
              {journals.map((pub, i) => (
                <PublicationItem
                  key={pub.title}
                  publication={pub}
                  index={i}
                  showAuthors
                />
              ))}
            </div>
          </div>
        )}

        {conferences.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
              {categories.conference}
            </h3>
            <div className="space-y-4">
              {conferences.map((pub, i) => (
                <PublicationItem
                  key={pub.title}
                  publication={pub}
                  index={i}
                  showAuthors
                />
              ))}
            </div>
          </div>
        )}

        {patents.length > 0 && (
          <div className="mb-10">
            <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
              {categories.patents}
            </h3>
            <div className="space-y-4">
              {patents.map((pub, i) => (
                <PublicationItem
                  key={pub.title}
                  publication={pub}
                  index={i}
                  showAuthors
                />
              ))}
            </div>
          </div>
        )}

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
