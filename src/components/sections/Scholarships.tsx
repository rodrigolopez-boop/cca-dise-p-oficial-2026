"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarRange, FileCheck2, Check, ChevronDown } from "lucide-react";
import { scholarships } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";

/**
 * Becas institucionales con expansión de requisitos y documentación.
 * Datos: GET /api/becas.
 */
export function Scholarships() {
  const [expanded, setExpanded] = useState<string | null>(scholarships[0].id);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <section id="becas" className="relative py-20 md:py-28" aria-label="Becas">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Becas"
          title="Financia tu"
          highlight="futuro creativo"
          description="Siete tipos de beca para que el talento nunca se detenga por razones económicas. Revisa requisitos, vigencia y documentación."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {scholarships.map((scholarship, i) => {
            const isOpen = expanded === scholarship.id;
            return (
              <motion.article
                key={scholarship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={cn(
                  "flex flex-col overflow-hidden rounded-3xl border bg-white shadow-soft transition-all duration-300",
                  isOpen ? "border-violet-300 shadow-soft-lg" : "border-slate-100 hover:-translate-y-1 hover:shadow-soft-lg"
                )}
              >
                {/* Cabecera */}
                <div className="flex items-start gap-4 p-6 pb-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-glow-violet">
                    <Icon name={scholarship.icon} className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[17px] font-bold text-ink-900">{scholarship.name}</h3>
                    <span className="mt-1.5 inline-block rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-3 py-1 text-xs font-bold text-white">
                      {scholarship.percentage}
                    </span>
                  </div>
                </div>

                <div className="px-6 pb-4">
                  <p className="text-sm text-slate-600">{scholarship.benefit}</p>
                  <div className="mt-3 space-y-1.5 text-[13px]">
                    <p className="flex items-center gap-2 text-slate-500">
                      <CalendarRange className="h-3.5 w-3.5 text-fuchsia-500" aria-hidden />
                      Convocatoria: <span className="font-medium text-ink-900">{scholarship.callDate}</span>
                    </p>
                    <p className="flex items-center gap-2 text-slate-500">
                      <FileCheck2 className="h-3.5 w-3.5 text-violet-500" aria-hidden />
                      {scholarship.documents.length} documentos necesarios
                    </p>
                  </div>
                </div>

                {/* Botón expandir requisitos */}
                <button
                  type="button"
                  onClick={() => toggle(scholarship.id)}
                  aria-expanded={isOpen}
                  aria-controls={`requisitos-${scholarship.id}`}
                  className="mt-auto inline-flex w-full items-center justify-between border-t border-slate-100 px-6 py-4 text-sm font-semibold text-violet-700 transition-colors hover:bg-violet-50 cursor-pointer"
                >
                  Ver requisitos
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform duration-300", isOpen && "rotate-180")}
                    aria-hidden
                  />
                </button>

                {/* Panel expandible */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`requisitos-${scholarship.id}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="space-y-5 bg-gradient-to-b from-violet-50/60 to-fuchsia-50/40 px-6 py-5">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-violet-700">Requisitos</p>
                          <ul className="mt-2.5 space-y-1.5">
                            {scholarship.requirements.map((req) => (
                              <li key={req} className="flex items-start gap-2 text-[13px] text-slate-600">
                                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" aria-hidden />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <p className="text-xs font-bold uppercase tracking-wider text-fuchsia-700">Documentación</p>
                          <ul className="mt-2.5 space-y-1.5">
                            {scholarship.documents.map((doc) => (
                              <li key={doc} className="flex items-start gap-2 text-[13px] text-slate-600">
                                <FileCheck2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-violet-500" aria-hidden />
                                {doc}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <button
                          type="button"
                          className="w-full rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02] cursor-pointer"
                        >
                          Ver requisitos completos
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
