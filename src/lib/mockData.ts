/**
 * DATOS MOCK — Capa de datos del portal.
 * Cada colección simula la respuesta de un endpoint REST/GraphQL.
 * Para conectar una API o CMS basta sustituir estos objetos por fetch()
 * manteniendo las mismas interfaces de `src/types`.
 */

import type {
  Call,
  CampusEvent,
  CalendarEventItem,
  CareerArea,
  FAQItem,
  GraduationModality,
  GraduationStep,
  HonorStudent,
  HeroStat,
  JobMarketSummary,
  NewsItem,
  Promotion,
  QuickFact,
  Scholarship,
  Semester,
  StudentClub,
  StudentProject,
  Teacher,
  Testimonial,
  Benefit,
} from "@/types";

/* ------------------------------------------------------------------ */
/* Hero — indicadores rápidos y marquesina de disciplinas              */
/* ------------------------------------------------------------------ */
export const heroStats: HeroStat[] = [
  { value: "+480", label: "Créditos" },
  { value: "+40", label: "Asignaturas" },
  { value: "15", label: "Áreas laborales" },
];

export const marqueeWords: string[] = [
  "Branding",
  "Motion graphics",
  "Ilustración",
  "Animación 2D",
  "Animación 3D",
  "Diseño editorial",
  "UX/UI",
  "Fotografía",
  "Arte digital",
  "Diseño web",
];

/* ------------------------------------------------------------------ */
/* GET /api/carrera/resumen                                            */
/* ------------------------------------------------------------------ */
export const quickFacts: QuickFact[] = [
  { id: "q1", label: "Duración", value: "4 años", sub: "8 semestres", icon: "Clock" },
  { id: "q2", label: "Modalidad", value: "Presencial", sub: "Campus universitario", icon: "Building2" },
  { id: "q3", label: "Semestres", value: "8", sub: "Plan por competencias", icon: "Layers" },
  { id: "q4", label: "Créditos", value: "480", sub: "Carga total del plan", icon: "Award" },
  { id: "q5", label: "Turno", value: "Matutino / Vespertino", sub: "Grupos reducidos", icon: "Sun" },
  { id: "q6", label: "Nivel", value: "Licenciatura", sub: "RVOE vigente", icon: "GraduationCap" },
];

export const careerBenefits: Benefit[] = [
  { id: "b1", title: "Desarrollo de creatividad", description: "Metodologías activas de ideación, brainstorming y pensamiento lateral aplicadas a proyectos reales desde el primer semestre.", icon: "Lightbulb" },
  { id: "b2", title: "Herramientas digitales", description: "Dominio del ecosistema Adobe Creative Cloud, Blender, Figma y suites de animación con certificaciones oficiales.", icon: "Wrench" },
  { id: "b3", title: "Identidad visual", description: "Construcción de marcas completas: naming, logotipo, sistema visual, manual de identidad y aplicaciones.", icon: "Fingerprint" },
  { id: "b4", title: "Animación 2D y 3D", description: "Del storyboard al render final: principios de animación, rigging, modelado y simulación de efectos.", icon: "Clapperboard" },
  { id: "b5", title: "Producción audiovisual", description: "Guion, dirección, fotografía, edición y postproducción para piezas publicitarias y cinematográficas.", icon: "Video" },
  { id: "b6", title: "Ilustración digital", description: "Técnicas tradicionales y digitales: personaje, entornos, conceptual art e ilustración editorial.", icon: "Palette" },
  { id: "b7", title: "Diseño editorial", description: "Sistemas de retícula, tipografía aplicada y maquetación para revistas, libros y publicaciones digitales.", icon: "BookOpen" },
  { id: "b8", title: "Diseño web", description: "Diseño de interfaces, prototipado interactivo y fundamentos de UX/UI para productos digitales.", icon: "MonitorSmartphone" },
  { id: "b9", title: "Motion graphics", description: "Gráficos en movimiento para TV, redes sociales y plataformas digitales con After Effects y Cinema 4D.", icon: "Sparkles" },
  { id: "b10", title: "Comunicación visual", description: "Semiótica, teoría del color y percepción para construir mensajes eficaces con propósito estratégico.", icon: "MessagesSquare" },
];

