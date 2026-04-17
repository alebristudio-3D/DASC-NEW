import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const highlights = [
  "Programas alineados con el mundo digital",
  "Orientación clara para decidir mejor",
  "Experiencia premium y cercana desde el primer vistazo",
];

const quickSignals = [
  { label: "Programas clave", value: "6 rutas" },
  { label: "Atención inicial", value: "1 conversación" },
  { label: "Tono visual", value: "Tech + institucional" },
];

export function HeroSection() {
  return (
    <section className="section-space relative overflow-hidden pb-28 pt-14 md:pb-32 lg:pt-20" id="top">
      <div
        aria-hidden="true"
        className="hero-orb hero-orb--cyan left-[-6rem] top-10 h-52 w-52 md:h-72 md:w-72"
      />
      <div
        aria-hidden="true"
        className="hero-orb hero-orb--violet right-[2%] top-16 h-64 w-64 md:h-80 md:w-80"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div className="relative">
          <p className="eyebrow">Rediseño DASC · Aspirantes</p>
          <h1 className="max-w-4xl font-display text-5xl leading-[0.96] text-white sm:text-6xl lg:text-[5.5rem]">
            Encuentra tu futuro digital.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:mt-8 md:text-xl">
            Descubre qué programa va contigo y da el siguiente paso con una
            institución que combina visión tecnológica, acompañamiento humano y
            credibilidad académica.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row">
            <ButtonLink href="#orientacion" size="lg">
              Habla con un asesor
            </ButtonLink>
            <ButtonLink href="#oferta" size="lg" variant="secondary">
              Ver programas
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-slate-200 md:mt-10 md:grid-cols-3">
            {highlights.map((item) => (
              <li
                key={item}
                className="glass-card soft-hover rounded-[1.4rem] px-4 py-4"
              >
                <span className="mb-3 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.85)]" />
                <p className="leading-7 text-slate-200">{item}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -right-3 top-6 hidden h-36 w-36 rounded-full bg-violet-500/15 blur-3xl md:block" />
          <div className="absolute left-0 top-16 hidden h-24 w-24 rounded-full bg-cyan-300/15 blur-3xl md:block" />

          <div className="glass-card glow-border animate-float-slow relative overflow-hidden rounded-[2rem] p-4 shadow-[0_30px_120px_rgba(2,6,23,0.5)] md:p-5">
            <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute -right-10 bottom-8 h-28 w-28 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative rounded-[1.6rem] border border-white/10 bg-slate-950/75 p-4 md:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-200">
                    Dashboard de orientación
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    Ruta del aspirante
                  </h2>
                </div>
                <span className="animate-pulse-glow inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  Activo
                </span>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-[1.15fr_0.85fr]">
                <div className="glass-card soft-hover rounded-[1.5rem] p-4 md:p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        Afinidad detectada
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">
                        Tecnología + negocio
                      </p>
                    </div>
                    <div className="rounded-2xl border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-right text-xs text-violet-100">
                      <strong className="block text-lg text-white">92%</strong>
                      match
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                      <span>Progreso de decisión</span>
                      <span>Listo para orientación</span>
                    </div>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[78%] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,1),rgba(139,92,246,0.95))] shadow-[0_0_25px_rgba(34,211,238,0.4)]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3">
                    {quickSignals.map((signal) => (
                      <div
                        key={signal.label}
                        className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3"
                      >
                        <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                          {signal.label}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-white">
                          {signal.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="glass-card soft-hover animate-float-gentle rounded-[1.5rem] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                      Próximo paso
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Hablar con un asesor
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Recibe guía para comparar opciones y resolver dudas.
                    </p>
                  </div>

                  <div className="glass-card soft-hover rounded-[1.5rem] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                        Programas sugeridos
                      </p>
                      <span className="text-xs font-semibold text-violet-200">
                        Top 3
                      </span>
                    </div>
                    <div className="mt-4 space-y-3">
                      <div className="rounded-[1.1rem] border border-cyan-300/15 bg-cyan-300/10 px-4 py-3">
                        <p className="text-sm font-semibold text-white">
                          Ingeniería en Software
                        </p>
                        <p className="mt-1 text-xs text-cyan-100">
                          Producto, lógica y construcción digital
                        </p>
                      </div>
                      <div className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                        <p className="text-sm font-semibold text-white">
                          Sistemas Computacionales
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          Infraestructura y operación tecnológica
                        </p>
                      </div>
                      <div className="rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                        <p className="text-sm font-semibold text-white">
                          Mercadotecnia Digital
                        </p>
                        <p className="mt-1 text-xs text-slate-300">
                          Estrategia, audiencias y crecimiento
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="glass-card soft-hover rounded-[1.4rem] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Señal institucional
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Tecnología visual con credibilidad académica.
                  </p>
                </div>
                <div className="glass-card soft-hover rounded-[1.4rem] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Contacto rápido
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3 rounded-[1.1rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        Atención en minutos
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        CTA persistente en home y móvil.
                      </p>
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgba(34,211,238,1),rgba(139,92,246,0.85))] text-sm font-bold text-slate-950">
                      Go
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
