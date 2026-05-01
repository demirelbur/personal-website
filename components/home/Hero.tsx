"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { CodeBlock } from "@/components/ui/CodeBlock";
import { Container } from "@/components/layout/Container";
import { profile } from "@/content/profile";
import { copy } from "@/content/copy";
import { fadeInUp, fadeIn, ease } from "@/lib/motion";

const codeLines = [
  { content: '<span class="text-accent">agent</span> = <span class="text-text-primary">train</span>(env, policy);', highlight: true },
  { content: '<span class="text-accent">action</span> = agent.<span class="text-text-primary">decide</span>(state);', highlight: true },
  { content: '<span class="text-accent">reward</span> = env.<span class="text-text-primary">step</span>(action);', highlight: true },
  { content: '<span class="text-accent">deploy</span>(agent, <span class="text-text-primary">prod</span>);', highlight: true },
];

export function Hero() {
  return (
    <section className="pt-[128px] pb-12 md:pt-[128px] md:pb-16 lg:pb-24">
      <Container>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7">
            <motion.p
              {...fadeInUp}
              className="text-xs font-medium text-accent tracking-widest uppercase"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.1, ease }}
              className="mt-4 text-[36px] md:text-[40px] lg:text-[64px] lg:leading-[72px] font-bold tracking-tight"
            >
              {profile.headline}{" "}
              <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">{profile.headlineAccent}</span>
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.2, ease }}
              className="mt-6 text-base text-text-secondary leading-relaxed max-w-xl"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              {...fadeInUp}
              transition={{ duration: 0.4, delay: 0.3, ease }}
              className="mt-8 flex gap-4"
            >
              <Button href="/projects">
                {copy.hero.cta.primary} <span className="ml-1">→</span>
              </Button>
              <Button href="/research" variant="secondary">
                {copy.hero.cta.secondary}
              </Button>
            </motion.div>
          </div>

          <motion.div
            {...fadeIn}
            transition={{ duration: 0.6, delay: 0.3, ease }}
            className="hidden md:block md:col-span-5 space-y-4"
          >
            <CodeBlock filename="agent.py" lines={codeLines} />

            <div className="rounded-[var(--radius-md)] border border-border bg-bg-secondary p-6 shadow-[var(--shadow-sm)]">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {profile.stats.papers}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {copy.hero.stats.papers}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {profile.stats.patents}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {copy.hero.stats.patents}
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-text-primary">
                    {profile.stats.citations}
                  </div>
                  <div className="text-xs text-text-muted mt-1">
                    {copy.hero.stats.citations}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
