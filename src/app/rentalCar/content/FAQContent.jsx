import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faq1, faq2 } from "../constants";

const FAQContent = () => {
  return (
    <div className="sectionSpacing flex w-full justify-center">
      <div className="contentWidth">
        <h3 className="secondaryTitle">Frequently asked questions</h3>
        <div className="mt-4 flex w-full gap-4">
          <Accordion
            type="single"
            collapsible
            className="w-full flex-1 rounded-md border border-[#e7e7e7]"
          >
            {faq1.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="p-2">
                <AccordionTrigger className="secondaryTitleText">
                  {faq.title}
                </AccordionTrigger>
                <AccordionContent className="text-sm">
                  {faq.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex-1">
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-md border border-[#e7e7e7]"
            >
              {faq2.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="p-2">
                  <AccordionTrigger className="secondaryTitleText">
                    {faq.title}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm">
                    {faq.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContent;
