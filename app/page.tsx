import { DascWhatsappForm } from "@/components/dasc-whatsapp-form";

const whatsappUrl =
  "https://wa.me/5212223606438?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20DASC%20y%20su%20modalidad%20HyFlex.";

const problemPoints = [
  "Elegir carrera se vuelve pesado cuando la oferta no se entiende rápido.",
  "Si trabajas o tienes otras responsabilidades, la modalidad suele sentirse como una barrera.",
  "Muchos sitios universitarios explican demasiado y ayudan poco a dar el siguiente paso.",
];

const solutionPoints = [
  "Una propuesta clara desde el primer scroll para entender qué estudiar y cómo avanzar.",
  "HyFlex explicado en lenguaje simple para quienes necesitan flexibilidad real.",
  "Un cierre directo a WhatsApp para resolver dudas sin formularios eternos.",
];

const offerCards = [
  {
    title: "Ingeniería en Software",
    description:
      "Para quienes quieren construir productos digitales, apps y soluciones con impacto real.",
    bullets: ["Desarrollo web", "Apps móviles", "Producto digital"],
  },
  {
    title: "Sistemas Computacionales",
    description:
      "Ideal si te interesa la tecnología aplicada, la infraestructura y la operación de sistemas.",
    bullets: ["Infraestructura", "Implementación", "Soporte tecnológico"],
  },
  {
    title: "Diseño Interactivo",
    description:
      "Una ruta para crear interfaces, experiencias y piezas visuales dentro del entorno digital.",
    bullets: ["UX/UI", "Contenido visual", "Experiencia digital"],
  },
  {
    title: "Mercadotecnia Digital",
    description:
      "Pensada para quienes quieren conectar estrategia, contenido, marca y crecimiento.",
    bullets: ["Branding", "Campañas", "Contenido y analítica"],
  },
];

const benefitCards = [
  {
    title: "Estudia sin dejar de trabajar",
    description:
      "La modalidad HyFlex te ayuda a sostener tu avance sin romper por completo tu rutina.",
  },
  {
    title: "Aprende con enfoque práctico",
    description:
      "La oferta está enfocada en áreas con aplicación directa en tecnología, negocio y creatividad.",
  },
  {
    title: "Recibe acompañamiento real",
    description:
      "No avanzas solo. Desde admisiones puedes resolver modalidad, proceso y siguiente paso.",
  },
  {
    title: "Decide con más claridad",
    description:
      "La información está ordenada para que entiendas primero y preguntes después con contexto.",
  },
];

const testimonials = [
  {
    quote:
      "Yo necesitaba una opción que no me obligara a dejar de trabajar. Aquí entendí rápido cómo sí podía estudiar.",
    name: "Mariana, 24 años",
  },
  {
    quote:
      "Me gustó que no hablaran complicado. En pocos minutos entendí la modalidad, la oferta y qué hacer después.",
    name: "Diego, 19 años",
  },
  {
    quote:
      "La atención por WhatsApp hizo todo más fácil. Sentí que me orientaron en lugar de solo venderme una carrera.",
    name: "Andrea, 28 años",
  },
];

const faqs = [
  {
    question: "¿Qué significa estudiar en modalidad HyFlex?",
    answer:
      "Significa tener una experiencia más flexible para avanzar en tus estudios sin perder acompañamiento. Está pensada para adaptarse mejor a distintos contextos, especialmente si trabajas o necesitas mayor control sobre tu tiempo.",
  },
  {
    question: "¿DASC es para alguien que ya trabaja?",
    answer:
      "Sí. De hecho, el mensaje central de esta propuesta es que puedas estudiar sin dejar de trabajar. La conversación por WhatsApp sirve justo para revisar si la modalidad encaja con tu ritmo actual.",
  },
  {
    question: "¿Puedo recibir información por WhatsApp antes de inscribirme?",
    answer:
      "Sí. Ese es el siguiente paso recomendado en toda la landing: hablar con un asesor para resolver dudas sobre carrera, modalidad, proceso y requisitos.",
  },
  {
    question: "¿Qué carreras puedo explorar primero?",
    answer:
      "En esta página destacamos Ingeniería en Software, Sistemas Computacionales, Diseño Interactivo y Mercadotecnia Digital como rutas claras para comenzar la decisión.",
  },
  {
    question: "¿La página está pensada solo para jóvenes recién egresados?",
    answer:
      "No. El contenido está diseñado para dos perfiles principales: jóvenes que buscan su primera carrera y adultos trabajadores que necesitan una opción viable y flexible.",
  },
];

