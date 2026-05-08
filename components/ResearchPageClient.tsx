"use client";

import { useState } from "react";
import { PublicationItem, BookItem } from "@/components/ui/PublicationItem";
import { publications, book } from "@/content/publications";
import { copy } from "@/content/copy";

type FilterType = "all" | "book" | "preprint" | "techreport" | "journal" | "conference" | "patent";

const filters: { label: string; value: FilterType }[] = [
  { label: "All", value: "all" },
  { label: "Books", value: "book" },
  { label: "Preprints", value: "preprint" },
  { label: "Technical Reports", value: "techreport" },
  { label: "Journal Publications", value: "journal" },
  { label: "Conference Papers", value: "conference" },
  { label: "Patents", value: "patent" },
];

export function ResearchPageClient() {
  const [active, setActive] = useState<FilterType>("all");

  const categories = copy.pages.research.categories;

  const journals = publications.filter((p) => p.type === "journal");
  const conferences = publications.filter((p) => p.type === "conference");
  const preprints = publications.filter((p) => p.type === "preprint");
  const techreports = publications.filter((p) => p.type === "techreport");
  const patents = publications.filter((p) => p.type === "patent");

  const showBook = active === "all" || active === "book";
  const showPreprints = (active === "all" || active === "preprint") && preprints.length > 0;
  const showTechreports = (active === "all" || active === "techreport") && techreports.length > 0;
  const showJournals = (active === "all" || active === "journal") && journals.length > 0;
  const showConferences = (active === "all" || active === "conference") && conferences.length > 0;
  const showPatents = (active === "all" || active === "patent") && patents.length > 0;

  const hasResults = showBook || showPreprints || showTechreports || showJournals || showConferences || showPatents;

  return (
    <>
      {/* Filter chips */}
      <div className="flex flex-wrap gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f.value}
            type="button"
            onClick={() => setActive(f.value)}
            aria-pressed={active === f.value}
            className={`px-3.5 py-1.5 text-xs font-medium rounded-[var(--radius-sm)] border transition-colors duration-[var(--duration-fast)] cursor-pointer ${
              active === f.value
                ? "bg-accent text-white border-accent"
                : "text-text-muted border-border hover:text-text-primary hover:border-text-muted"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Filtered content */}
      {!hasResults && (
        <p className="text-sm text-text-muted py-8">
          No research items found for this category.
        </p>
      )}

      {showBook && (
        <div className="mb-10">
          <h3 className="text-xs font-medium text-text-muted uppercase tracking-widest mb-4">
            {categories.book}
          </h3>
          <BookItem book={book} />
        </div>
      )}

      {showPreprints && (
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

      {showTechreports && (
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

      {showJournals && (
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

      {showConferences && (
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

      {showPatents && (
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
    </>
  );
}
