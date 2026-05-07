"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggeredFadeInUp } from "@/lib/motion";
import type { Publication } from "@/content/publications";

interface PublicationItemProps {
  publication: Publication;
  index?: number;
  showAuthors?: boolean;
}

function Chevron({ expanded }: { expanded: boolean }) {
  return (
    <motion.svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-text-muted shrink-0"
      animate={{ rotate: expanded ? 180 : 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
    >
      <polyline points="6 9 12 15 18 9" />
    </motion.svg>
  );
}

function LinkButton({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium text-accent bg-accent-soft rounded-[var(--radius-sm)] hover:bg-accent hover:text-white transition-colors duration-[var(--duration-fast)]"
    >
      {label}
      <span className="text-[9px]">↗</span>
    </a>
  );
}

function CopyButton({ text, label }: { text: string; label: string }) {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.stopPropagation();
        navigator.clipboard.writeText(text);
      }}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-medium text-text-secondary hover:text-text-primary border border-border rounded-[var(--radius-sm)] hover:bg-bg-elevated transition-colors duration-[var(--duration-fast)] cursor-pointer"
    >
      <svg
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
      </svg>
      {label}
    </button>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <span className="text-[11px] text-text-muted w-14 shrink-0">{label}</span>
      <span className="text-[11px] text-text-secondary">{value}</span>
    </div>
  );
}

