"use client";

const whatsappNumber = "5212223606438";

export function DascWhatsappForm() {
  function handleSubmit(formData: FormData) {
    const name = String(formData.get("name") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const interest = String(formData.get("interest") ?? "").trim();

    const message = [
      "Hola, quiero información sobre DASC.",
      name ? `Mi nombre es ${name}.` : "",
      phone ? `Mi WhatsApp es ${phone}.` : "",
      interest ? `Me interesa ${interest}.` : "",
      "Quiero saber cómo funciona la modalidad HyFlex.",
    ]
      .filter(Boolean)
      .join(" ");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form
      action={handleSubmit}
      className="dasc-form"
      data-form-panel=""
    >
      <div data-heading="">
        <p data-kicker="">Habla con admisiones</p>
        <h2>Recibe orientación en minutos.</h2>
        <p>
          Déjanos tus datos básicos y abre WhatsApp con un mensaje listo para
          enviar.
        </p>
      </div>

      <label htmlFor="name">Nombre</label>
      <input
        id="name"
        name="name"
        placeholder="Tu nombre"
        required
        type="text"
      />

      <label htmlFor="phone">WhatsApp</label>
      <input
        id="phone"
        name="phone"
        placeholder="Tu número"
        required
        type="tel"
      />

      <label htmlFor="interest">Interés principal</label>
      <select defaultValue="" id="interest" name="interest" required>
        <option disabled value="">
          Selecciona una opción
        </option>
        <option value="Ingeniería en Software">Ingeniería en Software</option>
        <option value="Sistemas Computacionales">
          Sistemas Computacionales
        </option>
        <option value="Diseño Interactivo">Diseño Interactivo</option>
        <option value="Mercadotecnia Digital">Mercadotecnia Digital</option>
        <option value="Quiero ayuda para elegir">
          Quiero ayuda para elegir
        </option>
      </select>

      <button className="dasc-btn-primary" type="submit">
        Abrir WhatsApp
      </button>
    </form>
  );
}
