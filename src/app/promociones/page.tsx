import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Promotions } from "@/components/sections/Promotions";

export const metadata: Metadata = {
  title: "Promociones | Diseño Gráfico y Animación",
  description: "Descuentos y beneficios vigentes para nuevos ingresos y estudiantes actuales.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Promociones"
        title="Promociones"
        description="Aprovecha los descuentos y beneficios vigentes para nuevos ingresos y estudiantes actuales de la carrera."
        headingId="promociones-page-titulo"
      />
      <Promotions />
    </PageLayout>
  );
}
