import type { Program } from "@/lib/site-content";

type ProgramCardProps = {
  program: Program;
};

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <article className="surface-panel flex h-full flex-col p-6 md:p-7">
      <span className="mb-4 inline-flex self-start rounded-full border border-cyan-300/10 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-200">
        {program.tag}
      </span>
      <h3 className="text-2xl font-semibold text-white">{program.title}</h3>
      <p className="mt-4 flex-1 text-sm leading-7 text-slate-300">
        {program.description}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2" aria-label={`Áreas clave de ${program.title}`}>
        {program.focus.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-2 text-xs font-medium text-slate-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

