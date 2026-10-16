import { Shapes } from "lucide-react";

/**
 * Estado de carga global del portal.
 * Se muestra mientras Next.js prepara una ruta (streaming/SSR).
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center gap-5 bg-ink-950"
      role="status"
      aria-label="Cargando"
    >
      <div className="relative">
        <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 opacity-40 blur-2xl animate-pulse-soft" aria-hidden />
        <div className="relative flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 shadow-glow-violet animate-spin-slow">
          <Shapes className="h-9 w-9 text-white" strokeWidth={1.5} aria-hidden />
        </div>
      </div>
      <p className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
        Cargando portal
      </p>
    </div>
  );
}