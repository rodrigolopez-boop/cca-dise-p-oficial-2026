import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./Hero";
import { Catalogo } from "./Catalogo";
import { Cronograma } from "./Cronograma";
import { Inscripcion } from "./Inscripcion";
import { Contacto } from "./Contacto";
import { Footer } from "./Footer";
import { useCursosOferta } from "./useCursosOferta";

export function CursosOferta() {
  const {
    category,
    setCategory,
    categoryOptions,
    filtered,
    enProceso,
    proximos,
    scrollTo,
  } = useCursosOferta();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero totalCursos={filtered.length >= 0 ? (category === "todos" ? 0 : 0) : 0} onVerCatalogo={() => scrollTo("catalogo")} />
      <Catalogo
        id="catalogo"
        category={category}
        setCategory={setCategory}
        categoryOptions={categoryOptions}
        filtered={filtered}
      />
      <Cronograma id="cronograma" enProceso={enProceso} proximos={proximos} />
      <Inscripcion />
      <Contacto />
      <Footer />
    </div>
  );
}
