"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  PenTool,
  Clapperboard,
  Sparkles,
  Palette,
  Shapes,
  Boxes,
  MousePointerClick,
  Type,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 34 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.12 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

/** Hero principal: composición visual de alto impacto con blobs animados. */
export function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-ink-950 pt-[76px] text-white"
      aria-label="Portada"
    >
      {/* Fondo: retícula + blobs con gradiente */}
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div
        className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-violet-600/30 blur-[130px] animate-blob"
        aria-hidden
      />
      <div
        className="absolute top-1/4 -right-40 h-[520px] w-[520px] rounded-full bg-fuchsia-600/25 blur-[140px] animate-blob"
        style={{ animationDelay: "-4s" }}
        aria-hidden
      />
      <div
        className="absolute -bottom-40 left-1/3 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[130px] animate-blob"
        style={{ animationDelay: "-8s" }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 pb-20 pt-14 sm:px-6 md:pb-28 md:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-8">
        {/* Columna textual */}
        <div className="relative z-10 text-center lg:text-left">
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-300 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" aria-hidden />
              Licenciatura · 8 semestres · Presencial
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-7 font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]"
          >
            Diseño Gráfico
            <span className="block text-gradient">y Animación</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-5 font-display text-xl font-medium text-violet-300 sm:text-2xl"
          >
            “Transforma ideas en experiencias visuales.”
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0"
          >
            Formamos profesionales capaces de desarrollar proyectos integrales de diseño,
            animación 2D/3D, comunicación visual, branding, ilustración y medios digitales,
            con el dominio técnico y la sensibilidad creativa que exige la industria.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:justify-start sm:justify-center"
          >
            <button
              type="button"
              onClick={() => scrollTo("#carrera")}
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-glow-violet transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-magenta sm:w-auto cursor-pointer"
            >
              Conoce la carrera
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => scrollTo("#convocatorias")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-[15px] font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10 hover:border-white/35 sm:w-auto cursor-pointer"
            >
              <CalendarDays className="h-4 w-4 text-fuchsia-300" aria-hidden />
              Consulta la convocatoria
            </button>
          </motion.div>

          {/* Indicadores rápidos */}
          <motion.dl
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={5}
            className="mt-12 grid grid-cols-3 gap-6 border-t border-white/10 pt-7"
          >
            {[
              { value: "+480", label: "Créditos" },
              { value: "+40", label: "Asignaturas" },
              { value: "15", label: "Áreas laborales" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-white sm:text-3xl">
                  {stat.value}
                </dd>
                <dd className="mt-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Columna visual: composición abstracta de diseño */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto hidden aspect-square w-full max-w-[520px] md:block"
          aria-hidden
        >
          {/* Anillo orbitando */}
          <div className="absolute inset-6 rounded-full border border-white/10 animate-spin-slow" />
          <div className="absolute inset-16 rounded-full border border-dashed border-white/10 animate-spin-slow" style={{ animationDirection: "reverse" }} />

          {/* Núcleo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-40 w-40 items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 shadow-glow-magenta">
              <Shapes className="h-16 w-16 text-white" strokeWidth={1.4} />
            </div>
          </div>

          {/* Tarjetas flotantes con disciplinas */}
          <FloatCard className="left-2 top-10 animate-float" delay="0s" icon={<PenTool className="h-5 w-5" />} label="Diseño gráfico" />
          <FloatCard className="right-0 top-24 animate-float" delay="-1.5s" icon={<Boxes className="h-5 w-5" />} label="Animación 3D" />
          <FloatCard className="bottom-24 left-0 animate-float" delay="-3s" icon={<Clapperboard className="h-5 w-5" />} label="Motion graphics" />
          <FloatCard className="bottom-8 right-6 animate-float" delay="-2s" icon={<Palette className="h-5 w-5" />} label="Arte digital" />
          <FloatCard className="right-10 top-0 animate-float" delay="-4s" icon={<Type className="h-5 w-5" />} label="Tipografía" />

          {/* Chip clickeable decorativo */}
          <div className="absolute bottom-1/2 right-2 flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur animate-float-slow">
            <MousePointerClick className="h-4 w-4 text-violet-300" />
            Ilustración digital
          </div>
        </motion.div>
      </div>

      {/* Marquesina de disciplinas */}
      <div className="relative border-t border-white/10 bg-ink-900/60 py-4 backdrop-blur" aria-hidden>
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee items-center gap-10 pr-10">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-10 pr-10">
                {[
                  "Branding", "Motion graphics", "Ilustración", "Animación 2D", "Animación 3D",
                  "Diseño editorial", "UX/UI", "Fotografía", "Arte digital", "Diseño web",
                ].map((word) => (
                  <span
                    key={`${dup}-${word}`}
                    className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-[0.3em] text-slate-500"
                  >
                    {word}
                    <span className="h-1.5 w-1.5 rounded-full bg-fuchsia-500/70" />
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
      className={`absolute flex items-center gap-2.5 rounded-2xl border border-white/15 bg-ink-800/80 px-4 py-3 shadow-soft-lg backdrop-blur ${className}`}
    >
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white">
        {icon}
      </span>
      <span className="text-sm font-semibold text-white">{label}</span>
    </div>
  );
}
