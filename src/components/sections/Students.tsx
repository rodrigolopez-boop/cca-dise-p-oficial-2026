"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import { studentProjects, studentClubs } from "@/lib/mockData";
import type { ProjectCategory } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { EmptyState } from "@/components/shared/EmptyState";
import { GradientCover } from "@/components/shared/GradientCover";
import { Icon } from "@/components/shared/Icon";
import { Container } from "@/components/shared/Container";
import { SectionShell } from "@/components/shared/SectionShell";
import { CategoryCard } from "@/components/shared/CategoryCard";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const categoryOptions: { value: ProjectCategory | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "Diseño gráfico", label: "Diseño gráfico" },
  { value: "Ilustración", label: "Ilustración" },
  { value: "Animación", label: "Animación" },
  { value: "Fotografía", label: "Fotografía" },
  { value: "Branding", label: "Branding" },
  { value: "Audiovisual", label: "Audiovisual" },
  { value: "UX/UI", label: "UX/UI" },
];

export function Students() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]["value"]>("todas");

  const filtered = useMemo(
    () => (category === "todas" ? studentProjects : studentProjects.filter((p) => p.category === category)),
    [category]
  );

  return (
    <SectionShell
      id="estudiantes"
      tone="soft"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Comunidad estudiantil"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/3 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-secondary/15 blur-3xl" aria-hidden />

      <Container>
        <SectionTitle
          eyebrow="Estudiantes"
          title="Proyectos que"
          highlight="inspiran"
          description="La comunidad estudiantil produce obra constante: concursos, exposiciones, clubes y proyectos reales cada semestre. Este es el trabajo que está marcando la diferencia."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} className="justify-center" />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            message="Aún no hay proyectos publicados en esta categoría. Pronto verás nuevas piezas de nuestros estudiantes."
            onReset={() => setCategory("todas")}
          />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.article
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.96, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.32 }}
                  className="group h-full"
                >
                  <Card className="h-full gap-0 overflow-hidden rounded-2xl border-border/80 bg-card p-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                    <GradientCover
                      gradient={project.gradient}
                      icon={project.icon}
                      variant="waves"
                      className="h-40 w-full rounded-none sm:h-44"
                    />
                    <div className="flex flex-1 flex-col p-5">
                      <Badge variant="info">{project.category}</Badge>
                      <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground transition-colors group-hover:text-primary">
                        {project.name}
                      </h3>
                      <p className="mt-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">{project.description}</p>
                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-border/60 pt-3.5 text-xs text-muted-foreground">
                        <span className="flex min-w-0 items-center gap-1.5 font-medium text-foreground">
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <User className="h-3.5 w-3.5" aria-hidden />
                          </span>
                          <span className="truncate">{project.author}</span>
                        </span>
                        <span className="shrink-0">{project.semester}</span>
                      </div>
                    </div>
                  </Card>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {studentClubs.map((club, i) => (
            <motion.div
              key={club.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="h-full"
            >
              <CategoryCard
                title={club.title}
                description={club.description}
                icon={<Icon name={club.icon} className="h-5 w-5" />}
                className="h-full"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
