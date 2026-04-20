import { AdmissionsProcessSection } from "@/components/home/admissions-process-section";
import { FeaturedProgramsSection } from "@/components/home/featured-programs-section";
import { FinalCtaSection } from "@/components/home/final-cta-section";
import { HeroSection } from "@/components/home/hero-section";
import { HyflexSection } from "@/components/home/hyflex-section";
import { OfferSection } from "@/components/home/offer-section";
import { TestimonialsSection } from "@/components/home/testimonials-section";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhyDascSection } from "@/components/home/why-dasc-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustStrip />
      <OfferSection />
      <HyflexSection />
      <WhyDascSection />
      <FeaturedProgramsSection />
      <TestimonialsSection />
      <AdmissionsProcessSection />
      <FinalCtaSection />
    </>
  );
}