/* ------------------------------------------------------------------ */
/* GET /api/plan-estudios                                              */
/* ------------------------------------------------------------------ */
export const studyPlan: Semester[] = [
  {
    number: 1,
    period: "Fundamentos",
    subjects: [
      { code: "DG-101", name: "Fundamentos del Diseño", description: "Elementos y principios visuales: composición, equilibrio, ritmo y jerarquía aplicados a proyectos gráficos.", credits: 8, type: "Básica" },
      { code: "DG-102", name: "Dibujo", description: "Dibujo de observación, figura humana y perspectiva como base del pensamiento visual.", credits: 6, type: "Básica" },
      { code: "DG-103", name: "Teoría del Color", description: "Sistemas de color, armonías, psicología del color y su aplicación en marcas y medios.", credits: 6, type: "Básica" },
      { code: "DG-104", name: "Historia del Arte", description: "Recorrido por las vanguardias y movimientos que moldearon el diseño moderno.", credits: 5, type: "Básica" },
      { code: "DG-105", name: "Comunicación Visual", description: "Semiótica básica, percepción y construcción de mensajes visuales eficaces.", credits: 6, type: "Básica" },
    ],
  },
  {
    number: 2,
    period: "Disciplinas aplicadas",
    subjects: [
      { code: "DG-201", name: "Diseño Editorial", description: "Retículas, maquetación y sistemas de publicación para prensa, revista y libro.", credits: 7, type: "Profesional" },
      { code: "DG-202", name: "Ilustración", description: "Técnicas de ilustración analógica y digital con enfoque editorial y comercial.", credits: 7, type: "Profesional" },
      { code: "DG-203", name: "Fotografía", description: "Manejo de cámara, iluminación, composición y edición fotográfica profesional.", credits: 6, type: "Profesional" },
      { code: "DG-204", name: "Tipografía", description: "Anatomía tipográfica, clasificación y uso expresivo del lettering y las fuentes.", credits: 7, type: "Profesional" },
      { code: "DG-205", name: "Diseño Digital", description: "Fundamentos de diseño para pantalla, grillas responsivas y herramientas vectoriales.", credits: 6, type: "Profesional" },
    ],
  },
  {
    number: 3,
    period: "Especialización I",
    subjects: [
      { code: "DG-301", name: "Animación 2D", description: "Principios de animación, storyboard y producción de piezas 2D con herramientas digitales.", credits: 8, type: "Profesional" },
      { code: "DG-302", name: "Diseño de Identidad", description: "Branding integral: investigación, concepto, logotipo y manual de marca.", credits: 8, type: "Profesional" },
      { code: "DG-303", name: "Diseño Web", description: "Interfaces web, prototipado en Figma y fundamentos de UX.", credits: 7, type: "Profesional" },
      { code: "DG-304", name: "Edición Digital", description: "Postproducción de video, color grading y flujo de trabajo audiovisual.", credits: 6, type: "Profesional" },
      { code: "DG-305", name: "Narrativa Visual", description: "Guion, secuencias y lenguaje cinematográfico aplicado a piezas de comunicación.", credits: 6, type: "Profesional" },
    ],
  },
  {
    number: 4,
    period: "Especialización II",
    subjects: [
      { code: "DG-401", name: "Animación 3D", description: "Modelado, texturizado, iluminación y render 3D con Blender y Cinema 4D.", credits: 8, type: "Especialidad" },
      { code: "DG-402", name: "Diseño Publicitario", description: "Estrategia creativa, campañas integradas y diseño de piezas BTL y digitales.", credits: 7, type: "Especialidad" },
      { code: "DG-403", name: "Motion Graphics", description: "Gráficos en movimiento con After Effects: kinetic typography y animación de logos.", credits: 8, type: "Especialidad" },
      { code: "DG-404", name: "Ilustración Digital Avanzada", description: "Concept art, personajes y entornos con flujos profesionales.", credits: 6, type: "Especialidad" },
      { code: "DG-405", name: "Emprendimiento Creativo", description: "Modelos de negocio para creativos, freelancing y gestión de estudios de diseño.", credits: 5, type: "Optativa" },
    ],
  },
  {
    number: 5,
    period: "Proyectos integradores",
    subjects: [
      { code: "DG-501", name: "UX/UI Avanzado", description: "Investigación de usuario, wireframes, testeo e interfaces de producto digital.", credits: 8, type: "Especialidad" },
      { code: "DG-502", name: "Dirección de Arte", description: "Conceptualización visual de campañas y dirección de equipos creativos.", credits: 7, type: "Especialidad" },
      { code: "DG-503", name: "Producción Audiovisual", description: "Planificación, rodaje y postproducción de piezas audiovisuales integrales.", credits: 8, type: "Especialidad" },
      { code: "DG-504", name: "Diseño de Envases y Empaques", description: "Packaging, materiales, sostenibilidad y normativas comerciales.", credits: 6, type: "Especialidad" },
      { code: "DG-505", name: "Fotografía Editorial", description: "Producción fotográfica para editoriales, moda y publicidad.", credits: 6, type: "Optativa" },
    ],
  },
  {
    number: 6,
    period: "Industria y experimentación",
    subjects: [
      { code: "DG-601", name: "Animación Experimental", description: "Técnicas mixtas, stop motion y animación autoral de vanguardia.", credits: 7, type: "Especialidad" },
      { code: "DG-602", name: "Diseño de Interfaces Interactivas", description: "Microinteracciones, design systems y prototipos de alta fidelidad.", credits: 8, type: "Especialidad" },
      { code: "DG-603", name: "Comunicación Estratégica", description: "Branding corporativo, reputación y comunicación visual organizacional.", credits: 7, type: "Especialidad" },
      { code: "DG-604", name: "Proyectos de Impacto Social", description: "Diseño social: campañas para ONG y problemáticas comunitarias.", credits: 6, type: "Optativa" },
      { code: "DG-605", name: "Portafolio Profesional", description: "Curaduría, presentación y marca personal para el mercado creativo.", credits: 5, type: "Profesional" },
    ],
  },
  {
    number: 7,
    period: "Vinculación profesional",
    subjects: [
      { code: "DG-701", name: "Prácticas Profesionales", description: "Estancia en agencias, estudios o empresas con supervisión académica.", credits: 10, type: "Profesional" },
      { code: "DG-702", name: "Proyecto Integral de Diseño", description: "Desarrollo de un proyecto profesional completo de inicio a entrega.", credits: 9, type: "Profesional" },
      { code: "DG-703", name: "Gestión de Proyectos Creativos", description: "Metodologías ágiles, presupuesto y coordinación de equipos multidisciplinarios.", credits: 6, type: "Especialidad" },
      { code: "DG-704", name: "Animación para Videojuegos", description: "Assets, sprites y cinemáticas para la industria gamer.", credits: 7, type: "Optativa" },
    ],
  },
  {
    number: 8,
    period: "Titulación",
    subjects: [
      { code: "DG-801", name: "Seminario de Titulación", description: "Acompañamiento para la definición y desarrollo del proyecto de titulación.", credits: 8, type: "Profesional" },
      { code: "DG-802", name: "Proyecto de Titulación", description: "Ejecución del proyecto final con defensa ante sinodales.", credits: 12, type: "Profesional" },
      { code: "DG-803", name: "Ética Profesional", description: "Derechos de autor, propiedad intelectual y responsabilidad del diseñador.", credits: 4, type: "Básica" },
      { code: "DG-804", name: "Tendencias del Diseño", description: "Análisis crítico de tendencias globales: IA generativa, diseño sostenible y nuevos medios.", credits: 5, type: "Optativa" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* GET /api/mercado-laboral                                            */
/* ------------------------------------------------------------------ */
export const careerAreas: CareerArea[] = [
  { id: "a1", title: "Diseñador gráfico", description: "Soluciones visuales integrales para marcas, medios e instituciones.", icon: "PenTool", gradient: "from-violet-500 to-fuchsia-500", demand: 95 },
  { id: "a2", title: "Diseñador UX/UI", description: "Experiencias digitales centradas en el usuario para apps y plataformas web.", icon: "MonitorSmartphone", gradient: "from-fuchsia-500 to-rose-500", demand: 98 },
  { id: "a3", title: "Ilustrador digital", description: "Ilustración editorial, conceptual y comercial para editoriales y agencias.", icon: "Brush", gradient: "from-orange-500 to-amber-500", demand: 82 },
  { id: "a4", title: "Animador 2D", description: "Animación tradicional y digital para series, publicidad y plataformas streaming.", icon: "Film", gradient: "from-cyan-500 to-sky-500", demand: 88 },
  { id: "a5", title: "Animador 3D", description: "Modelado, rigging y VFX para cine, videojuegos y publicidad.", icon: "Boxes", gradient: "from-violet-500 to-indigo-500", demand: 90 },
  { id: "a6", title: "Motion designer", description: "Gráficos en movimiento para TV, redes y eventos en vivo.", icon: "Sparkles", gradient: "from-magenta-500 to-pink-500", demand: 93 },
  { id: "a7", title: "Director de arte", description: "Liderazgo visual de campañas publicitarias y producciones audiovisuales.", icon: "Crown", gradient: "from-amber-500 to-orange-600", demand: 78 },
  { id: "a8", title: "Diseñador editorial", description: "Publicaciones impresas y digitales para editoriales y prensa.", icon: "BookOpen", gradient: "from-emerald-500 to-teal-500", demand: 70 },
  { id: "a9", title: "Diseñador de identidad", description: "Branding corporativo y sistemas visuales de marca.", icon: "Fingerprint", gradient: "from-pink-500 to-rose-600", demand: 86 },
  { id: "a10", title: "Diseñador web", description: "Sitios y landing pages con foco estético y de conversión.", icon: "Globe", gradient: "from-sky-500 to-blue-500", demand: 91 },
  { id: "a11", title: "Productor audiovisual", description: "Contenido para YouTube, streaming y campañas digitales.", icon: "Clapperboard", gradient: "from-red-500 to-orange-500", demand: 84 },
  { id: "a12", title: "Artista digital", description: "Creación artística con nuevas tecnologías: arte generativo, NFT y digital art.", icon: "Palette", gradient: "from-purple-500 to-violet-600", demand: 65 },
  { id: "a13", title: "Content designer", description: "Diseño de contenido visual para redes y marketing digital.", icon: "Megaphone", gradient: "from-lime-500 to-green-500", demand: 89 },
  { id: "a14", title: "Freelancer", description: "Práctica independiente con clientes globales en plataformas digitales.", icon: "Laptop", gradient: "from-teal-500 to-cyan-500", demand: 92 },
  { id: "a15", title: "Emprendedor creativo", description: "Estudios propios, productos creativos y startups de diseño.", icon: "Rocket", gradient: "from-fuchsia-600 to-purple-700", demand: 75 },
];

export const jobMarketSummary: JobMarketSummary = {
  employability: 87,
  professionalAreas: careerAreas.length,
  industryPartners: 12,
};

/* ------------------------------------------------------------------ */
/* GET /api/convocatorias                                              */
/* ------------------------------------------------------------------ */
export const calls: Call[] = [
  { id: "c1", name: "Admisión Agosto 2026", publishedAt: "2026-08-01", deadline: "2026-09-30", description: "Proceso de ingreso a la Licenciatura en Diseño Gráfico y Animación. Examen de diagnóstico y entrega de portafolio inicial (no eliminatorio).", status: "abierta", category: "ingreso" },
  { id: "c2", name: "Becas de Excelencia Académica", publishedAt: "2026-08-10", deadline: "2026-10-15", description: "Becas de 50% a 100% para aspirantes con promedio mínimo de 9.0 y estudiantes destacados del programa.", status: "abierta", category: "becas" },
  { id: "c3", name: "Concurso Nacional de Cartel Universitario", publishedAt: "2026-08-20", deadline: "2026-10-05", description: "Participación en la 12ª edición del concurso con tema libre de comunicación visual. Categoría individual y por equipos.", status: "abierta", category: "concursos" },
  { id: "c4", name: "Programa de Intercambio Internacional", publishedAt: "2026-07-15", deadline: "2026-09-10", description: "Convocatoria de movilidad con universidades de España, México y Colombia para el ciclo primavera 2027.", status: "cerrada", category: "intercambios" },
  { id: "c5", name: "Prácticas Profesionales Verano 2027", publishedAt: "2026-09-01", deadline: "2026-11-20", description: "Estancias remuneradas en agencias y estudios creativos aliados durante el periodo vacacional.", status: "proxima", category: "practicas" },
  { id: "c6", name: "Servicio Social Comunitario", publishedAt: "2026-08-25", deadline: "2026-10-30", description: "Programas de diseño social con ONG y gobiernos locales: identidad visual y campañas de impacto.", status: "abierta", category: "servicio" },
  { id: "c7", name: "Becas Deportivas y Culturales", publishedAt: "2026-09-05", deadline: "2026-10-25", description: "Apoyos del 30% al 60% para atletas y artistas que representen a la universidad.", status: "proxima", category: "becas" },
  { id: "c8", name: "Admisión Enero 2027", publishedAt: "2026-10-01", deadline: "2026-12-15", description: "Segundo proceso de admisión del año académico con cupos limitados por turno.", status: "proxima", category: "ingreso" },
];

/* ------------------------------------------------------------------ */
/* GET /api/eventos                                                    */
/* ------------------------------------------------------------------ */
export const events: CampusEvent[] = [
  { id: "e1", title: "Workshop de Animación 3D", date: "2026-10-08", time: "16:00 - 19:00", place: "Laboratorio de Producción Digital", description: "Intensivo de modelado y render con Blender impartido por estudio invitado. Cupo limitado a 25 participantes.", category: "talleres", gradient: "from-violet-600 to-fuchsia-600", icon: "Boxes" },
  { id: "e2", title: "Concurso de Cartel 'Visualiza'", date: "2026-10-15", time: "10:00 - 14:00", place: "Explanada Central", description: "Competencia anual de diseño de cartel con jurado de profesionales. Premiación y exposición de finalistas.", category: "concursos", gradient: "from-orange-500 to-rose-500", icon: "Trophy" },
  { id: "e3", title: "Exposición de Ilustración Estudiantil", date: "2026-10-20", time: "Todo el día", place: "Galería Universitaria", description: "Muestra colectiva con más de 60 piezas de ilustración digital y tradicional de estudiantes de todos los semestres.", category: "exposiciones", gradient: "from-cyan-500 to-blue-500", icon: "Image" },
  { id: "e4", title: "Conferencia: Futuro del Motion Design", date: "2026-10-28", time: "18:00 - 20:00", place: "Auditorio Principal", description: "Charla magistral con director de arte de un estudio internacional sobre tendencias de gráficos en movimiento.", category: "conferencias", gradient: "from-fuchsia-600 to-pink-600", icon: "Mic" },
  { id: "e5", title: "Festival de Animación UNI-FEST", date: "2026-11-05", time: "12:00 - 21:00", place: "Campus Completo", description: "Tres días de proyecciones, paneles y meet & greet con animadores invitados. Entrada libre.", category: "actividades", gradient: "from-amber-500 to-orange-600", icon: "PartyPopper" },
  { id: "e6", title: "Masterclass: Branding Estratégico", date: "2026-11-12", time: "17:00 - 20:00", place: "Sala Magna", description: "Sesión premium sobre construcción de marcas contemporáneas con case studies de la región.", category: "conferencias", gradient: "from-emerald-500 to-teal-600", icon: "Presentation" },
  { id: "e7", title: "Feria de Proyectos de Semestre", date: "2026-11-25", time: "09:00 - 17:00", place: "Pabellón de Innovación", description: "Exhibición y pitch de los mejores proyectos académicos del ciclo ante jury de la industria y público general.", category: "actividades", gradient: "from-indigo-600 to-violet-700", icon: "Tent" },
  { id: "e8", title: "Taller de Lettering Creativo", date: "2026-11-18", time: "15:00 - 18:00", place: "Taller de Diseño 2", description: "Exploración práctica del lettering a mano y digitalización vectorial para marcas y packaging.", category: "talleres", gradient: "from-pink-500 to-rose-600", icon: "PenTool" },
];

/* ------------------------------------------------------------------ */
/* GET /api/calendario                                                 */
/* ------------------------------------------------------------------ */
export const calendarEvents: CalendarEventItem[] = [
  { id: "k1", date: "2026-09-07", title: "Inicio de semestre otoño", category: "semestre" },
  { id: "k2", date: "2026-09-14", title: "Periodo de inscripción en línea", category: "inscripcion" },
  { id: "k3", date: "2026-09-21", title: "Cierre de inscripción", category: "inscripcion" },
  { id: "k4", date: "2026-10-08", title: "Workshop de Animación 3D", category: "eventos" },
  { id: "k5", date: "2026-10-15", title: "Concurso de Cartel 'Visualiza'", category: "eventos" },
  { id: "k6", date: "2026-10-19", title: "Evaluaciones parciales", category: "examenes" },
  { id: "k7", date: "2026-10-23", title: "Fin de evaluaciones parciales", category: "examenes" },
  { id: "k8", date: "2026-11-02", title: "Entrega de proyectos parciales", category: "proyectos" },
  { id: "k9", date: "2026-11-05", title: "Festival UNI-FEST", category: "eventos" },
  { id: "k10", date: "2026-11-20", title: "Cierre de convocatoria de becas", category: "convocatorias" },
  { id: "k11", date: "2026-12-14", title: "Evaluaciones finales", category: "examenes" },
  { id: "k12", date: "2026-12-18", title: "Cierre del semestre", category: "semestre" },
  { id: "k13", date: "2026-12-21", title: "Inicio de vacaciones de invierno", category: "vacaciones" },
  { id: "k14", date: "2027-01-08", title: "Fin de vacaciones de invierno", category: "vacaciones" },
  { id: "k15", date: "2027-01-11", title: "Inicio de semestre primavera", category: "semestre" },
  { id: "k16", date: "2027-01-18", title: "Inscripciones primavera", category: "inscripcion" },
  { id: "k17", date: "2026-11-25", title: "Feria de Proyectos de Semestre", category: "eventos" },
  { id: "k18", date: "2026-12-01", title: "Entrega final de portafolios", category: "proyectos" },
];

/* ------------------------------------------------------------------ */
/* GET /api/noticias                                                   */
/* ------------------------------------------------------------------ */
export const news: NewsItem[] = [
  {
    id: "n1",
    category: "Logros",
    title: "Estudiantes ganan concurso nacional de diseño",
    date: "2026-08-30",
    excerpt: "El equipo 'Píxel Rebelde' obtuvo el primer lugar del Concurso Nacional de Diseño Gráfico Universitario con una campaña sobre reciclaje urbano.",
    content: [
      "El equipo 'Píxel Rebelde', conformado por estudiantes de sexto semestre de la Licenciatura en Diseño Gráfico y Animación, alcanzó el primer lugar del Concurso Nacional de Diseño Gráfico Universitario, superando a más de 200 propuestas de todo el país.",
      "La pieza ganadora, una campaña integral sobre reciclaje urbano llamada 'La ciudad respira', destacó por su sistema visual adaptable, su narrativa ilustrada y una estrategia de medios que combina piezas impresas con filtros de realidad aumentada.",
      'El jurado, integrado por directores creativos de las agencias más importantes del país, calificó el trabajo como "una propuesta madura con un nivel de ejecución profesional". El equipo recibió una beca completa para un diplomado internacional y sus piezas serán publicadas en la revista especializada Marca.',
      "Este es el tercer año consecutivo que estudiantes del programa clasifican al podio de este certamen, reafirmando la calidad de la formación basada en proyectos reales y mentorías personalizadas.",
    ],
    gradient: "from-violet-600 via-fuchsia-600 to-pink-500",
    featured: true,
  },
  {
    id: "n2",
    category: "Eventos",
    title: "Nueva exposición de trabajos estudiantiles",
    date: "2026-08-22",
    excerpt: "La Galería Universitaria inaugura 'Sinergia Visual', una muestra con 80 piezas seleccionadas de proyectos de los últimos tres semestres.",
    content: [
      "La Galería Universitaria abre sus puertas a 'Sinergia Visual', la exposición semestral más completa del programa, con 80 piezas curadas entre ilustración, animación, fotografía, branding y diseño editorial.",
      "La curaduría, a cargo de docentes y egresados invitados, agrupa los trabajos en cuatro ejes: identidad, movimiento, narrativa y experimentación. Cada pieza cuenta con un código QR que enlaza al proceso creativo documentado en video.",
      "La exposición permanecerá abierta al público durante tres semanas con visitas guiadas gratuitas para escuelas de nivel medio superior interesadas en la carrera.",
    ],
    gradient: "from-cyan-500 via-sky-500 to-blue-600",
  },
  {
    id: "n3",
    category: "Academia",
    title: "Conferencia internacional de animación llega al campus",
    date: "2026-08-15",
    excerpt: "Animación en grande: la conferencia 'Animation Forward' reunirá a cinco estudios internacionales en formato híbrido.",
    content: [
      "El programa de Diseño Gráfico y Animación será sede de 'Animation Forward', la conferencia internacional que reúne a cinco estudios de animación de España, Argentina, Canadá y Japón.",
      "Las sesiones, en formato híbrido, abordarán pipelines de producción 3D, dirección de animación independiente y el impacto de las herramientas de IA generativa en el flujo de trabajo profesional.",
      "Los estudiantes del programa tienen acceso gratuito con inscripción previa, y los talleres prácticos otorgan créditos complementarios para el plan de estudios.",
    ],
    gradient: "from-fuchsia-600 via-purple-600 to-violet-700",
  },
  {
    id: "n4",
    category: "Infraestructura",
    title: "Nuevos laboratorios de producción digital",
    date: "2026-08-05",
    excerpt: "Se inauguran dos laboratorios equipados con estaciones de trabajo para 3D, render en la nube y cabinas de sonido.",
    content: [
      "La universidad inauguró dos nuevos laboratorios de producción digital diseñados específicamente para el programa: el Laboratorio de Animación y Render, con 30 estaciones de trabajo con GPU dedicada, y el Estudio de Producción Audiovisual con cycloorama, cabinas de sonido y set de iluminación profesional.",
      "La inversión incluye licencias institucionales actualizadas de la suite Adobe, Blender, Cinema 4D y Toon Boom, además de un clúster de render en la nube disponible para proyectos de titulación.",
      "Con esta ampliación, el programa duplica su capacidad de atención en horas de práctica y permite a los estudiantes trabajar con los mismos flujos técnicos que la industria.",
    ],
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
  },
  {
    id: "n5",
    category: "Academia",
    title: "Proyectos destacados del semestre",
    date: "2026-07-28",
    excerpt: "Conoce los seis proyectos que sobresalieron en la feria de semestre: desde un corto animado hasta un sistema de señalética urbana.",
    content: [
      "La feria de proyectos de semestre cerró su edición más competida con 46 equipos participantes. Los seis proyectos ganadores abarcan un cortometraje animado en stop motion, un rediseño de señalética para el centro histórico, una app de artesanía local y tres campañas de branding para emprendedores sociales.",
      "Cada proyecto fue desarrollado durante 16 semanas con acompañamiento de un docente guía y un mentor de la industria, evaluando investigación, ejecución técnica e impacto.",
      "Los proyectos seleccionados representarán a la universidad en ferias nacionales de diseño durante el próximo ciclo.",
    ],
    gradient: "from-rose-500 via-pink-500 to-fuchsia-600",
  },
  {
    id: "n6",
    category: "Convenios",
    title: "Convenio con estudio de animación internacional",
    date: "2026-07-15",
    excerpt: "Firmamos alianza con un estudio líder para prácticas profesionales, mentorías y un nuevo premio anual de animación.",
    content: [
      "La universidad firmó un convenio de colaboración con un estudio de animación de talla internacional que abrirá dos plazas de prácticas remuneradas por semestre exclusivas para estudiantes del programa.",
      "El acuerdo incluye un programa de mentorías trimestrales con artistas del estudio, revisión de portafolios y la creación del premio anual 'Frame por Frame' para el mejor corto de animación de titulación.",
      "Con esta alianza son ya doce los convenios activos con la industria creativa que benefician directamente a los estudiantes en su inserción profesional.",
    ],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
  },
];

/* ------------------------------------------------------------------ */
/* GET /api/promociones                                                */
/* ------------------------------------------------------------------ */
export const promotions: Promotion[] = [
  { id: "p1", title: "Descuento en inscripción", discount: "25%", validity: "Hasta el 30 de septiembre", conditions: "Aplica para nuevo ingreso que complete su registro antes de la fecha límite.", description: "Inscríbete durante el periodo promocional y obtén un 25% de descuento en el pago único de inscripción.", gradient: "from-violet-600 to-fuchsia-600", icon: "BadgePercent" },
  { id: "p2", title: "Promoción de nuevo ingreso", discount: "2x1 en talleres", validity: "Todo el primer semestre", conditions: "Válido para alumnos de primer ingreso inscritos a tiempo completo.", description: "Los estudiantes de nuevo ingreso pueden cursar dos talleres artísticos de ampliación sin costo adicional.", gradient: "from-fuchsia-600 to-rose-500", icon: "Gift" },
  { id: "p3", title: "Descuento en talleres especializados", discount: "30%", validity: "Cupo limitado", conditions: "Descuento aplicable a un taller por semestre, no acumulable con otras promociones.", description: "Reducimos 30% el costo de talleres especializados de lettering, fotografía y animación experimental.", gradient: "from-orange-500 to-amber-500", icon: "Scissors" },
  { id: "p4", title: "Curso de software premium", discount: "Gratis", validity: "Primer curso", conditions: "Disponible para aspirantes que confirman su inscripción al programa.", description: "Curso introductorio de la suite Adobe con constancia oficial, sin costo al confirmar tu inscripción.", gradient: "from-cyan-500 to-blue-500", icon: "Laptop" },
  { id: "p5", title: "Beneficio por prompto pago", discount: "10%", validity: "Cada semestre", conditions: "Aplica al liquidar la colegiatura del semestre en una sola exhibición antes de la semana 1.", description: "Pagando tu semestre por adelantado obtienes un 10% de descuento sobre la colegiatura total.", gradient: "from-emerald-500 to-teal-500", icon: "Wallet" },
  { id: "p6", title: "Kit creativo de bienvenida", discount: "Incluido", validity: "Solo nuevo ingreso", conditions: "Entregable en ventanilla escolar durante la semana de inducción.", description: "Tableta gráfica de entrada, licencia educativa de Figma y kit de material artístico de cortesía.", gradient: "from-pink-500 to-purple-600", icon: "Package" },
];

/* ------------------------------------------------------------------ */
/* GET /api/docentes                                                   */
/* ------------------------------------------------------------------ */
export const teachers: Teacher[] = [
  { id: "t1", name: "María Fernanda Ruiz", role: "Coordinadora de la carrera", specialty: "Diseño gráfico", subjects: ["Fundamentos del Diseño", "Diseño de Identidad"], experience: 16, bio: "Diseñadora industrial con maestría en Comunicación Visual. Ha liderado proyectos de identidad para más de 40 marcas y publicó el libro 'Sistemas visuales contemporáneos'.", initials: "MR", gradient: "from-violet-500 to-fuchsia-500" },
  { id: "t2", name: "Carlos Mendoza", role: "Profesor titular", specialty: "Animación", subjects: ["Animación 2D", "Animación 3D", "Motion Graphics"], experience: 12, bio: "Animador con experiencia en series televisivas y publicidad. Certificado en Blender y Cinema 4D, mentor de tres cortos premiados a nivel estudiantil.", initials: "CM", gradient: "from-cyan-500 to-blue-500" },
  { id: "t3", name: "Lucía Ortega", role: "Profesora titular", specialty: "Ilustración", subjects: ["Ilustración", "Ilustración Digital Avanzada"], experience: 10, bio: "Ilustradora editorial con publicaciones en editoriales nacionales e internacionales. Especialista en narrativa visual y desarrollo de personajes.", initials: "LO", gradient: "from-orange-500 to-amber-500" },
  { id: "t4", name: "Andrés Salazar", role: "Profesor de cátedra", specialty: "Fotografía", subjects: ["Fotografía", "Fotografía Editorial"], experience: 14, bio: "Fotógrafo documental con exposiciones colectivas en tres países. Coordina el laboratorio fotográfico y el club de fotografía estudiantil.", initials: "AS", gradient: "from-emerald-500 to-teal-500" },
  { id: "t5", name: "Valeria Campos", role: "Profesora titular", specialty: "UX/UI", subjects: ["Diseño Web", "UX/UI Avanzado", "Diseño de Interfaces Interactivas"], experience: 9, bio: "Diseñadora de producto digital para fintechs y plataformas educativas. Certificada en investigación de usuario y design systems.", initials: "VC", gradient: "from-fuchsia-500 to-pink-500" },
  { id: "t6", name: "Roberto Delgado", role: "Profesor de cátedra", specialty: "Audiovisual", subjects: ["Edición Digital", "Producción Audiovisual", "Narrativa Visual"], experience: 18, bio: "Realizador audiovisual con premios nacionales de cortometraje. Dirige el estudio de producción y supervisa los proyectos de titulación audiovisuales.", initials: "RD", gradient: "from-purple-500 to-violet-600" },
  { id: "t7", name: "Gabriela Herrera", role: "Profesora titular", specialty: "Branding", subjects: ["Diseño de Identidad", "Comunicación Estratégica"], experience: 13, bio: "Estratega de marca con paso por agencias multinacionales. Consultora de branding para PYMES y docente invitada en congresos de diseño.", initials: "GH", gradient: "from-rose-500 to-orange-500" },
  { id: "t8", name: "Diego Ramírez", role: "Profesor de apoyo", specialty: "Diseño gráfico", subjects: ["Tipografía", "Diseño Editorial", "Lettering"], experience: 8, bio: "Diseñador tipográfico con fuentes publicadas en catálogos digitales. Entusiasta del lettering analógico y la edición experimental.", initials: "DR", gradient: "from-indigo-500 to-purple-500" },
];

/* ------------------------------------------------------------------ */
/* GET /api/proyectos-estudiantiles                                    */
/* ------------------------------------------------------------------ */
export const studentProjects: StudentProject[] = [
  { id: "s1", name: "La ciudad respira", author: "Ana Villalobos", semester: "6º semestre", category: "Diseño gráfico", description: "Campaña integral de reciclaje urbano con sistema visual adaptable y realidad aumentada.", gradient: "from-violet-600 to-fuchsia-500", icon: "Recycle" },
  { id: "s2", name: "Fauna Fantástica", author: "Bruno Cárdenas", semester: "5º semestre", category: "Ilustración", description: "Bestiario ilustrado de criaturas mitológicas locales con técnica mixta digital.", gradient: "from-orange-500 to-amber-500", icon: "Dragon" },
  { id: "s3", name: "Ciclo urbano", author: "Camila Duarte", semester: "7º semestre", category: "Animación", description: "Corto animado 2D sobre movilidad en bicicleta, seleccionado en festival nacional.", gradient: "from-cyan-500 to-sky-500", icon: "Film" },
  { id: "s4", name: "Retratos de barrio", author: "Daniel Estévez", semester: "4º semestre", category: "Fotografía", description: "Serie documental fotográfica sobre oficios tradicionales del centro histórico.", gradient: "from-emerald-500 to-teal-500", icon: "Camera" },
  { id: "s5", name: "Café Andino", author: "Elena Fuentes", semester: "6º semestre", category: "Branding", description: "Identidad integral para tostadora de café: naming, packaging y narrativa de marca.", gradient: "from-amber-600 to-orange-600", icon: "Coffee" },
  { id: "s6", name: "Escenas mínimas", author: "Fernando Gómez", semester: "8º semestre", category: "Audiovisual", description: "Webserie experimental de micro-relatos filmados en un solo plano secuencia.", gradient: "from-rose-500 to-pink-600", icon: "Clapperboard" },
  { id: "s7", name: "Ruta Cultural App", author: "Gabriela Ibarra", semester: "5º semestre", category: "UX/UI", description: "Aplicación de turismo cultural con mapa interactivo y diseño accesible.", gradient: "from-indigo-500 to-violet-600", icon: "Map" },
  { id: "s8", name: "Tipografía Bailable", author: "Héctor Juárez", semester: "7º semestre", category: "Diseño gráfico", description: "Fuentes variables inspiradas en el movimiento de la danza folclórica.", gradient: "from-purple-600 to-fuchsia-600", icon: "Type" },
  { id: "s9", name: "Selva de concrete", author: "Irene Kattan", semester: "6º semestre", category: "Ilustración", description: "Ensayo visual sobre arquitectura brutalista con ilustración vectorial y collage.", gradient: "from-lime-500 to-green-600", icon: "Building" },
  { id: "s10", name: "Frame a Frame", author: "Jorge Lemus", semester: "8º semestre", category: "Animación", description: "Cortometraje en stop motion con materiales reciclados para la tesis de titulación.", gradient: "from-red-500 to-orange-500", icon: "Layers" },
  { id: "s11", name: "Mercado Vivo", author: "Karla Molina", semester: "4º semestre", category: "Fotografía", description: "Ensayo fotográfico color sobre mercados tradicionales y sus protagonistas.", gradient: "from-yellow-500 to-amber-600", icon: "Store" },
  { id: "s12", name: "Petit Banco", author: "Lucas Navarro", semester: "5º semestre", category: "Branding", description: "Rebranding bancario juvenil con tono editorial e ilustraciones financieras amigables.", gradient: "from-sky-500 to-blue-600", icon: "PiggyBank" },
];

/* ------------------------------------------------------------------ */
/* GET /api/clubes-estudiantiles                                       */
/* ------------------------------------------------------------------ */
export const studentClubs: StudentClub[] = [
  { title: "Club de Animación", description: "Screenings semanales y producción colectiva de cortos.", icon: "Clapperboard", gradient: "from-violet-600 to-fuchsia-600" },
  { title: "Club de Fotografía", description: "Caminatas fotográficas y laboratorio analógico.", icon: "Camera", gradient: "from-cyan-500 to-blue-600" },
  { title: "Concursos y Reconocimientos", description: "Delegación oficial en certámenes nacionales cada año.", icon: "Trophy", gradient: "from-amber-500 to-orange-600" },
  { title: "Exposiciones Permanentes", description: "Curaduría semestral en la galería universitaria.", icon: "Frame", gradient: "from-emerald-500 to-teal-600" },
];

/* ------------------------------------------------------------------ */
/* GET /api/cuadro-honor                                               */
/* ------------------------------------------------------------------ */
export const honorStudents: HonorStudent[] = [
  { id: "h1", name: "Adriana Peña", semester: "8º semestre", average: 9.9, award: "Medalla de Excelencia", achievements: ["Primer lugar nacional en concurso de diseño", "Presidenta del club de animación"], initials: "AP", gradient: "from-amber-400 via-yellow-500 to-orange-500" },
  { id: "h2", name: "Bruno Salas", semester: "7º semestre", average: 9.8, award: "Mención Honorífica", achievements: ["Corto animado en selección oficial internacional", "Beca de excelencia 3 años consecutivos"], initials: "BS", gradient: "from-violet-400 via-purple-500 to-fuchsia-500" },
  { id: "h3", name: "Carla Méndez", semester: "6º semestre", average: 9.7, award: "Mención Honorífica", achievements: ["Identidad visual adoptada por ONG regional", "Ponente en congreso juvenil de diseño"], initials: "CM", gradient: "from-cyan-400 via-sky-500 to-blue-500" },
];

/* ------------------------------------------------------------------ */
/* GET /api/becas                                                      */
/* ------------------------------------------------------------------ */
export const scholarships: Scholarship[] = [
  { id: "b1", name: "Beca académica", benefit: "Descuento sobre colegiatura", percentage: "30% - 60%", requirements: ["Promedio mínimo 9.0", "No tener materias reprobadas", "Carta de compromiso"], callDate: "Septiembre y febrero", documents: ["Historial académico", "Identificación oficial", "Comprobante de estudios"], icon: "BookOpen" },
  { id: "b2", name: "Beca deportiva", benefit: "Apoyo integral al atleta", percentage: "40% - 70%", requirements: ["Pertenecer a selecciones deportivas", "Asistir a 90% de entrenamientos", "Representar a la universidad"], callDate: "Todo el año", documents: ["Carta de la coordinación deportiva", "Historial de participaciones"], icon: "Dumbbell" },
  { id: "b3", name: "Beca cultural", benefit: "Apoyo a artistas", percentage: "30% - 50%", requirements: ["Participar en grupos artísticos", "Presentación pública semestral", "Aval del grupo cultural"], callDate: "Septiembre y febrero", documents: ["Portafolio artístico", "Carta del grupo cultural"], icon: "Theater" },
  { id: "b4", name: "Beca socioeconómica", benefit: "Apoyo por situación económica", percentage: "20% - 80%", requirements: ["Estudio socioeconómico", "Promedio mínimo 8.5", "Entrevista con trabajo social"], callDate: "Todo el año", documents: ["Comprobantes de ingresos", "Estudio socioeconómico", "Identificación oficial"], icon: "HeartHandshake" },
  { id: "b5", name: "Beca de excelencia", benefit: "Reconocimiento al mejor promedio", percentage: "100%", requirements: ["Promedio mínimo 9.8", "Cero materias reprobadas", "Participación en concursos"], callDate: "Anual - agosto", documents: ["Historial académico completo", "Constancias de premios"], icon: "Trophy" },
  { id: "b6", name: "Beca para proyectos", benefit: "Fondo de incubación creativa", percentage: "50%", requirements: ["Proyecto aprobado por comité", "Presentación de cronograma", "Vinculación con emprendimiento"], callDate: "Marzo y septiembre", documents: ["Plan de proyecto", "Presupuesto estimado", "Portafolio del equipo"], icon: "Rocket" },
  { id: "b7", name: "Beca de movilidad", benefit: "Intercambio internacional", percentage: "70%", requirements: ["Promedio mínimo 9.0", "Idioma certificado B2", "Ser estudiante regular"], callDate: "Anual - abril", documents: ["Certificado de idioma", "Carta de aceptación de universidad destino"], icon: "Plane" },
];

/* ------------------------------------------------------------------ */
/* GET /api/titulacion                                                 */
/* ------------------------------------------------------------------ */
export const graduationSteps: GraduationStep[] = [
  { id: 1, title: "Concluir materias", description: "Cursar y aprobar el 100% de los créditos del plan de estudios (480 créditos)." },
  { id: 2, title: "Cumplir servicio social", description: "Acreditar 480 horas de servicio social en programas aprobados por la universidad." },
  { id: 3, title: "Elegir modalidad", description: "Seleccionar la opción de titulación que se ajuste a tu perfil e intereses profesionales." },
  { id: 4, title: "Registrar proyecto", description: "Presentar el registro oficial ante la coordinación con aval de un director designado." },
  { id: 5, title: "Elaborar proyecto o tesis", description: "Desarrollar el trabajo durante 6 a 12 meses con acompañamiento docente." },
  { id: 6, title: "Presentar documentación", description: "Entregar expediente completo, certificados y liberaciones administrativas." },
  { id: 7, title: "Defensa o evaluación", description: "Presentar ante sinodales la réplica del proyecto o el examen correspondiente." },
  { id: 8, title: "Obtener título", description: "Recibe tu título y cédula profesional. ¡Bienvenido al gremio creativo!" },
];

export const graduationModalities: GraduationModality[] = [
  { id: "m1", name: "Tesis", description: "Investigación formal sobre un problema del campo del diseño y la comunicación visual.", requirements: ["Protocolo aprobado", "Director de tesis asignado", "Extensión mínima de 80 cuartillas"], icon: "FileText" },
  { id: "m2", name: "Proyecto profesional", description: "Desarrollo de un proyecto real de diseño integral para un cliente o caso hipotético de alta complejidad.", requirements: ["Brief validado", "Entregables completos", "Documentación del proceso"], icon: "Briefcase" },
  { id: "m3", name: "Portafolio", description: "Curaduría profesional de trabajos académicos y profesionales con narrativa de marca personal.", requirements: ["Mínimo 15 piezas", "Case studies documentados", "Presentación oral"], icon: "FolderOpen" },
  { id: "m4", name: "Examen profesional", description: "Evaluación teórico-práctica integral sobre las competencias del plan de estudios.", requirements: ["Egresado en regla", "Inscripción al examen", "Aprobación con 8.0 mínimo"], icon: "ClipboardCheck" },
  { id: "m5", name: "Promedio", description: "Titulación automática por haber obtenido un promedio general de 9.8 o superior.", requirements: ["Promedio 9.8+", "Sin materias reprobadas", "Servicio social acreditado"], icon: "Star" },
  { id: "m6", name: "Proyecto de investigación", description: "Estudio aplicado vinculado a líneas de investigación del programa: tendencias, tecnología y cultura visual.", requirements: ["Línea de investigación definida", "Asesor asignado", "Artículo publicado o por publicar"], icon: "Microscope" },
];

/* ------------------------------------------------------------------ */
/* GET /api/testimonios                                                */
/* ------------------------------------------------------------------ */
export const testimonials: Testimonial[] = [
  { id: "ts1", name: "Paola Guerrero", role: "Egresada, generación 2022", area: "Diseñadora UX/UI en fintech", quote: "La carrera me dio exactamente lo que la industria busca: portafolio real desde temprano, dominio de herramientas y criterio para resolver problemas visuales. Mis prácticas surgieron de un proyecto de clase.", initials: "PG", gradient: "from-violet-500 to-fuchsia-500" },
  { id: "ts2", name: "Miguel Ángel Torres", role: "Estudiante de 7º semestre", area: "Animación 3D", quote: "Los laboratorios y los docentes que vienen de la industria marcan la diferencia. Hoy animo en 3D con el mismo pipeline que usan los estudios profesionales.", initials: "MT", gradient: "from-cyan-500 to-blue-500" },
  { id: "ts3", name: "Sofía Ramírez", role: "Egresada, generación 2021", area: "Directora de arte en agencia", quote: "Aprendí a pensar antes de diseñar. La teoría del color, la semiótica y el branding estratégico son mi ventaja competitiva cada día en la agencia.", initials: "SR", gradient: "from-orange-500 to-amber-500" },
  { id: "ts4", name: "Kevin Ochoa", role: "Estudiante de 5º semestre", area: "Motion graphics", quote: "Los concursos y festivales universitarios me abrieron las puertas: gané una mención nacional y ahora hago freelancing mientras estudio.", initials: "KO", gradient: "from-fuchsia-500 to-pink-500" },
  { id: "ts5", name: "Renata Blanco", role: "Egresada, generación 2020", area: "Ilustradora independiente", quote: "Salí con un portafolio sólido y mi marca personal definida. La asignatura de portafolio y emprendimiento vale oro para quien quiere independizarse.", initials: "RB", gradient: "from-emerald-500 to-teal-500" },
];

/* ------------------------------------------------------------------ */
/* GET /api/faq                                                        */
/* ------------------------------------------------------------------ */
export const faqs: FAQItem[] = [
  { id: "f1", question: "¿Cuánto dura la carrera?", answer: "La Licenciatura en Diseño Gráfico y Animación tiene una duración de 8 semestres (4 años) en modalidad presencial, con un total de 480 créditos distribuidos en materias básicas, profesionales y de especialidad." },
  { id: "f2", question: "¿Qué requisitos necesito para ingresar?", answer: "Necesitas certificado de bachillerato, acta de nacimiento, aprobar el examen de diagnóstico institucional y presentar un portafolio inicial no eliminatorio (dibujos, bocetos o cualquier trabajo creativo que muestre tu interés por lo visual)." },
  { id: "f3", question: "¿Qué herramientas de diseño aprenderé?", answer: "Dominarás el ecosistema completo: Adobe Photoshop, Illustrator, InDesign, After Effects y Premiere; además de Blender, Cinema 4D, Figma, Toon Boom y herramientas de IA generativa aplicadas al flujo profesional." },
  { id: "f4", question: "¿La carrera incluye animación 2D y 3D?", answer: "Sí. La animación es un pilar del programa: cursas Animación 2D en tercer semestre, Animación 3D en cuarto, Motion Graphics y Animación Experimental en semestres avanzados, con acceso a laboratorios de render y estudio de stop motion." },
  { id: "f5", question: "¿Dónde puedo trabajar al terminar?", answer: "Los egresados trabajan en agencias de publicidad, estudios de animación, productoras audiovisuales, medios digitales, startups y como independientes. Los roles más comunes son diseñador gráfico, UX/UI designer, animador, motion designer, ilustrador y director de arte." },
  { id: "f6", question: "¿Existen becas?", answer: "Ofrecemos 7 tipos de beca: académica, deportiva, cultural, socioeconómica, de excelencia (100%), para proyectos y de movilidad internacional. Los porcentajes van del 20% al 100% según la beca y el perfil del solicitante." },
  { id: "f7", question: "¿Cuáles son las modalidades de titulación?", answer: "Puedes titular por tesis, proyecto profesional, portafolio, examen profesional, promedio (9.8+), proyecto de investigación u otras modalidades institucionales. La coordinación te acompaña para elegir la que mejor se adapte a tu perfil." },
  { id: "f8", question: "¿Puedo realizar intercambios?", answer: "Sí, tenemos convenios de movilidad con universidades de España, México, Colombia y Argentina. La beca de movilidad cubre hasta el 70% de los costos y los créditos cursados son revalidados automáticamente." },
  { id: "f9", question: "¿Hay prácticas profesionales?", answer: "El programa incluye prácticas en séptimo semestre con más de 12 empresas y estudios aliados. También hay convocatorias semestrales de prácticas remuneradas de verano y ferias de vinculación con la industria." },
  { id: "f10", question: "¿Qué software utilizaré?", answer: "Todo el software se enseña con licencias educativas incluidas: Creative Cloud completa, Blender (código abierto), Cinema 4D, Figma, Toon Boom Harmony y acceso al clúster de render en la nube institucional." },
];

/* ------------------------------------------------------------------ */
/* Información institucional — GET /api/contacto                       */
/* ------------------------------------------------------------------ */
export const contactInfo = {
  address: "Av. de la Creatividad 1234, Campus Universitario, Edificio G",
  phone: "+591 (2) 255 1234",
  email: "disenografico@universidad.edu",
  hours: [
    { day: "Lunes a viernes", time: "08:00 - 19:00" },
    { day: "Sábados", time: "09:00 - 13:00" },
  ],
  social: [
    { name: "Instagram", href: "https://instagram.com", icon: "Instagram" },
    { name: "Facebook", href: "https://facebook.com", icon: "Facebook" },
    { name: "YouTube", href: "https://youtube.com", icon: "Youtube" },
    { name: "TikTok", href: "https://tiktok.com", icon: "Music2" },
    { name: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  ],
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Carrera", href: "#carrera" },
  { label: "Plan de estudios", href: "#plan-estudios" },
  { label: "Docentes", href: "#docentes" },
  { label: "Estudiantes", href: "#estudiantes" },
  { label: "Vida universitaria", href: "#vida-universitaria" },
  { label: "Noticias", href: "#noticias" },
  { label: "Calendario", href: "#calendario" },
  { label: "Becas", href: "#becas" },
  { label: "Titulación", href: "#titulacion" },
  { label: "Contacto", href: "#contacto" },
];
