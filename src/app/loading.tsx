import { ConcentricSpinner } from "@/components/shared/ConcentricSpinner";

/**
 * Estado de carga global del portal.
 * Se muestra mientras Next.js prepara una ruta (streaming/SSR).
 */
export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink-950"
      role="status"
      aria-label="Cargando portal"
    >
      <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 size-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[100px]"
        aria-hidden
      />
      <div
        className="absolute left-1/2 top-1/2 size-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/15 blur-[80px]"
        aria-hidden
      />

      <div className="relative flex flex-col items-center gap-7">
        <ConcentricSpinner className="h-32 w-32" label="Cargando portal" />
      </div>
    </div>
  );
}
