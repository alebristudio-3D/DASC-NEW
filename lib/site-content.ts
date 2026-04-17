export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type Pillar = {
  id: string;
  title: string;
  description: string;
  support: string;
};

export type Program = {
  id: string;
  tag: string;
  title: string;
  description: string;
  focus: string[];
};

export type ExperiencePoint = {
  title: string;
  description: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type Faq = {
  question: string;
  answer: string;
};

export const navItems: NavItem[] = [
  { href: "#oferta", label: "Oferta académica" },
  { href: "#modelo", label: "Modelo DASC" },
  { href: "#proceso", label: "Proceso" },
  { href: "#orientacion", label: "Orientación" },
];

export const metrics = [
  {
    value: "6",
    label: "programas alineados con tecnología, diseño, operación y negocio.",
  },
  {
    value: "3",
    label: "niveles de decisión para el aspirante: afinidad, contexto y siguiente paso.",
  },
  {
    value: "1",
    label: "ruta clara para convertir interés en conversación con admisiones.",
  },
];

export const pillars: Pillar[] = [
  {
    id: "claridad",
    title: "Claridad para decidir",
    description:
      "La home organiza la información como un embudo útil para aspirantes: qué ofrece DASC, por qué importa y cómo seguir.",
    support:
      "La experiencia evita mensajes dispersos y prioriza lectura rápida con profundidad suficiente para tomar acción.",
  },
  {
    id: "tono",
    title: "Tono institucional serio",
    description:
      "La estética combina una base oscura, tipografía contundente y microdetalles tecnológicos para transmitir profesionalismo.",
    support:
      "El resultado busca verse actual sin caer en recursos promocionales ruidosos o poco confiables.",
  },
  {
    id: "conversion",
    title: "Conversión sin fricción",
    description:
      "Cada bloque empuja a un siguiente paso concreto: revisar oferta, entender el proceso y solicitar orientación.",
    support:
      "Las llamadas a la acción se repiten con consistencia y sin depender de sliders o interacciones pesadas.",
  },
];

export const programs: Program[] = [
  {
    id: "software",
    tag: "Perfil: Arquitectura digital",
    title: "Ingeniería en Software",
    description:
      "Formación orientada a construir productos digitales, resolver problemas complejos y desarrollar soluciones escalables.",
    focus: ["Programación", "Producto", "Lógica aplicada"],
  },
  {
    id: "sistemas",
    tag: "Perfil: Gestión tecnológica",
    title: "Sistemas Computacionales",
    description:
      "Ruta para quienes entienden la tecnología como infraestructura clave para operar, asegurar y evolucionar organizaciones.",
    focus: ["Infraestructura", "Implementación", "Soporte estratégico"],
  },
  {
    id: "industrial",
    tag: "Perfil: Optimización",
    title: "Ingeniería Industrial y Sistemas",
    description:
      "Enfoque para mejorar procesos, tiempos y recursos con pensamiento analítico y criterio operativo.",
    focus: ["Procesos", "Eficiencia", "Análisis"],
  },
  {
    id: "design",
    tag: "Perfil: Experiencia visual",
    title: "Diseño Interactivo",
    description:
      "Programa pensado para conectar creatividad, experiencia de usuario y ejecución visual dentro de entornos digitales.",
    focus: ["UI", "Creatividad", "Experiencias digitales"],
  },
  {
    id: "marketing",
    tag: "Perfil: Crecimiento de marca",
    title: "Mercadotecnia Digital",
    description:
      "Preparación para diseñar estrategias, activar campañas y generar valor a partir de audiencias, contenido y datos.",
    focus: ["Contenido", "Estrategia", "Crecimiento"],
  },
  {
    id: "admin",
    tag: "Perfil: Liderazgo organizacional",
    title: "Administración",
    description:
      "Ruta para quienes buscan combinar visión de negocio, toma de decisiones y coordinación efectiva de equipos.",
    focus: ["Gestión", "Negocio", "Liderazgo"],
  },
];

export const experiencePoints: ExperiencePoint[] = [
  {
    title: "Arquitectura pensada para aspirantes",
    description:
      "La navegación y el orden de los bloques responden a preguntas reales de decisión: qué estudiar, cómo avanzar y a quién contactar.",
  },
  {
    title: "Narrativa de valor institucional",
    description:
      "La página presenta a DASC como una institución que forma perfiles para la economía digital con un lenguaje más confiable y directo.",
  },
  {
    title: "Sistema visual escalable",
    description:
      "Los componentes, tokens y patrones quedan listos para crecer hacia páginas internas sin rehacer la base.",
  },
];

export const trustSignals = [
  "Diseño sobrio con contraste alto y lectura cómoda.",
  "Bloques reutilizables para oferta, proceso y captación.",
  "Jerarquía visual optimizada para desktop y mobile.",
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Explora la oferta",
    description:
      "Revisa los programas clave y detecta qué rutas hacen sentido con tus intereses y fortalezas.",
  },
  {
    step: "02",
    title: "Contrasta tu perfil",
    description:
      "Entiende cómo DASC traduce afinidad, estilo de aprendizaje y contexto en una orientación más clara.",
  },
  {
    step: "03",
    title: "Solicita orientación",
    description:
      "Deja tus datos para convertir la visita en una conversación con seguimiento y próximos pasos definidos.",
  },
];

export const faqs: Faq[] = [
  {
    question: "¿A quién está dirigida esta experiencia?",
    answer:
      "A aspirantes que buscan una primera lectura clara sobre programas relacionados con tecnología, diseño, operación y negocio dentro de DASC.",
  },
  {
    question: "¿La orientación sustituye el proceso de admisión?",
    answer:
      "No. Este primer contacto ayuda a ordenar opciones y preparar la conversación comercial o académica posterior.",
  },
  {
    question: "¿Necesito saber ya qué carrera quiero estudiar?",
    answer:
      "No necesariamente. La estructura del sitio está pensada para reducir incertidumbre y ayudarte a comparar rutas antes de decidir.",
  },
  {
    question: "¿Esta versión ya está lista para crecer?",
    answer:
      "Sí. La base queda preparada para agregar páginas internas, fichas de programa y flujos de captación en siguientes fases.",
  },
];

