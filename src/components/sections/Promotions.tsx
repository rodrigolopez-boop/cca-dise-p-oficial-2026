"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { promotions } from "@/lib/mockData";
import { Icon } from "@/components/shared/Icon";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionShell } from "@/components/shared/SectionShell";
import { CourseCard } from "@/components/shared/CourseCard";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Promotions() {
  return (
    <SectionShell
      id="promociones"
      tone="muted"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Promociones y beneficios"
    >
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-40" aria-hidden />
      <div className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full bg-primary/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-80 w-80 rounded-full bg-secondary/20 blur-3xl" aria-hidden />

      <Container>
        <SectionTitle
          eyebrow="Promociones"
          title="Beneficios y"
          highlight="promociones"
          description="Aprovecha los descuentos y beneficios vigentes para nuevos ingresos y estudiantes actuales de la carrera."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {promotions.map((promo, i) => (
            <motion.article
              key={promo.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.08 }}
              className="h-full"
            >
              <CourseCard
                title={promo.title}
                description={promo.description}
                icon={<Icon name={promo.icon} className="h-6 w-6" />}
                badge={
                  <Badge variant="secondary" className="font-display text-base">
                    {promo.discount}
                  </Badge>
                }
                meta={
                  <div className="space-y-4">
                    <dl className="rounded-2xl border border-border/70 bg-surface p-4 text-[13px]">
                      <div className="flex items-center justify-between gap-3">
                        <dt className="text-muted-foreground">Vigencia</dt>
                        <dd className="text-right font-semibold text-foreground">{promo.validity}</dd>
                      </div>
                      <div className="mt-2 border-t border-border/70 pt-2">
                        <dt className="mb-1 text-muted-foreground">Condiciones</dt>
                        <dd className="leading-relaxed text-muted-foreground">{promo.conditions}</dd>
                      </div>
                    </dl>
                    <Button type="button" variant="accent" className="w-full">
                      <BadgeCheck className="h-4 w-4" aria-hidden />
                      Conocer promoción
                    </Button>
                  </div>
                }
                className="h-full [&>p]:flex-1"
              />
            </motion.article>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