export default function HomePage() {
  return (
    <>
      <header>
        <div className="dasc-container" data-header-inner="">
          <a href="#inicio" data-brand="">
            <span data-brand-mark="">D</span>
            <span>
              <strong>DASC</strong>
              <small>Universidad tecnológica en Puebla</small>
            </span>
          </a>

          <nav aria-label="Navegación principal">
            <a href="#problema">Problema</a>
            <a href="#solucion">Solución</a>
            <a href="#oferta">Oferta</a>
            <a href="#faq">FAQ</a>
          </nav>

          <a className="dasc-btn-primary" href={whatsappUrl}>
            Hablar por WhatsApp
          </a>
        </div>
      </header>

      <main id="inicio">
        <section className="dasc-section" id="hero">
          <div className="dasc-container" data-grid="hero">
            <div data-stack="hero-copy">
              <p data-kicker="">Modalidad HyFlex en Puebla</p>
              <h1>Estudia sin dejar de trabajar.</h1>
              <p data-lead="">
                DASC te ayuda a construir tu futuro en tecnología, diseño o
                negocio digital con una experiencia flexible, clara y pensada
                para tu ritmo real.
              </p>

              <div data-actions="">
                <a className="dasc-btn-primary" href={whatsappUrl}>
                  Quiero información
                </a>
                <a
                  className="dasc-btn-primary"
                  data-tone="secondary"
                  href="#oferta"
                >
                  Ver carreras
                </a>
              </div>

              <div data-grid="3">
                <article className="dasc-card">
                  <strong>HyFlex</strong>
                  <p>Flexibilidad real para estudiar y seguir avanzando.</p>
                </article>
                <article className="dasc-card">
                  <strong>WhatsApp</strong>
                  <p>Resuelve tus dudas sin procesos largos.</p>
                </article>
                <article className="dasc-card">
                  <strong>Enfoque actual</strong>
                  <p>Oferta conectada con el mundo digital y laboral.</p>
                </article>
              </div>
            </div>

            <DascWhatsappForm />
          </div>
        </section>

        <section className="dasc-section" id="problema">
          <div className="dasc-container">
            <div data-heading="">
              <p data-kicker="">Problema</p>
              <h2>La decisión se frena cuando la información no ayuda.</h2>
              <p>
                La auditoría deja claro que una web universitaria no debe
                saturar ni sonar compleja. Debe explicar, generar confianza y
                llevar a una conversación útil lo más rápido posible.
              </p>
            </div>

            <div data-grid="3">
              {problemPoints.map((item) => (
                <article className="dasc-card" key={item}>
                  <strong>Fricción detectada</strong>
                  <p>{item}</p>
                </article>
              ))}
            </div>

            <div data-actions="">
              <a className="dasc-btn-primary" href={whatsappUrl}>
                Resolver mis dudas ahora
              </a>
            </div>
          </div>
        </section>

        <section className="dasc-section" id="solucion">
          <div className="dasc-container" data-grid="split">
            <div data-heading="">
              <p data-kicker="">Solución</p>
              <h2>Una landing que explica primero y convierte después.</h2>
              <p>
                Esta propuesta corrige los puntos críticos de la auditoría:
                ordena la decisión, baja la carga de lectura, presenta HyFlex
                como diferenciador real y mantiene un CTA visible en cada paso.
              </p>
            </div>

            <div data-stack="cards">
              {solutionPoints.map((item) => (
                <article className="dasc-card" key={item}>
                  <strong>Qué mejora</strong>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="dasc-container" data-actions="">
            <a className="dasc-btn-primary" href={whatsappUrl}>
              Quiero saber si HyFlex es para mí
            </a>
          </div>
        </section>

        <section className="dasc-section" id="oferta">
          <div className="dasc-container">
            <div data-heading="">
              <p data-kicker="">Oferta</p>
              <h2>Empieza por una ruta clara, no por una lista interminable.</h2>
              <p>
                La oferta se presenta en bloques fáciles de comparar para que
                encuentres más rápido la carrera que hace sentido contigo.
              </p>
            </div>

            <div data-grid="4">
              {offerCards.map((card) => (
                <article className="dasc-card" key={card.title}>
                  <strong>{card.title}</strong>
                  <p>{card.description}</p>
                  <ul>
                    {card.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div data-actions="">
              <a className="dasc-btn-primary" href={whatsappUrl}>
                Pedir orientación por WhatsApp
              </a>
              <a
                className="dasc-btn-primary"
                data-tone="secondary"
                href="#beneficios"
              >
                Ver beneficios
              </a>
            </div>
          </div>
        </section>

        <section className="dasc-section" id="beneficios">
          <div className="dasc-container">
            <div data-heading="">
              <p data-kicker="">Beneficios</p>
              <h2>Lo que hace que DASC sí encaje con tu vida actual.</h2>
              <p>
                El foco no está solo en verse moderno. Está en ayudarte a tomar
                una mejor decisión con una propuesta flexible y accionable.
              </p>
            </div>

            <div data-grid="4">
              {benefitCards.map((card) => (
                <article className="dasc-card" key={card.title}>
                  <strong>{card.title}</strong>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>

            <div data-actions="">
              <a className="dasc-btn-primary" href={whatsappUrl}>
                Hablar con admisiones
              </a>
            </div>
          </div>
        </section>

        <section className="dasc-section" id="prueba-social">
          <div className="dasc-container">
            <div data-heading="">
              <p data-kicker="">Prueba social</p>
              <h2>Una experiencia que se siente cercana, clara y útil.</h2>
              <p>
                Cuando el mensaje es directo y el siguiente paso es simple, la
                percepción cambia: menos confusión, más confianza para avanzar.
              </p>
            </div>

            <div data-grid="3">
              {testimonials.map((item) => (
                <article className="dasc-card" key={item.name}>
                  <p data-quote="">“{item.quote}”</p>
                  <strong>{item.name}</strong>
                </article>
              ))}
            </div>

            <div data-actions="">
              <a className="dasc-btn-primary" href={whatsappUrl}>
                Quiero una atención así
              </a>
            </div>
          </div>
        </section>

        <section className="dasc-section" id="cta">
          <div className="dasc-container">
            <article className="dasc-card" data-banner="">
              <div data-heading="">
                <p data-kicker="">CTA</p>
                <h2>Si ya te hizo sentido, el siguiente paso es escribir.</h2>
                <p>
                  En lugar de dejarte buscando más páginas, esta landing te
                  lleva directo a una conversación por WhatsApp para resolver tu
                  caso real.
                </p>
              </div>

              <div data-actions="">
                <a className="dasc-btn-primary" href={whatsappUrl}>
                  Escribir por WhatsApp
                </a>
                <a
                  className="dasc-btn-primary"
                  data-tone="secondary"
                  href="#faq"
                >
                  Leer preguntas frecuentes
                </a>
              </div>
            </article>
          </div>
        </section>

        <section className="dasc-section" id="faq">
          <div className="dasc-container">
            <div data-heading="">
              <p data-kicker="">FAQ</p>
              <h2>Respuestas rápidas antes de dar el siguiente paso.</h2>
              <p>
                El objetivo es quitar objeciones comunes sin obligarte a leer
                demasiado.
              </p>
            </div>

            <div data-stack="faq">
              {faqs.map((item) => (
                <details className="dasc-accordion" key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>

            <div data-actions="">
              <a className="dasc-btn-primary" href={whatsappUrl}>
                Aclarar mi caso por WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="dasc-section" id="cta-final">
          <div className="dasc-container">
            <article className="dasc-card" data-banner="final">
              <div data-heading="">
                <p data-kicker="">CTA final</p>
                <h2>Tu próxima carrera puede empezar hoy, no cuando tengas más tiempo.</h2>
                <p>
                  DASC está pensado para personas que quieren crecer sin poner
                  en pausa su trabajo ni su vida. Si quieres ver si encaja
                  contigo, escríbenos.
                </p>
              </div>

              <div data-actions="">
                <a className="dasc-btn-primary" href={whatsappUrl}>
                  Quiero estudiar en DASC
                </a>
                <a
                  className="dasc-btn-primary"
                  data-tone="secondary"
                  href="#hero"
                >
                  Volver al inicio
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <footer>
        <div className="dasc-container" data-footer="">
          <p>DASC · Universidad tecnológica en Puebla</p>
          <a href={whatsappUrl}>WhatsApp admisiones</a>
        </div>
      </footer>
    </>
  );
}
