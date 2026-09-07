"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarClock, ArrowUpRight, CircleDot } from "lucide-react";
import { calls } from "@/lib/mockData";
import type { CallCategory, CallStatus } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { EmptyState } from "@/components/shared/EmptyState";
import { cn } from "@/lib/utils";

const categoryOptions: { value: CallCategory | "todos"; label: string }[] = [
  { value: "todos", label: "Todas" },
  { value: "ingreso", label: "Ingreso" },
  { value: "becas", label: "Becas" },
  { value: "intercambios", label: "Intercambios" },
  { value: "concursos", label: "Concursos" },
  { value: "practicas", label: "Prácticas profesionales" },
  { value: "servicio", label: "Servicio social" },
];

const statusConfig: Record<CallStatus, { label: string; className: string; dot: string }> = {
  abierta: { label: "Abierta", className: "bg-emerald-50 text-emerald-700 ring-emerald-200", dot: "bg-emerald-500" },
  proxima: { label: "Próxima", className: "bg-amber-50 text-amber-700 ring-amber-200", dot: "bg-amber-500" },
  cerrada: { label: "Cerrada", className: "bg-slate-100 text-slate-500 ring-slate-200", dot: "bg-slate-400" },
};

/** Formatea una fecha ISO a formato legible en español. */
function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/**
 * Convocatorias vigentes con filtro por categoría y estado.
 * Datos: GET /api/convocatorias.
 */
export function Calls() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]["value"]>("todos");

  const filtered = useMemo(
    () => (category === "todos" ? calls : calls.filter((c) => c.category === category)),
    [category]
  );

  return (
    <section id="convocatorias" className="relative py-20 md:py-28" aria-label="Convocatorias">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Convocatorias"
          title="Oportunidades"
          highlight="vigentes"
          description="Procesos activos de ingreso, becas, intercambios y más. Revisa las fechas límite y postúlate a tiempo."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            message="No hay convocatorias publicadas en esta categoría por el momento. Explora otras categorías o revisa más adelante."
            onReset={() => setCategory("todos")}
          />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((call) => {
                const status = statusConfig[call.status];
                return (
                  <motion.article
                    layout
                    key={call.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35 }}
                    className={cn(
                      "group flex flex-col rounded-3xl border bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft-lg",
                      call.status === "cerrada" ? "border-slate-100 opacity-75 hover:opacity-100" : "border-slate-100"
                    )}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ring-1", status.className)}>
                        <CircleDot className={cn("h-3 w-3 animate-pulse-soft", status.dot, "text-current")} style={{ color: "inherit" }} aria-hidden />
                        {status.label}
                      </span>
                      <span className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-violet-100">
                        {categoryOptions.find((c) => c.value === call.category)?.label}
                      </span>
                    </div>

                    <h3 className="mt-5 font-display text-lg font-bold leading-snug text-ink-900 group-hover:text-violet-700 transition-colors">
                      {call.name}
                    </h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-600">
                      {call.description}
                    </p>

                    <div className="mt-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-[13px]">
                      <p className="flex items-center justify-between text-slate-500">
                        <span>Publicada</span>
                        <span className="font-medium text-ink-900">{formatDate(call.publishedAt)}</span>
                      </p>
                      <p className="flex items-center justify-between text-slate-500">
                        <span>Fecha límite</span>
                        <span className={cn("font-semibold", call.status === "cerrada" ? "text-slate-400" : "text-fuchsia-600")}>
                          {formatDate(call.deadline)}
                        </span>
                      </p>
                    </div>

                    <button
                      type="button"
                      disabled={call.status === "cerrada"}
                      className={cn(
                        "mt-5 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
                        call.status === "cerrada"
                          ? "cursor-not-allowed bg-slate-100 text-slate-400"
                          : "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-glow-violet hover:scale-[1.03] cursor-pointer"
                      )}
                    >
                      <CalendarClock className="h-4 w-4" aria-hidden />
                      {call.status === "proxima" ? "Próximamente" : call.status === "cerrada" ? "Finalizada" : "Ver convocatoria"}
                      {call.status !== "cerrada" && <ArrowUpRight className="h-4 w-4" aria-hidden />}
                    </button>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}
