import { FeatureCard } from "@/components/ui/feature-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { whyDascPoints } from "@/lib/site-content";

export function WhyDascSection() {
  return (
    <section className="section-space py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Por qué DASC"
          title="Una experiencia más clara, más actual y más fácil de convertir."
          description="El objetivo no es solo verse mejor. La home debe ayudar a entender, generar confianza y empujar al siguiente paso con menos fricción."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {whyDascPoints.map((item, index) => (
            <FeatureCard
              key={item.id}
              index={`0${index + 1}`}
              title={item.title}
              description={item.description}
              support={item.support}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

