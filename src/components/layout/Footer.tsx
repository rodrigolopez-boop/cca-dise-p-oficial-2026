"use client";

import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { Icon } from "@/components/shared/Icon";
import { Button } from "@/components/ui/button";
import { contactInfo } from "@/lib/mockData";

const footerColumns = [
  {
    title: "Plataforma",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "La carrera", href: "#carrera" },
      { label: "Nosotros", href: "#docentes" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Académico",
    links: [
      { label: "Plan de estudios", href: "#plan-estudios" },
      { label: "Convocatorias", href: "#convocatorias" },
      { label: "Calendario", href: "#calendario" },
      { label: "Titulación", href: "#titulacion" },
    ],
  },
  {
    title: "Campus",
    links: [
      { label: "Vida universitaria", href: "#vida-universitaria" },
      { label: "Estudiantes", href: "#estudiantes" },
      { label: "Docentes", href: "#docentes" },
      { label: "Becas", href: "#becas" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Noticias", href: "#noticias" },
      { label: "Promociones", href: "#promociones" },
      { label: "Mercado laboral", href: "#mercado-laboral" },
      { label: "Preguntas frecuentes", href: "#contacto" },
    ],
  },
];

export function Footer() {
  const goTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-brand-primary-dark text-white dark:bg-[#041226]" aria-label="Pie de página">
      <div className="absolute inset-x-0 top-0 h-px line-gradient" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_repeat(4,1fr)]">
          <div className="sm:col-span-2 lg:col-span-1">
            <BrandLogo inverse />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-blue-100/80">
              Portal oficial de la Licenciatura en Diseño Gráfico y Animación. Formamos profesionales capaces de transformar ideas creativas en experiencias visuales con tecnología, industria y comunidad.
            </p>
            <div className="mt-6 space-y-3 text-sm text-blue-100/80">
              <a href={`mailto:${contactInfo.email}`} className="flex items-start gap-3 transition-colors hover:text-secondary">
                <Mail className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                {contactInfo.email}
              </a>
              <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 transition-colors hover:text-secondary">
                <Phone className="size-4 shrink-0 text-secondary" aria-hidden />
                {contactInfo.phone}
              </a>
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-secondary" aria-hidden />
                {contactInfo.address}
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {contactInfo.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-blue-100 transition-all hover:-translate-y-0.5 hover:border-secondary/30 hover:bg-secondary hover:text-primary"
                >
                  <Icon name={social.icon} className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-white">{column.title}</h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => goTo(link.href)}
                      className="text-left text-sm text-blue-100/75 transition-colors hover:text-secondary focus-visible:text-secondary"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-center text-xs text-blue-100/60 sm:text-left">
            © {year} Universidad — Licenciatura en Diseño Gráfico y Animación. Todos los derechos reservados.
          </p>
          <Button
            type="button"
            variant="inverse"
            size="sm"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Volver arriba
            <ArrowUp className="size-3.5" aria-hidden />
          </Button>
        </div>
      </div>
    </footer>
  );
}
