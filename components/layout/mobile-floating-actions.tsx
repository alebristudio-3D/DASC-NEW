export function MobileFloatingActions() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/70 px-4 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-[1fr_auto] gap-3">
        <a
          aria-label="Hablar con un asesor por WhatsApp"
          className="inline-flex items-center justify-center rounded-full border border-emerald-400/30 bg-[linear-gradient(135deg,rgba(16,185,129,0.95),rgba(45,212,191,0.9))] px-4 py-3 text-sm font-semibold text-slate-950 shadow-[0_18px_44px_rgba(16,185,129,0.22)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_22px_60px_rgba(16,185,129,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          href="https://wa.me/525512345678?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20DASC"
          rel="noreferrer"
          target="_blank"
        >
          WhatsApp
        </a>
        <a
          className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-white/[0.08] px-4 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-cyan-300/45 hover:bg-white/[0.12] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-200"
          href="#contacto"
        >
          Habla con un asesor
        </a>
      </div>
    </div>
  );
}
