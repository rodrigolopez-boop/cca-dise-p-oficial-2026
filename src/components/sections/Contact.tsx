"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { contactInfo } from "@/lib/mockData";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { SectionShell } from "@/components/shared/SectionShell";
import { Container } from "@/components/shared/Container";
import { Icon } from "@/components/shared/Icon";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

const contactSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().min(7, "Ingresa un teléfono válido").max(20, "Teléfono demasiado largo"),
  subject: z.string().min(3, "Indica un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(600, "Máximo 600 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputBase =
  "w-full rounded-2xl border-input bg-card text-[15px] text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/15 aria-invalid:border-destructive aria-invalid:ring-destructive/15";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    toast.success("Mensaje enviado", {
      description: `Gracias ${data.name.split(" ")[0]}, te responderemos en breve.`,
    });
    reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <SectionShell id="contacto" tone="dark" aria-label="Contacto" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -right-32 top-10 size-96 rounded-full bg-primary/25 blur-[130px]" aria-hidden />
      <div className="pointer-events-none absolute -left-32 bottom-10 size-96 rounded-full bg-secondary/15 blur-[130px]" aria-hidden />

      <Container className="max-w-7xl px-0">
        <SectionTitle
          dark
          eyebrow="Contacto"
          title="Hablemos de tu"
          highlight="futuro creativo"
          description="Visítanos, escríbenos o agenda una visita guiada por los laboratorios. El equipo de la carrera está listo para atenderte."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">Dirección</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{contactInfo.address}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-secondary">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">Teléfono</h3>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="mt-1 block rounded-md text-sm text-slate-300 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/50"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-secondary text-primary">
                  <Mail className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">Correo institucional</h3>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="mt-1 block rounded-md text-sm text-slate-300 transition-colors hover:text-secondary focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-secondary/50"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.08]"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-warning/20 text-warning">
                  <Clock className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold text-white">Horarios de atención</h3>
                  <ul className="mt-1 space-y-0.5 text-sm text-slate-300">
                    {contactInfo.hours.map((h) => (
                      <li key={h.day} className="flex justify-between gap-4">
                        <span>{h.day}</span>
                        <span className="font-medium text-white">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 shadow-card backdrop-blur"
            >
              <span className="text-sm font-semibold text-slate-300">Síguenos:</span>
              {contactInfo.social.map((social) => (
                <Button key={social.name} asChild variant="inverse" size="icon">
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="rounded-2xl border-white/15 bg-white/5 hover:bg-secondary hover:text-primary"
                  >
                    <Icon name={social.icon} className="size-4.5" />
                  </a>
                </Button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-dark-card shadow-card"
            >
              <iframe
                title="Mapa de ubicación del campus"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-68.15%2C-16.53%2C-68.09%2C-16.47&layer=mapnik&marker=-16.5%2C-68.12"
                className="h-56 w-full grayscale-[0.3] invert-[0.92] hue-rotate-180"
                loading="lazy"
              />
            </motion.div>
          </div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Formulario de contacto"
            aria-busy={status === "sending"}
            className="min-w-0"
          >
            <Card className="gap-0 rounded-2xl border-border bg-card p-6 text-foreground shadow-card sm:p-8 dark:bg-card">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge variant="info">Estamos para ayudarte</Badge>
                  <h3 className="mt-4 font-display text-xl font-bold text-foreground">Envíanos un mensaje</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Completa el formulario y te contactaremos dentro de las próximas 24 horas hábiles.
                  </p>
                </div>
                <Badge
                  variant={status === "sent" ? "success" : status === "sending" ? "warning" : "outline"}
                  aria-live="polite"
                  className="shrink-0 self-start"
                >
                  {status === "sent" ? "Enviado" : status === "sending" ? "Enviando" : "Disponible"}
                </Badge>
              </div>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-[13px] font-semibold text-foreground">
                    Nombre completo
                  </Label>
                  <Input
                    id="contact-name"
                    placeholder="Ej. Ana Pérez"
                    aria-invalid={!!errors.name}
                    className={cn(inputBase, errors.name && "border-destructive focus-visible:ring-destructive/15")}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-destructive" role="alert">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-[13px] font-semibold text-foreground">
                    Correo electrónico
                  </Label>
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    aria-invalid={!!errors.email}
                    className={cn(inputBase, errors.email && "border-destructive focus-visible:ring-destructive/15")}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="text-xs font-medium text-destructive" role="alert">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone" className="text-[13px] font-semibold text-foreground">
                    Teléfono
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    placeholder="+591 700 00000"
                    aria-invalid={!!errors.phone}
                    className={cn(inputBase, errors.phone && "border-destructive focus-visible:ring-destructive/15")}
                    {...register("phone")}
                  />
                  {errors.phone && (
                    <p className="text-xs font-medium text-destructive" role="alert">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-subject" className="text-[13px] font-semibold text-foreground">
                    Asunto
                  </Label>
                  <Input
                    id="contact-subject"
                    placeholder="Ej. Información de admisión"
                    aria-invalid={!!errors.subject}
                    className={cn(inputBase, errors.subject && "border-destructive focus-visible:ring-destructive/15")}
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-xs font-medium text-destructive" role="alert">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <Label htmlFor="contact-message" className="text-[13px] font-semibold text-foreground">
                    Mensaje
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Cuéntanos qué te gustaría saber sobre la carrera..."
                    rows={5}
                    aria-invalid={!!errors.message}
                    className={cn(inputBase, "resize-none", errors.message && "border-destructive focus-visible:ring-destructive/15")}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-xs font-medium text-destructive" role="alert">
                      {errors.message.message}
                    </p>
                  )}
                </div>
              </div>

              <Button
                type="submit"
                disabled={status !== "idle"}
                aria-busy={status === "sending"}
                className={cn(
                  "mt-7 h-12 w-full rounded-2xl",
                  status === "sent" && "border border-success/30 bg-success/10 text-success hover:bg-success/20 hover:text-success",
                  status === "sending" && "cursor-wait opacity-70"
                )}
              >
                {status === "idle" && (
                  <>
                    <Send className="size-4" aria-hidden /> Enviar mensaje
                  </>
                )}
                {status === "sending" && (
                  <>
                    <Loader2 className="size-4 animate-spin" aria-hidden /> Enviando...
                  </>
                )}
                {status === "sent" && (
                  <>
                    <CheckCircle2 className="size-4" aria-hidden /> ¡Mensaje enviado!
                  </>
                )}
              </Button>
            </Card>
          </motion.form>
        </div>
      </Container>
    </SectionShell>
  );
}
