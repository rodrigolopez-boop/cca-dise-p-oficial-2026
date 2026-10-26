import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";

export interface SectionLink {
  label: string;
  description: string;
  href: string;
}

export function SectionLinks({ items }: { items: SectionLink[] }) {
  return (
    <section className="bg-background py-16 md:py-20" aria-label="Secciones">
      <Container>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-card-hover focus-visible:ring-4 focus-visible:ring-secondary/25"
            >
              <h2 className="font-display text-lg font-bold text-foreground">{item.label}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Ver página
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
