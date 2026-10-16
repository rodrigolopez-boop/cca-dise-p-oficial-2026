import type { Metadata } from "next";
import { CursosOferta } from "@/components/cursos/CursosOferta";

export const metadata: Metadata = {
  title: "Cursos e Inscripciones | Diseño Gráfico y Animación",
  description:
    "Catálogo de cursos, cronograma de lanzamientos, guía de inscripción paso a paso e inscripción directa por WhatsApp para la carrera de Diseño Gráfico y Animación.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function CursosPage() {
  return <CursosOferta />;
}
