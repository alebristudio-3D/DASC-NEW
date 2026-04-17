import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiencePoints, trustSignals } from "@/lib/site-content";

export function ExperienceSection() {
  return (
    <section className="section-space" id="modelo">
      <Container className="grid gap-8 lg:grid-cols-[1fr_0.95fr]">
        <div>
          <SectionHeading
            description="La interfaz se apoya en un sistema visual consistente para presentar a DASC como una institución actual, ordenada y preparada para acompañar decisiones relevantes."
            eyebrow="Modelo DASC"
            title="Tecnología visual, rigor institucional y experiencia pensada para convertir interés en confianza."
          />
        </div>

        <div className="surface-panel p-6 md:p-8">
          <div className="space-y-6">
            {experiencePoints.map((item) => (
              <article
                key={item.title}
                className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>

      <Container className="mt-8">
        <div className="surface-panel grid gap-6 p-6 md:grid-cols-[0.9fr_1.1fr] md:p-8">
          <div>
            <p className="eyebrow">Señales de confianza</p>
            <h3 className="text-2xl font-semibold text-white md:text-3xl">
              El sistema base ya queda listo para crecer a páginas internas.
            </h3>
          </div>
          <ul className="grid gap-4 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <li
                key={signal}
                className="rounded-[1.5rem] border border-cyan-300/15 bg-cyan-300/10 p-4 text-sm leading-7 text-cyan-50"
              >
                {signal}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

