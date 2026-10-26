import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Graduation } from "@/components/sections/Graduation";

export const metadata: Metadata = {
  title: "Titulación | Diseño Gráfico y Animación",
  description: "Requisitos, modalidades y pasos del proceso de titulación.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Titulación"
        title="Titulación"
        description="Un camino claro hacia tu título profesional, con acompañamiento en cada uno de los pasos."
        headingId="titulacion-page-titulo"
      />
      <Graduation />
    </PageLayout>
  );
}
