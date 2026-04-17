import { Container } from "@/components/ui/container";
import { ProgramCard } from "@/components/ui/program-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { programs } from "@/lib/site-content";

export function ProgramsSection() {
  return (
    <section className="section-space" id="oferta">
      <Container>
        <SectionHeading
          description="El contenido mock se mantiene dentro del alcance de esta fase: mostrar la oferta académica principal con mejor legibilidad, contexto y estructura de comparación."
          eyebrow="Oferta académica"
          title="Seis programas para perfiles que quieren entrar al mundo digital desde distintos ángulos."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {programs.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}
