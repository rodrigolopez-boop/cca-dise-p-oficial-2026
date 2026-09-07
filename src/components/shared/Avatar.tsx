"use client";

import { cn } from "@/lib/utils";

interface AvatarProps {
  initials: string;
  gradient: string;
  size?: "md" | "lg" | "xl";
  className?: string;
}

/** Avatar reutilizable con iniciales sobre gradiente de marca. */
export function Avatar({ initials, gradient, size = "md", className }: AvatarProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "relative flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br font-display font-bold text-white shadow-soft select-none",
        gradient,
        size === "md" && "h-12 w-12 text-base",
        size === "lg" && "h-16 w-16 text-xl",
        size === "xl" && "h-20 w-20 text-2xl",
        className
      )}
    >
      {initials}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/25" />
    </div>
  );
}
