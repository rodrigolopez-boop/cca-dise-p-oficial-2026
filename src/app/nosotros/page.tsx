import type { Metadata } from "next";
import { NosotrosPage } from "@/components/paginas/nosotros/NosotrosPage";

export const metadata: Metadata = {
  title: "Nosotros | Diseño Gráfico y Animación",
  description: "Docentes, estudiantes, titulación, cuadro de honor y becas.",
};

export default function Page() {
  return <NosotrosPage />;
}
