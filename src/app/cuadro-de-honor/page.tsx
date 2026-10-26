import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { HonorRoll } from "@/components/sections/HonorRoll";

export const metadata: Metadata = {
  title: "Cuadro de honor | Diseño Gráfico y Animación",
  description: "Estudiantes con resultados sobresalientes y reconocimientos de la carrera.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Reconocimiento"
        title="Cuadro de honor"
        description="Los estudiantes que elevan el nivel de la carrera con su talento, disciplina y resultados sobresalientes."
        headingId="cuadro-de-honor-page-titulo"
      />
      <HonorRoll />
    </PageLayout>
  );
}
