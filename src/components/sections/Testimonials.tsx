"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/mockData";
import { Avatar } from "@/components/shared/Avatar";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => go(1), 6000);
    return () => clearInterval(t);
  }, [go, paused]);

  const current = testimonials[index];

  return (
    <section
      className="relative overflow-hidden bg-dark-background py-20 text-white md:py-28"
      aria-label="Testimonios"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-dots opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-96 rounded-full bg-primary/25 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-secondary/15 blur-[130px]" aria-hidden />

      <Container className="max-w-4xl">
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
              id="testimonial-panel"
              role="tabpanel"
              tabIndex={0}
              custom={direction}
              initial={{ opacity: 0, x: 80 * direction }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 * direction }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="m-0"
            >
              <Card className="gap-0 rounded-2xl border-white/10 bg-dark-card/80 p-7 text-white shadow-card sm:p-10 dark:bg-card/80">
                <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary shadow-card">
                  <Quote className="size-6" aria-hidden />
                </div>
                <p className="mx-auto mt-8 max-w-2xl text-balance font-display text-xl font-medium leading-relaxed text-slate-100 md:text-2xl">
                  “{current.quote}”
                </p>
                <footer className="mt-8 flex flex-col items-center gap-3">
                  <Avatar initials={current.initials} gradient={current.gradient} size="lg" className="ring-2 ring-secondary/40" />
                  <div className="text-center">
                    <p className="font-display text-base font-bold text-white">{current.name}</p>
                    <p className="mt-0.5 text-sm text-slate-300">{current.role}</p>
                    <Badge variant="secondary" className="mt-3">
                      {current.area}
                    </Badge>
                  </div>
                </footer>
              </Card>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-5" aria-label="Controles de testimonios">
            <Button
              type="button"
              variant="inverse"
              size="icon"
              onClick={() => go(-1)}
              aria-label="Testimonio anterior"
              className="rounded-2xl border-white/20 bg-white/10 hover:bg-white/20 focus-visible:ring-secondary/50"
            >
              <ChevronLeft className="size-5" aria-hidden />
            </Button>

            <div className="flex items-center gap-2" role="tablist" aria-label="Seleccionar testimonio">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-controls="testimonial-panel"
                  aria-label={`Testimonio de ${t.name}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/60",
                    i === index ? "w-8 bg-secondary" : "w-2.5 bg-white/30 hover:bg-white/60"
                  )}
                />
              ))}
            </div>

            <Button
              type="button"
              variant="inverse"
              size="icon"
              onClick={() => go(1)}
              aria-label="Testimonio siguiente"
              className="rounded-2xl border-white/20 bg-white/10 hover:bg-white/20 focus-visible:ring-secondary/50"
            >
              <ChevronRight className="size-5" aria-hidden />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
