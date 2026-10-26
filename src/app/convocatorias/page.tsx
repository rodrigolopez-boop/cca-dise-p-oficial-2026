import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Calls } from "@/components/sections/Calls";

export const metadata: Metadata = {
  title: "Convocatorias | Diseño Gráfico y Animación",
  description: "Procesos activos de ingreso, becas, intercambios y más.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Convocatorias"
        title="Convocatorias"
        description="Procesos activos de ingreso, becas, intercambios y más. Revisa las fechas límite y postúlate a tiempo."
        headingId="convocatorias-page-titulo"
      />
      <Calls />
    </PageLayout>
  );
}
