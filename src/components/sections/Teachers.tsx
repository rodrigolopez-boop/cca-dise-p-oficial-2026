"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, BookOpen, Award } from "lucide-react";
import { teachers } from "@/lib/mockData";
import type { Teacher, TeacherSpecialty } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { Avatar } from "@/components/shared/Avatar";

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

/**
 * Plantel docente con filtros por especialidad y modal de perfil completo.
 * Datos: GET /api/docentes.
 */
export function Teachers() {
  const [specialty, setSpecialty] = useState<(typeof specialtyOptions)[number]["value"]>("todas");
  const [selected, setSelected] = useState<Teacher | null>(null);

  const filtered = useMemo(
    () => (specialty === "todas" ? teachers : teachers.filter((t) => t.specialty === specialty)),
    [specialty]
  );

  return (
    <section id="docentes" className="relative py-20 md:py-28" aria-label="Plantel docente">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Docentes"
          title="Nuestro plantel"
          highlight="docente"
          description="Profesionales activos de la industria creativa que combinan trayectoria profesional con vocación docente."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={specialtyOptions} active={specialty} onChange={setSpecialty} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((teacher) => (
              <motion.article
                layout
                key={teacher.id}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35 }}
                className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg cursor-pointer"
                onClick={() => setSelected(teacher)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelected(teacher)}
                aria-label={`Ver perfil de ${teacher.name}`}
              >
                {/* Halo superior */}
                <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-br ${teacher.gradient} opacity-[0.08] transition-opacity group-hover:opacity-[0.16]`} aria-hidden />

                <Avatar initials={teacher.initials} gradient={teacher.gradient} size="xl" className="mt-3 transition-transform duration-300 group-hover:scale-105" />
                <h3 className="mt-4 font-display text-[16px] font-bold text-ink-900">{teacher.name}</h3>
                <p className="mt-0.5 text-[13px] font-medium text-fuchsia-600">{teacher.role}</p>
                <span className="mt-3 rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-violet-100">
                  {teacher.specialty}
                </span>
                <p className="mt-3 line-clamp-2 text-[13px] leading-relaxed text-slate-500">
                  {teacher.bio}
                </p>
                <div className="mt-4 flex items-center gap-1.5 border-t border-slate-100 pt-4 text-xs text-slate-500">
                  <Award className="h-3.5 w-3.5 text-amber-500" aria-hidden />
                  {teacher.experience} años de experiencia
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal de perfil completo */}
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
            aria-label={`Perfil de ${selected.name}`}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-white shadow-soft-lg"
            >
              {/* Cabecera con gradiente del docente */}
              <div className={`relative bg-gradient-to-br ${selected.gradient} px-7 pb-16 pt-8`}>
                <button
                  type="button"
                  onClick={() => setSelected(null)}
                  aria-label="Cerrar perfil"
                  className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-ink-950/30 text-white backdrop-blur transition-colors hover:bg-ink-950/60 cursor-pointer"
                >
                  <X className="h-5 w-5" aria-hidden />
                </button>
                <div className="flex items-center gap-4 text-white">
                  <Avatar
                    initials={selected.initials}
                    gradient="from-white/25 to-white/10"
                    size="xl"
                    className="ring-2 ring-white/40"
                  />
                  <div>
                    <h3 className="font-display text-xl font-bold">{selected.name}</h3>
                    <p className="mt-0.5 text-sm text-white/85">{selected.role}</p>
                  </div>
                </div>
              </div>

              <div className="-mt-10 px-7 pb-7">
                <div className="rounded-2xl bg-white p-5 shadow-soft ring-1 ring-slate-100">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-violet-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-violet-100">
                      {selected.specialty}
                    </span>
                    <span className="flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-[11px] font-semibold text-amber-700 ring-1 ring-amber-100">
                      <Award className="h-3 w-3" aria-hidden />
                      {selected.experience} años de experiencia
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{selected.bio}</p>

                  <div className="mt-5">
                    <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                      <BookOpen className="h-4 w-4 text-violet-500" aria-hidden />
                      Asignaturas que imparte
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {selected.subjects.map((subject) => (
                        <li
                          key={subject}
                          className="rounded-full bg-slate-100 px-3.5 py-1.5 text-[13px] font-medium text-slate-700"
                        >
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
