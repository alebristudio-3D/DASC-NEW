import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DASC | Estudia sin dejar de trabajar",
  description:
    "Landing principal de DASC con enfoque en modalidad HyFlex, claridad de oferta y conversión directa a WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
