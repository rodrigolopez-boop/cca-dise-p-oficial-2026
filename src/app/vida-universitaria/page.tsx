import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Events } from "@/components/sections/Events";

export const metadata: Metadata = {
  title: "Vida universitaria | Diseño Gráfico y Animación",
  description: "Workshops, conferencias, exposiciones y concursos del campus creativo.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Vida universitaria"
        title="Vida universitaria"
        description="Workshops, conferencias, exposiciones y concursos que mantienen el campus en constante creatividad."
        headingId="vida-universitaria-page-titulo"
      />
      <Events />
    </PageLayout>
  );
}
