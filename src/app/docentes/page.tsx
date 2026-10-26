import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Teachers } from "@/components/sections/Teachers";

export const metadata: Metadata = {
  title: "Docentes | Diseño Gráfico y Animación",
  description: "Profesionales activos de la industria creativa que forman a la nueva generación.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Docentes"
        title="Docentes"
        description="Profesionales activos de la industria creativa que combinan trayectoria profesional con vocación docente."
        headingId="docentes-page-titulo"
      />
      <Teachers />
    </PageLayout>
  );
}
