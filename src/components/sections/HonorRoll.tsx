"use client";

import { motion } from "framer-motion";
import { Check, Medal, Star, Trophy } from "lucide-react";
import { honorStudents } from "@/lib/mockData";
import { Avatar } from "@/components/shared/Avatar";
import { Container } from "@/components/shared/Container";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const awardIcons = [Trophy, Medal, Star];

export function HonorRoll() {
  return (
    <SectionShell
      tone="dark"
      className="overflow-hidden bg-grid"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Cuadro de honor"
    >
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/25 blur-[120px]" aria-hidden />
      <div className="pointer-events-none absolute -right-24 bottom-16 h-72 w-72 rounded-full bg-secondary/10 blur-[120px]" aria-hidden />

      <SectionTitle
        dark
        eyebrow="Reconocimiento"
        title="Cuadro de"
        highlight="Honor"
        description="Los estudiantes que elevan el nivel de la carrera con su talento, disciplina y resultados sobresalientes."
      />

      <div className="grid gap-5 md:grid-cols-3">
        {honorStudents.map((student, i) => {
          const AwardIcon = awardIcons[i % awardIcons.length];
          const isFirst = i === 0;
          return (
            <motion.article
              key={student.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative flex h-full flex-col ${isFirst ? "md:-mt-6 md:mb-6" : ""}`}
            >
              <Card
                className={`relative h-full gap-0 rounded-2xl border-dark-border/80 p-6 text-center text-white shadow-card transition-all duration-300 ${
                  isFirst ? "bg-dark-card/90 ring-1 ring-secondary/30" : "bg-dark-card/70"
                }`}
              >
                <span
                  className={`absolute -top-4 left-1/2 flex size-11 -translate-x-1/2 items-center justify-center rounded-2xl border border-secondary/30 shadow-card ${
                    isFirst ? "bg-secondary text-primary" : "bg-primary text-secondary"
                  }`}
                  aria-hidden
                >
                  <AwardIcon className="h-5 w-5" />
                </span>

                <Avatar
                  initials={student.initials}
                  gradient={student.gradient}
                  size="xl"
                  className={`mt-4 ring-2 ${isFirst ? "ring-secondary/70" : "ring-primary/30"}`}
                />

                <h3 className="mt-5 font-display text-xl font-bold text-white">{student.name}</h3>
                <p className="mt-1 text-sm text-white/60">{student.semester}</p>

                <div className="mt-5 flex items-center justify-center gap-2">
                  <span className={`font-display text-4xl font-bold ${isFirst ? "text-secondary" : "text-white"}`}>
                    {student.average.toFixed(1)}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-white/50">promedio</span>
                </div>

                <Badge
                  variant={isFirst ? "secondary" : "info"}
                  className={`mt-4 ${isFirst ? "" : "border-primary/30 bg-primary/20 text-white dark:text-white"}`}
                >
                  {student.award}
                </Badge>

                <ul className="mt-6 w-full space-y-3 border-t border-white/10 pt-5 text-left">
                  {student.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[13px] leading-relaxed text-white/75">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="h-3.5 w-3.5" aria-hidden />
                      </span>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}
