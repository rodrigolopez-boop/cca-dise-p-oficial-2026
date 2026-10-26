import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLinks, type SectionLink } from "@/components/shared/SectionLinks";

const links: SectionLink[] = [
  {
    label: "Calendario académico",
    description: "Inicio de semestres, inscripciones, exámenes y fechas clave del ciclo.",
    href: "/calendario",
  },
  {
    label: "Noticias",
    description: "Logros estudiantiles, laboratorios y novedades de la carrera.",
    href: "/noticias",
  },
  {
    label: "Vida universitaria",
    description: "Workshops, conferencias, exposiciones y concursos del campus.",
    href: "/vida-universitaria",
  },
  {
    label: "Promociones",
    description: "Descuentos y beneficios vigentes para ingresos y estudiantes.",
    href: "/promociones",
  },
];

export function RecursosPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Recursos"
        title="Recursos"
        description="Calendario académico, noticias, vida universitaria y promociones, cada uno en su propia página."
        headingId="recursos-page-titulo"
      />
      <SectionLinks items={links} />
    </PageLayout>
  );
}
