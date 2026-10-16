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
import { SectionShell } from "@/components/shared/SectionShell";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/ui/badge";
import { MessageCircleQuestion } from "lucide-react";

export function FAQ() {
  const [openItem, setOpenItem] = useState<string | undefined>(faqs[0].id);

  return (
    <SectionShell tone="muted" aria-label="Preguntas frecuentes" className="overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid-light opacity-50" aria-hidden />
      <div className="pointer-events-none absolute -right-24 top-24 size-72 rounded-full bg-secondary/20 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-24 bottom-12 size-72 rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <Container className="max-w-3xl px-0">
        <SectionTitle
          eyebrow="FAQ"
          title="Preguntas"
          highlight="frecuentes"
          description="Resolvemos las dudas más comunes sobre la carrera, el ingreso, las becas y la vida universitaria."
        />

        <div className="mb-8 flex justify-center">
          <Badge variant="info">{faqs.length} preguntas frecuentes</Badge>
        </div>

        <Accordion
          type="single"
          collapsible
          value={openItem}
          onValueChange={setOpenItem}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="rounded-2xl border border-border bg-card px-5 shadow-card transition-all duration-300 hover:border-primary/30 hover:shadow-card-hover data-[state=open]:border-primary/40 data-[state=open]:bg-surface-soft dark:bg-card"
            >
              <AccordionTrigger className="group rounded-2xl px-1 py-5 text-left hover:no-underline focus-visible:ring-4 focus-visible:ring-primary/15 [&>svg]:text-primary">
                <span className="flex min-w-0 items-center gap-3.5">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-accent text-primary">
                    <MessageCircleQuestion className="size-4.5" aria-hidden />
                  </span>
                  <span className="font-display text-[15px] font-bold leading-snug text-foreground">
                    {faq.question}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-1 pb-5 pl-14 text-sm leading-relaxed text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </SectionShell>
  );
}
