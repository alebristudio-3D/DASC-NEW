import type { Metadata } from "next";
import { MobileFloatingActions } from "@/components/layout/mobile-floating-actions";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: "DASC | Educación superior para el talento digital",
  description:
    "Primera versión funcional del rediseño web de DASC con enfoque institucional, visual tecnológica y navegación orientada a aspirantes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="relative overflow-x-hidden pb-24 antialiased md:pb-0">
        <a className="skip-link" href="#contenido">
          Saltar al contenido principal
        </a>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[40rem] bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.2),transparent_40%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[6%] top-28 z-0 h-64 w-64 rounded-full bg-violet-500/15 blur-[110px]"
        />
        <SiteHeader />
        <main id="contenido" className="relative z-10">
          {children}
        </main>
        <SiteFooter />
        <MobileFloatingActions />
      </body>
    </html>
  );
}
