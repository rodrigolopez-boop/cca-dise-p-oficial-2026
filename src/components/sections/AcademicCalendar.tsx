"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, CalendarDays } from "lucide-react";
import { calendarEvents } from "@/lib/mockData";
import type { CalendarCategory } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";

const DAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const categoryConfig: Record<CalendarCategory, { label: string; dot: string; chip: string }> = {
  semestre: { label: "Semestre", dot: "bg-violet-500", chip: "bg-violet-100 text-violet-700" },
  inscripcion: { label: "Inscripciones", dot: "bg-cyan-500", chip: "bg-cyan-100 text-cyan-700" },
  examenes: { label: "Exámenes", dot: "bg-rose-500", chip: "bg-rose-100 text-rose-700" },
  vacaciones: { label: "Vacaciones", dot: "bg-emerald-500", chip: "bg-emerald-100 text-emerald-700" },
  proyectos: { label: "Proyectos", dot: "bg-amber-500", chip: "bg-amber-100 text-amber-700" },
  eventos: { label: "Eventos", dot: "bg-fuchsia-500", chip: "bg-fuchsia-100 text-fuchsia-700" },
  convocatorias: { label: "Convocatorias", dot: "bg-indigo-500", chip: "bg-indigo-100 text-indigo-700" },
};

interface Cell {
  day: number;
  iso: string;
  inMonth: boolean;
}

/**
 * Calendario académico interactivo:
 * - Navegación mensual
 * - Puntos de colores por categoría de evento
 * - Panel de detalle del día seleccionado
 */
