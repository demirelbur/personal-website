"use client";

import { motion } from "framer-motion";
import { staggeredFadeInUp } from "@/lib/motion";
import type { Publication } from "@/content/publications";

interface PublicationItemProps {
  publication: Publication;
  index?: number;
  showAuthors?: boolean;
}

export function PublicationItem({
  publication,
  index = 0,
  showAuthors = false,
}: PublicationItemProps) {
  return (
    <motion.a
      href={publication.link}
      {...staggeredFadeInUp(index * 0.06)}
      className="flex items-center justify-between gap-4 p-5 rounded-[var(--radius-md)] border border-border bg-bg-primary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 group"
    >
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-medium text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)]">
          {publication.title}
        </h3>
        {showAuthors && (
          <p className="mt-1 text-xs text-text-muted truncate">
            {publication.authors}
          </p>
        )}
        <p className="mt-1 text-xs text-text-muted line-clamp-1">
          {publication.summary}
        </p>
      </div>
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs font-medium text-accent bg-accent-soft px-2 py-1 rounded-[var(--radius-sm)]">
          {publication.venue}
        </span>
        <span className="text-xs text-text-muted">{publication.year}</span>
        <span className="text-accent">→</span>
      </div>
    </motion.a>
  );
}
