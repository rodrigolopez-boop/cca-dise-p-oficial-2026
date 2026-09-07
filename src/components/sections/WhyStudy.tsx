"use client";

import { motion } from "framer-motion";
import { careerBenefits } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";

const cardAccents = [
  "from-violet-500 to-fuchsia-500",
  "from-fuchsia-500 to-pink-500",
  "from-cyan-500 to-blue-500",
  "from-orange-500 to-amber-500",
  "from-emerald-500 to-teal-500",
  "from-pink-500 to-rose-500",
  "from-indigo-500 to-violet-500",
  "from-amber-500 to-orange-600",
  "from-sky-500 to-cyan-500",
  "from-purple-500 to-violet-600",
];

/**
 * Sección "¿Por qué estudiar Diseño Gráfico y Animación?".
 * Grid asimétrico con 10 beneficios (datos: GET /api/carrera/beneficios).
 */
export function WhyStudy() {
  return (
    <section
      className="relative overflow-hidden bg-slate-50 py-20 md:py-28"
      aria-label="Por qué estudiar Diseño Gráfico y Animación"
    >
      <div className="absolute inset-0 bg-grid-light opacity-60" aria-hidden />
      <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-fuchsia-200/40 blur-3xl" aria-hidden />
      <div className="absolute -left-24 bottom-24 h-72 w-72 rounded-full bg-violet-200/40 blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="La carrera"
          title="¿Por qué estudiar"
          highlight="Diseño Gráfico y Animación?"
          description="Una formación integral que combina creatividad, tecnología y estrategia. Estas son las competencias que desarrollarás a lo largo del programa."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {careerBenefits.map((benefit, i) => (
            <motion.article
              key={benefit.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: (i % 5) * 0.08 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-soft-lg"
            >
              <div
                className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${cardAccents[i % cardAccents.length]} text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6`}
              >
                <Icon name={benefit.icon} className="h-6 w-6" />
              </div>
              <h3 className="font-display text-[17px] font-bold leading-snug text-ink-900">
                {benefit.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                {benefit.description}
              </p>
              <span
                className={`mt-auto pt-4 block h-0.5 w-10 rounded-full bg-gradient-to-r ${cardAccents[i % cardAccents.length]} transition-all duration-300 group-hover:w-full`}
                aria-hidden
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