export function AcademicCalendar() {
  const [viewDate, setViewDate] = useState({ year: 2026, month: 8 }); // Septiembre 2026
  const [selected, setSelected] = useState<string | null>(null);

  const todayIso = new Date().toISOString().slice(0, 10);

  /** Construye la matriz de celdas (lunes a domingo) del mes en vista. */
  const cells: Cell[] = useMemo(() => {
    const year = viewDate.year;
    const month = viewDate.month;
    const firstDay = new Date(year, month, 1);
    // Desplaza para que la semana inicie en lunes
    const startOffset = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const daysPrevMonth = new Date(year, month, 0).getDate();

    const result: Cell[] = [];
    for (let i = 0; i < startOffset; i++) {
      const d = daysPrevMonth - startOffset + 1 + i;
      result.push({
        day: d,
        iso: toIso(year, month - 1, d),
        inMonth: false,
      });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      result.push({ day: d, iso: toIso(year, month, d), inMonth: true });
    }
    let next = 1;
    while (result.length % 7 !== 0 || result.length < 42) {
      result.push({
        day: next,
        iso: toIso(year, month + 1, next),
        inMonth: false,
      });
      next++;
      if (result.length >= 42) break;
    }
    return result;
  }, [viewDate]);

  const eventsByDate = useMemo(() => {
    const map = new Map<string, typeof calendarEvents>();
    for (const ev of calendarEvents) {
      const list = map.get(ev.date) ?? [];
      list.push(ev);
      map.set(ev.date, list);
    }
    return map;
  }, []);

  const selectedEvents = selected ? eventsByDate.get(selected) ?? [] : [];
  const monthEvents = calendarEvents.filter((e) => {
    const d = new Date(e.date + "T12:00:00");
    return d.getFullYear() === viewDate.year && d.getMonth() === viewDate.month;
  });

  const moveMonth = (delta: number) => {
    setSelected(null);
    setViewDate((prev) => {
      let m = prev.month + delta;
      let y = prev.year;
      if (m < 0) { m = 11; y--; }
      if (m > 11) { m = 0; y++; }
      return { year: y, month: m };
    });
  };

  return (
    <section id="calendario" className="relative py-20 md:py-28" aria-label="Calendario académico">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Calendario"
          title="Calendario"
          highlight="académico"
          description="Inicio de semestres, inscripciones, exámenes, vacaciones y eventos importantes. Navega por mes y consulta el detalle de cada fecha."
        />

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* Panel del calendario */}
          <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-soft sm:p-7">
            {/* Encabezado con navegación */}
            <div className="mb-6 flex items-center justify-between">
              <h3 className="flex items-center gap-2.5 font-display text-xl font-bold text-ink-900 sm:text-2xl">
                <CalendarDays className="h-6 w-6 text-violet-600" aria-hidden />
                {MONTHS[viewDate.month]} {viewDate.year}
              </h3>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => moveMonth(-1)}
                  aria-label="Mes anterior"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 cursor-pointer"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => moveMonth(1)}
                  aria-label="Mes siguiente"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition-all hover:border-violet-300 hover:text-violet-600 hover:bg-violet-50 cursor-pointer"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden />
                </button>
              </div>
            </div>

            {/* Días de la semana */}
            <div className="mb-2 grid grid-cols-7 gap-1.5">
              {DAY_LABELS.map((d) => (
                <div key={d} className="py-1 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                  {d}
                </div>
              ))}
            </div>

            {/* Cuadrícula de días */}
            <div className="grid grid-cols-7 gap-1.5" role="grid" aria-label={`Días de ${MONTHS[viewDate.month]} ${viewDate.year}`}>
              {cells.map((cell, idx) => {
                const dayEvents = eventsByDate.get(cell.iso) ?? [];
                const isToday = cell.iso === todayIso;
                const isSelected = cell.iso === selected;
                return (
                  <button
                    key={`${cell.iso}-${idx}`}
                    type="button"
                    role="gridcell"
                    aria-label={`${cell.day} de ${MONTHS[viewDate.month]}, ${dayEvents.length} eventos`}
                    onClick={() => setSelected(dayEvents.length > 0 ? cell.iso : null)}
                    className={cn(
                      "relative flex aspect-square flex-col items-center justify-center rounded-xl text-sm transition-all duration-200",
                      cell.inMonth
                        ? "text-ink-900 hover:bg-violet-50"
                        : "text-slate-300",
                      isSelected && "bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-glow-violet scale-105",
                      isToday && !isSelected && "ring-2 ring-fuchsia-400 bg-fuchsia-50 font-bold",
                      dayEvents.length > 0 && !isSelected && "font-bold cursor-pointer bg-slate-50 hover:bg-violet-100"
                    )}
                  >
                    {cell.day}
                    {dayEvents.length > 0 && (
                      <span className="absolute bottom-1.5 flex gap-0.5" aria-hidden>
                        {dayEvents.slice(0, 3).map((ev) => (
                          <span
                            key={ev.id}
                            className={cn("h-1.5 w-1.5 rounded-full", isSelected ? "bg-white" : categoryConfig[ev.category].dot)}
                          />
                        ))}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Leyenda */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 border-t border-slate-100 pt-5">
              {(Object.keys(categoryConfig) as CalendarCategory[]).map((cat) => (
                <span key={cat} className="flex items-center gap-2 text-xs text-slate-500">
                  <span className={cn("h-2.5 w-2.5 rounded-full", categoryConfig[cat].dot)} aria-hidden />
                  {categoryConfig[cat].label}
                </span>
              ))}
            </div>
          </div>

          {/* Panel de detalle */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-soft">
              <h3 className="font-display text-lg font-bold text-ink-900">
                {selected
                  ? new Date(selected + "T12:00:00").toLocaleDateString("es-ES", {
                      weekday: "long", day: "numeric", month: "long", year: "numeric",
                    })
                  : "Selecciona una fecha"}
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                {selected
                  ? `${selectedEvents.length} evento(s) programado(s)`
                  : "Los días con eventos muestran puntos de color. Haz clic para ver el detalle."}
              </p>

              <div className="mt-5 space-y-3">
                <AnimatePresence mode="popLayout">
                  {selectedEvents.length === 0 ? (
                    <motion.p
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-2xl border border-dashed border-slate-200 px-4 py-8 text-center text-sm text-slate-400"
                    >
                      {selected ? "No hay eventos para esta fecha." : "Aquí aparecerán los eventos del día."}
                    </motion.p>
                  ) : (
                    selectedEvents.map((ev) => (
                      <motion.div
                        layout
                        key={ev.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:border-violet-200"
                      >
                        <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold", categoryConfig[ev.category].chip)}>
                          {categoryConfig[ev.category].label}
                        </span>
                        <p className="mt-2 text-sm font-semibold text-ink-900">{ev.title}</p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Próximos eventos del mes */}
            <div className="rounded-3xl border border-slate-100 bg-gradient-to-br from-ink-900 to-ink-700 p-6 text-white shadow-soft-lg">
              <h3 className="font-display text-base font-bold">
                Agenda de {MONTHS[viewDate.month]}
              </h3>
              <ul className="mt-4 space-y-3">
                {monthEvents.length === 0 ? (
                  <li className="text-sm text-slate-400">Sin eventos este mes.</li>
                ) : (
                  monthEvents.map((ev) => (
                    <li key={ev.id} className="flex items-center gap-3 text-sm">
                      <span className={cn("h-2 w-2 shrink-0 rounded-full", categoryConfig[ev.category].dot)} aria-hidden />
                      <span className="w-9 shrink-0 font-display font-bold text-fuchsia-300">
                        {new Date(ev.date + "T12:00:00").getDate()}
                      </span>
                      <span className="text-slate-200">{ev.title}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function toIso(year: number, month: number, day: number) {
  const d = new Date(year, month, day);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
