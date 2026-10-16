"use client";

import { SearchX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  message: string;
  onReset?: () => void;
  dark?: boolean;
}

export function EmptyState({
  title = "Sin resultados",
  message,
  onReset,
  dark = false,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-14 text-center",
        dark ? "border-white/15 bg-white/5" : "border-primary/20 bg-surface-soft dark:bg-white/5"
      )}
    >
      <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-brand-secondary-soft text-primary dark:bg-primary/20 dark:text-brand-secondary">
        <SearchX className="size-7" aria-hidden />
      </div>
      <h3 className={cn("font-display text-lg font-bold", dark ? "text-white" : "text-foreground")}>{title}</h3>
      <p className={cn("mt-1.5 max-w-sm text-sm", dark ? "text-slate-400" : "text-muted-foreground")}>{message}</p>
      {onReset && (
        <Button type="button" onClick={onReset} className="mt-5">
          Ver todos
        </Button>
      )}
    </div>
  );
}
