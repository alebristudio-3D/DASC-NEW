import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { hyflexPoints } from "@/lib/site-content";

export function HyflexSection() {
  return (
    <section className="section-space py-16 md:py-24" id="hyflex">
      <Container className="grid gap-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <SectionHeading
            eyebrow="Modelo HyFlex"
            title="Flexibilidad real para estudiar sin perder continuidad."
            description="DASC presenta el modelo HyFlex como una ventaja clara: una experiencia más adaptable al contexto del aspirante, con acompañamiento y estructura."
          />
        </div>

        <div className="surface-panel grid gap-5 p-6 md:grid-cols-[1fr_0.88fr] md:p-8">
          <div className="space-y-4">
            {hyflexPoints.map((point) => (
              <article
                key={point}
                className="rounded-[1.4rem] border border-white/[0.08] bg-white/[0.04] p-4"
              >
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </article>
            ))}
          </div>

          <div className="glass-card rounded-[1.6rem] p-5">
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
              Visualización simple
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Una modalidad que se explica fácil.
            </h3>
            <div className="mt-6 space-y-3">
              <div className="rounded-[1.15rem] border border-cyan-300/15 bg-cyan-300/10 px-4 py-3">
                <p className="text-sm font-semibold text-white">Campus</p>
                <p className="mt-1 text-xs text-cyan-100">
                  Presencia, comunidad y seguimiento.
                </p>
              </div>
              <div className="rounded-[1.15rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                <p className="text-sm font-semibold text-white">Digital</p>
                <p className="mt-1 text-xs text-slate-300">
                  Continuidad y flexibilidad según tu contexto.
                </p>
              </div>
              <div className="rounded-[1.15rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                <p className="text-sm font-semibold text-white">Acompañamiento</p>
                <p className="mt-1 text-xs text-slate-300">
                  Guía clara para no avanzar con dudas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

