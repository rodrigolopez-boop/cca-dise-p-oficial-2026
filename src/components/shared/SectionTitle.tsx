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
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl text-left",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-[0.16em]",
            dark
              ? "border-white/15 bg-white/10 text-secondary"
              : "border-primary/15 bg-brand-secondary-soft text-primary dark:border-primary/25 dark:bg-primary/15 dark:text-brand-secondary"
          )}
        >
          <span className="size-1.5 rounded-full bg-secondary" />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display text-3xl font-bold leading-[1.12] tracking-tight text-balance md:text-4xl lg:text-5xl",
          dark ? "text-white" : "text-primary dark:text-white"
        )}
      >
        {title} {highlight && (
          <span className="relative isolate inline-block text-primary dark:text-white">
            {highlight}
            <span className="absolute inset-x-0 bottom-0.5 -z-10 h-2.5 -rotate-1 rounded-sm bg-secondary/70" />
          </span>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-slate-300" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </AnimatedSection>
  );
}
