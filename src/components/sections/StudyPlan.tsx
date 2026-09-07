"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Eye, BadgeCheck, Clock3 } from "lucide-react";
import { studyPlan } from "@/lib/mockData";
import type { Subject } from "@/types";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";

const typeStyles: Record<Subject["type"], string> = {
  Básica: "bg-violet-100 text-violet-700 ring-violet-200",
  Profesional: "bg-cyan-100 text-cyan-700 ring-cyan-200",
  Especialidad: "bg-fuchsia-100 text-fuchsia-700 ring-fuchsia-200",
  Optativa: "bg-amber-100 text-amber-700 ring-amber-200",
};

const typeDot: Record<Subject["type"], string> = {
  Básica: "bg-violet-500",
  Profesional: "bg-cyan-500",
  Especialidad: "bg-fuchsia-500",
  Optativa: "bg-amber-500",
};

/**
 * Plan de estudios interactivo: tabs por semestre con detalle de asignaturas.
 * "Ver plan completo" expande todos los semestres; "Descargar" exporta el plan.
 */
export function StudyPlan() {
  const [activeTab, setActiveTab] = useState(1);
  const [showFullPlan, setShowFullPlan] = useState(false);

  const downloadPlan = () => {
    const lines: string[] = [
      "PLAN DE ESTUDIOS — LICENCIATURA EN DISEÑO GRÁFICO Y ANIMACIÓN",
      "8 semestres · 480 créditos · Modalidad presencial",
      "=".repeat(64),
      "",
    ];
    for (const sem of studyPlan) {
      lines.push(`${sem.number}º SEMESTRE (${sem.period})`, "-".repeat(40));
      for (const s of sem.subjects) {
        lines.push(`  [${s.code}] ${s.name} — ${s.credits} créditos · ${s.type}`);
        lines.push(`      ${s.description}`);
      }
      lines.push("");
    }
    const blob = new Blob([lines.join("\n")], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "plan-de-estudios-diseno-grafico-y-animacion.txt";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const visibleSemesters = showFullPlan ? studyPlan : [studyPlan.find((s) => s.number === activeTab)!];
  const activeSemester = studyPlan.find((s) => s.number === activeTab)!;

  return (
    <section id="plan-estudios" className="relative py-20 md:py-28" aria-label="Plan de estudios">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Plan de estudios"
          title="Tu ruta de aprendizaje"
          highlight="semestre a semestre"
          description="Un plan por competencias que evoluciona de los fundamentos al proyecto de titulación. Explora cada semestre y sus asignaturas."
        />

        {/* Tabs de semestres */}
        <div className="mb-10 flex flex-wrap justify-center gap-2" role="tablist" aria-label="Semestres">
          {studyPlan.map((sem) => {
            const isActive = !showFullPlan && activeTab === sem.number;
            return (
              <button
                key={sem.number}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => {
                  setActiveTab(sem.number);
                  setShowFullPlan(false);
                }}
                className={cn(
                  "rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-300 cursor-pointer",
                  isActive
                    ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-glow-violet scale-[1.03]"
                    : "bg-white text-slate-600 ring-1 ring-slate-200 hover:ring-violet-300 hover:text-violet-700 hover:-translate-y-0.5 shadow-soft"
                )}
              >
                <span className="font-display">{sem.number}º</span>
                <span className="ml-1.5 hidden sm:inline font-normal opacity-80">sem.</span>
              </button>
            );
          })}
        </div>

        {/* Contenido del semestre activo */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`tab-${activeTab}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-ink-900 to-ink-700 px-6 py-5 text-white shadow-soft-lg">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 font-display text-lg font-bold">
                  {activeSemester.number}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold">{activeSemester.number}º semestre</h3>
                  <p className="text-sm text-violet-300">Eje: {activeSemester.period}</p>
                </div>
              </div>
              <div className="flex items-center gap-5 text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <BadgeCheck className="h-4 w-4 text-fuchsia-400" aria-hidden />
                  {activeSemester.subjects.length} asignaturas
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock3 className="h-4 w-4 text-violet-400" aria-hidden />
                  {activeSemester.subjects.reduce((acc, s) => acc + s.credits, 0)} créditos
                </span>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {activeSemester.subjects.map((subject, i) => (
                <motion.article
                  key={subject.code}
                  initial={{ opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="group rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-soft-lg"
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="rounded-lg bg-ink-900 px-2.5 py-1 font-mono text-[11px] font-semibold text-violet-300">
                      {subject.code}
                    </span>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1",
                        typeStyles[subject.type]
                      )}
                    >
                      {subject.type}
                    </span>
                  </div>
                  <h4 className="mt-4 font-display text-[16px] font-bold text-ink-900 group-hover:text-violet-700 transition-colors">
                    {subject.name}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{subject.description}</p>
                  <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-3 text-xs text-slate-500">
                    <span className={cn("h-2 w-2 rounded-full", typeDot[subject.type])} aria-hidden />
                    {subject.credits} créditos
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Plan completo expandido */}
        {showFullPlan && (
          <div className="mt-10 space-y-8">
            {visibleSemesters.map((sem) => (
              <motion.div
                key={`full-${sem.number}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600 font-display text-sm font-bold text-white">
                    {sem.number}
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink-900">
                    {sem.number}º semestre <span className="text-slate-400 font-medium text-base">· {sem.period}</span>
                  </h3>
                </div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {sem.subjects.map((s) => (
                    <div
                      key={s.code}
                      className="rounded-xl border border-slate-100 bg-white px-4 py-3.5 shadow-soft transition-colors hover:border-violet-200"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-ink-900">{s.name}</span>
                        <span className="shrink-0 text-xs font-medium text-slate-500">{s.credits} cr.</span>
                      </div>
                      <div className="mt-2 flex items-center gap-2">
                        <span className={cn("h-1.5 w-1.5 rounded-full", typeDot[s.type])} aria-hidden />
                        <span className="text-xs text-slate-500">{s.type} · {s.code}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Acciones */}
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            type="button"
            onClick={() => setShowFullPlan((v) => !v)}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-glow-violet transition-all hover:scale-[1.03] hover:shadow-glow-magenta cursor-pointer"
          >
            <Eye className="h-4 w-4" aria-hidden />
            {showFullPlan ? "Ver por semestre" : "Ver plan completo"}
          </button>
          <button
            type="button"
            onClick={downloadPlan}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-ink-900 shadow-soft transition-all hover:border-violet-300 hover:text-violet-700 hover:-translate-y-0.5 cursor-pointer"
          >
            <Download className="h-4 w-4" aria-hidden />
            Descargar plan de estudios
          </button>
        </div>
      </div>
    </section>
  );
}
