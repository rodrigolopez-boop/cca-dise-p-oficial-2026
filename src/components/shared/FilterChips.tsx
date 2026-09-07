"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterChipsProps {
  options: { value: string; label: string }[];
  active: string;
  onChange: (value: string) => void;
  dark?: boolean;
  className?: string;
}

/**
 * Fila de chips de filtrado reutilizable (todos / categorías).
 * Indica el filtro activo con el gradiente de marca.
 */
export function FilterChips({ options, active, onChange, dark, className }: FilterChipsProps) {
  return (
    <div
      role="tablist"
      aria-label="Filtros"
      className={cn(
        "flex flex-wrap items-center gap-2",
        className
      )}
    >
      {options.map((opt) => {
        const isActive = active === opt.value;
        return (
          <motion.button
            key={opt.value}
            type="button"
            role="tab"
            aria-selected={isActive}
            whileTap={{ scale: 0.94 }}
            onClick={() => onChange(opt.value)}
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 border cursor-pointer",
              isActive
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white border-transparent shadow-glow-violet"
                : dark
                  ? "bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white"
                  : "bg-white text-slate-600 border-slate-200 hover:border-violet-300 hover:text-violet-700 hover:shadow-soft"
            )}
          >
            {isActive && <Check className="h-3.5 w-3.5" aria-hidden />}
            {opt.label}
          </motion.button>
        );
      })}
    </div>
  );
}
