"use client";

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

/**
 * Portal institucional de la Licenciatura en Diseño Gráfico y Animación.
 * Las secciones se alimentan de datos mock (src/lib/mockData.ts) listos
 * para sustituirse por una API o CMS manteniendo las mismas interfaces.
 */
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
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
