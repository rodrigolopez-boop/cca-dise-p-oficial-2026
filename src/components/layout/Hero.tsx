"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Boxes,
  CalendarDays,
  CheckCircle2,
  Clapperboard,
  MousePointerClick,
  Palette,
  PenTool,
  Play,
  Sparkles,
  Type,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroStats, marqueeWords } from "@/lib/mockData";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const reduceMotion = useReducedMotion();
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="inicio"
      className="relative scroll-mt-24 overflow-hidden bg-surface-soft pt-20 text-foreground transition-colors duration-300 dark:bg-dark-background dark:text-white"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-grid-light opacity-70 dark:bg-grid dark:opacity-25" aria-hidden />
      <div className="absolute -right-24 top-16 size-80 rounded-full bg-brand-secondary/20 blur-[100px] dark:bg-primary/20" aria-hidden />
      <div className="absolute -left-32 bottom-10 size-96 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" aria-hidden />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-8">
        <div className="relative z-10 text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-100">
              <Sparkles className="size-3.5 text-brand-primary-light dark:text-secondary" aria-hidden />
              Licenciatura · 8 semestres · Presencial
            </span>
          </motion.div>

          <motion.h1
            id="hero-title"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-display text-5xl font-bold leading-[1.03] tracking-[-0.04em] text-primary text-balance dark:text-white sm:text-6xl lg:text-[4.5rem]"
          >
            Diseña hoy,
            <span className="mt-2 block text-primary dark:text-white">
              construye{" "}
              <span className="relative isolate inline-block px-2 text-primary dark:text-white">
                mañana
                <span className="absolute inset-0 -z-10 -rotate-1 rounded-lg bg-secondary" />
              </span>
              .
            </span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mx-auto mt-6 max-w-2xl font-display text-xl font-semibold text-primary/85 dark:text-blue-100 lg:mx-0 sm:text-2xl"
          >
            Transforma ideas en experiencias visuales que conectan, inspiran y permanecen.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground dark:text-slate-300 lg:mx-0 sm:text-lg"
          >
            Desarrolla proyectos de diseño, animación y comunicación digital con docentes que conectan la industria, metodologías activas y herramientas profesionales de última generación.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
          >
            <Button type="button" size="lg" onClick={() => scrollTo("#carrera")}>
              Conoce la carrera
              <ArrowRight className="transition-transform group-hover:translate-x-1" aria-hidden />
            </Button>
            <Button type="button" size="lg" variant="accent" onClick={() => scrollTo("#convocatorias")}>
              <CalendarDays className="size-4" aria-hidden />
              Consulta la convocatoria
            </Button>
          </motion.div>

          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-12 grid grid-cols-3 gap-3 border-t border-primary/10 pt-7 dark:border-white/10 sm:gap-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-primary dark:text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground dark:text-slate-400 sm:text-[11px] sm:tracking-[0.18em]">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[520px]"
          aria-hidden
        >
          <div className="absolute -inset-5 rounded-[2.5rem] border border-primary/10 bg-white/45 dark:border-white/10 dark:bg-white/5" />
          <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-white p-5 shadow-soft-lg dark:border-white/10 dark:bg-dark-card sm:p-7">
            <div className="flex items-center justify-between border-b border-primary/10 pb-5 dark:border-white/10">
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-secondary">
                  <Palette className="size-5" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-foreground dark:text-white">Laboratorio creativo</p>
                  <p className="mt-0.5 text-xs text-muted-foreground dark:text-slate-400">Proyecto profesional 2026</p>
                </div>
              </div>
              <span className="rounded-full bg-brand-secondary-soft px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary dark:bg-primary/20 dark:text-secondary">
                En progreso
              </span>
            </div>

            <div className="relative mt-6 aspect-[4/3] overflow-hidden rounded-2xl bg-primary p-6 text-white">
              <div className="absolute inset-0 bg-grid opacity-20" />
              <div className="absolute -right-10 -top-10 size-40 rounded-full border-[28px] border-secondary/80" />
              <div className="absolute -bottom-16 -left-12 size-44 rounded-full bg-white/10" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex size-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10 backdrop-blur">
                  <Boxes className="size-7 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-100">Especialización</p>
                  <p className="mt-2 font-display text-3xl font-bold">Diseño de experiencias</p>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-blue-100">Identidad · Motion · UX/UI</p>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-primary/10 bg-surface-soft p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary dark:bg-white/10 dark:text-secondary">
                    <PenTool className="size-4" />
                  </span>
                  <CheckCircle2 className="size-4 text-success dark:text-green-300" />
                </div>
                <p className="mt-4 text-xs font-semibold text-muted-foreground dark:text-slate-400">Avance del proyecto</p>
                <p className="mt-1 font-display text-2xl font-bold text-primary dark:text-white">78%</p>
              </div>
              <div className="rounded-2xl border border-primary/10 bg-surface-soft p-4 dark:border-white/10 dark:bg-white/5">
                <div className="flex items-center justify-between">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-secondary text-primary">
                    <Play className="size-4 fill-current" />
                  </span>
                  <MousePointerClick className="size-4 text-primary dark:text-blue-200" />
                </div>
                <p className="mt-4 text-xs font-semibold text-muted-foreground dark:text-slate-400">Próxima entrega</p>
                <p className="mt-1 font-display text-base font-bold text-primary dark:text-white">Portafolio</p>
              </div>
            </div>
          </div>

          <FloatCard className="-left-3 top-20 animate-float" delay="0s" icon={<PenTool className="size-4" />} label="Diseño gráfico" />
          <FloatCard className="-right-3 top-36 animate-float" delay="-1.5s" icon={<Clapperboard className="size-4" />} label="Animación 3D" />
          <FloatCard className="-bottom-5 left-4 animate-float" delay="-3s" icon={<Type className="size-4" />} label="Tipografía" />
        </motion.div>
      </div>

      <div className="relative border-t border-primary/10 bg-white/65 py-4 backdrop-blur dark:border-white/10 dark:bg-white/5" aria-hidden>
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[0, 1].map((duplicate) => (
              <div key={duplicate} className="flex shrink-0 items-center gap-10 pr-10">
                {marqueeWords.map((word) => (
                  <span key={`${duplicate}-${word}`} className="flex items-center gap-10 whitespace-nowrap font-display text-xs font-bold uppercase tracking-[0.24em] text-primary/50 dark:text-slate-500 sm:text-sm">
                    {word}
                    <span className="size-1.5 rounded-full bg-secondary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatCard({
  className,
  icon,
  label,
  delay,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
  delay: string;
}) {
  return (
    <div
      style={{ animationDelay: delay }}
      className={`absolute hidden items-center gap-2 rounded-xl border border-primary/10 bg-white px-3 py-2.5 shadow-card sm:flex dark:border-white/10 dark:bg-dark-card ${className}`}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-secondary">{icon}</span>
      <span className="text-xs font-bold text-foreground dark:text-white">{label}</span>
    </div>
  );
}
