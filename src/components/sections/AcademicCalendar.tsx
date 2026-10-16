"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { calendarEvents } from "@/lib/mockData";
import type { CalendarCategory } from "@/types";
import { Container } from "@/components/shared/Container";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const DAY_LABELS = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];
const MONTHS = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre",
];

const categoryConfig: Record<CalendarCategory, { label: string; dot: string; chip: string }> = {
  semestre: { label: "Semestre", dot: "bg-primary", chip: "border-primary/20 bg-primary/10 text-primary dark:bg-primary/20 dark:text-foreground" },
  inscripcion: { label: "Inscripciones", dot: "bg-info", chip: "border-info/20 bg-info/10 text-info dark:bg-info/20 dark:text-foreground" },
  examenes: { label: "Exámenes", dot: "bg-error", chip: "border-error/20 bg-error/10 text-error dark:bg-error/20 dark:text-foreground" },
  vacaciones: { label: "Vacaciones", dot: "bg-success", chip: "border-success/20 bg-success/10 text-success dark:bg-success/20 dark:text-foreground" },
  proyectos: { label: "Proyectos", dot: "bg-warning", chip: "border-warning/20 bg-warning/10 text-warning dark:bg-warning/20 dark:text-foreground" },
  eventos: { label: "Eventos", dot: "bg-secondary", chip: "border-secondary/30 bg-secondary/15 text-primary dark:bg-secondary/20 dark:text-secondary" },
  convocatorias: { label: "Convocatorias", dot: "bg-primary", chip: "border-primary/20 bg-primary/10 text-primary dark:bg-primary/20 dark:text-foreground" },
};

interface Cell {
  day: number;
  iso: string;
  inMonth: boolean;
}

