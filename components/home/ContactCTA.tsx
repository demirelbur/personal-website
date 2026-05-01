"use client";

import { Section } from "@/components/layout/Section";
import { FadeIn } from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";

export function ContactCTA() {
  return (
    <Section id="contact">
      <FadeIn>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl md:text-[40px] md:leading-[48px] font-semibold tracking-tight text-text-primary">
            {copy.sections.contact.title}
          </h2>
          <p className="mt-4 text-text-secondary">
            {copy.sections.contact.subtitle}
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Button href={`mailto:${profile.email}`}>
              {copy.sections.contact.cta}
            </Button>
            <Button href="/projects" variant="secondary">
              {copy.sections.contact.ctaSecondary}
            </Button>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
