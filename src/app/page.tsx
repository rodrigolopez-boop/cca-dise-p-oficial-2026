import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { QuickInfo } from "@/components/sections/QuickInfo";
import { Calls } from "@/components/sections/Calls";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <a
        href="#contenido-principal"
        className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-xl bg-secondary px-4 py-2 text-sm font-bold text-primary shadow-lg transition-transform focus:translate-y-0"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido-principal" className="flex-1">
        <Hero />
        <QuickInfo />
        <Calls />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
