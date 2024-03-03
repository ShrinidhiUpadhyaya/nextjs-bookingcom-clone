import React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faq } from "../constants";

const FAQContent = () => {
  return (
    <div className="sectionSpacing">
      <div className="mt-4 flex w-full">
        <div className="w-64 bg-[#EBF3FF] px-8 py-8 text-3xl font-semibold">
          FAQs about CAB20
        </div>
        <Accordion
          type="single"
          collapsible
          className="w-full flex-1 rounded-md border border-[#e7e7e7]"
        >
          {faq.map((currentFaq) => (
            <AccordionItem
              key={currentFaq.id}
              value={currentFaq.id}
              className="p-2"
            >
              <AccordionTrigger className="secondaryTitleText">
                {currentFaq.title}
              </AccordionTrigger>
              <AccordionContent className="text-sm">
                {currentFaq.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default FAQContent;
