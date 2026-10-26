import type { Metadata } from "next";
import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto | Diseño Gráfico y Animación",
  description: "Dirección, teléfono, correo y formulario de contacto de la carrera.",
};

export default function Page() {
  return (
    <PageLayout>
      <PageHero
        badge="Contacto"
        title="Contacto"
        description="Visítanos, escríbenos o agenda una visita guiada por los laboratorios. El equipo de la carrera está listo para atenderte."
        headingId="contacto-page-titulo"
      />
      <Contact />
    </PageLayout>
  );
}
