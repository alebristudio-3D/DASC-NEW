import type { ProcessStep } from "@/lib/site-content";

type ProcessStepCardProps = {
  step: ProcessStep;
};

export function ProcessStepCard({ step }: ProcessStepCardProps) {
  return (
    <article className="surface-panel p-6 md:p-7">
      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-200">
        Paso {step.step}
      </span>
      <h3 className="mt-4 text-2xl font-semibold text-white">{step.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{step.description}</p>
    </article>
  );
}
