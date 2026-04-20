import { Container } from "@/components/ui/container";
import { ProcessStepCard } from "@/components/ui/process-step-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-content";

export function AdmissionsProcessSection() {
  return (
    <section className="section-space py-16 md:py-24" id="admision">
      <Container>
        <SectionHeading
          eyebrow="Proceso de admisión"
          title="Un recorrido corto para pasar de la curiosidad a la acción."
          description="La home deja claro cómo avanzar: explorar, resolver dudas y activar el proceso con acompañamiento."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {processSteps.map((step) => (
            <ProcessStepCard key={step.step} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}

