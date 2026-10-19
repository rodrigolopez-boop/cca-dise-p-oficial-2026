import Image from "next/image";
import { BadgeCheck, MessageCircle } from "lucide-react";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { AnimatedSection } from "@/components/shared/AnimatedSection";
import { Button } from "@/components/ui/button";
import { contactWhatsApp, whatsappLink } from "@/lib/cursosData";

export function Contacto() {
  return (
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
  );
}
