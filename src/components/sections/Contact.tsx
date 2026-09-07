"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { contactInfo } from "@/lib/mockData";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Icon } from "@/components/shared/Icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

/** Esquema de validación del formulario de contacto. */
const contactSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("Ingresa un correo electrónico válido"),
  phone: z.string().min(7, "Ingresa un teléfono válido").max(20, "Teléfono demasiado largo"),
  subject: z.string().min(3, "Indica un asunto"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres").max(600, "Máximo 600 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputBase =
  "w-full rounded-xl border-slate-200 bg-white text-[15px] text-ink-900 shadow-sm outline-none transition-all placeholder:text-slate-400 focus-visible:ring-4 focus-visible:ring-violet-500/15 focus-visible:border-violet-400";

/**
 * Sección de contacto: información institucional, redes, mapa y formulario
 * con validación completa (react-hook-form + zod) y estados de envío.
 */
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
    // Simula POST /api/contacto — reemplazar por la llamada real a la API
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    toast.success("Mensaje enviado", {
      description: `Gracias ${data.name.split(" ")[0]}, te responderemos en breve.`,
    });
    reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contacto" className="relative overflow-hidden bg-ink-950 py-20 text-white md:py-28" aria-label="Contacto">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[130px]" aria-hidden />
      <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[130px]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          dark
          eyebrow="Contacto"
          title="Hablemos de tu"
          highlight="futuro creativo"
          description="Visítanos, escríbenos o agenda una visita guiada por los laboratorios. El equipo de la carrera está listo para atenderte."
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Información de contacto */}
          <div className="space-y-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-600">
                  <MapPin className="h-5 w-5 text-white" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Dirección</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-300">{contactInfo.address}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  <Phone className="h-5 w-5 text-white" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Teléfono</h3>
                  <a href={`tel:${contactInfo.phone}`} className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white">
                    {contactInfo.phone}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-600 to-pink-600">
                  <Mail className="h-5 w-5 text-white" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Correo institucional</h3>
                  <a href={`mailto:${contactInfo.email}`} className="mt-1 block text-sm text-slate-300 transition-colors hover:text-white">
                    {contactInfo.email}
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur transition-colors hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-600">
                  <Clock className="h-5 w-5 text-white" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-sm font-bold">Horarios de atención</h3>
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

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
            >
              <span className="text-sm font-semibold text-slate-300">Síguenos:</span>
              {contactInfo.social.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-slate-300 ring-1 ring-white/10 transition-all hover:bg-gradient-to-br hover:from-violet-600 hover:to-fuchsia-600 hover:text-white hover:scale-110"
                >
                  <Icon name={social.icon} className="h-4.5 w-4.5" />
                </a>
              ))}
            </motion.div>

            {/* Mapa (embed estático de OpenStreetMap) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden rounded-2xl border border-white/10"
            >
              <iframe
                title="Mapa de ubicación del campus"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-68.15%2C-16.53%2C-68.09%2C-16.47&layer=mapnik&marker=-16.5%2C-68.12"
                className="h-56 w-full grayscale-[0.3] invert-[0.92] hue-rotate-180"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Formulario */}
          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="rounded-3xl border border-white/10 bg-white p-7 text-ink-900 shadow-soft-lg sm:p-9"
            aria-label="Formulario de contacto"
          >
            <h3 className="font-display text-xl font-bold">Envíanos un mensaje</h3>
            <p className="mt-1.5 text-sm text-slate-500">
              Completa el formulario y te contactaremos dentro de las próximas 24 horas hábiles.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-[13px] font-semibold text-slate-700">Nombre completo</Label>
                <Input
                  id="contact-name"
                  placeholder="Ej. Ana Pérez"
                  aria-invalid={!!errors.name}
                  className={cn(inputBase, errors.name && "border-rose-400 focus-visible:ring-rose-500/15")}
                  {...register("name")}
                />
                {errors.name && <p className="text-xs font-medium text-rose-500" role="alert">{errors.name.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="text-[13px] font-semibold text-slate-700">Correo electrónico</Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="tucorreo@ejemplo.com"
                  aria-invalid={!!errors.email}
                  className={cn(inputBase, errors.email && "border-rose-400 focus-visible:ring-rose-500/15")}
                  {...register("email")}
                />
                {errors.email && <p className="text-xs font-medium text-rose-500" role="alert">{errors.email.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-phone" className="text-[13px] font-semibold text-slate-700">Teléfono</Label>
                <Input
                  id="contact-phone"
                  type="tel"
                  placeholder="+591 700 00000"
                  aria-invalid={!!errors.phone}
                  className={cn(inputBase, errors.phone && "border-rose-400 focus-visible:ring-rose-500/15")}
                  {...register("phone")}
                />
                {errors.phone && <p className="text-xs font-medium text-rose-500" role="alert">{errors.phone.message}</p>}
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="contact-subject" className="text-[13px] font-semibold text-slate-700">Asunto</Label>
                <Input
                  id="contact-subject"
                  placeholder="Ej. Información de admisión"
                  aria-invalid={!!errors.subject}
                  className={cn(inputBase, errors.subject && "border-rose-400 focus-visible:ring-rose-500/15")}
                  {...register("subject")}
                />
                {errors.subject && <p className="text-xs font-medium text-rose-500" role="alert">{errors.subject.message}</p>}
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="contact-message" className="text-[13px] font-semibold text-slate-700">Mensaje</Label>
                <Textarea
                  id="contact-message"
                  placeholder="Cuéntanos qué te gustaría saber sobre la carrera..."
                  rows={5}
                  aria-invalid={!!errors.message}
                  className={cn(inputBase, "resize-none", errors.message && "border-rose-400 focus-visible:ring-rose-500/15")}
                  {...register("message")}
                />
                {errors.message && <p className="text-xs font-medium text-rose-500" role="alert">{errors.message.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className={cn(
                "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 cursor-pointer",
                status === "sent"
                  ? "bg-emerald-500"
                  : "bg-gradient-to-r from-violet-600 to-fuchsia-600 shadow-glow-violet hover:scale-[1.02] hover:shadow-glow-magenta",
                status === "sending" && "opacity-70 cursor-wait"
              )}
            >
              {status === "idle" && (<><Send className="h-4 w-4" aria-hidden /> Enviar mensaje</>)}
              {status === "sending" && (<><Loader2 className="h-4 w-4 animate-spin" aria-hidden /> Enviando...</>)}
              {status === "sent" && (<><CheckCircle2 className="h-4 w-4" aria-hidden /> ¡Mensaje enviado!</>)}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
