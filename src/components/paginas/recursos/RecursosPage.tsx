"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AcademicCalendar } from "@/components/sections/AcademicCalendar";
import { News } from "@/components/sections/News";
import { Events } from "@/components/sections/Events";
import { Promotions } from "@/components/sections/Promotions";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-surface-soft pt-32 pb-14 text-foreground dark:bg-dark-background dark:text-white md:pt-36 md:pb-20"
      aria-labelledby="recursos-page-titulo"
    >
      <div className="absolute inset-0 bg-grid-light opacity-70 dark:bg-grid dark:opacity-25" aria-hidden />
      <div className="absolute -right-24 top-10 size-80 rounded-full bg-brand-secondary/20 blur-[100px] dark:bg-primary/20" aria-hidden />
      <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" aria-hidden />
      <Container className="relative">
        <AnimatedSection className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-100">
            Recursos
          </span>
          <h1
            id="recursos-page-titulo"
            className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-primary text-balance dark:text-white sm:text-5xl lg:text-6xl"
          >
            Recursos
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground dark:text-slate-300 md:text-lg">
            Calendario académico, noticias, eventos y promociones.
          </p>
        </AnimatedSection>
      </Container>
    </section>
  );
}

export function RecursosPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <AcademicCalendar />
        <News />
        <Events />
        <Promotions />
      </main>
      <Footer />
    </div>
  );
}
