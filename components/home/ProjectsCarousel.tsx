"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { copy } from "@/content/copy";

interface CarouselCardContent {
  category: string;
  title: string;
  thesis: string;
  constraint: string;
  system: string;
  impact: string;
  description: string;
  chips: string[];
  outcome: string;
  href: string;
}

const carouselContent: CarouselCardContent[] = [
  {
    category: "PROJECT / TELECOM AI",
    title: "AI-Native Link Adaptation",
    thesis: "Production AI for real-time 5G link adaptation under baseband latency constraints.",
    constraint: "sub-30μs baseband inference",
    system: "Distilled RL/GNN inference pipeline",
    impact: "+20% throughput\n+10% spectral efficiency",
    description: "Deployed AI-native link adaptation from research prototype to production-facing RAN optimization.",
    chips: ["PyTorch", "GNNs", "Policy Distillation", "ONNX"],
    outcome: "Tier‑1 operator deployment",
    href: "/projects/ai-native-link-adaptation",
  },
  {
    category: "PROJECT / RL SYSTEMS",
    title: "High-Throughput Distributed RL Training System",
    thesis: "Scalable RL infrastructure for large-scale experience generation and policy optimization.",
    constraint: "100+ distributed actors",
    system: "Distributed CPU/GPU RL pipeline",
    impact: "20× faster training",
    description: "Built a high-throughput actor–replay–learner architecture for reproducible large-scale RL experimentation.",
    chips: ["PyTorch RPC", "Redis", "ZeroMQ", "HPC"],
    outcome: "20× faster training across 100+ actors",
    href: "/projects/distributed-rl-training",
  },
  {
    category: "PROJECT / AGENTIC AI",
    title: "Agentic AI for Autonomous Networks",
    thesis: "Intent-driven agentic AI that translates high-level network intents into closed-loop control actions.",
    constraint: "Conflicting network intents",
    system: "Interpreter + optimizer + MO-RL",
    impact: "Pareto-aware control",
    description: "Connected LLM intent interpretation, optimization-based preference derivation, and multi-objective RL control.",
    chips: ["LLMs", "Agentic AI", "Intent-Based Networking", "Multi-Objective RL"],
    outcome: "Intent-to-action automation for autonomous networks",
    href: "/projects/agentic-ai-networks",
  },
  {
    category: "PROJECT / AGENTIC COMMERCE",
    title: "Agentic Product Recommendation System",
    thesis: "Conversational product discovery with grounded retrieval and structured validation.",
    constraint: "Grounded product attributes",
    system: "RAG + structured validation",
    impact: "Zero hallucinated attributes",
    description: "Built a multi-agent recommendation workflow for reliable product discovery with verified attributes.",
    chips: ["FastAPI", "ChromaDB", "Pydantic", "RAG"],
    outcome: "Reliable conversational recommendations with verified attributes",
    href: "/projects/agentic-recommendation",
  },
];

function MobileProjectCard({ card }: { card: CarouselCardContent }) {
  return (
    <Link href={card.href} className="block group">
      <div className="p-5 rounded-[var(--radius-lg)] border border-border bg-bg-secondary hover:border-accent/30 transition-all duration-[var(--duration-base)]">
        <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em] mb-2">
          {card.category}
        </p>
        <h3 className="text-base font-semibold text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)] leading-tight">
          {card.title}
        </h3>
        <p className="mt-2 text-xs text-text-secondary leading-relaxed">
          {card.thesis}
        </p>
        {/* Compact metrics */}
        <div className="mt-3 flex gap-4">
          <div>
            <span className="text-[9px] font-medium text-text-muted uppercase tracking-widest">Impact</span>
            <p className="text-xs font-semibold text-accent whitespace-pre-line leading-snug mt-0.5">{card.impact}</p>
          </div>
        </div>
        <span className="mt-3 inline-block text-xs font-medium text-accent">
          View project →
        </span>
      </div>
    </Link>
  );
}

