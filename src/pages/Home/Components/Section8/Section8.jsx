import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Section8({content}) {
  return (
    <section className="bg-white text-black py-16  md:px-section-lg px-section-sm">
      <div className="">
        <h2 className="text-2xl font-semibold mb-8">{content.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 justify-items-center">
          {content.faqs.map((faq, i) => (
            <Accordion type="single" className='w-9/10 md:8/10' collapsible>
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        {/* <div className="text-center">
          <p className="mb-2">{content.description}</p>
          <button className="border-2 border-black/50 px-5 py-2 rounded">{content.button}</button>
        </div> */}
      </div>
    </section>
  );
}
