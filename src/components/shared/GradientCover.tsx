"use client";

import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { getBrandGradient } from "@/lib/brand";

interface GradientCoverProps {
  gradient: string;
  icon?: string;
  className?: string;
  iconClassName?: string;
  variant?: "grid" | "dots" | "rings" | "waves";
}

export function GradientCover({
  gradient,
  icon,
  className,
  iconClassName,
  variant = "grid",
}: GradientCoverProps) {
  const Icon = icon
    ? (LucideIcons as unknown as Record<string, LucideIcons.LucideIcon>)[icon] ?? LucideIcons.Sparkles
    : null;

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-gradient-to-br", getBrandGradient(gradient), className)}
      aria-hidden
    >
      {variant === "grid" && <div className="absolute inset-0 bg-grid opacity-50" />}
      {variant === "dots" && <div className="absolute inset-0 bg-dots opacity-60" />}
      {variant === "rings" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="size-40 rounded-full border border-white/20" />
          <div className="absolute size-64 rounded-full border border-white/10" />
          <div className="absolute size-96 rounded-full border border-white/5" />
        </div>
      )}
      {variant === "waves" && (
        <svg className="absolute inset-0 size-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="none">
          <path d="M0 220 C100 160 200 280 400 200 L400 300 L0 300 Z" fill="white" fillOpacity="0.35" />
          <path d="M0 250 C120 200 240 300 400 240 L400 300 L0 300 Z" fill="white" fillOpacity="0.5" />
        </svg>
      )}

      <div className="absolute -right-6 -top-6 size-24 rotate-12 rounded-3xl bg-white/10" />
      <div className="absolute -bottom-8 -left-8 size-20 rounded-full bg-secondary/20" />
      <div className="absolute bottom-4 right-10 size-3 rounded-full bg-secondary" />

      {Icon && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-16 items-center justify-center rounded-2xl border border-white/25 bg-white/15 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className={cn("size-8 text-white", iconClassName)} strokeWidth={1.75} />
          </div>
        </div>
      )}
    </div>
  );
}
