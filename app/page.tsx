import { ExperienceSection } from "@/components/home/experience-section";
import { FaqSection } from "@/components/home/faq-section";
import { HeroSection } from "@/components/home/hero-section";
import { LeadSection } from "@/components/home/lead-section";
import { MetricsStrip } from "@/components/home/metrics-strip";
import { ProcessSection } from "@/components/home/process-section";
import { ProgramsSection } from "@/components/home/programs-section";
import { ValuePillarsSection } from "@/components/home/value-pillars-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MetricsStrip />
      <ValuePillarsSection />
      <ProgramsSection />
      <ExperienceSection />
      <ProcessSection />
      <LeadSection />
      <FaqSection />
    </>
  );
}

