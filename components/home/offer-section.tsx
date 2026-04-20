import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { offerCards } from "@/lib/site-content";

export function OfferSection() {
  return (
    <section className="section-space pt-12 md:pt-16" id="oferta">
      <Container>
        <SectionHeading
          eyebrow="Oferta educativa"
          title="Cuatro rutas para entender rápido dónde encajas."
          description="En lugar de saturar con demasiadas opciones desde el inicio, la home resume la oferta en grandes áreas para que el aspirante ubique su camino con más claridad."
        />

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {offerCards.map((card) => (
            <article
              key={card.id}
              className="surface-panel soft-hover flex h-full flex-col p-6"
            >
              <span className="mb-4 inline-flex self-start rounded-full border border-cyan-300/15 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                {card.tag}
              </span>
              <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
                {card.description}
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 inline-flex h-2 w-2 rounded-full bg-cyan-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <ButtonLink href="#programas" variant="secondary">
            Ver programas destacados
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}

