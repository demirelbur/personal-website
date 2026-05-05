import { Hero } from "@/components/home/Hero";
import { ProjectsCarousel } from "@/components/home/ProjectsCarousel";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { WritingPreview } from "@/components/home/WritingPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProjectsCarousel />
      <ResearchPreview />
      <WritingPreview />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
