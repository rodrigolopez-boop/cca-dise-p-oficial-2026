"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, CircleDot } from "lucide-react";
import { calls } from "@/lib/mockData";
import type { CallCategory, CallStatus } from "@/types";
import { Container } from "@/components/shared/Container";
import { CourseCard } from "@/components/shared/CourseCard";
import { EmptyState } from "@/components/shared/EmptyState";
import { FilterChips } from "@/components/shared/FilterChips";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
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

const statusConfig: Record<CallStatus, { label: string; variant: "success" | "warning" | "outline"; dot: string }> = {
  abierta: { label: "Abierta", variant: "success", dot: "bg-success" },
  proxima: { label: "Próxima", variant: "warning", dot: "bg-warning" },
  cerrada: { label: "Cerrada", variant: "outline", dot: "bg-muted-foreground" },
};

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function Calls() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]["value"]>("todos");

  const filtered = useMemo(
    () => (category === "todos" ? calls : calls.filter((c) => c.category === category)),
    [category]
  );

  return (
    <SectionShell
      id="convocatorias"
      tone="soft"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Convocatorias"
    >
      <Container>
        <SectionTitle
          eyebrow="Convocatorias"
          title="Oportunidades"
          highlight="vigentes"
          description="Procesos activos de ingreso, becas, intercambios y más. Revisa las fechas límite y postúlate a tiempo."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} className="justify-center" />
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
                const actionLabel = call.status === "proxima" ? "Próximamente" : call.status === "cerrada" ? "Finalizada" : "Ver convocatoria";

                return (
                  <motion.article
                    layout
                    key={call.id}
                    initial={{ opacity: 0, scale: 0.94 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35 }}
                    className="h-full"
                  >
                    <CourseCard
                      title={call.name}
                      description={call.description}
                      icon={<CalendarClock className="size-6" aria-hidden />}
                      badge={
                        <div className="flex flex-wrap items-center justify-end gap-2">
                          <Badge
                            variant={status.variant}
                            className={cn(
                              call.status === "cerrada" && "border-border bg-surface text-muted-foreground dark:border-dark-border dark:bg-dark-surface dark:text-muted-foreground"
                            )}
                          >
                            <CircleDot className={cn("size-3.5 animate-pulse-soft", status.dot)} aria-hidden />
                            {status.label}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="max-w-full border-secondary/40 bg-secondary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                          >
                            {categoryOptions.find((c) => c.value === call.category)?.label}
                          </Badge>
                        </div>
                      }
                      meta={
                        <dl className="grid gap-3 rounded-2xl border border-border/70 bg-surface-soft/80 p-4">
                          <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                            <dt className="text-muted-foreground">Publicada</dt>
                            <dd className="text-right font-semibold text-foreground">{formatDate(call.publishedAt)}</dd>
                          </div>
                          <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border/70 pt-3 text-xs">
                            <dt className="text-muted-foreground">Fecha límite</dt>
                            <dd
                              className={cn(
                                "text-right font-semibold",
                                call.status === "cerrada" ? "text-muted-foreground" : "text-primary"
                              )}
                            >
                              {formatDate(call.deadline)}
                            </dd>
                          </div>
                        </dl>
                      }
                      actionLabel={actionLabel}
                      onAction={() => undefined}
                      actionDisabled={call.status === "cerrada"}
                      className={cn(
                        "h-full",
                        call.status === "cerrada"
                          ? "border-border/70 opacity-75 hover:opacity-100"
                          : "border-primary/20 hover:border-primary/40"
                      )}
                    />
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </div>
        )}
      </Container>
    </SectionShell>
  );
}
