"use client";

import { cn } from "@/lib/utils";
import { getBrandGradient } from "@/lib/brand";

interface AvatarProps {
  initials: string;
  gradient: string;
  size?: "md" | "lg" | "xl";
  className?: string;
}

export function Avatar({ initials, gradient, size = "md", className }: AvatarProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex shrink-0 select-none items-center justify-center rounded-2xl bg-gradient-to-br font-display font-bold text-white shadow-card",
        getBrandGradient(gradient),
        size === "md" && "size-12 text-base",
        size === "lg" && "size-16 text-xl",
        size === "xl" && "size-20 text-2xl",
        className
      )}
    >
      {initials}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/25" />
    </div>
  );
}
