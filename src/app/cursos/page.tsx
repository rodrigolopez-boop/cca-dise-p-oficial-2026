import type { Metadata } from "next";
import { CursosPage } from "@/components/paginas/cursos/CursosPage";

export const metadata: Metadata = {
  title: "Cursos | Diseño Gráfico y Animación",
  description: "Plan de estudios, asignaturas y convocatorias de cursos.",
};

export default function Page() {
  return <CursosPage />;
}
