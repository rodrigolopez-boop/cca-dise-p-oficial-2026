import { CheckCircle2 } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Icon } from "@/components/shared/Icon";
import { enrollmentSteps, requirements, paymentMethods } from "@/lib/cursosData";

export function Inscripcion() {
  return (
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
  );
}
