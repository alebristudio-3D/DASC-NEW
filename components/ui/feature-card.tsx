type FeatureCardProps = {
  index: string;
  title: string;
  description: string;
  support: string;
};

export function FeatureCard({
  index,
  title,
  description,
  support,
}: FeatureCardProps) {
  return (
    <article className="surface-panel p-6 md:p-8">
      <span className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/15 bg-cyan-300/10 font-display text-sm font-semibold text-cyan-200">
        {index}
      </span>
      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
      <p className="mt-5 text-sm leading-7 text-slate-400">{support}</p>
    </article>
  );
}

