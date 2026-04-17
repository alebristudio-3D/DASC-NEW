import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { faqs } from "@/lib/site-content";

export function FaqSection() {
  return (
    <section className="section-space pt-0" id="faq">
      <Container>
        <SectionHeading
          align="center"
          description="Este bloque cierra la home con objeciones básicas resueltas y prepara el terreno para las páginas internas y flujos de captación de fases posteriores."
          eyebrow="Preguntas frecuentes"
          title="Cierre informativo para una experiencia más clara y confiable."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="surface-panel group overflow-hidden p-6"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-white">
                {faq.question}
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-200 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
