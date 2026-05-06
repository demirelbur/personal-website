import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { posts } from "@/content/writing";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export const metadata = {
  title: `Blog — ${profile.name}`,
};

export default function WritingPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <SectionHeading
          title={copy.pages.writing.title}
          subtitle={copy.pages.writing.subtitle}
        />
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block group p-5 rounded-[var(--radius-md)] border border-border hover:bg-bg-secondary transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-medium text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-text-secondary">
                    {post.excerpt}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-text-muted whitespace-nowrap shrink-0">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-lg font-semibold text-text-primary">
            Interested in the systems behind the ideas?
          </h2>
          <p className="mt-2 text-sm text-text-secondary max-w-lg mx-auto">
            These posts connect research concepts to production AI systems,
            reinforcement learning infrastructure, and autonomous network design.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center">
            <Button href="/projects">View Projects</Button>
            <Button href={`mailto:${profile.email}`} variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
