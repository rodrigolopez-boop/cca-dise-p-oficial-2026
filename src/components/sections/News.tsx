"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ArrowRight, X } from "lucide-react";
import { news } from "@/lib/mockData";
import type { NewsItem } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SearchInput } from "@/components/shared/SearchInput";
import { EmptyState } from "@/components/shared/EmptyState";
import { GradientCover } from "@/components/shared/GradientCover";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function formatNewsDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric", month: "long", year: "numeric",
  });
}

/** Skeleton de tarjeta para el estado de carga. */
function NewsSkeleton() {
  return (
    <div className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  );
}

/**
 * Sección de noticias con buscador, estado de carga simulado (fetch),
 * y modal para la lectura completa del artículo.
 * Datos: GET /api/noticias.
 */
export function News() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<NewsItem | null>(null);

  // Simula la petición a la API; en producción: useEffect + fetch("/api/noticias")
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  // Bloquea scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  // Cierra el modal con Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(
    () =>
      news.filter(
        (n) =>
          n.title.toLowerCase().includes(query.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <section id="noticias" className="relative py-20 md:py-28" aria-label="Noticias">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          <SectionTitle
            eyebrow="Noticias"
            title="Lo último del"
            highlight="campus creativo"
            description="Logros estudiantiles, nuevos laboratorios, conferencias internacionales y todo lo que está pasando en la carrera."
            className="mb-0"
          />
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Buscar noticias..."
            label="noticias"
          />
        </div>

        {loading ? (
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-busy="true" aria-label="Cargando noticias">
            {Array.from({ length: 3 }).map((_, i) => (
              <NewsSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-14">
            <EmptyState
              message={`No encontramos noticias que coincidan con "${query}". Prueba con otros términos.`}
              onReset={() => setQuery("")}
            />
          </div>
        ) : (
          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                className={cn(
                  "group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg",
                  item.featured && "md:col-span-2 xl:col-span-2"
                )}
              >
                <GradientCover
                  gradient={item.gradient}
                  icon={item.featured ? "Newspaper" : "Sparkles"}
                  variant={item.featured ? "waves" : "grid"}
                  className={cn("w-full", item.featured ? "h-56" : "h-44")}
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                      {item.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-xs text-slate-400">
                      <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                      {formatNewsDate(item.date)}
                    </span>
                  </div>
                  <h3 className={cn(
                    "mt-4 font-display font-bold leading-snug text-ink-900 transition-colors group-hover:text-violet-700",
                    item.featured ? "text-2xl" : "text-lg"
                  )}>
                    {item.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                    {item.excerpt}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSelected(item)}
                    className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-violet-600 transition-all hover:gap-3 hover:text-fuchsia-600 cursor-pointer"
                  >
                    Leer más
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>

      {/* Modal de lectura completa */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-3xl bg-white shadow-soft-lg scrollbar-slim"
            >
              <GradientCover
                gradient={selected.gradient}
                icon="Newspaper"
                variant="waves"
                className="h-52 w-full"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Cerrar noticia"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/50 text-white backdrop-blur transition-colors hover:bg-ink-950/80 cursor-pointer"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
              <div className="p-7 sm:p-9">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                    {selected.category}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-slate-400">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden />
                    {formatNewsDate(selected.date)}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-ink-900 sm:text-3xl">
                  {selected.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {selected.content.map((para, idx) => (
                    <p key={idx} className="text-[15px] leading-relaxed text-slate-600">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
