import { CalendarClock } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { CourseLaunch } from "@/lib/cursosData";
import { formatDate, launchStatusConfig } from "./utils";

interface CronogramaProps {
  id: string;
  enProceso: CourseLaunch[];
  proximos: CourseLaunch[];
}

export function Cronograma({ id, enProceso, proximos }: CronogramaProps) {
  return (
    <SectionShell id={id} tone="soft" aria-label="Cronograma de lanzamientos">
      <SectionTitle
        eyebrow="Calendario"
        title="Lanzamientos de"
        highlight="cursos"
        description="Consulta los grupos que están en proceso y las fechas de los próximos lanzamientos."
      />

      <div className="grid gap-10 lg:grid-cols-2">
        {[
          { heading: "En proceso", items: enProceso, tone: "en-proceso" as const },
          { heading: "Próximos lanzamientos", items: proximos, tone: "proximo" as const },
        ].map((group) => {
          const config = launchStatusConfig[group.tone];
          return (
            <AnimatedSection key={group.heading}>
              <div className="mb-6 flex items-center gap-3">
                <span className={cn("size-2.5 rounded-full", config.dot)} aria-hidden />
                <h3 className="font-display text-lg font-bold text-primary dark:text-white">{group.heading}</h3>
                <Badge variant="outline" className="ml-auto">
                  {group.items.length}
                </Badge>
              </div>

              <ol className="relative space-y-4 border-l border-border/70 pl-6">
                {group.items.map((launch) => (
                  <li key={launch.id} className="relative">
                    <span
                      className={cn(
                        "absolute -left-[31px] top-5 size-4 rounded-full border-2 border-background",
                        launch.status === "en-proceso" ? "bg-success" : "bg-warning"
                      )}
                      aria-hidden
                    />
                    <Card className="gap-0 rounded-2xl border-border/70 p-6 shadow-card">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h4 className="font-display text-base font-bold text-foreground">{launch.course}</h4>
                          <p className="mt-1 text-xs text-muted-foreground">{launch.note}</p>
                        </div>
                        <Badge variant={config.variant} className="shrink-0">
                          {config.label}
                        </Badge>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-primary dark:text-blue-200">
                        <CalendarClock className="size-4" aria-hidden />
                        {formatDate(launch.date)}
                      </div>
                    </Card>
                  </li>
                ))}
              </ol>
            </AnimatedSection>
          );
        })}
      </div>
    </SectionShell>
  );
}
