import { Container } from "@/components/ui/container";
import { FeatureCard } from "@/components/ui/feature-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { pillars } from "@/lib/site-content";

export function ValuePillarsSection() {
  return (
    <section className="section-space" id="valor">
      <Container>
        <SectionHeading
          description="El rediseño prioriza una lectura institucional confiable, una arquitectura orientada a aspirantes y una base reusable para las siguientes páginas."
          eyebrow="Principios de la Fase 1"
          title="Una home que comunica mejor y prepara el crecimiento del sitio."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FeatureCard
              key={pillar.id}
              description={pillar.description}
              index={`0${index + 1}`}
              support={pillar.support}
              title={pillar.title}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

