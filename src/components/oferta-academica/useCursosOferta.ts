import { useMemo, useState } from "react";
import { catalog, launches, type CourseCategory } from "@/lib/cursosData";
import { CategoryFilter } from "./utils";

export function useCursosOferta() {
  const [category, setCategory] = useState<CategoryFilter>("todos");

  const categoryOptions = useMemo<{ value: CategoryFilter; label: string }[]>(() => {
    const unique = Array.from(new Set(catalog.map((c) => c.category)));
    return [{ value: "todos", label: "Todos" }, ...unique.map((c) => ({ value: c, label: c }))];
  }, []);

  const filtered = useMemo(
    () => (category === "todos" ? catalog : catalog.filter((c) => c.category === category)),
    [category]
  );

  const enProceso = launches.filter((l) => l.status === "en-proceso");
  const proximos = launches.filter((l) => l.status === "proximo");

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return {
    category,
    setCategory,
    categoryOptions,
    filtered,
    enProceso,
    proximos,
    scrollTo,
  };
}
