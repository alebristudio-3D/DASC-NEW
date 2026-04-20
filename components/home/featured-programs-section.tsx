import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProgramCard } from "@/components/ui/program-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredPrograms } from "@/lib/site-content";

export function FeaturedProgramsSection() {
  return (
    <section className="section-space py-16 md:py-24" id="programas">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Programas destacados"
            title="Tres opciones para visualizar rápido el tipo de formación que ofrece DASC."
            description="Se muestran solo algunos programas clave para mantener la home contenida y orientar la exploración, sin convertirla en un catálogo interminable."
          />
          <ButtonLink href="#contacto" variant="secondary">
            Habla con un asesor
          </ButtonLink>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredPrograms.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </Container>
    </section>
  );
}

