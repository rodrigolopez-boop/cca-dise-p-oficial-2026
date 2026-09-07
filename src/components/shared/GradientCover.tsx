"use client";

import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

interface GradientCoverProps {
  gradient: string;
  icon?: string;
  className?: string;
  iconClassName?: string;
  variant?: "grid" | "dots" | "rings" | "waves";
  decorative?: boolean;
}

/**
 * Composición visual abstracta reutilizable (sustituye imágenes placeholder).
 * Genera una portada con gradiente, patrón geométrico e icono — estética
 * coherente con la identidad de una carrera de diseño y animación.
 * En producción puede reemplazarse por <img> proveniente del CMS.
 */
export function GradientCover({
  gradient,
  icon,
  className,
  iconClassName,
  variant = "grid",
}: GradientCoverProps) {
  const Icon = icon
    ? (LucideIcons as Record<string, LucideIcons.LucideIcon>)[icon] ?? LucideIcons.Sparkles
    : null;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br",
        gradient,
        className
      )}
      aria-hidden
    >
      {/* Patrón geométrico */}
      {variant === "grid" && <div className="absolute inset-0 bg-grid opacity-60" />}
      {variant === "dots" && <div className="absolute inset-0 bg-dots opacity-70" />}
      {variant === "rings" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-40 w-40 rounded-full border border-white/20" />
          <div className="absolute h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute h-96 w-96 rounded-full border border-white/5" />
        </div>
      )}
      {variant === "waves" && (
        <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path d="M0 220 C 100 160, 200 280, 400 200 L400 300 L0 300 Z" fill="white" fillOpacity="0.35" />
          <path d="M0 250 C 120 200, 240 300, 400 240 L400 300 L0 300 Z" fill="white" fillOpacity="0.5" />
        </svg>
      )}

      {/* Formas geométricas flotantes */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-3xl rotate-12 bg-white/10" />
      <div className="absolute -left-8 bottom-8 h-16 w-16 rounded-full bg-white/10" />
      <div className="absolute right-10 bottom-4 h-3 w-3 rounded-full bg-white/40" />

      {/* Icono central */}
      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm border border-white/25 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
            <Icon className={cn("h-8 w-8 text-white", iconClassName)} strokeWidth={1.75} />
          </div>
        </div>
      )}
    </div>
  );
}
