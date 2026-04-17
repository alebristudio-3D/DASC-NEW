"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { navItems } from "@/lib/site-content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/70 backdrop-blur-2xl">
      <Container className="relative">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link
            aria-label="DASC, volver al inicio"
            className="inline-flex items-center gap-3"
            href="#top"
            onClick={() => setIsOpen(false)}
          >
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,rgba(34,211,238,1),rgba(139,92,246,0.9))] text-lg font-bold text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_18px_40px_rgba(34,211,238,0.18)]">
              D
            </span>
            <span className="flex flex-col">
              <strong className="font-display text-base tracking-[0.16em] text-white">
                DASC
              </strong>
              <span className="text-xs text-slate-400">
                Formación superior digital
              </span>
            </span>
          </Link>

          <nav
            aria-label="Navegación principal para aspirantes"
            className="hidden items-center gap-8 lg:flex"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                className="text-sm font-medium text-slate-300 transition duration-300 hover:text-white"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ButtonLink href="#orientacion" size="lg">
              Habla con un asesor
            </ButtonLink>
          </div>

          <button
            aria-controls="mobile-nav"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar navegación" : "Abrir navegación"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition duration-300 hover:border-cyan-300/35 hover:bg-white/10 lg:hidden"
            onClick={() => setIsOpen((value) => !value)}
            type="button"
          >
            <span className="sr-only">Menú</span>
            <div className="space-y-1.5">
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition",
                  isOpen && "translate-y-2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition",
                  isOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 rounded-full bg-current transition",
                  isOpen && "-translate-y-2 -rotate-45",
                )}
              />
            </div>
          </button>
        </div>

        <div
          className={cn(
            "absolute inset-x-0 top-full pb-4 lg:hidden",
            isOpen ? "block" : "hidden",
          )}
          id="mobile-nav"
        >
          <div className="surface-panel mt-2 overflow-hidden p-4">
            <nav
              aria-label="Navegación móvil para aspirantes"
              className="grid gap-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5"
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <ButtonLink
                className="mt-2 w-full"
                href="#orientacion"
                onClick={() => setIsOpen(false)}
              >
                Habla con un asesor
              </ButtonLink>
            </nav>
          </div>
        </div>
      </Container>
    </header>
  );
}
