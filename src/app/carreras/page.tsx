import type { Metadata } from "next";
import { CarrerasPage } from "@/components/paginas/carreras/CarrerasPage";

export const metadata: Metadata = {
  title: "Carreras | Diseño Gráfico y Animación",
  description: "Información sobre la carrera, beneficios, testimonios y FAQ.",
};

export default function Page() {
  return <CarrerasPage />;
}
