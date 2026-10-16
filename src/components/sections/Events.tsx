"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { events } from "@/lib/mockData";
import type { EventCategory } from "@/types";
import { Container } from "@/components/shared/Container";
import { EmptyState } from "@/components/shared/EmptyState";
import { FilterChips } from "@/components/shared/FilterChips";
import { GradientCover } from "@/components/shared/GradientCover";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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

export function Events() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]["value"]>("todos");

  const filtered = useMemo(
    () => (category === "todos" ? events : events.filter((e) => e.category === category)),
    [category]
  );

  return (
    <SectionShell
      id="vida-universitaria"
      tone="muted"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Eventos y actividades"
    >
      <Container>
        <SectionTitle
          eyebrow="Vida universitaria"
          title="Eventos y"
          highlight="actividades"
          description="Workshops, conferencias, exposiciones y concursos que mantienen el campus en constante creatividad."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} className="justify-center" />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            message="No hay eventos programados en esta categoría. Consulta otras categorías o el calendario académico."
            onReset={() => setCategory("todos")}
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((event) => (
                <motion.article
                  layout
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.94, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.38 }}
                  className="group h-full"
                >
                  <Card className="h-full gap-0 overflow-hidden rounded-2xl border-border/80 bg-card p-0 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-card-hover">
                    <GradientCover
                      gradient={event.gradient}
                      icon={event.icon}
                      variant="rings"
                      className="h-44 w-full rounded-none"
                    />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <Badge
                          variant="outline"
                          className="border-secondary/40 bg-secondary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                        >
                          {categoryOptions.find((c) => c.value === event.category)?.label}
                        </Badge>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">Campus creativo</span>
                      </div>
                      <h3 className="mt-4 font-display text-lg font-bold leading-snug text-foreground transition-colors group-hover:text-primary dark:group-hover:text-secondary">
                        {event.title}
                      </h3>
                      <dl className="mt-4 grid gap-2.5 text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary dark:bg-dark-surface dark:text-secondary" aria-hidden>
                            <CalendarDays className="size-4" />
                          </span>
                          <dt className="sr-only">Fecha</dt>
                          <dd>{formatEventDate(event.date)}</dd>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary dark:bg-dark-surface dark:text-secondary" aria-hidden>
                            <Clock className="size-4" />
                          </span>
                          <dt className="sr-only">Horario</dt>
                          <dd>{event.time}</dd>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-soft text-primary dark:bg-dark-surface dark:text-secondary" aria-hidden>
                            <MapPin className="size-4" />
                          </span>
                          <dt className="sr-only">Lugar</dt>
                          <dd>{event.place}</dd>
                        </div>
                      </dl>
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{event.description}</p>
                      <Button type="button" variant="outline" className="mt-5 w-full cursor-pointer">
                        Ver detalles
                      </Button>
                    </div>
                  </Card>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </Container>
    </SectionShell>
  );
}
