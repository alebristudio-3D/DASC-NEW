import { Container } from "@/components/ui/container";
import { trustStrip } from "@/lib/site-content";

export function TrustStrip() {
  return (
    <section aria-label="Señales de confianza" className="pb-10 md:pb-14">
      <Container>
        <div className="surface-panel grid gap-3 p-4 md:grid-cols-4 md:p-5">
          {trustStrip.map((item) => (
            <div
              key={item}
              className="rounded-[1.25rem] border border-white/[0.08] bg-white/[0.04] px-4 py-4 text-sm leading-6 text-slate-200"
            >
              {item}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