export function AcademicCalendar() {
  const [viewDate, setViewDate] = useState({ year: 2026, month: 8 });
  const [selected, setSelected] = useState<string | null>(null);

  const todayIso = new Date().toISOString().slice(0, 10);

  const cells: Cell[] = useMemo(() => {
    const year = viewDate.year;
    const month = viewDate.month;
    const firstDay = new Date(year, month, 1);
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
    <SectionShell
      id="calendario"
      tone="default"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Calendario académico"
    >
      <Container>
        <SectionTitle
          eyebrow="Calendario"
          title="Calendario"
          highlight="académico"
          description="Inicio de semestres, inscripciones, exámenes, vacaciones y eventos importantes. Navega por mes y consulta el detalle de cada fecha."
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.65fr)_minmax(20rem,1fr)] xl:gap-8">
          <Card className="gap-0 rounded-2xl border-border/80 bg-card p-3 shadow-card dark:bg-dark-card sm:p-6">
            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-secondary shadow-card" aria-hidden>
                  <CalendarDays className="size-5" />
                </span>
                <h3 className="min-w-0 font-display text-xl font-bold text-foreground sm:text-2xl">
                  {MONTHS[viewDate.month]} {viewDate.year}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2 self-end sm:self-auto">
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => moveMonth(-1)}
                  aria-label="Mes anterior"
                  className="cursor-pointer"
                >
                  <ChevronLeft className="size-4" aria-hidden />
                </Button>
                <Button
                  type="button"
                  size="icon"
                  variant="outline"
                  onClick={() => moveMonth(1)}
                  aria-label="Mes siguiente"
                  className="cursor-pointer"
                >
                  <ChevronRight className="size-4" aria-hidden />
                </Button>
              </div>
            </div>

            <div className="mb-2 grid grid-cols-7 gap-1 sm:gap-1.5" role="row">
              {DAY_LABELS.map((d) => (
                <div key={d} role="columnheader" className="py-1 text-center text-[10px] font-bold uppercase tracking-wider text-muted-foreground sm:text-[11px]">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 sm:gap-1.5" role="grid" aria-label={`Días de ${MONTHS[viewDate.month]} ${viewDate.year}`}>
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
                    aria-selected={isSelected}
                    aria-current={isToday ? "date" : undefined}
                    onClick={() => setSelected(dayEvents.length > 0 ? cell.iso : null)}
                    className={cn(
                      "relative flex aspect-square min-w-0 flex-col items-center justify-center rounded-xl text-xs font-semibold transition-all duration-200 focus-visible:z-10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 sm:text-sm",
                      cell.inMonth ? "text-foreground hover:bg-accent" : "text-muted-foreground/50",
                      dayEvents.length > 0 && !isSelected && "cursor-pointer bg-surface-soft font-bold hover:bg-accent",
                      isToday && !isSelected && "bg-secondary/20 font-bold text-primary ring-2 ring-secondary",
                      isSelected && "scale-[1.03] bg-primary text-primary-foreground shadow-card-hover ring-2 ring-secondary"
                    )}
                  >
                    {cell.day}
                    {dayEvents.length > 0 && (
                      <span className="absolute bottom-1 flex gap-0.5" aria-hidden>
                        {dayEvents.slice(0, 3).map((ev) => (
                          <span
                            key={ev.id}
                            className={cn("size-1.5 rounded-full", isSelected ? "bg-primary-foreground" : categoryConfig[ev.category].dot)}
                          />
                        ))}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-border/70 pt-5">
              {(Object.keys(categoryConfig) as CalendarCategory[]).map((cat) => (
                <Badge
                  key={cat}
                  variant="outline"
                  className="border-border/70 bg-background/60 text-muted-foreground dark:border-dark-border dark:bg-dark-card dark:text-muted-foreground"
                >
                  <span className={cn("size-2 rounded-full", categoryConfig[cat].dot)} aria-hidden />
                  {categoryConfig[cat].label}
                </Badge>
              ))}
            </div>
          </Card>

          <div className="flex min-w-0 flex-col gap-6">
            <Card className="gap-0 rounded-2xl border-border/80 bg-card p-5 shadow-card dark:bg-dark-card sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-secondary-soft text-primary dark:bg-primary/20 dark:text-secondary" aria-hidden>
                  <CalendarDays className="size-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">Detalle del día</p>
                  <h3 className="mt-1 font-display text-lg font-bold leading-snug text-foreground">
                    {selected
                      ? new Date(selected + "T12:00:00").toLocaleDateString("es-ES", {
                          weekday: "long", day: "numeric", month: "long", year: "numeric",
                        })
                      : "Selecciona una fecha"}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {selected
                  ? `${selectedEvents.length} evento(s) programado(s)`
                  : "Los días con eventos muestran puntos de color. Haz clic para ver el detalle."}
              </p>

              <div className="mt-5 space-y-3" aria-live="polite">
                <AnimatePresence mode="popLayout">
                  {selectedEvents.length === 0 ? (
                    <motion.p
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="rounded-2xl border border-dashed border-border bg-surface-soft/60 px-4 py-8 text-center text-sm text-muted-foreground dark:bg-dark-surface/60"
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
                        className="rounded-2xl border border-border/80 bg-surface-soft/70 p-4 transition-colors hover:border-primary/30 dark:bg-dark-surface/70"
                      >
                        <Badge variant="outline" className={categoryConfig[ev.category].chip}>
                          {categoryConfig[ev.category].label}
                        </Badge>
                        <p className="mt-2 text-sm font-semibold text-foreground">{ev.title}</p>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </Card>

            <Card className="gap-0 rounded-2xl border-dark-border/70 bg-dark-background p-5 text-white shadow-card sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="font-display text-base font-bold text-white">Agenda de {MONTHS[viewDate.month]}</h3>
                <Badge variant="secondary" className="border-secondary/40 bg-secondary/15 text-secondary">
                  {monthEvents.length} {monthEvents.length === 1 ? "evento" : "eventos"}
                </Badge>
              </div>
              <ul className="mt-5 space-y-3">
                {monthEvents.length === 0 ? (
                  <li className="text-sm text-white/70">Sin eventos este mes.</li>
                ) : (
                  monthEvents.map((ev) => (
                    <li key={ev.id} className="flex items-start gap-3 text-sm">
                      <span className={cn("mt-1.5 size-2 shrink-0 rounded-full", categoryConfig[ev.category].dot)} aria-hidden />
                      <span className="w-9 shrink-0 font-display font-bold text-secondary">
                        {new Date(ev.date + "T12:00:00").getDate()}
                      </span>
                      <span className="min-w-0 text-white/80">{ev.title}</span>
                    </li>
                  ))
                )}
              </ul>
            </Card>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

function toIso(year: number, month: number, day: number) {
  const d = new Date(year, month, day);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}
