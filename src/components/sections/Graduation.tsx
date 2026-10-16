"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { graduationSteps, graduationModalities } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionShell } from "@/components/shared/SectionShell";
import { Container } from "@/components/shared/Container";
import { CourseCard } from "@/components/shared/CourseCard";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Graduation() {
  return (
    <SectionShell id="titulacion" tone="muted" aria-label="Proceso de titulación" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-60" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-28 size-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-16 size-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden />

      <Container className="max-w-6xl px-0">
        <SectionTitle
          eyebrow="Titulación"
          title="Proceso de"
          highlight="Titulación"
          description="Un camino claro hacia tu título profesional. Ocho pasos te separan de tu cédula — y te acompañamos en todos."
        />

        <div className="relative">
          <div
            className="absolute left-7 top-0 h-full w-px bg-gradient-to-b from-primary via-brand-primary-light to-secondary lg:left-7 lg:right-7 lg:top-7 lg:h-px lg:w-auto"
            aria-hidden
          />

          <ol className="grid gap-8 lg:grid-cols-4" aria-label="Pasos de titulación">
            {graduationSteps.map((step, i) => (
              <motion.li
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="relative flex min-w-0 gap-5 lg:flex-col lg:gap-6"
              >
                <div className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary font-display text-lg font-bold text-secondary shadow-card">
                  <span className="sr-only">Paso {step.id}</span>
                  <span aria-hidden>{step.id}</span>
                </div>

                <Card className="h-full gap-0 rounded-2xl border-border/80 bg-card p-5 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card-hover">
                  <h3 className="font-display text-[15px] font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{step.description}</p>
                </Card>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="mt-16 sm:mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary">Modalidades</Badge>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground md:text-3xl">
              Modalidades <span className="text-primary">de titulación</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
              Elige la opción que mejor se adapte a tu perfil profesional. Cada modalidad cuenta con acompañamiento de la coordinación académica.
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {graduationModalities.map((modality, i) => (
              <motion.div
                key={modality.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="h-full"
              >
                <CourseCard
                  icon={<Icon name={modality.icon} className="h-6 w-6" />}
                  badge={<Badge variant="outline">Titulación</Badge>}
                  title={modality.name}
                  description={modality.description}
                  meta={
                    <div className="rounded-2xl border border-border/70 bg-surface p-4">
                      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">Requisitos</p>
                      <ul className="mt-2.5 space-y-2">
                        {modality.requirements.map((req) => (
                          <li key={req} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                            <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  }
                  className="h-full rounded-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
