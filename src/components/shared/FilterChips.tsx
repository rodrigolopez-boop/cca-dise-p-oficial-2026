"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipsProps<T extends string> {
  options: { value: T; label: string }[];
  active: T;
  onChange: (value: T) => void;
  dark?: boolean;
  className?: string;
}

export function FilterChips<T extends string>({
  options,
  active,
  onChange,
  dark = false,
  className,
}: FilterChipsProps<T>) {
  return (
    <div aria-label="Filtros" className={cn("flex flex-wrap items-center gap-2", className)}>
      {options.map((option) => {
        const isActive = active === option.value;

        return (
          <motion.button
            key={option.value}
            type="button"
            aria-pressed={isActive}
            whileTap={{ scale: 0.97 }}
            onClick={() => onChange(option.value)}
            className={cn(
              "inline-flex min-h-10 items-center gap-1.5 rounded-xl border px-4 py-2 text-sm font-semibold transition-all duration-200 focus-visible:ring-4 focus-visible:ring-primary/15",
              isActive
                ? dark
                  ? "border-secondary bg-secondary text-primary shadow-glow-magenta"
                  : "border-primary bg-primary text-white shadow-glow-violet"
                : dark
                  ? "border-white/10 bg-white/5 text-slate-200 hover:border-secondary/30 hover:bg-white/10 hover:text-white"
                  : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:bg-accent hover:text-primary"
            )}
          >
            {isActive && <Check className="size-3.5" aria-hidden />}
            {option.label}
          </motion.button>
        );
      })}
    </div>
  );
}
