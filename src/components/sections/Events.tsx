"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, CalendarDays } from "lucide-react";
import { events } from "@/lib/mockData";
import type { EventCategory } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { EmptyState } from "@/components/shared/EmptyState";
import { GradientCover } from "@/components/shared/GradientCover";
import { Icon } from "@/components/shared/Icon";

const categoryOptions: { value: EventCategory | "todos"; label: string }[] = [
  { value: "todos", label: "Todos" },
  { value: "conferencias", label: "Conferencias" },
  { value: "talleres", label: "Talleres" },
  { value: "exposiciones", label: "Exposiciones" },
  { value: "concursos", label: "Concursos" },
  { value: "actividades", label: "Actividades estudiantiles" },
];

function formatEventDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
}

/**
 * Eventos y actividades del campus con filtros por tipo.
 * Datos: GET /api/eventos. Incluye estado de carga simulado (skeletons).
 */
export function Events() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]["value"]>("todos");

  const filtered = useMemo(
    () => (category === "todos" ? events : events.filter((e) => e.category === category)),
    [category]
  );

  return (
    <section
      id="vida-universitaria"
      className="relative bg-slate-50 py-20 md:py-28"
      aria-label="Eventos y actividades"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Vida universitaria"
          title="Eventos y"
          highlight="actividades"
          description="Workshops, conferencias, exposiciones y concursos que mantienen el campus en constante creatividad."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            message="No hay eventos programados en esta categoría. Consulta otras categorías o el calendario académico."
            onReset={() => setCategory("todos")}
          />
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((event) => (
                <motion.article
                  layout
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.38 }}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg"
                >
                  <GradientCover
                    gradient={event.gradient}
                    icon={event.icon}
                    variant="rings"
                    className="h-44 w-full"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-violet-100">
                      <Icon name={categoryOptions.find((c) => c.value === event.category)?.label === event.category ? "Sparkles" : "Tag"} className="hidden" />
                      {categoryOptions.find((c) => c.value === event.category)?.label}
                    </span>
                    <h3 className="mt-3 font-display text-[16px] font-bold leading-snug text-ink-900 group-hover:text-violet-700 transition-colors">
                      {event.title}
                    </h3>
                    <div className="mt-3 space-y-1.5 text-[13px] text-slate-500">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-3.5 w-3.5 shrink-0 text-fuchsia-500" aria-hidden />
                        {formatEventDate(event.date)}
                      </p>
                      <p className="flex items-center gap-2">
                        <Clock className="h-3.5 w-3.5 shrink-0 text-violet-500" aria-hidden />
                        {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-3.5 w-3.5 shrink-0 text-orange-500" aria-hidden />
                        {event.place}
                      </p>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
                      {event.description}
                    </p>
                    <button
                      type="button"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-ink-900 transition-all hover:border-violet-300 hover:bg-violet-50 hover:text-violet-700 cursor-pointer"
                    >
                      Ver detalles
                    </button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
