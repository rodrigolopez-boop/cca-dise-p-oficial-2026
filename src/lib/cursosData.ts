/**
 * DATOS — Página aislada de Cursos e Inscripciones.
 * Independiente de la capa `mockData` del portal principal.
 * Sustituye estos objetos por fetch() cuando exista API/CMS real.
 */

export type CourseCategory =
  | "Ilustración"
  | "Animación"
  | "Branding"
  | "UX/UI"
  | "Audiovisual"
  | "Editorial";

export interface CourseCatalogItem {
  id: string;
  title: string;
  description: string;
  duration: string;
  modality: "Presencial" | "Híbrido" | "Virtual";
  level: "Inicial" | "Intermedio" | "Avanzado";
  category: CourseCategory;
  icon: string;
  gradient: string;
  seats: string;
}

export type LaunchStatus = "en-proceso" | "proximo";

export interface CourseLaunch {
  id: string;
  course: string;
  date: string; // ISO YYYY-MM-DD
  status: LaunchStatus;
  note: string;
}

export interface EnrollmentStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  detail: string;
  icon: string;
}

/* ------------------------------------------------------------------ */
/* Catálogo de cursos ofertados                                        */
/* ------------------------------------------------------------------ */
export const catalog: CourseCatalogItem[] = [
  {
    id: "cur-1",
    title: "Ilustración Digital",
    description:
      "Fundamentos de dibujo, color y narrativa visual con Procreate y Photoshop. Del boceto al arte final para editorial y comercial.",
    duration: "6 semanas · 30 h",
    modality: "Híbrido",
    level: "Inicial",
    category: "Ilustración",
    icon: "Palette",
    gradient: "from-rose-500 to-orange-500",
    seats: "18 cupos",
  },
  {
    id: "cur-2",
    title: "Animación 2D",
    description:
      "Principios de animación, storyboard y producción de piezas frame a frame con Toon Boom y After Effects.",
    duration: "8 semanas · 40 h",
    modality: "Presencial",
    level: "Intermedio",
    category: "Animación",
    icon: "Clapperboard",
    gradient: "from-violet-600 to-fuchsia-600",
    seats: "15 cupos",
  },
  {
    id: "cur-3",
    title: "Animación 3D con Blender",
    description:
      "Modelado, texturizado, iluminación y render de escenas 3D. Pipeline completo con herramientas libres y profesionales.",
    duration: "10 semanas · 50 h",
    modality: "Presencial",
    level: "Intermedio",
    category: "Animación",
    icon: "Boxes",
    gradient: "from-cyan-500 to-blue-600",
    seats: "12 cupos",
  },
  {
    id: "cur-4",
    title: "Branding y Diseño de Marca",
    description:
      "Investigación, concepto, logotipo y manual de identidad. Construye sistemas de marca aplicables y memorables.",
    duration: "6 semanas · 30 h",
    modality: "Híbrido",
    level: "Intermedio",
    category: "Branding",
    icon: "Fingerprint",
    gradient: "from-emerald-500 to-teal-600",
    seats: "20 cupos",
  },
  {
    id: "cur-5",
    title: "UX/UI para Productos Digitales",
    description:
      "Investigación de usuario, wireframes, prototipado y testeo en Figma. Diseña interfaces funcionales y accesibles.",
    duration: "8 semanas · 40 h",
    modality: "Virtual",
    level: "Intermedio",
    category: "UX/UI",
    icon: "MonitorSmartphone",
    gradient: "from-indigo-600 to-violet-700",
    seats: "25 cupos",
  },
  {
    id: "cur-6",
    title: "Motion Graphics",
    description:
      "Gráficos en movimiento, kinetic typography y animación de logotipos con After Effects para redes y publicidad.",
    duration: "6 semanas · 30 h",
    modality: "Presencial",
    level: "Avanzado",
    category: "Audiovisual",
    icon: "Sparkles",
    gradient: "from-fuchsia-600 to-pink-600",
    seats: "14 cupos",
  },
  {
    id: "cur-7",
    title: "Fotografía Publicitaria",
    description:
      "Manejo de cámara, iluminación de estudio y postproducción para piezas de producto y campañas.",
    duration: "5 semanas · 25 h",
    modality: "Presencial",
    level: "Inicial",
    category: "Audiovisual",
    icon: "Camera",
    gradient: "from-amber-500 to-orange-600",
    seats: "16 cupos",
  },
  {
    id: "cur-8",
    title: "Diseño Editorial",
    description:
      "Retículas, tipografía y maquetación para revistas, libros y publicaciones digitales con InDesign.",
    duration: "6 semanas · 30 h",
    modality: "Virtual",
    level: "Intermedio",
    category: "Editorial",
    icon: "BookOpen",
    gradient: "from-sky-500 to-blue-600",
    seats: "22 cupos",
  },
];

