import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

const heroNotes = [
  "Programas para tecnología, diseño y negocio digital",
  "Asesoría clara desde el primer contacto",
  "Modelo actual con enfoque institucional serio",
];

const mockPrograms = [
  { title: "Ingeniería en Software", score: "94%" },
  { title: "Diseño Interactivo", score: "89%" },
  { title: "Mercadotecnia Digital", score: "86%" },
];

export function HeroSection() {
  return (
    <section
      className="section-space relative overflow-hidden pb-24 pt-14 md:pb-28 lg:pt-20"
      id="top"
    >
      <div
        aria-hidden="true"
        className="hero-orb hero-orb--cyan left-[-7rem] top-8 h-56 w-56 md:h-80 md:w-80"
      />
      <div
        aria-hidden="true"
        className="hero-orb hero-orb--violet right-[-4rem] top-12 h-64 w-64 md:h-96 md:w-96"
      />

      <Container className="grid items-center gap-14 lg:grid-cols-[0.98fr_1.02fr] lg:gap-16">
        <div className="relative">
          <p className="eyebrow">Home para aspirantes</p>
          <h1 className="max-w-3xl font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-[5.25rem]">
            Elige tu futuro digital.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:mt-7 md:text-xl">
            Descubre programas, entiende el modelo HyFlex y da el siguiente
            paso con una institución que combina cercanía, tecnología y
            credibilidad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto" size="lg">
              Habla con un asesor
            </ButtonLink>
            <ButtonLink href="#programas" size="lg" variant="secondary">
              Ver programas
            </ButtonLink>
          </div>

          <ul className="mt-8 grid gap-3 text-sm text-slate-200 md:mt-10">
            {heroNotes.map((item) => (
              <li
                key={item}
                className="glass-card soft-hover rounded-[1.35rem] px-4 py-4"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(34,211,238,0.9)]" />
                  <span className="leading-7">{item}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute -right-3 top-10 hidden h-40 w-40 rounded-full bg-violet-500/15 blur-3xl md:block" />
          <div className="absolute left-3 top-20 hidden h-28 w-28 rounded-full bg-cyan-300/15 blur-3xl md:block" />

          <div className="glass-card glow-border animate-float-slow relative overflow-hidden rounded-[2rem] p-4 shadow-[0_34px_120px_rgba(2,6,23,0.52)] md:p-5">
            <div className="absolute inset-x-12 top-0 h-28 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="absolute -bottom-8 right-4 h-28 w-28 rounded-full bg-violet-500/12 blur-3xl" />

            <div className="relative rounded-[1.7rem] border border-white/10 bg-slate-950/78 p-4 md:p-5">
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <p className="text-[0.65rem] uppercase tracking-[0.3em] text-cyan-200">
                    Orientación digital
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white md:text-2xl">
                    Panel del aspirante
                  </h2>
                </div>
                <span className="animate-pulse-glow inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
                  En línea
                </span>
              </div>

              <div className="mt-5 grid gap-4 xl:grid-cols-[1.08fr_0.92fr]">
                <div className="glass-card soft-hover rounded-[1.5rem] p-4 md:p-5">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Afinidad actual
                  </p>
                  <div className="mt-3 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-3xl font-semibold text-white">
                        Tecnología + creatividad
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Una lectura inicial para detectar rutas, modalidad y
                        siguiente paso.
                      </p>
                    </div>
                    <div className="rounded-2xl border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-right text-xs text-violet-100">
                      <strong className="block text-lg text-white">91%</strong>
                      match
                    </div>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] text-slate-500">
                      <span>Claridad de decisión</span>
                      <span>Alta</span>
                    </div>
                    <div className="mt-3 h-3 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full w-[82%] rounded-full bg-[linear-gradient(90deg,rgba(34,211,238,1),rgba(139,92,246,0.92))] shadow-[0_0_24px_rgba(34,211,238,0.35)]" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Modalidad
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        HyFlex
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Respuesta
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        1 asesor
                      </p>
                    </div>
                    <div className="rounded-[1.2rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                        Enfoque
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white">
                        Ruta clara
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="glass-card soft-hover animate-float-gentle rounded-[1.5rem] p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-cyan-200">
                      Siguiente paso
                    </p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Hablar con un asesor
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-300">
                      Resolver modalidad, proceso y opciones sin fricción.
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
                      {mockPrograms.map((program) => (
                        <div
                          key={program.title}
                          className="rounded-[1.15rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <p className="text-sm font-semibold text-white">
                              {program.title}
                            </p>
                            <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 text-xs font-semibold text-cyan-100">
                              {program.score}
                            </span>
                          </div>
                        </div>
                      ))}
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
                    Tecnología visual con proceso claro y serio.
                  </p>
                </div>
                <div className="glass-card soft-hover rounded-[1.4rem] p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">
                    Conversión visible
                  </p>
                  <div className="mt-3 flex items-center justify-between gap-3 rounded-[1.15rem] border border-white/[0.08] bg-white/[0.04] px-4 py-3">
                    <div>
                      <p className="text-sm font-semibold text-white">
                        CTA disponible en desktop y mobile
                      </p>
                      <p className="mt-1 text-xs text-slate-300">
                        Sin depender de scroll largo para convertir.
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