function ExpandableText({
  text,
  heading,
}: {
  text: string;
  heading: string;
}) {
  const [showFull, setShowFull] = useState(false);
  const isLong = text.length > 400;

  return (
    <div className="mb-3">
      <p className="text-xs font-semibold text-text-primary mb-1.5">
        {heading}:
      </p>
      <p
        className={`text-xs text-text-secondary leading-[1.7] max-w-prose ${
          isLong && !showFull ? "line-clamp-6" : ""
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setShowFull(!showFull);
          }}
          className="mt-2 text-xs font-semibold text-accent hover:text-accent-hover transition-colors duration-[var(--duration-fast)] cursor-pointer"
        >
          {showFull ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}


function getExpandedText(pub: Publication) {
  const isAcademic =
    pub.type === "journal" ||
    pub.type === "conference" ||
    pub.type === "preprint" ||
    pub.type === "techreport";

  if (pub.abstract) {
    return { text: pub.abstract, heading: isAcademic ? "Abstract" : "Description" };
  }
  if (pub.description && pub.description !== pub.summary) {
    return { text: pub.description, heading: isAcademic ? "Abstract" : "Description" };
  }
  return null;
}

export function PublicationItem({
  publication,
  index = 0,
  showAuthors = false,
}: PublicationItemProps) {
  const [expanded, setExpanded] = useState(false);
  const hasExternalLink = publication.link && publication.link !== "#";
  const hasBibtex = !!publication.bibtex;
  const citation = publication.bibtex ?? `${publication.authors}. "${publication.title}." ${publication.venue}, ${publication.year}.`;
  const expandedText = getExpandedText(publication);

  return (
    <motion.div
      {...staggeredFadeInUp(index * 0.06)}
      className="rounded-[var(--radius-md)] border border-border bg-bg-primary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 group"
    >
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 p-4 md:p-5 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] md:text-sm font-semibold md:font-medium text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)] leading-snug">
            {publication.title}
          </h3>
          {showAuthors && (
            <p className="hidden md:block mt-1 text-xs text-text-muted truncate">
              {publication.authors}
            </p>
          )}
          <p className="hidden md:block mt-1 text-xs text-text-muted line-clamp-1">
            {publication.summary}
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <span className="text-[10px] md:text-xs font-medium text-accent bg-accent-soft px-1.5 md:px-2 py-0.5 md:py-1 rounded-[var(--radius-sm)]">
            {publication.venueShort || publication.venue}
          </span>
          <span className="text-[10px] md:text-xs text-text-muted">{publication.year}</span>
          <Chevron expanded={expanded} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mx-5 border-t border-border" />
            <div className="px-5 pt-2.5 pb-3.5">
              {expandedText && (
                <ExpandableText
                  text={expandedText.text}
                  heading={expandedText.heading}
                />
              )}
              <p className="text-[10px] font-medium text-text-secondary uppercase tracking-widest mb-1.5">
                Details
              </p>
              <div className="space-y-1 mb-2.5">
                <DetailRow label="Venue" value={publication.venue} />
                <DetailRow label="Year" value={String(publication.year)} />
                {publication.location && (
                  <DetailRow label="Location" value={publication.location} />
                )}
                {publication.volume && (
                  <DetailRow label="Volume" value={publication.volume} />
                )}
                {publication.pages && (
                  <DetailRow label="Pages" value={publication.pages} />
                )}
                {publication.doi && (
                  <DetailRow label="DOI" value={publication.doi} />
                )}
                <DetailRow label="Authors" value={publication.authors} />
              </div>
              {publication.topics && publication.topics.length > 0 && (
                <div className="mb-2.5">
                  <p className="text-[10px] font-medium text-text-secondary uppercase tracking-widest mb-1.5">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {publication.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] text-text-muted bg-bg-elevated px-2 py-0.5 rounded-[var(--radius-sm)]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                {hasExternalLink && (
                  <LinkButton href={publication.link} label="Publisher page" />
                )}
                {publication.doi && (
                  <LinkButton href={`https://doi.org/${publication.doi}`} label="DOI" />
                )}
                {publication.links?.arxiv && (
                  <LinkButton href={publication.links.arxiv} label="arXiv" />
                )}
                {publication.links?.pdf && (
                  <LinkButton href={publication.links.pdf} label="PDF" />
                )}
                {publication.links?.code && (
                  <LinkButton href={publication.links.code} label="Code" />
                )}
                <CopyButton text={citation} label={hasBibtex ? "Copy BibTeX" : "Copy citation"} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

interface BookItemProps {
  book: {
    title: string;
    authors: string;
    publisher: string;
    year: number;
    isbn: string;
    summary: string;
    description?: string;
    link?: string;
    topics?: string[];
  };
}

export function BookItem({ book }: BookItemProps) {
  const [expanded, setExpanded] = useState(false);
  const hasLink = book.link && book.link !== "#";
  const citation = `${book.authors}. "${book.title}." ${book.publisher}, ${book.year}. ISBN: ${book.isbn}.`;
  const expandedText =
    book.description && book.description !== book.summary
      ? book.description
      : null;

  return (
    <div className="rounded-[var(--radius-md)] border border-border bg-bg-primary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] hover:-translate-y-0.5 group">
      <button
        type="button"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
        className="w-full text-left flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-4 p-4 md:p-5 cursor-pointer"
      >
        <div className="flex-1 min-w-0">
          <h3 className="text-[13px] md:text-sm font-semibold md:font-medium text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)] leading-snug">
            {book.title}
          </h3>
          <p className="mt-1 text-xs text-text-muted truncate">
            {book.authors}
          </p>
          <p className="hidden md:block mt-1 text-xs text-text-muted line-clamp-1">
            {book.summary}
          </p>
        </div>
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <span className="text-[10px] md:text-xs font-medium text-accent bg-accent-soft px-1.5 md:px-2 py-0.5 md:py-1 rounded-[var(--radius-sm)]">
            {book.publisher}
          </span>
          <span className="text-[10px] md:text-xs text-text-muted">{book.year}</span>
          <Chevron expanded={expanded} />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="mx-5 border-t border-border" />
            <div className="px-5 pt-2.5 pb-3.5">
              <p className="text-[10px] font-medium text-text-secondary uppercase tracking-widest mb-1.5">
                Details
              </p>
              {expandedText && (
                <ExpandableText text={expandedText} heading="Description" />
              )}
              <div className="space-y-1 mb-2.5">
                <DetailRow label="ISBN" value={book.isbn} />
                <DetailRow label="Publisher" value={book.publisher} />
                <DetailRow label="Year" value={String(book.year)} />
              </div>
              {book.topics && book.topics.length > 0 && (
                <div className="mb-2.5">
                  <p className="text-[10px] font-medium text-text-secondary uppercase tracking-widest mb-1.5">
                    Topics
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {book.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-[10px] text-text-muted bg-bg-elevated px-2 py-0.5 rounded-[var(--radius-sm)]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-wrap items-center gap-2">
                {hasLink && (
                  <LinkButton href={book.link!} label="View publisher page" />
                )}
                <CopyButton text={citation} label="Copy citation" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
