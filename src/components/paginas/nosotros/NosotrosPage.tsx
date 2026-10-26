import { PageLayout } from "@/components/shared/PageLayout";
import { PageHero } from "@/components/shared/PageHero";
import { SectionLinks, type SectionLink } from "@/components/shared/SectionLinks";

const links: SectionLink[] = [
  {
    label: "Docentes",
    description: "Profesionales activos de la industria creativa que forman a la nueva generación.",
    href: "/docentes",
  },
  {
    label: "Estudiantes",
    description: "Concursos, exposiciones, clubes y proyectos de la comunidad estudiantil.",
    href: "/estudiantes",
  },
  {
    label: "Titulación",
    description: "Requisitos, modalidades y pasos del proceso de titulación.",
    href: "/titulacion",
  },
  {
    label: "Cuadro de honor",
    description: "Estudiantes con resultados sobresalientes y reconocimientos.",
    href: "/cuadro-de-honor",
  },
  {
    label: "Becas",
    description: "Tipos de beca, requisitos y documentación para financiar tu formación.",
    href: "/becas",
  },
];

export function NosotrosPage() {
  return (
    <PageLayout>
      <PageHero
        badge="Nosotros"
        title="Nosotros"
        description="Docentes, estudiantes, titulación, cuadro de honor y becas, cada uno en su propia página."
        headingId="nosotros-page-titulo"
      />
      <SectionLinks items={links} />
    </PageLayout>
  );
}
