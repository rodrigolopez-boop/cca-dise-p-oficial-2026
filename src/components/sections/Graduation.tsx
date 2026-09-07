"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { graduationSteps, graduationModalities } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";

/**
 * Proceso de titulación: timeline visual paso a paso + modalidades con requisitos.
 * Datos: GET /api/titulacion.
 */
export function Graduation() {
  return (
    <section id="titulacion" className="relative py-20 md:py-28" aria-label="Proceso de titulación">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Titulación"
          title="Proceso de"
          highlight="Titulación"
          description="Un camino claro hacia tu título profesional. Ocho pasos te separan de tu cédula — y te acompañamos en todos."
        />

        {/* Timeline de pasos */}
        <div className="relative">
          {/* Línea vertical de fondo (móvil) y horizontal (escritorio) */}
          <div className="absolute left-[27px] top-0 h-full w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-orange-500 lg:left-0 lg:top-[27px] lg:h-0.5 lg:w-full lg:bg-gradient-to-r" aria-hidden />

          <ol className="grid gap-8 lg:grid-cols-4">
            {graduationSteps.map((step, i) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="relative flex gap-5 lg:flex-col lg:gap-6"
              >
                {/* Nodo numerado */}
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 font-display text-lg font-bold text-white shadow-glow-violet">
                  {step.id}
                </div>
                <div className="flex-1 rounded-2xl border border-slate-100 bg-white p-5 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-fuchsia-200 hover:shadow-soft-lg">
                  <h3 className="font-display text-[15px] font-bold text-ink-900">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{step.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Modalidades de titulación */}
        <div className="mt-20">
          <h3 className="text-center font-display text-2xl font-bold text-ink-900 md:text-3xl">
            Modalidades <span className="text-gradient">de titulación</span>
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600 md:text-base">
            Elige la opción que mejor se adapte a tu perfil profesional. Cada modalidad cuenta con acompañamiento de la coordinación académica.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {graduationModalities.map((modality, i) => (
              <motion.article
                key={modality.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="group flex flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-200 hover:shadow-soft-lg"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-600 transition-colors duration-300 group-hover:from-violet-600 group-hover:to-fuchsia-600 group-hover:text-white">
                    <Icon name={modality.icon} className="h-5 w-5" />
                  </div>
                  <h4 className="font-display text-[16px] font-bold text-ink-900">{modality.name}</h4>
                </div>
                <p className="mt-3.5 text-sm leading-relaxed text-slate-600">{modality.description}</p>
                <div className="mt-4 flex-1 rounded-2xl bg-slate-50 p-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Requisitos</p>
                  <ul className="mt-2.5 space-y-1.5">
                    {modality.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-2 text-[13px] text-slate-600">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fuchsia-500" aria-hidden />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
