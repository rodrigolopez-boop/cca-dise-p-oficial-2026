"use client";

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

const icons = LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>;

interface IconProps {
  name: string;
  className?: string;
  strokeWidth?: number;
}

/**
 * Renderiza un icono de lucide-react a partir de su nombre (string),
 * permitiendo que los datos mock declaren el icono sin importar componentes.
 */
export function Icon({ name, className, strokeWidth = 1.75 }: IconProps) {
  const Cmp = icons[name] ?? LucideIcons.Sparkles;
  return <Cmp className={cn("h-5 w-5", className)} strokeWidth={strokeWidth} aria-hidden />;
}
