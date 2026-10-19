import { motion, AnimatePresence } from "framer-motion";
import { SectionShell } from "@/components/shared/SectionShell";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { FilterChips } from "@/components/shared/FilterChips";
import { EmptyState } from "@/components/shared/EmptyState";
import { CourseCard } from "@/components/shared/CourseCard";
import { Icon } from "@/components/shared/Icon";
import { Badge } from "@/components/ui/badge";
import { CourseCatalogItem } from "@/lib/cursosData";
import { CategoryFilter, courseWhatsAppLink, levelVariant } from "./utils";

interface CatalogoProps {
  id: string;
  category: CategoryFilter;
  setCategory: (category: CategoryFilter) => void;
  categoryOptions: { value: CategoryFilter; label: string }[];
  filtered: CourseCatalogItem[];
}

export function Catalogo({ id, category, setCategory, categoryOptions, filtered }: CatalogoProps) {
  return (
    <SectionShell id={id} tone="default" aria-label="Catálogo de cursos">
      <SectionTitle
        eyebrow="Catálogo"
        title="Cursos"
        highlight="ofertados"
        description="Formación práctica y actualizada en diseño, animación e industria creativa. Filtra por área para encontrar tu curso ideal."
      />

      <div className="mb-10 flex justify-center">
        <FilterChips options={categoryOptions} active={category} onChange={setCategory} className="justify-center" />
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          message="No hay cursos publicados en esta área por el momento. Explora otras categorías."
          onReset={() => setCategory("todos")}
        />
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((course) => (
              <motion.article
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <CourseCard
                  title={course.title}
                  description={course.description}
                  icon={<Icon name={course.icon} className="size-6" />}
                  badge={
                    <div className="flex flex-wrap items-center justify-end gap-2">
                      <Badge variant={levelVariant[course.level]}>{course.level}</Badge>
                      <Badge
                        variant="outline"
                        className="border-secondary/40 bg-secondary/15 text-primary dark:bg-secondary/15 dark:text-secondary"
                      >
                        {course.category}
                      </Badge>
                    </div>
                  }
                  meta={
                    <dl className="grid gap-3 rounded-2xl border border-border/70 bg-surface-soft/80 p-4">
                      <div className="flex flex-wrap items-baseline justify-between gap-2 text-xs">
                        <dt className="text-muted-foreground">Duración</dt>
                        <dd className="text-right font-semibold text-foreground">{course.duration}</dd>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border/70 pt-3 text-xs">
                        <dt className="text-muted-foreground">Modalidad</dt>
                        <dd className="text-right font-semibold text-foreground">{course.modality}</dd>
                      </div>
                      <div className="flex flex-wrap items-baseline justify-between gap-2 border-t border-border/70 pt-3 text-xs">
                        <dt className="text-muted-foreground">Cupos</dt>
                        <dd className="text-right font-semibold text-primary">{course.seats}</dd>
                      </div>
                    </dl>
                  }
                  actionLabel="Solicitar información"
                  onAction={() =>
                    window.open(courseWhatsAppLink(course.title), "_blank", "noopener,noreferrer")
                  }
                  className="h-full border-primary/20 hover:border-primary/40"
                />
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      )}
    </SectionShell>
  );
}
