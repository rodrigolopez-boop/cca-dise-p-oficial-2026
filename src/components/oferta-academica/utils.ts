import { contactWhatsApp, type CourseCategory } from "@/lib/cursosData";

export type CategoryFilter = CourseCategory | "todos";

export const levelVariant: Record<string, "success" | "warning" | "info"> = {
  Inicial: "success",
  Intermedio: "info",
  Avanzado: "warning",
};

export const launchStatusConfig = {
  "en-proceso": { label: "En proceso", variant: "success" as const, dot: "bg-success" },
  proximo: { label: "Próximo lanzamiento", variant: "warning" as const, dot: "bg-warning" },
};

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function courseWhatsAppLink(title: string) {
  const text = `Hola, quiero información sobre el curso "${title}".`;
  return `https://wa.me/${contactWhatsApp.number}?text=${encodeURIComponent(text)}`;
}
