"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Palette, ArrowRight } from "lucide-react";
import { navLinks } from "@/lib/mockData";
import { cn } from "@/lib/utils";

/**
 * Navbar institucional sticky:
 * - Fondo glass al hacer scroll
 * - Resaltado de sección activa
 * - Menú hamburguesa animado en móvil
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);

      // Detecta la sección visible para resaltar el enlace activo
      const ids = navLinks.map((l) => l.href.slice(1));
      let current = "#inicio";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = `#${id}`;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const goTo = (href: string) => {
    setMenuOpen(false);
    // Espera a que se libere el overflow del body antes de desplazar
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 80);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-strong shadow-soft" : "bg-transparent"
      )}
    >
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        {/* Logo institucional */}
        <button
          type="button"
          onClick={() => goTo("#inicio")}
          className="group flex items-center gap-3 cursor-pointer"
          aria-label="Ir al inicio"
        >
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 shadow-glow-violet transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105">
            <Palette className="h-5.5 w-5.5 text-white" strokeWidth={2} aria-hidden />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="font-display text-[15px] font-bold tracking-tight text-white">
              Diseño Gráfico
            </span>
            <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-fuchsia-300">
              y Animación
            </span>
          </span>
        </button>

        {/* Enlaces escritorio */}
        <ul className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => goTo(link.href)}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors cursor-pointer",
                  activeSection === link.href
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                )}
              >
                {activeSection === link.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/15"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{link.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* CTA principal */}
          <button
            type="button"
            onClick={() => goTo("#convocatorias")}
            className="group hidden items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-glow-violet transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-magenta sm:inline-flex cursor-pointer"
          >
            Quiero ingresar
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </button>

          {/* Botón hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white ring-1 ring-white/15 transition-colors hover:bg-white/20 xl:hidden cursor-pointer"
          >
            {menuOpen ? <X className="h-5 w-5" aria-hidden /> : <Menu className="h-5 w-5" aria-hidden />}
          </button>
        </div>
      </nav>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-ink-950/95 shadow-soft-lg backdrop-blur-xl xl:hidden"
          >
            <ul className="max-h-[70vh] space-y-1 overflow-y-auto px-4 py-4 scrollbar-slim">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <button
                    type="button"
                    onClick={() => goTo(link.href)}
                    className={cn(
                      "w-full rounded-xl px-4 py-3 text-left text-[15px] font-medium transition-colors cursor-pointer",
                      activeSection === link.href
                        ? "bg-white/10 text-white ring-1 ring-white/15"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => goTo("#convocatorias")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 py-3.5 text-[15px] font-semibold text-white cursor-pointer"
                >
                  Quiero ingresar
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
