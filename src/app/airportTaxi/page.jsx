"use client";

import React, { useState } from "react";
import {
  taxiBenefits,
  taxiSearchFilter,
  howDoesItWork,
  taxiType,
  faqList,
} from "./constants";

import { Briefcase, Check, UserRound } from "lucide-react";
import FooterContent from "../stays/content/FooterContent";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SearchContent from "./content/SearchContent";
import BenefitsContent from "./content/BenefitsContent";
import TaxiTypeContent from "./content/TaxiTypeContent";
import FAQContent from "./content/FAQContent";

const page = () => {
  return (
    <div className="flexCol w-full items-center justify-center">
      <SearchContent />
      <BenefitsContent />
      <TaxiTypeContent />
      <FAQContent />
      <FooterContent />
    </div>
  );
};

export default page;
