"use client";

import { motion } from "framer-motion";
import { quickFacts } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";

/**
 * Tarjetas de información rápida de la carrera (duración, modalidad, créditos…).
 * Datos provenientes de GET /api/carrera/resumen (mock).
 */
export function QuickInfo() {
  return (
    <section id="carrera" className="relative py-20 md:py-28" aria-label="Información rápida de la carrera">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 xl:grid-cols-6">
          {quickFacts.map((fact, i) => (
            <motion.article
              key={fact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-soft-lg"
            >
              {/* Acento superior al hacer hover */}
              <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-orange-500 transition-transform duration-300 group-hover:scale-x-100" />

              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-600 transition-colors duration-300 group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:text-white">
                <Icon name={fact.icon} className="h-5 w-5" />
              </div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                {fact.label}
              </p>
              <p className="mt-1.5 font-display text-lg font-bold text-ink-900 leading-tight">
                {fact.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{fact.sub}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
