"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqList } from "../constants";

const FAQContent = () => {
  return (
    <div className="contentWidth sectionSpacing flex">
      <div className="w-[40%] space-y-2 bg-[#F5F5F5] p-4">
        <h2 className="rounded-md  text-2xl font-semibold">
          Find out more about our airport taxi service
        </h2>
        <p>See more FAQs on our help page</p>
      </div>
      <div className="flex-1">
        <Accordion
          type="single"
          collapsible
          className="w-full flex-1 rounded-md border border-[#e7e7e7]"
        >
          {faqList.map((faq) => (
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
  );
};

export default FAQContent;
