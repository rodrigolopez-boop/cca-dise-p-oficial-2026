"use client";

import { motion } from "framer-motion";
import { Medal, Trophy, Star } from "lucide-react";
import { honorStudents } from "@/lib/mockData";
import { Avatar } from "@/components/shared/Avatar";
import { SectionTitle } from "@/components/shared/SectionTitle";

const awardIcons = [Trophy, Medal, Star];

/**
 * Cuadro de Honor: estudiantes destacados con diseño elegante premium.
 * Datos: GET /api/cuadro-honor.
 */
export function HonorRoll() {
  return (
    <section
      className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-28"
      aria-label="Cuadro de honor"
    >
      <div className="absolute inset-0 bg-grid" aria-hidden />
      {/* Destellos dorados */}
      <div className="absolute left-1/4 top-10 h-72 w-72 rounded-full bg-amber-500/15 blur-[120px]" aria-hidden />
      <div className="absolute bottom-10 right-1/4 h-72 w-72 rounded-full bg-fuchsia-600/15 blur-[120px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          dark
          eyebrow="Reconocimiento"
          title="Cuadro de"
          highlight="Honor"
          description="Los estudiantes que elevan el nivel de la carrera con su talento, disciplina y resultados sobresalientes."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {honorStudents.map((student, i) => {
            const AwardIcon = awardIcons[i % awardIcons.length];
            const isFirst = i === 0;
            return (
              <motion.article
                key={student.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                whileHover={{ y: -8 }}
                className={`relative flex flex-col items-center rounded-3xl p-8 text-center backdrop-blur transition-colors ${
                  isFirst
                    ? "border-2 border-amber-400/50 bg-gradient-to-b from-amber-500/10 to-transparent shadow-[0_0_60px_-15px_rgba(251,191,36,0.4)] md:-mt-6 md:mb-6"
                    : "border border-white/12 bg-white/[0.04] hover:border-white/25"
                }`}
              >
                {/* Corona / laurel decorativo */}
                <div
                  className={`absolute -top-5 flex h-11 w-11 items-center justify-center rounded-2xl shadow-lg ${
                    isFirst
                      ? "bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-amber-500/40"
                      : "bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white"
                  }`}
                  aria-hidden
                >
                  <AwardIcon className="h-5 w-5" />
                </div>

                <Avatar
                  initials={student.initials}
                  gradient={student.gradient}
                  size="xl"
                  className={`mt-4 ring-2 ${isFirst ? "ring-amber-400/70" : "ring-white/20"} shadow-lg`}
                />

                <h3 className="mt-5 font-display text-xl font-bold">{student.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{student.semester}</p>

                {/* Promedio */}
                <div className="mt-5 flex items-center gap-2">
                  <span className={`font-display text-4xl font-bold ${isFirst ? "text-amber-300" : "text-gradient"}`}>
                    {student.average.toFixed(1)}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-slate-500">promedio</span>
                </div>

                <span
                  className={`mt-4 inline-block rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${
                    isFirst
                      ? "bg-amber-400/15 text-amber-300 ring-1 ring-amber-400/40"
                      : "bg-fuchsia-500/15 text-fuchsia-300 ring-1 ring-fuchsia-400/30"
                  }`}
                >
                  {student.award}
                </span>

                {/* Logros */}
                <ul className="mt-6 w-full space-y-2.5 border-t border-white/10 pt-6 text-left">
                  {student.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-300">
                      <Star className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-400" aria-hidden />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