function ShowcaseCard({ card }: { card: CarouselCardContent }) {
  return (
    <Link href={card.href} className="block group h-full">
      <div className="h-full p-8 md:p-10 rounded-[var(--radius-lg)] border border-border bg-bg-secondary hover:border-accent/30 transition-all duration-[var(--duration-base)] ease-[var(--ease-out)] flex flex-col relative overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[600px] h-[300px] bg-accent/[0.03] rounded-full blur-3xl pointer-events-none" />

        {/* Category */}
        <p className="text-[10px] font-semibold text-accent uppercase tracking-[0.15em] mb-3 relative">
          {card.category}
        </p>

        {/* Title */}
        <h3 className="text-xl md:text-2xl font-semibold text-text-primary group-hover:text-accent transition-colors duration-[var(--duration-fast)] leading-tight relative">
          {card.title}
        </h3>

        {/* Thesis */}
        <p className="mt-2 text-sm text-text-secondary leading-relaxed relative">
          {card.thesis}
        </p>

        {/* Metric row */}
        <div className="mt-6 relative">
          <div className="grid grid-cols-3 gap-4 pb-4 border-b border-border">
            <div>
              <span className="text-[9px] font-medium text-text-muted uppercase tracking-widest">Constraint</span>
              <p className="text-[13px] font-semibold text-text-primary mt-1 leading-snug">{card.constraint}</p>
            </div>
            <div>
              <span className="text-[9px] font-medium text-text-muted uppercase tracking-widest">System</span>
              <p className="text-[13px] font-semibold text-text-primary mt-1 leading-snug">{card.system}</p>
            </div>
            <div>
              <span className="text-[9px] font-medium text-text-muted uppercase tracking-widest">Impact</span>
              <p className="text-[13px] font-bold text-accent mt-1 whitespace-pre-line leading-snug">{card.impact}</p>
            </div>
          </div>
          {/* Accent line under metric row */}
          <div className="absolute bottom-0 right-0 w-24 h-[2px] bg-accent/40 rounded-full" />
        </div>

        {/* Description */}
        <p className="mt-5 text-sm text-text-secondary leading-relaxed flex-1 relative">
          {card.description}
        </p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mt-4 relative">
          {card.chips.map((chip) => (
            <span
              key={chip}
              className="text-[10px] text-text-muted px-2 py-0.5 rounded-[var(--radius-sm)] border border-border bg-bg-primary"
            >
              {chip}
            </span>
          ))}
        </div>

        {/* Outcome + CTA */}
        <div className="mt-5 pt-4 border-t border-border flex items-center justify-between relative">
          <p className="text-xs text-text-muted leading-relaxed">
            {card.outcome}
          </p>
          <span className="text-xs font-medium text-accent shrink-0 ml-4">
            View project →
          </span>
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
      className="w-10 h-10 rounded-full border border-border bg-bg-secondary hover:bg-bg-elevated hover:border-accent/30 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition-colors duration-[var(--duration-fast)] cursor-pointer"
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
  const hasDragged = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);
  const rafId = useRef(0);

  useEffect(() => {
    return () => cancelAnimationFrame(rafId.current);
  }, []);

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
    if (activeIndex < carouselContent.length - 1)
      scrollToIndex(activeIndex + 1);
  }, [activeIndex, scrollToIndex]);

  const handleScroll = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
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
    });
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    isDragging.current = true;
    hasDragged.current = false;
    const rect = scrollRef.current?.getBoundingClientRect();
    startX.current = e.pageX - (rect?.left ?? 0);
    scrollLeftPos.current = scrollRef.current?.scrollLeft || 0;
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    const rect = scrollRef.current.getBoundingClientRect();
    const x = e.pageX - rect.left;
    const delta = Math.abs(x - startX.current);
    if (delta < 5) return;
    hasDragged.current = true;
    e.preventDefault();
    const walk = (x - startX.current) * 1.2;
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
  }, []);

  const handleClickCapture = useCallback((e: React.MouseEvent) => {
    if (hasDragged.current) {
      e.preventDefault();
      e.stopPropagation();
      hasDragged.current = false;
    }
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        handlePrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        handleNext();
      }
    },
    [handlePrev, handleNext]
  );

  return (
    <Section id="projects">
      <div className="flex items-end justify-between">
        <div className="mb-5 md:mb-8">
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
            disabled={activeIndex === carouselContent.length - 1}
          />
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="md:hidden space-y-4">
        {carouselContent.slice(0, 3).map((card) => (
          <MobileProjectCard key={card.href} card={card} />
        ))}
        <div className="pt-2">
          <Button href="/projects" variant="text">
            {copy.sections.projects.viewAll}
          </Button>
        </div>
      </div>

      {/* Desktop: Carousel track */}
      <div
        ref={scrollRef}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={handleScroll}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onClickCapture={handleClickCapture}
        className="hidden md:flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing focus:outline-none focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:rounded-[var(--radius-sm)]"
        role="region"
        aria-label="Projects carousel"
      >
        {carouselContent.map((card) => (
          <div
            key={card.href}
            data-card
            className="w-[660px] lg:w-[740px] shrink-0 snap-start"
          >
            <ShowcaseCard card={card} />
          </div>
        ))}
      </div>

      {/* Desktop: Pagination */}
      <div className="hidden md:flex items-center justify-between mt-6">
        <div className="flex items-center gap-3">
          {carouselContent.map((_, i) => (
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
        <Button href="/projects" variant="text">
          {copy.sections.projects.viewAll}
        </Button>
      </div>
    </Section>
  );
}
