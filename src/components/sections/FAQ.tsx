"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/mockData";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { MessageCircleQuestion } from "lucide-react";

/**
 * Preguntas frecuentes mediante acordeones accesibles (shadcn/ui Accordion).
 * Datos: GET /api/faq.
 */
export function FAQ() {
  const [openItem, setOpenItem] = useState<string | undefined>(faqs[0].id);

  return (
    <section className="relative bg-slate-50 py-20 md:py-28" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Preguntas"
          highlight="frecuentes"
          description="Resolvemos las dudas más comunes sobre la carrera, el ingreso, las becas y la vida universitaria."
        />

        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-2xl border border-slate-100 bg-white px-5 shadow-soft transition-all duration-300 data-[state=open]:border-violet-200 data-[state=open]:shadow-soft-lg hover:border-violet-200"
            >
              <AccordionTrigger className="py-4 text-left hover:no-underline cursor-pointer">
                <span className="flex items-center gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-100 to-fuchsia-100 text-violet-600">
                    <MessageCircleQuestion className="h-4.5 w-4.5" aria-hidden />
                  </span>
                  <span className="font-display text-[15px] font-bold text-ink-900">
                    {faq.question}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 pl-12.5 text-sm leading-relaxed text-slate-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
