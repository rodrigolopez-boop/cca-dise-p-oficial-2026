"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, X } from "lucide-react";
import { news } from "@/lib/mockData";
import type { NewsItem } from "@/types";
import { Container } from "@/components/shared/Container";
import { EmptyState } from "@/components/shared/EmptyState";
import { GradientCover } from "@/components/shared/GradientCover";
import { SearchInput } from "@/components/shared/SearchInput";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

const newsCategoryVariant: Record<NewsItem["category"], "default" | "secondary" | "info" | "outline"> = {
  Logros: "secondary",
  Eventos: "info",
  Infraestructura: "outline",
  Academia: "default",
  Convenios: "info",
};

function formatNewsDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric", month: "long", year: "numeric",
  });
}

function NewsSkeleton() {
  return (
    <Card className="h-full gap-0 overflow-hidden rounded-2xl border-border/80 bg-card p-0 shadow-card">
      <Skeleton className="h-48 w-full rounded-none" />
      <div className="space-y-3 p-6">
        <Skeleton className="h-5 w-24 rounded-full" />
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </Card>
  );
}

export function News() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<NewsItem | null>(null);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selected]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const filtered = useMemo(
    () =>
      news.filter(
        (n) =>
          n.title.toLowerCase().includes(query.toLowerCase()) ||
          n.excerpt.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <SectionShell
      id="noticias"
      tone="default"
      className="overflow-hidden"
      contentClassName="max-w-none p-0 px-0 sm:px-0 lg:px-0"
      aria-label="Noticias"
    >
      <Container>
        <div className="flex flex-col items-center gap-6">
          <SectionTitle
            eyebrow="Noticias"
            title="Lo último del"
            highlight="campus creativo"
            description="Logros estudiantiles, nuevos laboratorios, conferencias internacionales y todo lo que está pasando en la carrera."
            className="mb-0"
          />
          <SearchInput
            value={query}
            onChange={setQuery}
            placeholder="Buscar noticias..."
            label="noticias"
            className="max-w-xl"
          />
        </div>

        {loading ? (
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3" aria-busy="true" aria-live="polite" aria-label="Cargando noticias">
            {Array.from({ length: 3 }).map((_, i) => (
              <NewsSkeleton key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="mt-10 md:mt-14">
            <EmptyState
              message={`No encontramos noticias que coincidan con "${query}". Prueba con otros términos.`}
              onReset={() => setQuery("")}
            />
          </div>
        ) : (
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2 xl:grid-cols-3">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1 }}
                className={cn("group h-full", item.featured && "md:col-span-2 xl:col-span-2")}
              >
                <Card className="h-full gap-0 overflow-hidden rounded-2xl border-border/80 bg-card p-0 shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-card-hover">
                  <GradientCover
                    gradient={item.gradient}
                    icon={item.featured ? "Newspaper" : "Sparkles"}
                    variant={item.featured ? "waves" : "grid"}
                    className={cn("w-full rounded-none", item.featured ? "h-48 sm:h-56" : "h-44")}
                  />
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant={newsCategoryVariant[item.category]} className="uppercase tracking-wide">
                        {item.category}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <CalendarDays className="size-3.5" aria-hidden />
                        {formatNewsDate(item.date)}
                      </span>
                    </div>
                    <h3 className={cn(
                      "mt-4 font-display font-bold leading-snug text-foreground transition-colors group-hover:text-primary dark:group-hover:text-secondary",
                      item.featured ? "text-2xl" : "text-lg"
                    )}>
                      {item.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
                    <Button
                      type="button"
                      variant="link"
                      onClick={() => setSelected(item)}
                      className="mt-5 w-fit cursor-pointer text-primary hover:text-primary-hover dark:text-secondary"
                    >
                      Leer más
                      <ArrowRight className="size-4" aria-hidden />
                    </Button>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        )}
      </Container>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-background/80 p-3 backdrop-blur-sm sm:p-6"
            onClick={() => setSelected(null)}
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            aria-labelledby="news-modal-title"
            aria-describedby="news-modal-description"
          >
            <motion.article
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl"
            >
              <Card className="relative max-h-[88vh] overflow-y-auto rounded-2xl bg-card shadow-card-hover scrollbar-slim">
                <GradientCover
                  gradient={selected.gradient}
                  icon="Newspaper"
                  variant="waves"
                  className="h-44 w-full rounded-none sm:h-52"
                />
                <Button
                  type="button"
                  size="icon"
                  variant="inverse"
                  onClick={() => setSelected(null)}
                  aria-label="Cerrar noticia"
                  className="absolute right-4 top-4 cursor-pointer bg-dark-background/60"
                >
                  <X className="size-5" aria-hidden />
                </Button>
                <div className="p-5 sm:p-8">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant={newsCategoryVariant[selected.category]} className="uppercase tracking-wide">
                      {selected.category}
                    </Badge>
                    <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <CalendarDays className="size-3.5" aria-hidden />
                      {formatNewsDate(selected.date)}
                    </span>
                  </div>
                  <h2 id="news-modal-title" className="mt-4 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                    {selected.title}
                  </h2>
                  <div id="news-modal-description" className="mt-5 space-y-4">
                    {selected.content.map((para, idx) => (
                      <p key={idx} className="text-[15px] leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
