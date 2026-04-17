import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProcessStepCard } from "@/components/ui/process-step-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { processSteps } from "@/lib/site-content";

export function ProcessSection() {
  return (
    <section className="section-space" id="proceso">
      <Container>
        <SectionHeading
          description="La home no solo informa: ordena el recorrido ideal para un aspirante desde la exploración inicial hasta el primer contacto de seguimiento."
          eyebrow="Proceso para aspirantes"
          title="Una narrativa simple para pasar de la curiosidad a la acción."
        />

        <div className="mt-12 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <ProcessStepCard key={step.step} step={step} />
            ))}
          </div>

          <aside className="surface-panel flex flex-col justify-between p-6 md:p-8">
            <div>
              <p className="eyebrow">Siguiente paso</p>
              <h3 className="text-3xl font-semibold text-white">
                Cuando el interés aparece, la interfaz ya tiene una salida clara.
              </h3>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                El objetivo de esta fase no es saturar con más rutas, sino
                ofrecer una sola acción valiosa: solicitar orientación para dar
                continuidad a la conversación con un aspirante real.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row xl:flex-col">
              <ButtonLink href="#orientacion" size="lg">
                Ir a orientación
              </ButtonLink>
              <ButtonLink href="#faq" size="lg" variant="secondary">
                Resolver preguntas
              </ButtonLink>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}

