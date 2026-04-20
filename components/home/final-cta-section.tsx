import { Container } from "@/components/ui/container";

export function FinalCtaSection() {
  return (
    <section className="section-space pt-14 md:pt-20" id="contacto">
      <Container>
        <div className="surface-panel overflow-hidden p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="eyebrow">CTA final</p>
              <h2 className="section-title max-w-3xl">
                Si ya viste suficiente, el siguiente paso es hablar con alguien.
              </h2>
              <p className="section-copy mt-5 max-w-2xl">
                Esta home no intenta resolver todo en una sola página. Su trabajo
                es ordenar la decisión y abrir una conversación útil con un
                asesor.
              </p>
            </div>

            <div className="glass-card rounded-[1.6rem] p-5">
              <div className="flex flex-col gap-3">
                <a
                  className="inline-flex w-full items-center justify-center rounded-full border border-cyan-200/50 bg-[linear-gradient(135deg,rgba(34,211,238,1),rgba(96,165,250,0.95)_55%,rgba(139,92,246,0.92))] px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_48px_rgba(6,182,212,0.24)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_24px_65px_rgba(34,211,238,0.24)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
                  href="mailto:admisiones@dasc.mx?subject=Quiero%20hablar%20con%20un%20asesor"
                >
                  Habla con un asesor
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.95),rgba(45,212,191,0.9))] px-5 py-3.5 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(16,185,129,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(16,185,129,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  href="https://wa.me/525512345678?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20DASC"
                  rel="noreferrer"
                  target="_blank"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                CTA corto, visible y accesible para cerrar la home sin
                convertirla en una página interminable.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
