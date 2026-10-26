import type { Metadata } from "next";
import { RecursosPage } from "@/components/paginas/recursos/RecursosPage";

export const metadata: Metadata = {
  title: "Recursos | Diseño Gráfico y Animación",
  description: "Calendario académico, noticias, vida universitaria y promociones.",
};

export default function Page() {
  return <RecursosPage />;
}