/* ------------------------------------------------------------------ */
/* Cronograma de lanzamientos                                          */
/* ------------------------------------------------------------------ */
export const launches: CourseLaunch[] = [
  {
    id: "l1",
    course: "Animación 3D con Blender",
    date: "2026-10-08",
    status: "en-proceso",
    note: "Grupo en curso · inscripciones cerradas",
  },
  {
    id: "l2",
    course: "Branding y Diseño de Marca",
    date: "2026-10-15",
    status: "en-proceso",
    note: "Últimos cupos disponibles",
  },
  {
    id: "l3",
    course: "Ilustración Digital",
    date: "2026-10-20",
    status: "en-proceso",
    note: "Inició esta semana",
  },
  {
    id: "l4",
    course: "UX/UI para Productos Digitales",
    date: "2026-11-10",
    status: "proximo",
    note: "Preinscripción abierta",
  },
  {
    id: "l5",
    course: "Motion Graphics",
    date: "2026-11-25",
    status: "proximo",
    note: "Preinscripción abierta",
  },
  {
    id: "l6",
    course: "Fotografía Publicitaria",
    date: "2026-12-05",
    status: "proximo",
    note: "Cupos limitados",
  },
  {
    id: "l7",
    course: "Diseño Editorial",
    date: "2027-01-15",
    status: "proximo",
    note: "Inscripciones desde diciembre",
  },
];

/* ------------------------------------------------------------------ */
/* Inscripción — pasos, requisitos y pagos                             */
/* ------------------------------------------------------------------ */
export const enrollmentSteps: EnrollmentStep[] = [
  {
    id: 1,
    title: "Elige tu curso",
    description: "Revisa el catálogo, la modalidad y la duración. Si tienes dudas, escríbenos por WhatsApp.",
    icon: "MousePointerClick",
  },
  {
    id: 2,
    title: "Completa la preinscripción",
    description: "Llena el formulario en línea con tus datos. Recibirás un correo de confirmación con tu código.",
    icon: "ClipboardList",
  },
  {
    id: 3,
    title: "Entrega tus requisitos",
    description: "Adjunta tu documentación en el portal o entrégala en coordinación académica del campus.",
    icon: "FileCheck2",
  },
  {
    id: 4,
    title: "Realiza el pago",
    description: "Paga por transferencia, QR simple, tarjeta o en caja. Conserva tu comprobante.",
    icon: "CreditCard",
  },
  {
    id: 5,
    title: "Confirma tu lugar",
    description: "Validamos tu pago y te enviamos el acceso al aula virtual y el calendario del grupo.",
    icon: "BadgeCheck",
  },
];

export const requirements: string[] = [
  "Documento de identidad (CI) vigente",
  "Certificado de bachiller o nivel equivalente",
  "Fotografía reciente tamaño carnet",
  "Comprobante de pago (transferencia, QR o caja)",
  "Formulario de preinscripción completado",
];

export const paymentMethods: PaymentMethod[] = [
  { id: "p1", name: "Transferencia bancaria", detail: "Cuenta institucional — 30% de descuento antes del cierre", icon: "Landmark" },
  { id: "p2", name: "QR simple de pago", detail: "Escanea y paga desde tu app bancaria en segundos", icon: "QrCode" },
  { id: "p3", name: "Tarjeta débito / crédito", detail: "Hasta 3 cuotas sin interés en el portal de pagos", icon: "CreditCard" },
  { id: "p4", name: "Pago en caja", detail: "En coordinación académica, lunes a viernes de 08:00 a 19:00", icon: "Banknote" },
];

/* ------------------------------------------------------------------ */
/* Contacto / WhatsApp                                                 */
/* ------------------------------------------------------------------ */
export const contactWhatsApp = {
  display: "+591 700 12345",
  number: "59170012345",
  message: "Hola, quiero información sobre los cursos e inscripciones de Diseño Gráfico y Animación.",
  email: "disenografico@universidad.edu",
};

export const whatsappLink = `https://wa.me/${contactWhatsApp.number}?text=${encodeURIComponent(contactWhatsApp.message)}`;
