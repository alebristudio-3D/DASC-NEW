"use client";

import { useState, useTransition } from "react";
import { Button } from "@/components/ui/button";
import { programs } from "@/lib/site-content";

export function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    startTransition(() => {
      setSubmitted(true);
      form.reset();
    });
  }

  return (
    <form
      className="surface-panel p-6 md:p-8"
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="nombre">
            Nombre completo
          </label>
          <input
            className="field-input"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre"
            required
            type="text"
          />
        </div>
        <div>
          <label className="field-label" htmlFor="correo">
            Correo electrónico
          </label>
          <input
            className="field-input"
            id="correo"
            name="correo"
            placeholder="nombre@correo.com"
            required
            type="email"
          />
        </div>
      </div>

      <div className="mt-5 grid gap-5 md:grid-cols-2">
        <div>
          <label className="field-label" htmlFor="interes">
            Programa de interés
          </label>
          <select className="field-input" defaultValue="" id="interes" name="interes" required>
            <option disabled value="">
              Selecciona una opción
            </option>
            {programs.map((program) => (
              <option key={program.id} value={program.title}>
                {program.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="momento">
            Momento de decisión
          </label>
          <select className="field-input" defaultValue="" id="momento" name="momento" required>
            <option disabled value="">
              Selecciona una opción
            </option>
            <option value="explorando">Aún estoy explorando opciones</option>
            <option value="comparando">Ya estoy comparando programas</option>
            <option value="listo">Quiero hablar con orientación pronto</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="field-label" htmlFor="mensaje">
          ¿Qué te gustaría resolver?
        </label>
        <textarea
          className="field-input min-h-32 resize-y"
          id="mensaje"
          name="mensaje"
          placeholder="Cuéntanos qué te interesa entender mejor sobre DASC."
          required
        />
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-md text-sm leading-6 text-slate-400">
          Formulario mock de conversión para esta fase. La estructura queda
          lista para conectarse con CRM o flujo de admisiones después.
        </p>
        <Button disabled={isPending} size="lg" type="submit">
          {isPending ? "Enviando..." : "Enviar solicitud"}
        </Button>
      </div>

      <p aria-live="polite" className="mt-4 min-h-6 text-sm text-cyan-200">
        {submitted
          ? "Solicitud registrada en esta demo. El siguiente paso sería conectarla con el flujo real de orientación."
          : ""}
      </p>
    </form>
  );
}

