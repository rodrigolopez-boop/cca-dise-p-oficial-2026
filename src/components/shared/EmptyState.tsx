"use client";

import { SearchX } from "lucide-react";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  title?: string;
  message: string;
  onReset?: () => void;
  dark?: boolean;
}

/** Estado vacío reutilizable para listas filtradas sin resultados. */
export function EmptyState({
  title = "Sin resultados",
  message,
  onReset,
  dark,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-3xl border border-dashed px-6 py-16 text-center",
        dark ? "border-white/15 bg-white/5" : "border-slate-300 bg-slate-50"
      )}
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15">
        <SearchX className="h-7 w-7 text-violet-500" aria-hidden />
      </div>
      <h3 className={cn("font-display text-lg font-semibold", dark ? "text-white" : "text-ink-900")}>
        {title}
      </h3>
      <p className={cn("mt-1.5 max-w-sm text-sm", dark ? "text-slate-400" : "text-slate-500")}>
        {message}
      </p>
      {onReset && (
        <button
          type="button"
          onClick={onReset}
          className="mt-5 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2 text-sm font-semibold text-white transition-transform hover:scale-105 cursor-pointer"
        >
          Ver todos
        </button>
      )}
    </div>
  );
}
