import { Hero } from "@/components/home/Hero";
import { SelectedProjects } from "@/components/home/SelectedProjects";
import { ResearchPreview } from "@/components/home/ResearchPreview";
import { WritingPreview } from "@/components/home/WritingPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <ResearchPreview />
      <WritingPreview />
      <AboutPreview />
      <ContactCTA />
    </>
  );
}
