"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User } from "lucide-react";
import { studentProjects } from "@/lib/mockData";
import type { ProjectCategory } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { EmptyState } from "@/components/shared/EmptyState";
import { GradientCover } from "@/components/shared/GradientCover";
import { Icon } from "@/components/shared/Icon";

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

/**
 * Comunidad estudiantil: galería de proyectos destacados con filtros.
 * Incluye pasarela de clubes y reconocimientos.
 * Datos: GET /api/proyectos-estudiantiles.
 */
export function Students() {
  const [category, setCategory] = useState<(typeof categoryOptions)[number]["value"]>("todas");

  const filtered = useMemo(
    () => (category === "todas" ? studentProjects : studentProjects.filter((p) => p.category === category)),
    [category]
  );

  return (
    <section
      id="estudiantes"
      className="relative bg-slate-50 py-20 md:py-28"
      aria-label="Comunidad estudiantil"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Estudiantes"
          title="Proyectos que"
          highlight="inspiran"
          description="La comunidad estudiantil produce obra constante: concursos, exposiciones, clubes y proyectos reales cada semestre. Este es el trabajo que está marcando la diferencia."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} />
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
                  initial={{ opacity: 0, scale: 0.92, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.4 }}
                  className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg"
                >
                  <GradientCover
                    gradient={project.gradient}
                    icon={project.icon}
                    variant="waves"
                    className="h-40 w-full"
                  />
                  <div className="p-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-violet-50 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-violet-100">
                      {project.category}
                    </span>
                    <h3 className="mt-3 font-display text-[16px] font-bold text-ink-900 group-hover:text-violet-700 transition-colors">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium text-ink-900">
                        <User className="h-3.5 w-3.5 text-fuchsia-500" aria-hidden />
                        {project.author}
                      </span>
                      <span>{project.semester}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Franja de clubes y actividades estudiantiles */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Club de Animación", desc: "Screenings semanales y producción colectiva de cortos.", icon: "Clapperboard", gradient: "from-violet-600 to-fuchsia-600" },
            { title: "Club de Fotografía", desc: "Caminatas fotográficas y laboratorio analógico.", icon: "Camera", gradient: "from-cyan-500 to-blue-600" },
            { title: "Concursos y Reconocimientos", desc: "Delegación oficial en certámenes nacionales cada año.", icon: "Trophy", gradient: "from-amber-500 to-orange-600" },
            { title: "Exposiciones Permanentes", desc: "Curaduría semestral en la galería universitaria.", icon: "Frame", gradient: "from-emerald-500 to-teal-600" },
          ].map((club, i) => (
            <motion.div
              key={club.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${club.gradient} text-white`}>
                <Icon name={club.icon} className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-[15px] font-bold text-ink-900">{club.title}</h3>
                <p className="mt-1 text-[13px] leading-relaxed text-slate-500">{club.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
