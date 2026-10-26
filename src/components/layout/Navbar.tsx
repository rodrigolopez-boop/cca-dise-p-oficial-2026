"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, LockKeyhole, Menu, X } from "lucide-react";
import { navLinks } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { SearchBar } from "@/components/shared/SearchBar";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const primaryLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Oferta académica", href: "/oferta-academica" },
  { label: "Cursos", href: "/cursos" },
  { label: "Carreras", href: "/carreras" },
  { label: "Recursos", href: "/recursos" },
  { label: "Nosotros", href: "/nosotros" },
];

const moreLinks = [
  { label: "Convocatorias", href: "/convocatorias" },
  { label: "Vida universitaria", href: "/vida-universitaria" },
  { label: "Estudiantes", href: "/estudiantes" },
  { label: "Noticias", href: "/noticias" },
  { label: "Becas", href: "/becas" },
  { label: "Titulación", href: "/titulacion" },
  { label: "Contacto", href: "/contacto" },
];

export function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#inicio");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const sections = Array.from(document.querySelectorAll<HTMLElement>("main section[id]"));
      let current = "#inicio";

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= 148) {
          current = `#${section.id}`;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const goTo = (href: string) => {
    setMenuOpen(false);

    if (!isHome) {
      router.push(`/${href}`);
      return;
    }

    window.setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
  };

  const search = (query: string) => {
    const normalizedQuery = query.toLocaleLowerCase("es");
    const match = navLinks.find((link) => link.label.toLocaleLowerCase("es").includes(normalizedQuery));
    if (!match) {
      return;
    }

    if (match.href.startsWith("/")) {
      setMenuOpen(false);
      router.push(match.href);
      return;
    }

    goTo(match.href);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-white/10 bg-brand-primary/92 shadow-soft-lg backdrop-blur-xl dark:bg-dark-background/90"
          : "border-white/10 bg-brand-primary dark:bg-dark-background"
      )}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center gap-3 px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <button
          type="button"
          onClick={() => goTo("#inicio")}
          className="shrink-0 rounded-xl focus-visible:ring-4 focus-visible:ring-secondary/25"
          aria-label="Ir al inicio"
        >
          <BrandLogo inverse />
        </button>

        <ul className="ml-auto hidden items-center gap-0.5 lg:flex">
          {primaryLinks.map((link) => {
            const isRoute = link.href.startsWith("/");
            const isActive = isRoute ? pathname === link.href : activeSection === link.href;

            return (
              <li key={link.href}>
                {isRoute ? (
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors",
                      isActive ? "text-white" : "text-blue-100 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/12 ring-1 ring-white/15"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => goTo(link.href)}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors",
                      isActive ? "text-white" : "text-blue-100 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-white/12 ring-1 ring-white/15"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </button>
                )}
              </li>
            );
          })}
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-semibold text-blue-100 transition-colors hover:text-white"
                >
                  Más
                  <ChevronDown className="size-3.5" aria-hidden />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" sideOffset={10} className="min-w-56 rounded-xl border-border p-2 shadow-card-hover">
                {moreLinks.map((link) => (
                  <DropdownMenuItem
                    key={link.href}
                    asChild
                    className="cursor-pointer rounded-lg px-3 py-2.5 font-medium"
                  >
                    <Link href={link.href} onClick={() => setMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
        </ul>

        <SearchBar onSubmit={search} className="ml-auto hidden w-56 2xl:block" />

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Button
            type="button"
            variant="accent"
            onClick={() => goTo("#convocatorias")}
            className="hidden xl:inline-flex"
          >
            <LockKeyhole className="size-4" aria-hidden />
            Iniciar sesión
            <ArrowRight className="size-4" aria-hidden />
          </Button>
          <ThemeToggle className="border-white/15 bg-white/10 text-secondary hover:border-secondary/40 hover:bg-white/15 hover:text-secondary dark:border-white/15 dark:bg-white/10 dark:hover:bg-white/15" />
          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
            className="flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/15 lg:hidden"
          >
            {menuOpen ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-dark-background text-white shadow-soft-lg lg:hidden"
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto px-4 py-5 scrollbar-slim sm:px-6">
              <SearchBar onSubmit={search} className="mb-5" />
              <ul className="grid gap-1 sm:grid-cols-2">
                {navLinks.map((link, index) => {
                  const isRoute = link.href.startsWith("/");
                  const isActive = isRoute ? pathname === link.href : activeSection === link.href;

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.025 }}
                    >
                      {isRoute ? (
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          aria-current={isActive ? "page" : undefined}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors",
                            isActive
                              ? "bg-white/10 text-secondary ring-1 ring-white/10"
                              : "text-slate-200 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {link.label}
                          <ArrowRight className="size-4" aria-hidden />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => goTo(link.href)}
                          aria-current={isActive ? "location" : undefined}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-semibold transition-colors",
                            isActive
                              ? "bg-white/10 text-secondary ring-1 ring-white/10"
                              : "text-slate-200 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {link.label}
                          <ArrowRight className="size-4" aria-hidden />
                        </button>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
              <Button
                type="button"
                variant="accent"
                onClick={() => goTo("#convocatorias")}
                className="mt-5 w-full"
              >
                Iniciar sesión
                <ArrowRight className="size-4" aria-hidden />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
