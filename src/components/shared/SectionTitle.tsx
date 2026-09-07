"use client";

import { cn } from "@/lib/utils";
import { AnimatedSection } from "./AnimatedSection";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
}

/**
 * Título de sección reutilizable con eyebrow, titular y descripción.
 * `highlight` se pinta con el gradiente de marca.
 */
export function SectionTitle({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  dark = false,
  className,
}: SectionTitleProps) {
  return (
    <AnimatedSection
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "text-center mx-auto max-w-3xl" : "text-left max-w-3xl",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] mb-5",
            dark
              ? "bg-white/10 text-fuchsia-300 border border-white/15"
              : "bg-violet-50 text-violet-700 border border-violet-100"
          )}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.12] tracking-tight",
          dark ? "text-white" : "text-ink-900"
        )}
      >
        {title}{" "}
        {highlight && <span className="text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base md:text-lg leading-relaxed",
            dark ? "text-slate-300" : "text-slate-600"
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
