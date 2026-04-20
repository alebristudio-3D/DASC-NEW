export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type OfferCard = {
  id: string;
  tag: string;
  title: string;
  description: string;
  bullets: string[];
};

export type Program = {
  id: string;
  tag: string;
  title: string;
  description: string;
  focus: string[];
};

export type ValuePoint = {
  id: string;
  title: string;
  description: string;
  support: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  detail: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export const navItems: NavItem[] = [
  { href: "#oferta", label: "Oferta" },
  { href: "#hyflex", label: "HyFlex" },
  { href: "#programas", label: "Programas" },
  { href: "#admision", label: "Admisión" },
  { href: "#contacto", label: "Contacto" },
];

export const trustStrip = [
  "Modelo HyFlex con continuidad entre campus y digital.",
  "Acompañamiento de asesores desde el primer contacto.",
  "Programas pensados para el entorno profesional actual.",
  "Experiencia clara para aspirantes y familias.",
];

export const offerCards: OfferCard[] = [
  {
    id: "software",
    tag: "Tecnología aplicada",
    title: "Ingeniería y desarrollo",
    description:
      "Rutas orientadas a construir productos, plataformas y soluciones digitales con visión práctica.",
    bullets: ["Programación", "Arquitectura", "Producto digital"],
  },
  {
    id: "systems",
    tag: "Infraestructura digital",
    title: "Sistemas y operación",
    description:
      "Formación para quienes quieren administrar, implementar y hacer crecer entornos tecnológicos.",
    bullets: ["Infraestructura", "Operación", "Implementación"],
  },
  {
    id: "design",
    tag: "Experiencia y marca",
    title: "Diseño y creatividad",
    description:
      "Programas para crear experiencias, interfaces y propuestas visuales con criterio estratégico.",
    bullets: ["UI", "Experiencia", "Narrativa visual"],
  },
  {
    id: "business",
    tag: "Gestión y crecimiento",
    title: "Negocio digital",
    description:
      "Opciones para liderar proyectos, activar estrategias y conectar operación con resultados.",
    bullets: ["Marketing", "Administración", "Decisión de negocio"],
  },
];

export const hyflexPoints = [
  "Continúa tu avance combinando experiencias presenciales y digitales sin perder ritmo.",
  "Recibe una estructura más flexible para estudiantes que necesitan compatibilidad con su contexto.",
  "Mantén claridad sobre horarios, acompañamiento y seguimiento desde admisiones.",
];

export const whyDascPoints: ValuePoint[] = [
  {
    id: "clarity",
    title: "Claridad para decidir",
    description:
      "La home organiza la información para que el aspirante entienda rápido qué puede estudiar y cómo seguir.",
    support:
      "Se evita la saturación y se priorizan mensajes útiles antes de pedir una acción.",
  },
  {
    id: "model",
    title: "Modelo actual y creíble",
    description:
      "DASC se presenta con una estética contemporánea sin perder el peso institucional que exige una decisión académica.",
    support:
      "La experiencia comunica modernidad con una base visual sobria y confiable.",
  },
  {
    id: "support",
    title: "Acompañamiento real",
    description:
      "La conversión principal no es un formulario frío: es una conversación útil con asesoría desde el inicio.",
    support:
      "Esto acerca la experiencia a una edtech moderna sin romper credibilidad.",
  },
];

export const featuredPrograms: Program[] = [
  {
    id: "software",
    tag: "Programa destacado",
    title: "Ingeniería en Software",
    description:
      "Ideal para perfiles que quieren desarrollar soluciones, productos y plataformas digitales de alto impacto.",
    focus: ["Código", "Producto", "Resolución de problemas"],
  },
  {
    id: "design",
    tag: "Programa destacado",
    title: "Diseño Interactivo",
    description:
      "Para quienes buscan combinar creatividad, experiencia de usuario y ejecución visual dentro del entorno digital.",
    focus: ["UI", "Experiencias", "Creatividad aplicada"],
  },
  {
    id: "marketing",
    tag: "Programa destacado",
    title: "Mercadotecnia Digital",
    description:
      "Ruta orientada a estrategia, contenido, crecimiento y conexión entre marca, audiencias y resultados.",
    focus: ["Contenido", "Estrategia", "Growth"],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Lo que más me ayudó fue entender rápido qué programa hacía sentido conmigo y poder hablar con alguien sin perder tiempo.",
    name: "Valeria R.",
    detail: "Aspirante · Interés en tecnología y negocio",
  },
  {
    id: "t2",
    quote:
      "La experiencia se siente clara y actual. No parece una universidad hablando en difícil, sino una institución que sí acompaña.",
    name: "Diego M.",
    detail: "Aspirante · Comparando opciones de diseño",
  },
  {
    id: "t3",
    quote:
      "Me dio confianza ver una propuesta moderna pero seria. Eso hizo más fácil pensar en DASC como una opción real.",
    name: "Andrea C.",
    detail: "Madre de familia · Primera consulta",
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Explora la oferta",
    description:
      "Revisa las áreas académicas clave y detecta cuál se acerca más a tus intereses y metas.",
  },
  {
    step: "02",
    title: "Resuelve tus dudas",
    description:
      "Conversa con un asesor para entender modalidad, acompañamiento, proceso y siguiente paso.",
  },
  {
    step: "03",
    title: "Activa tu admisión",
    description:
      "Recibe orientación para convertir tu interés en un proceso más claro y bien acompañado.",
  },
];
