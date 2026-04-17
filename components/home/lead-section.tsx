import { LeadForm } from "@/components/home/lead-form";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

export function LeadSection() {
  return (
    <section className="section-space" id="orientacion">
      <Container className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            description="La conversión principal de esta fase es abrir la puerta a una conversación útil. Por eso el formulario se mantiene simple, visible y contextualizado."
            eyebrow="Orientación"
            title="Un punto de contacto listo para acompañar la decisión del aspirante."
          />

          <div className="surface-panel mt-8 p-6 md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Qué resuelve esta sección
            </p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-slate-300">
              <li>Captura intención sin pedir información innecesaria.</li>
              <li>Permite conectar programa, momento de decisión y necesidad.</li>
              <li>Funciona como base para futuras integraciones con admisiones.</li>
            </ul>
          </div>
        </div>

        <LeadForm />
      </Container>
    </section>
  );
}

