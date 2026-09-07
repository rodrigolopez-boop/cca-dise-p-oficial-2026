"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/mockData";
import { Avatar } from "@/components/shared/Avatar";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";

/**
 * Carrusel de testimonios con autoplay, navegación por flechas e indicadores.
 * Datos: GET /api/testimonios.
 */
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  // Autoplay cada 6s (se pausa al pasar el mouse/focus)
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go, paused]);

  const current = testimonials[index];

  return (
    <section
      className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-28"
      aria-label="Testimonios"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" aria-hidden />
      <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[130px]" aria-hidden />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          dark
          eyebrow="Testimonios"
          title="Voces de nuestra"
          highlight="comunidad"
        />

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={current.id}
              custom={direction}
              initial={{ opacity: 0, x: 80 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 * direction }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 shadow-glow-magenta">
                <Quote className="h-6 w-6 text-white" aria-hidden />
              </div>
              <p className="mx-auto mt-8 max-w-2xl font-display text-xl font-medium leading-relaxed text-slate-100 md:text-2xl">
                “{current.quote}”
              </p>
              <footer className="mt-8 flex flex-col items-center gap-3">
                <Avatar initials={current.initials} gradient={current.gradient} size="lg" />
                <div>
                  <p className="font-display text-base font-bold">{current.name}</p>
                  <p className="mt-0.5 text-sm text-slate-400">{current.role}</p>
                  <p className="mt-1 inline-block rounded-full bg-white/8 px-3 py-1 text-xs font-medium text-fuchsia-300 ring-1 ring-white/10">
                    {current.area}
                  </p>
                </div>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {/* Controles */}
          <div className="mt-10 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white/15 hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar testimonio">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={`Testimonio de ${t.name}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300 cursor-pointer",
                    i === index
                      ? "w-8 bg-gradient-to-r from-violet-500 to-fuchsia-500"
                      : "w-2 bg-white/25 hover:bg-white/45"
                  )}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Testimonio siguiente"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:bg-white/15 hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
