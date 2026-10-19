import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/Container";

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card py-8">
      <Container className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Diseño Gráfico y Animación · Cursos e inscripciones
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-primary transition-colors hover:text-primary-hover dark:text-blue-200"
        >
          <ArrowLeft className="size-3.5" aria-hidden /> Volver al portal principal
        </a>
      </Container>
    </footer>
  );
}
