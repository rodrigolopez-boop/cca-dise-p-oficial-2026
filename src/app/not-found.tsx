import Link from "next/link";
import { Compass, ArrowRight } from "lucide-react";

/**
 * Página 404 personalizada acorde a la identidad visual del portal.
 * Redirige a una sección existente del sitio (Inicio).
 */
export default function NotFound() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-ink-950 px-6 text-center text-white">
      <div className="absolute inset-0 bg-grid" aria-hidden />
      <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-violet-600/25 blur-[130px]" aria-hidden />
      <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-[130px]" aria-hidden />

      <div className="relative">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-[1.75rem] bg-gradient-to-br from-violet-600 via-fuchsia-600 to-orange-500 shadow-glow-violet">
          <Compass className="h-9 w-9 text-white" strokeWidth={1.6} aria-hidden />
        </div>
        <p className="mt-8 font-display text-7xl font-bold text-gradient sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold sm:text-3xl">
          Página no encontrada
        </h1>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-300 sm:text-base">
          La página que buscas no existe o fue movida. Vuelve al inicio para conocer la
          Licenciatura en Diseño Gráfico y Animación.
        </p>
        <Link
          href="/#inicio"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-7 py-3.5 text-[15px] font-semibold text-white shadow-glow-violet transition-all duration-300 hover:scale-[1.04] hover:shadow-glow-magenta"
        >
          Volver al inicio
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
        </Link>
      </div>
    </div>
  );
}