"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { promotions } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";

/**
 * Promociones y beneficios destacados con tarjetas llamativas.
 * Datos: GET /api/promociones.
 */
export function Promotions() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
      aria-label="Promociones y beneficios"
    >
      <div className="absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-violet-200/50 blur-3xl" aria-hidden />
      <div className="absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-fuchsia-200/40 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Promociones"
          title="Beneficios y"
          highlight="promociones"
          description="Aprovecha los descuentos y beneficios vigentes para nuevos ingresos y estudiantes actuales de la carrera."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo, i) => (
            <motion.article
              key={promo.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-ink-900 to-ink-700 p-[1.5px] shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg"
            >
              {/* Borde con gradiente */}
              <div className="rounded-[calc(1.5rem-1.5px)] bg-white p-6 h-full flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div
                    className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${promo.gradient} p-3.5 text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon name={promo.icon} className="h-6 w-6" />
                  </div>
                  <span
                    className={`rounded-2xl bg-gradient-to-r ${promo.gradient} px-4 py-2 font-display text-xl font-bold text-white shadow-lg`}
                  >
                    {promo.discount}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold text-ink-900">
                  {promo.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {promo.description}
                </p>

                <dl className="mt-5 space-y-2 rounded-2xl bg-slate-50 p-4 text-[13px]">
                  <div className="flex items-center justify-between gap-3">
                    <dt className="text-slate-500">Vigencia</dt>
                    <dd className="font-semibold text-ink-900 text-right">{promo.validity}</dd>
                  </div>
                  <div className="border-t border-slate-200/70 pt-2">
                    <dt className="text-slate-500 mb-1">Condiciones</dt>
                    <dd className="text-slate-600 leading-relaxed">{promo.conditions}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white opacity-90 transition-all hover:opacity-100 hover:scale-[1.02] cursor-pointer"
                >
                  <BadgeCheck className="h-4 w-4" aria-hidden />
                  Conocer promoción
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
