import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/layout/Hero";
import { Footer } from "@/components/layout/Footer";
import { QuickInfo } from "@/components/sections/QuickInfo";
import { WhyStudy } from "@/components/sections/WhyStudy";
import { StudyPlan } from "@/components/sections/StudyPlan";
import { JobMarket } from "@/components/sections/JobMarket";
import { Calls } from "@/components/sections/Calls";
import { Events } from "@/components/sections/Events";
import { AcademicCalendar } from "@/components/sections/AcademicCalendar";
import { News } from "@/components/sections/News";
import { Promotions } from "@/components/sections/Promotions";
import { Teachers } from "@/components/sections/Teachers";
import { Students } from "@/components/sections/Students";
import { HonorRoll } from "@/components/sections/HonorRoll";
import { Scholarships } from "@/components/sections/Scholarships";
import { Graduation } from "@/components/sections/Graduation";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
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
        <WhyStudy />
        <StudyPlan />
        <JobMarket />
        <Calls />
        <Events />
        <AcademicCalendar />
        <News />
        <Promotions />
        <Teachers />
        <Students />
        <HonorRoll />
        <Scholarships />
        <Graduation />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
