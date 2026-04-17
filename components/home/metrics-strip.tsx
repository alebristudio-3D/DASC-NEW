import { Container } from "@/components/ui/container";
import { metrics } from "@/lib/site-content";

export function MetricsStrip() {
  return (
    <section aria-label="Indicadores clave" className="pb-8 md:pb-14">
      <Container>
        <div className="surface-panel grid gap-4 p-6 md:grid-cols-3 md:p-8">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[1.5rem] border border-white/10 bg-slate-950/45 p-5"
            >
              <p className="font-display text-4xl text-white">{metric.value}</p>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {metric.label}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

