import {
  ArrowUpRight,
  CalendarClock,
  Clock,
  GraduationCap,
  MessageCircle,
  Sparkles,
  Users,
} from "lucide-react";
import { catalog, whatsappLink } from "@/lib/cursosData";
import { Container } from "@/components/shared/Container";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";

interface HeroProps {
  totalCursos: number;
  onVerCatalogo: () => void;
}

export function Hero({ totalCursos, onVerCatalogo }: HeroProps) {
  return (
    <section
      className="relative overflow-hidden bg-surface-soft pt-32 pb-14 text-foreground dark:bg-dark-background dark:text-white md:pt-36 md:pb-20"
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
            <Button type="button" size="lg" onClick={onVerCatalogo}>
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
              { icon: GraduationCap, value: `${totalCursos}`, label: "Cursos" },
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
  );
}
