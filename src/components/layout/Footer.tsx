"use client";

import { Palette, ArrowUp } from "lucide-react";
import { navLinks, contactInfo } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";

const footerColumns = [
  {
    title: "Carrera",
    links: [
      { label: "Información", href: "#carrera" },
      { label: "Plan de estudios", href: "#plan-estudios" },
      { label: "Mercado laboral", href: "#inicio" },
      { label: "Docentes", href: "#docentes" },
    ],
  },
  {
    title: "Estudiantes",
    links: [
      { label: "Calendario", href: "#calendario" },
      { label: "Becas", href: "#becas" },
      { label: "Eventos", href: "#vida-universitaria" },
      { label: "Titulación", href: "#titulacion" },
    ],
  },
  {
    title: "Información",
    links: [
      { label: "Noticias", href: "#noticias" },
      { label: "Convocatorias", href: "#convocatorias" },
      { label: "Promociones", href: "#inicio" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
];

/**
 * Footer institucional completo con columnas de navegación, redes sociales
 * y copyright. Pegado al fondo mediante mt-auto en el layout raíz.
 */
export function Footer() {
  const goTo = (href: string) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-ink-950 text-white" aria-label="Pie de página">
      <div className="absolute inset-x-0 top-0 h-px line-gradient" aria-hidden />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,1fr)]">
          {/* Marca */}
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500">
                <Palette className="h-5 w-5 text-white" aria-hidden />
              </span>
              <div className="leading-none">
                <p className="font-display text-[15px] font-bold">Diseño Gráfico</p>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-fuchsia-300">
                  y Animación
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate-400">
              Portal oficial de la Licenciatura en Diseño Gráfico y Animación. Transforma ideas en
              experiencias visuales y construye tu carrera creativa con nosotros.
            </p>
            {/* Redes sociales */}
            <div className="mt-6 flex gap-2.5">
              {contactInfo.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-slate-400 ring-1 ring-white/10 transition-all hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 hover:text-white hover:-translate-y-0.5"
                >
                  <Icon name={social.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columnas de enlaces */}
          {footerColumns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => goTo(link.href)}
                      className="text-sm text-slate-400 transition-all hover:translate-x-1 hover:text-fuchsia-300 cursor-pointer"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-center text-[13px] text-slate-500 sm:text-left">
            © {year} Universidad — Licenciatura en Diseño Gráfico y Animación. Todos los derechos reservados.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Volver arriba"
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300 transition-all hover:bg-white/10 hover:text-white cursor-pointer"
          >
            Volver arriba
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" aria-hidden />
          </button>
        </div>
      </div>
    </footer>
  );
}
