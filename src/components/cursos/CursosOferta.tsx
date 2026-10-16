"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  CheckCircle2,
  Clock,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import logo from "@/assets/logo-azul.png";
import {
  catalog,
  launches,
  enrollmentSteps,
  requirements,
  paymentMethods,
  contactWhatsApp,
  whatsappLink,
  type CourseCategory,
} from "@/lib/cursosData";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { CourseCard } from "@/components/shared/CourseCard";
import { FilterChips } from "@/components/shared/FilterChips";
import { EmptyState } from "@/components/shared/EmptyState";
import { Icon } from "@/components/shared/Icon";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type CategoryFilter = CourseCategory | "todos";

const levelVariant: Record<string, "success" | "warning" | "info"> = {
  Inicial: "success",
  Intermedio: "info",
  Avanzado: "warning",
};

const launchStatusConfig = {
  "en-proceso": { label: "En proceso", variant: "success" as const, dot: "bg-success" },
  proximo: { label: "Próximo lanzamiento", variant: "warning" as const, dot: "bg-warning" },
};

function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function courseWhatsAppLink(title: string) {
  const text = `Hola, quiero información sobre el curso "${title}".`;
  return `https://wa.me/${contactWhatsApp.number}?text=${encodeURIComponent(text)}`;
}

export function CursosOferta() {
  const [category, setCategory] = useState<CategoryFilter>("todos");

  const categoryOptions = useMemo<{ value: CategoryFilter; label: string }[]>(() => {
    const unique = Array.from(new Set(catalog.map((c) => c.category)));
    return [{ value: "todos", label: "Todos" }, ...unique.map((c) => ({ value: c, label: c }))];
  }, []);

  const filtered = useMemo(
    () => (category === "todos" ? catalog : catalog.filter((c) => c.category === category)),
    [category]
  );

  const enProceso = launches.filter((l) => l.status === "en-proceso");
  const proximos = launches.filter((l) => l.status === "proximo");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Barra superior propia de la página (aislada del menú principal) */}
      <header className="glass-strong sticky top-0 z-50 border-b border-border/70">
        <Container className="flex h-16 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex items-center justify-center rounded-xl bg-white p-1.5 shadow-sm ring-1 ring-black/5 dark:ring-white/10">
              <Image src={logo} alt="CCA Logo" className="h-9 w-auto object-contain" loading="eager" fetchPriority="high" />
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="font-display text-sm font-bold text-primary dark:text-white">
                Cursos e Inscripciones
              </span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                Diseño Gráfico y Animación
              </span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a href="/">
                <ArrowLeft className="size-4" aria-hidden /> Volver al inicio
              </a>
            </Button>
            <ThemeToggle />
          </div>
        </Container>
      </header>

      {/* Portada */}
      <section
        className="relative overflow-hidden bg-surface-soft pt-16 pb-14 text-foreground dark:bg-dark-background dark:text-white md:pt-20 md:pb-20"
        aria-labelledby="cursos-titulo"
      >
        <div className="absolute inset-0 bg-grid-light opacity-70 dark:bg-grid dark:opacity-25" aria-hidden />
        <div className="absolute -right-24 top-10 size-80 rounded-full bg-brand-secondary/20 blur-[100px] dark:bg-primary/20" aria-hidden />
        <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-primary/10 blur-[120px] dark:bg-primary/20" aria-hidden />

        <Container className="relative">
          <AnimatedSection className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-primary shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-blue-100">
              <Sparkles className="size-3.5 text-brand-primary-light dark:text-secondary" aria-hidden />
              Oferta académica 2026
            </span>
            <h1
              id="cursos-titulo"
              className="mt-6 font-display text-4xl font-bold leading-[1.06] tracking-[-0.03em] text-primary text-balance dark:text-white sm:text-5xl lg:text-6xl"
            >
              Cursos y talleres de{" "}
              <span className="relative isolate inline-block text-primary dark:text-white">
                Diseño y Animación
                <span className="absolute inset-x-0 bottom-1 -z-10 h-3 -rotate-1 rounded-sm bg-secondary/70" />
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground dark:text-slate-300 md:text-lg">
              Explora el catálogo, consulta las fechas de lanzamiento y realiza tu inscripción en línea.
              Cupos limitados por grupo y acompañamiento docente en cada módulo.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button type="button" size="lg" onClick={() => scrollTo("catalogo")}>
                Ver catálogo
                <ArrowUpRight className="size-4" aria-hidden />
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden /> Inscribirme por WhatsApp
                </a>
              </Button>
            </div>

            <dl className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              {[
                { icon: GraduationCap, value: `${catalog.length}`, label: "Cursos" },
                { icon: Clock, value: "5-10", label: "Semanas" },
                { icon: Users, value: "12-25", label: "Cupos" },
                { icon: CalendarClock, value: "7", label: "Próximas fechas" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border/70 bg-card/80 p-4 text-center shadow-card backdrop-blur dark:border-white/10 dark:bg-white/5"
                >
                  <stat.icon className="mx-auto size-5 text-primary dark:text-secondary" aria-hidden />
                  <dt className="mt-2 font-display text-2xl font-bold text-primary dark:text-white">{stat.value}</dt>
                  <dd className="text-xs font-semibold uppercase tracking-wider text-muted-foreground dark:text-slate-300">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </AnimatedSection>
        </Container>
      </section>

      {/* 1. Catálogo de cursos */}
      <SectionShell id="catalogo" tone="default" aria-label="Catálogo de cursos">
        <SectionTitle
          eyebrow="Catálogo"
          title="Cursos"
          highlight="ofertados"
          description="Formación práctica y actualizada en diseño, animación e industria creativa. Filtra por área para encontrar tu curso ideal."
        />

        <div className="mb-10 flex justify-center">
          <FilterChips options={categoryOptions} active={category} onChange={setCategory} className="justify-center" />
        </div>

        {filtered.length === 0 ? (
          <EmptyState
            message="No hay cursos publicados en esta área por el momento. Explora otras categorías."
            onReset={() => setCategory("todos")}
          />
        ) : (
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((course) => (
                <motion.article
                  layout
                  key={course.id}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35 }}
                  className="h-full"
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    icon={<Icon name={course.icon} className="size-6" />}
                    badge={
                      <div className="flex flex-wrap items-center justify-end gap-2">
                        <Badge variant={levelVariant[course.level]}>{course.level}</Badge>
                        <Badge
                          variant="outline"
                          className="border-secondary/40 bg-secondary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                        >
                          {course.category}
                        </Badge>
                      </div>
                    }
                    meta={
                      <dl className="grid gap-3 rounded-2xl border border-border/70 bg-surface-soft/80 p-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                          <dt className="text-muted-foreground">Duración</dt>
                          <dd className="text-right font-semibold text-foreground">{course.duration}</dd>
                        </div>
                        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border/70 pt-3 text-xs">
                          <dt className="text-muted-foreground">Modalidad</dt>
                          <dd className="text-right font-semibold text-foreground">{course.modality}</dd>
                        </div>
                        <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border/70 pt-3 text-xs">
                          <dt className="text-muted-foreground">Cupos</dt>
                          <dd className="text-right font-semibold text-primary">{course.seats}</dd>
                        </div>
                      </dl>
                    }
                    actionLabel="Solicitar información"
                    onAction={() =>
                      window.open(courseWhatsAppLink(course.title), "_blank", "noopener,noreferrer")
                    }
                    className="h-full border-primary/20 hover:border-primary/40"
                  />
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}
      </SectionShell>

      {/* 2. Cronograma de lanzamientos */}
      <SectionShell id="cronograma" tone="soft" aria-label="Cronograma de lanzamientos">
        <SectionTitle
          eyebrow="Calendario"
          title="Lanzamientos de"
          highlight="cursos"
          description="Consulta los grupos que están en proceso y las fechas de los próximos lanzamientos."
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {[
            { heading: "En proceso", items: enProceso, tone: "en-proceso" as const },
            { heading: "Próximos lanzamientos", items: proximos, tone: "proximo" as const },
          ].map((group) => {
            const config = launchStatusConfig[group.tone];
            return (
              <AnimatedSection key={group.heading}>
                <div className="mb-6 flex items-center gap-3">
                  <span className={cn("size-2.5 rounded-full", config.dot)} aria-hidden />
                  <h3 className="font-display text-lg font-bold text-primary dark:text-white">{group.heading}</h3>
                  <Badge variant="outline" className="ml-auto">
                    {group.items.length}
                  </Badge>
                </div>

                <ol className="relative space-y-4 border-l border-border/70 pl-6">
                  {group.items.map((launch) => (
                    <li key={launch.id} className="relative">
                      <span
                        className={cn(
                          "absolute -left-[31px] top-5 size-4 rounded-full border-2 border-background",
                          launch.status === "en-proceso" ? "bg-success" : "bg-warning"
                        )}
                        aria-hidden
                      />
                      <Card className="gap-0 rounded-2xl border-border/70 p-6 shadow-card">
                        <div className="flex items-start justify-between gap-4">
                          <div className="min-w-0">
                            <h4 className="font-display text-base font-bold text-foreground">{launch.course}</h4>
                            <p className="mt-1 text-xs text-muted-foreground">{launch.note}</p>
                          </div>
                          <Badge variant={config.variant} className="shrink-0">
                            {config.label}
                          </Badge>
                        </div>
                        <div className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-primary dark:text-blue-200">
                          <CalendarClock className="size-4" aria-hidden />
                          {formatDate(launch.date)}
                        </div>
                      </Card>
                    </li>
                  ))}
                </ol>
              </AnimatedSection>
            );
          })}
        </div>
      </SectionShell>

      {/* 3. Información de inscripción */}
      <SectionShell id="inscripcion" tone="default" aria-label="Información de inscripción">
        <SectionTitle
          eyebrow="Inscripción"
          title="Cómo"
          highlight="inscribirte"
          description="Cinco pasos simples para asegurar tu lugar. Todo el proceso puede iniciarse en línea."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {enrollmentSteps.map((step, index) => (
            <AnimatedSection key={step.id} delay={index * 0.05} className="h-full">
              <Card className="relative h-full gap-0 rounded-2xl border-border/70 p-6 shadow-card transition-colors hover:border-primary/30">
                <span className="absolute right-5 top-5 font-display text-3xl font-bold text-primary/10 dark:text-white/10">
                  {String(step.id).padStart(2, "0")}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-secondary">
                  <Icon name={step.icon} className="size-6" />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <AnimatedSection>
            <Card className="h-full gap-0 rounded-2xl border-border/70 p-6 shadow-card sm:p-8">
              <Badge variant="info">Requisitos</Badge>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">Documentación necesaria</h3>
              <ul className="mt-5 space-y-3">
                {requirements.map((req) => (
                  <li key={req} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 size-4.5 shrink-0 text-success" aria-hidden />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimatedSection>

          <AnimatedSection delay={0.08}>
            <Card className="h-full gap-0 rounded-2xl border-border/70 p-6 shadow-card sm:p-8">
              <Badge variant="success">Pagos</Badge>
              <h3 className="mt-4 font-display text-xl font-bold text-foreground">Métodos de pago</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="rounded-2xl border border-border/70 bg-surface-soft/70 p-4 transition-colors hover:border-primary/30"
                  >
                    <span className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon name={method.icon} className="size-5" />
                    </span>
                    <h4 className="mt-3 font-display text-sm font-bold text-foreground">{method.name}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{method.detail}</p>
                  </div>
                ))}
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </SectionShell>

      {/* 4. Contacto + QR de WhatsApp */}
      <SectionShell id="contacto-cursos" tone="dark" aria-label="Contacto e inscripciones por WhatsApp">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
        <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-primary/25 blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute -left-32 bottom-10 size-96 rounded-full bg-secondary/15 blur-[130px]" aria-hidden />

        <SectionTitle
          dark
          eyebrow="Contacto"
          title="Inscríbete por"
          highlight="WhatsApp"
          description="Escanea el código QR o usa el botón directo para hablar con el equipo de admisión de la carrera."
        />

        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <AnimatedSection>
            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <MessageCircle className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">WhatsApp de admisión</h3>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block rounded-md text-sm text-slate-300 transition-colors hover:text-secondary"
                  >
                    {contactWhatsApp.display}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-secondary">
                  <BadgeCheck className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">Horario de atención</h3>
                  <p className="mt-1 text-sm text-slate-300">Lunes a viernes · 08:00 a 19:00</p>
                  <p className="mt-0.5 text-xs text-slate-400">
                    Respuesta promedio en menos de 30 minutos en horario hábil.
                  </p>
                </div>
              </div>

              <Button asChild size="lg" variant="secondary" className="w-full sm:w-auto">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden /> Abrir chat de WhatsApp
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="mx-auto flex max-w-sm flex-col items-center rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-center shadow-soft-lg backdrop-blur sm:p-8">
              <div className="rounded-2xl bg-white p-4 shadow-lg">
                <Image
                  src="/whatsapp-qr.png"
                  alt="Código QR para inscribirse por WhatsApp"
                  width={220}
                  height={220}
                  unoptimized
                  className="size-44 sm:size-52"
                />
              </div>
              <p className="mt-5 text-sm font-semibold text-white">Escanea para inscribirte</p>
              <p className="mt-1 text-xs text-slate-400">
                Apunta la cámara de tu teléfono al código QR y abre WhatsApp directamente.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </SectionShell>

      {/* Pie propio */}
      <footer className="border-t border-border/70 bg-card py-8">
        <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Diseño Gráfico y Animación · Cursos e inscripciones
          </p>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary-hover dark:text-blue-200"
          >
            <ArrowLeft className="size-3.5" aria-hidden /> Volver al portal principal
          </a>
        </Container>
      </footer>
    </div>
  );
}
