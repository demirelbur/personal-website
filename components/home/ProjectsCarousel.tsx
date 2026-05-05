"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { projects } from "@/content/projects";
import type { Project } from "@/content/projects";
import { copy } from "@/content/copy";

const carouselProjects = projects.filter((p) => p.featured || p.flagship);

function CarouselCard({ project }: { project: Project }) {
  const tags = project.tech.slice(0, 4);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block group h-full"
    >
      <div className="h-full p-8 md:p-10 rounded-[var(--radius-lg)] border border-border bg-bg-secondary hover:bg-bg-elevated transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] flex flex-col">
        {/* Category meta */}
        {project.category && (
          <p className="text-[10px] font-medium text-text-muted uppercase tracking-[0.15em] mb-4">
            {project.category}
          </p>
        )}

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)] leading-tight">
          {project.title}
        </h3>

        {/* Divider */}
        <div className="mt-5 mb-5 h-px bg-border" />

        {/* Summary metrics row */}
        {project.summaryMetrics && (
          <div className="flex gap-6 md:gap-8 mb-5">
            {project.summaryMetrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-[10px] font-medium text-text-muted uppercase tracking-widest mb-1">
                  {metric.label}
                </span>
                <span className="text-sm font-medium text-text-primary">
                  {metric.value}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Accent bar */}
        <div className="h-0.5 w-16 bg-accent rounded-full opacity-60 mb-5" />

        {/* Description */}
        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[10px] text-text-muted bg-bg-elevated px-2 py-0.5 rounded-[var(--radius-sm)] border border-border"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Takeaway */}
        <div className="mt-auto pt-3 border-t border-border">
          <p className="text-xs text-text-muted leading-relaxed">
            {project.takeaway || project.outcome}
          </p>
        </div>
      </div>
    </Link>
  );
}

function ArrowButton({
  direction,
  onClick,
  disabled,
}: {
  direction: "left" | "right";
  onClick: () => void;
  disabled: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={`${direction === "left" ? "Previous" : "Next"} project`}
      className="w-10 h-10 rounded-full border border-border bg-bg-secondary hover:bg-bg-elevated disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-[var(--duration-fast)] cursor-pointer"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-text-secondary"
      >
        {direction === "left" ? (
          <polyline points="15 18 9 12 15 6" />
        ) : (
          <polyline points="9 6 15 12 9 18" />
        )}
      </svg>
    </button>
  );
}

export function ProjectsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const scrollToIndex = useCallback((index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-card]");
    if (cards[index]) {
      const card = cards[index];
      const offset = card.offsetLeft - container.offsetLeft;
      container.scrollTo({ left: offset, behavior: "smooth" });
    }
    setActiveIndex(index);
  }, []);

  const handlePrev = useCallback(() => {
    if (activeIndex > 0) scrollToIndex(activeIndex - 1);
  }, [activeIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex < carouselProjects.length - 1)
      scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const handleScroll = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const cards = container.querySelectorAll<HTMLElement>("[data-card]");
    let closestIndex = 0;
    let closestDistance = Infinity;
    cards.forEach((card, i) => {
      const distance = Math.abs(
        card.offsetLeft - container.scrollLeft - container.offsetLeft
      );
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });
    setActiveIndex(closestIndex);
  }, []);

  // Touch/mouse drag
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current.offsetLeft || 0);
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  // Keyboard
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handlePrev, handleNext]);

  return (
    <Section id="projects">
      <div className="flex items-end justify-between">
        <div className="mb-8">
          <h2 className="text-2xl md:text-[40px] md:leading-[48px] font-semibold tracking-tight text-text-primary">
            {copy.sections.projects.title}
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            {copy.sections.projects.subtitle}
          </p>
        </div>
        <div className="hidden md:flex items-center gap-2 mb-8">
          <ArrowButton
            direction="left"
            onClick={handlePrev}
            disabled={activeIndex === 0}
          />
          <ArrowButton
            direction="right"
            onClick={handleNext}
            disabled={activeIndex === carouselProjects.length - 1}
          />
        </div>
      </div>

      {/* Carousel track */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-4 px-4 md:-mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        role="region"
        aria-label="Projects carousel"
      >
        {carouselProjects.map((project) => (
          <div
            key={project.slug}
            data-card
            className="w-[85vw] md:w-[560px] lg:w-[620px] shrink-0 snap-start"
          >
            <CarouselCard project={project} />
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          {carouselProjects.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to project ${i + 1}`}
              className={`text-xs font-mono transition-colors duration-[var(--duration-fast)] cursor-pointer ${
                i === activeIndex
                  ? "text-accent"
                  : "text-text-muted hover:text-text-secondary"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>

        {/* Mobile arrows */}
        <div className="flex md:hidden items-center gap-2">
          <ArrowButton
            direction="left"
            onClick={handlePrev}
            disabled={activeIndex === 0}
          />
          <ArrowButton
            direction="right"
            onClick={handleNext}
            disabled={activeIndex === carouselProjects.length - 1}
          />
        </div>
      </div>
    </Section>
  );
}
