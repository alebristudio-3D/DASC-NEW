import Link from "next/link";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/site-content";

const footerLinks = [...navItems];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-slate-950/90">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr] md:py-16">
        <div>
          <p className="eyebrow">DASC</p>
          <h2 className="font-display text-2xl text-white md:text-3xl">
            Una home más clara para presentar oferta, modalidad y proceso sin
            extenderse de más.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
            Esta versión organiza mejor la decisión del aspirante y deja la
            base lista para conectar con páginas internas en siguientes etapas.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Navegación secundaria
            </h3>
            <ul className="mt-4 space-y-3">
              {footerLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="text-sm text-slate-300 transition hover:text-white"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
              Mensaje institucional
            </h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              DASC se presenta con una narrativa más actual, ordenada y
              orientada a conversión, sin perder seriedad institucional.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
