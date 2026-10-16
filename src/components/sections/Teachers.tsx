"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Award } from "lucide-react";
import { teachers } from "@/lib/mockData";
import type { Teacher, TeacherSpecialty } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { Avatar } from "@/components/shared/Avatar";
import { Container } from "@/components/shared/Container";
import { SectionShell } from "@/components/shared/SectionShell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const specialtyOptions: { value: TeacherSpecialty | "todas"; label: string }[] = [
  { value: "todas", label: "Todas" },
  { value: "Diseño gráfico", label: "Diseño gráfico" },
  { value: "Animación", label: "Animación" },
  { value: "Ilustración", label: "Ilustración" },
  { value: "Fotografía", label: "Fotografía" },
  { value: "UX/UI", label: "UX/UI" },
  { value: "Audiovisual", label: "Audiovisual" },
  { value: "Branding", label: "Branding" },
];

export function Teachers() {
  const [specialty, setSpecialty] = useState<(typeof specialtyOptions)[number]["value"]>("todas");
  const [selected, setSelected] = useState<Teacher | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const filtered = useMemo(
    () => (specialty === "todas" ? teachers : teachers.filter((t) => t.specialty === specialty)),
    [specialty]
  );

  return (
    <SectionShell
      id="docentes"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Plantel docente"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-30" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" aria-hidden />

      <Container>
        <SectionTitle
          eyebrow="Docentes"
          title="Nuestro plantel"
          highlight="docente"
          description="Profesionales activos de la industria creativa que combinan trayectoria profesional con vocación docente."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={specialtyOptions} active={specialty} onChange={setSpecialty} className="justify-center" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((teacher) => (
              <motion.article
                layout
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.32 }}
                className="group relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-border/80 bg-card p-6 text-center shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/20 cursor-pointer"
                onClick={() => setSelected(teacher)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(teacher)}
                aria-label={`Ver perfil de ${teacher.name}`}
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" aria-hidden />
                <div className="absolute inset-x-0 top-1 h-24 bg-primary/5 transition-opacity duration-300 group-hover:bg-secondary/10" aria-hidden />
                <Avatar
                  initials={teacher.initials}
                  gradient={teacher.gradient}
                  size="xl"
                  className="mt-3 ring-1 ring-primary/10 transition-transform duration-300 group-hover:scale-105"
                />
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{teacher.name}</h3>
                <p className="mt-1 text-[13px] font-medium text-primary">{teacher.role}</p>
                <Badge variant="info" className="mt-3">
                  {teacher.specialty}
                </Badge>
                <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-muted-foreground">{teacher.bio}</p>
                <div className="mt-4 flex items-center gap-1.5 border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-warning" aria-hidden />
                  {teacher.experience} años de experiencia
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-background/80 p-4 backdrop-blur-sm"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`Perfil de ${selected.name}`}
            aria-labelledby={`teacher-dialog-${selected.id}`}
            aria-describedby={`teacher-bio-${selected.id}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[88vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border/80 bg-card shadow-card-hover scrollbar-slim"
            >
              <div className="relative overflow-hidden rounded-t-2xl bg-dark-background px-6 pb-14 pt-7 sm:px-7">
                <div className="absolute -right-10 -top-16 size-40 rounded-full bg-primary/30 blur-3xl" aria-hidden />
                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-primary to-secondary" aria-hidden />
                <Button
                  type="button"
                  variant="inverse"
                  size="icon"
                  onClick={() => setSelected(null)}
                  aria-label="Cerrar perfil"
                  className="absolute right-4 top-4 focus-visible:ring-secondary/40"
                >
                  <X className="h-5 w-5" aria-hidden />
                </Button>
                <div className="relative flex items-center gap-4 text-white">
                  <Avatar
                    initials={selected.initials}
                    gradient={selected.gradient}
                    size="xl"
                    className="ring-2 ring-secondary/40"
                  />
                  <div>
                    <h2 id={`teacher-dialog-${selected.id}`} className="font-display text-xl font-bold">
                      {selected.name}
                    </h2>
                    <p className="mt-1 text-sm text-white/70">{selected.role}</p>
                  </div>
                </div>
              </div>

              <div className="px-6 pb-6 sm:px-7">
                <Card className="-mt-8 gap-0 rounded-2xl border-border/80 bg-card p-5 shadow-card dark:bg-card/90">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="info">{selected.specialty}</Badge>
                    <Badge variant="warning" className="gap-1.5">
                      <Award className="h-3 w-3" aria-hidden />
                      {selected.experience} años de experiencia
                    </Badge>
                  </div>
                  <p id={`teacher-bio-${selected.id}`} className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {selected.bio}
                  </p>

                  <div className="mt-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary dark:text-primary-foreground">
                      <BookOpen className="h-4 w-4 text-primary" aria-hidden />
                      Asignaturas que imparte
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {selected.subjects.map((subject) => (
                        <li
                          key={subject}
                          className="rounded-xl border border-border/60 bg-surface px-3.5 py-1.5 text-[13px] font-medium text-foreground"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}