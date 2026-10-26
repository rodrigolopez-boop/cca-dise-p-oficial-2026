import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Students } from "@/components/sections/Students";

export const metadata: Metadata = {
  title: "Estudiantes | Diseño Gráfico y Animación",
  description: "Concursos, exposiciones, clubes y proyectos de la comunidad estudiantil.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Estudiantes"
        title="Estudiantes"
        description="Concursos, exposiciones, clubes y proyectos reales de la comunidad estudiantil cada semestre."
        headingId="estudiantes-page-titulo"
      />
      <Students />
    </PageLayout>
  );
}
