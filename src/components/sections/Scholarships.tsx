"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarRange, Check, ChevronDown, FileCheck2 } from "lucide-react";
import { scholarships } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionShell } from "@/components/shared/SectionShell";
import { Container } from "@/components/shared/Container";
import { FeatureCard } from "@/components/shared/FeatureCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Scholarships() {
  const [expanded, setExpanded] = useState<string | null>(scholarships[0].id);

  const toggle = (id: string) => setExpanded((prev) => (prev === id ? null : id));

  return (
    <SectionShell id="becas" tone="soft" aria-label="Becas" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-70" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-24 size-80 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-0 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <Container className="max-w-6xl px-0">
        <SectionTitle
          eyebrow="Becas"
          title="Financia tu"
          highlight="futuro creativo"
          description="Siete tipos de beca para que el talento nunca se detenga por razones económicas. Revisa requisitos, vigencia y documentación."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {scholarships.map((scholarship, i) => {
            const isOpen = expanded === scholarship.id;

            return (
              <motion.article
                key={scholarship.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="h-full"
              >
                <FeatureCard
                  accent
                  icon={<Icon name={scholarship.icon} className="h-6 w-6" />}
                  title={scholarship.name}
                  description={scholarship.benefit}
                  className={cn(
                    "h-full rounded-2xl p-6 shadow-card",
                    isOpen
                      ? "border-primary/40 shadow-card-hover"
                      : "hover:border-primary/30 hover:shadow-card-hover"
                  )}
                  footer={
                    <>
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge variant="secondary">{scholarship.percentage}</Badge>
                        <span className="text-xs font-medium text-muted-foreground">Cobertura de beca</span>
                      </div>

                      <div className="mt-4 space-y-2 rounded-2xl border border-border/70 bg-surface-soft p-4">
                        <p className="flex items-start gap-2 text-[13px] text-muted-foreground">
                          <CalendarRange className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                          <span>
                            Convocatoria: <span className="font-semibold text-foreground">{scholarship.callDate}</span>
                          </span>
                        </p>
                        <p className="flex items-start gap-2 text-[13px] text-muted-foreground">
                          <FileCheck2 className="mt-0.5 size-4 shrink-0 text-success" aria-hidden />
                          <span>{scholarship.documents.length} documentos necesarios</span>
                        </p>
                      </div>

                      <Button
                        id={`toggle-requisitos-${scholarship.id}`}
                        type="button"
                        variant="outline"
                        onClick={() => toggle(scholarship.id)}
                        aria-expanded={isOpen}
                        aria-controls={`requisitos-${scholarship.id}`}
                        className="mt-4 w-full justify-between rounded-2xl border-primary/25 bg-card text-primary hover:border-primary/50 hover:bg-accent"
                      >
                        <span>Ver requisitos</span>
                        <ChevronDown
                          className={cn("size-4 transition-transform duration-300", isOpen && "rotate-180")}
                          aria-hidden
                        />
                      </Button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`requisitos-${scholarship.id}`}
                            role="region"
                            aria-labelledby={`toggle-requisitos-${scholarship.id}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 overflow-hidden rounded-2xl border border-primary/15 bg-primary/[0.04]"
                          >
                            <div className="space-y-5 p-4">
                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Requisitos</p>
                                <ul className="mt-2.5 space-y-2">
                                  {scholarship.requirements.map((req) => (
                                    <li key={req} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                                      <Check className="mt-0.5 size-3.5 shrink-0 text-success" aria-hidden />
                                      {req}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div>
                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-primary">Documentación</p>
                                <ul className="mt-2.5 space-y-2">
                                  {scholarship.documents.map((doc) => (
                                    <li key={doc} className="flex items-start gap-2 text-[13px] text-muted-foreground">
                                      <FileCheck2 className="mt-0.5 size-3.5 shrink-0 text-info" aria-hidden />
                                      {doc}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Button type="button" variant="accent" className="w-full rounded-2xl">
                                Ver requisitos completos
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  }
                />
              </motion.article>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
