import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const highlights = [
  "Oferta académica visible desde el primer bloque",
  "Jerarquía clara para aspirantes y familias",
  "Conversión directa a orientación personalizada",
];

export function HeroSection() {
  return (
    <section className="section-space relative overflow-hidden" id="top">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="eyebrow">Rediseño web DASC · Fase 1</p>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl lg:text-7xl">
            Educación superior con lenguaje tecnológico y enfoque serio para
            quienes aún están decidiendo su ruta.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
            Esta primera versión funcional reorganiza la entrada principal de
            DASC para que el aspirante entienda qué puede estudiar, por qué DASC
            es relevante y cómo avanzar sin fricción hacia una conversación de
            orientación.
          </p>

          <ul className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4"
              >
                <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#orientacion" size="lg">
              Solicitar orientación
            </ButtonLink>
            <ButtonLink href="#oferta" size="lg" variant="secondary">
              Ver oferta académica
            </ButtonLink>
          </div>
        </div>

        <div className="surface-panel relative overflow-hidden p-6 md:p-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-12 top-0 h-36 rounded-full bg-cyan-300/10 blur-3xl"
          />
          <div className="relative flex items-center justify-between rounded-2xl border border-white/10 bg-slate-950/45 px-4 py-3 text-xs uppercase tracking-[0.28em] text-slate-400">
            <span>Experiencia del aspirante</span>
            <span>Home funcional</span>
          </div>

          <div className="relative mt-6 rounded-[1.75rem] border border-white/10 bg-slate-950/70 p-6">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Ruta de decisión
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Oferta, contexto y siguiente paso
                </h2>
              </div>
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                Aspirantes
              </span>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Qué ofrece DASC
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Seis rutas académicas para tecnología, diseño, operación y
                  negocio.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                  Qué necesita saber el aspirante
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Cómo comparar opciones y cuándo pedir acompañamiento.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/10 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-cyan-100">
                    Señal institucional
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">
                    Visual sobrio con detalles tecnológicos.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-500">
                    Conversión
                  </p>
                  <p className="mt-2 text-base font-semibold text-white">
                    CTA persistente a orientación.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

