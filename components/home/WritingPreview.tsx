"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { posts } from "@/content/writing";
import { copy } from "@/content/copy";
import { staggeredFadeInUp } from "@/lib/motion";

export function WritingPreview() {
  return (
    <Section id="writing">
      <SectionHeading
        title={copy.sections.writing.title}
        subtitle={copy.sections.writing.subtitle}
      />
      {/* Mobile: show 2 posts */}
      <div className="space-y-3 md:hidden">
        {posts.slice(0, 2).map((post, i) => (
          <motion.div key={post.slug} {...staggeredFadeInUp(i * 0.06)}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group p-4 rounded-[var(--radius-md)] border border-border hover:bg-bg-secondary transition-all duration-[var(--duration-base)] ease-[var(--ease-out)]"
            >
              <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
                {post.title}
              </h3>
              <p className="mt-1 text-xs text-text-muted line-clamp-1">
                {post.excerpt}
              </p>
              <span className="mt-2 inline-block text-xs font-medium text-accent">
                {post.readTime}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
      {/* Desktop: show all */}
      <div className="hidden md:block space-y-4">
        {posts.map((post, i) => (
          <motion.div key={post.slug} {...staggeredFadeInUp(i * 0.06)}>
            <Link
              href={`/blog/${post.slug}`}
              className="block group p-5 rounded-[var(--radius-md)] border border-border hover:bg-bg-secondary transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
                    {post.title}
                  </h3>
                  <p className="mt-1 text-xs text-text-muted line-clamp-1">
                    {post.excerpt}
                  </p>
                </div>
                <span className="text-xs text-text-muted whitespace-nowrap shrink-0">
                  {post.readTime}
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="mt-8">
        <Button href="/blog" variant="text">
          {copy.sections.writing.viewAll}
        </Button>
      </div>
    </Section>
  );
}
