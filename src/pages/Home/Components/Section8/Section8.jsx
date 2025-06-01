import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer a wide range of services including website design and development, branding, digital marketing, SEO, and UI/UX consulting. Our goal is to help businesses establish a strong digital presence.",
  },
  {
    question: "How long does a project take?",
    answer:
      "The project timeline varies based on the complexity and scope. On average, small projects take 2–4 weeks, while larger or more complex ones may take 6–12 weeks. We'll provide a detailed timeline after understanding your requirements.",
  },
  {
    question: "Do you offer support?",
    answer:
      "Yes, we provide post-launch support to ensure your project runs smoothly. We also offer ongoing maintenance plans tailored to your needs.",
  },
  {
    question: "Can I see examples?",
    answer:
      "Absolutely! We have a portfolio section on our website where you can view examples of our previous work. Feel free to ask for case-specific samples too.",
  },
  {
    question: "What’s your process?",
    answer:
      "Our process typically involves discovery, planning, design, development, testing, and launch. We collaborate with you at every stage to ensure the outcome aligns with your vision.",
  },
  {
    question: "Do you have case studies?",
    answer:
      "Yes, we’ve documented several client journeys as case studies. These highlight the challenges, our approach, and the final results. Let us know if you'd like to view a specific one.",
  },
  {
    question: "Questions about quotes?",
    answer:
      "We provide transparent and customized quotes based on your project’s scope. If you have any questions about pricing, features, or packages, we're happy to walk you through the details.",
  },
  {
    question: "Questions post-launch?",
    answer:
      "We’re here even after your project goes live. From bug fixes to enhancements and performance monitoring, we ensure your product stays optimized and updated.",
  },
];

export default function Section8() {
  return (
    <section className="bg-white text-black py-16  md:px-section-lg px-section-sm">
      <div className="">
        <h2 className="text-2xl font-semibold mb-8">FAQs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 justify-items-center">
          {faqs.map((faq, i) => (
            <Accordion type="single" className='w-8/10' collapsible>
              <AccordionItem value={`item-${i}`} key={i}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
        <div className="text-center">
          <p className="mb-2">Still have questions?</p>
          <button className="border px-5 py-2 rounded">Contact</button>
        </div>
      </div>
    </section>
  );
}
