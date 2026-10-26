import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { AcademicCalendar } from "@/components/sections/AcademicCalendar";

export const metadata: Metadata = {
  title: "Calendario académico | Diseño Gráfico y Animación",
  description: "Inicio de semestres, inscripciones, exámenes y fechas clave del ciclo escolar.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Calendario"
        title="Calendario académico"
        description="Inicio de semestres, inscripciones, exámenes, vacaciones y eventos importantes. Navega por mes y consulta cada fecha."
        headingId="calendario-page-titulo"
      />
      <AcademicCalendar />
    </PageLayout>
  );
}
