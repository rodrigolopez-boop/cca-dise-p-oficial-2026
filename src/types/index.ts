/**
 * Tipos centralizados del portal.
 * Estos modelos reflejan la estructura esperada de una futura API / CMS,
 * de modo que la migración solo requiera reemplazar la capa de datos.
 */

export type CallStatus = "abierta" | "proxima" | "cerrada";
export type CallCategory =
  | "ingreso"
  | "becas"
  | "intercambios"
  | "concursos"
  | "practicas"
  | "servicio";

export interface Call {
  id: string;
  name: string;
  publishedAt: string;
  deadline: string;
  description: string;
  status: CallStatus;
  category: CallCategory;
}

export type EventCategory =
  | "conferencias"
  | "talleres"
  | "exposiciones"
  | "concursos"
  | "actividades";

export interface CampusEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  place: string;
  description: string;
  category: EventCategory;
  gradient: string;
  icon: string;
}

export type CalendarCategory =
  | "semestre"
  | "inscripcion"
  | "examenes"
  | "vacaciones"
  | "proyectos"
  | "eventos"
  | "convocatorias";

export interface CalendarEventItem {
  id: string;
  date: string; // ISO: YYYY-MM-DD
  title: string;
  category: CalendarCategory;
}

export type NewsCategory =
  | "Logros"
  | "Eventos"
  | "Infraestructura"
  | "Academia"
  | "Convenios";

export interface NewsItem {
  id: string;
  category: NewsCategory;
  title: string;
  date: string;
  excerpt: string;
  content: string[];
  gradient: string;
  featured?: boolean;
}

export interface Promotion {
  id: string;
  title: string;
  discount: string;
  validity: string;
  conditions: string;
  description: string;
  gradient: string;
  icon: string;
}

export type TeacherSpecialty =
  | "Diseño gráfico"
  | "Animación"
  | "Ilustración"
  | "Fotografía"
  | "UX/UI"
  | "Audiovisual"
  | "Branding";

export interface Teacher {
  id: string;
  name: string;
  role: string;
  specialty: TeacherSpecialty;
  subjects: string[];
  experience: number;
  bio: string;
  initials: string;
  gradient: string;
}

export type ProjectCategory =
  | "Diseño gráfico"
  | "Ilustración"
  | "Animación"
  | "Fotografía"
  | "Branding"
  | "Audiovisual"
  | "UX/UI";

export interface StudentProject {
  id: string;
  name: string;
  author: string;
  semester: string;
  category: ProjectCategory;
  description: string;
  gradient: string;
  icon: string;
}

export interface HonorStudent {
  id: string;
  name: string;
  semester: string;
  average: number;
  award: string;
  achievements: string[];
  initials: string;
  gradient: string;
}

export interface Scholarship {
  id: string;
  name: string;
  benefit: string;
  percentage: string;
  requirements: string[];
  callDate: string;
  documents: string[];
  icon: string;
}

export interface GraduationStep {
  id: number;
  title: string;
  description: string;
}

export interface GraduationModality {
  id: string;
  name: string;
  description: string;
  requirements: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  area: string;
  quote: string;
  initials: string;
  gradient: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Subject {
  code: string;
  name: string;
  description: string;
  credits: number;
  type: "Básica" | "Profesional" | "Especialidad" | "Optativa";
}

export interface Semester {
  number: number;
  period: string;
  subjects: Subject[];
}

export interface CareerArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
  demand: number; // 0 - 100 para gráfica de demanda laboral
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface QuickFact {
  id: string;
  label: string;
  value: string;
  sub: string;
  icon: string;
}
