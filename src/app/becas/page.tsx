import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Scholarships } from "@/components/sections/Scholarships";

export const metadata: Metadata = {
  title: "Becas | Diseño Gráfico y Animación",
  description: "Tipos de beca, requisitos y documentación para financiar tu formación.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Becas"
        title="Becas"
        description="Siete tipos de beca para que el talento nunca se detenga por razones económicas. Revisa requisitos y vigencia."
        headingId="becas-page-titulo"
      />
      <Scholarships />
    </PageLayout>
  );
}
