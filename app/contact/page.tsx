import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { SocialIcons } from "@/components/ui/SocialIcons";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export const metadata = {
  title: "Contact",
  description:
    "Get in touch for research collaborations, consulting, or engineering challenges in production RL, agentic AI, and ML infrastructure.",
};

export default function ContactPage() {
  const labels = copy.pages.contact.labels;

  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-2xl">
          <h1 className="text-[36px] md:text-[40px] md:leading-[48px] font-bold tracking-tight">
            {copy.pages.contact.title}
          </h1>

          <p className="mt-6 text-lg text-text-secondary">
            {copy.pages.contact.subtitle}
          </p>

          <div className="mt-12 space-y-8">
            <div>
              <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-3">
                {labels.email}
              </h2>
              <a
                href={`mailto:${profile.email}`}
                className="text-text-primary hover:text-accent transition-colors duration-[var(--duration-fast)]"
              >
                {profile.email}
              </a>
            </div>

            <div>
              <h2 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
                {labels.social}
              </h2>
              <SocialIcons />
            </div>

            <div className="pt-4">
              <Button href={`mailto:${profile.email}`}>
                {copy.pages.contact.cta}
              </Button>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-xs text-text-muted mb-3">
                Not ready to reach out yet? Explore my work first.
              </p>
              <div className="flex gap-4">
                <Link
                  href="/projects"
                  className="text-sm text-accent hover:text-accent-hover transition-colors duration-[var(--duration-fast)]"
                >
                  View Projects →
                </Link>
                <Link
                  href="/research"
                  className="text-sm text-accent hover:text-accent-hover transition-colors duration-[var(--duration-fast)]"
                >
                  Read Research →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
