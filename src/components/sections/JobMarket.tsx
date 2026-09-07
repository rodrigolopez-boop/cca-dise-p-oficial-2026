"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { careerAreas } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";

/**
 * Mercado laboral: tarjetas de áreas profesionales + gráfica de demanda.
 * Datos: GET /api/mercado-laboral.
 */
export function JobMarket() {
  return (
    <section
      className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-28"
      aria-label="Mercado laboral"
    >
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" aria-hidden />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[130px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          dark
          eyebrow="Mercado laboral"
          title="¿Dónde podrás"
          highlight="trabajar?"
          description="El campo profesional del diseño gráfico y la animación es uno de los más amplios y dinámicos. Estas son las salidas principales y su demanda en la industria."
        />

        {/* Tarjetas de áreas profesionales */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {careerAreas.map((area, i) => (
            <motion.article
              key={area.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 5) * 0.07 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div
                className={`absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br ${area.gradient} opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-50`}
                aria-hidden
              />
              <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
                <Icon name={area.icon} className="h-5 w-5" />
              </div>
              <h3 className="font-display text-[15px] font-bold leading-snug">{area.title}</h3>
              <p className="mt-2 text-[13px] leading-relaxed text-slate-400">{area.description}</p>
              {/* Barra de demanda */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <TrendingUp className="h-3 w-3 text-fuchsia-400" aria-hidden />
                    Demanda
                  </span>
                  <span className="font-semibold text-slate-300">{area.demand}%</span>
                </div>
                <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${area.demand}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + (i % 5) * 0.08, ease: "easeOut" }}
                    className={`h-full rounded-full bg-gradient-to-r ${area.gradient}`}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Cinta resumen */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/15 to-orange-500/20 p-8 backdrop-blur md:flex-row"
        >
          <div className="text-center md:text-left">
            <p className="font-display text-2xl font-bold md:text-3xl">
              87<span className="text-fuchsia-400">%</span> de empleabilidad
            </p>
            <p className="mt-1 max-w-lg text-sm text-slate-300">
              Nuestros egresados se insertan laboralmente en promedio antes de los 6 meses
              posteriores a la titulación, en agencias, estudios y empresas digitales.
            </p>
          </div>
          <div className="flex gap-10">
            {[
              { v: "15", l: "Áreas profesionales" },
              { v: "+12", l: "Convenios industriales" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-display text-3xl font-bold text-gradient">{s.v}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.16em] text-slate-400">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
