"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  label?: string;
}

export function ThemeToggle({ className, label = "Cambiar tema" }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Activar modo claro" : "Activar modo oscuro"}
      title={label}
      className={cn(
        "inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-sm transition-all duration-200 hover:border-primary/30 hover:bg-accent hover:text-primary-hover focus-visible:ring-4 focus-visible:ring-primary/15 active:scale-95",
        className
      )}
    >
      <Sun className="size-4.5 dark:hidden" aria-hidden />
      <Moon className="hidden size-4.5 dark:block" aria-hidden />
    </button>
  );
}
