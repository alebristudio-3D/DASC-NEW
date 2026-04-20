import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { testimonials } from "@/lib/site-content";

export function TestimonialsSection() {
  return (
    <section className="section-space py-16 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Testimonios"
          title="Percepción de una experiencia más cercana y confiable."
          description="El tono de la home debe sentirse moderno y accesible, pero lo bastante serio para una decisión académica importante."
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="surface-panel soft-hover flex h-full flex-col p-6"
            >
              <p className="text-base leading-8 text-slate-100">
                “{testimonial.quote}”
              </p>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-slate-400">{testimonial.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

