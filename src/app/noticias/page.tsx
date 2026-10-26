import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { News } from "@/components/sections/News";

export const metadata: Metadata = {
  title: "Noticias | Diseño Gráfico y Animación",
  description: "Logros estudiantiles, laboratorios, conferencias y novedades de la carrera.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Noticias"
        title="Noticias"
        description="Logros estudiantiles, nuevos laboratorios, conferencias internacionales y todo lo que pasa en la carrera."
        headingId="noticias-page-titulo"
      />
      <News />
    </PageLayout>
  );
}
