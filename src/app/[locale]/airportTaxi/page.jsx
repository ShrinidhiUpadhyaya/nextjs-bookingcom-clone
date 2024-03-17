"use client";

import React from "react";

import FooterContent from "../stays/content/FooterContent";
import SearchContent from "./content/SearchContent";
import BenefitsContent from "./content/BenefitsContent";
import TaxiTypeContent from "./content/TaxiTypeContent";
import FAQContent from "./content/FAQContent";
import { useTranslation } from "@/app/i18n/client";

const page = ({ params: { locale } }) => {
  const { t } = useTranslation(locale, "stays");
  return (
    <div className="flexCol w-full items-center justify-center">
      <SearchContent />
      <BenefitsContent />
      <TaxiTypeContent />
      <FAQContent />
      <FooterContent t={t} />
    </div>
  );
};

export default page;
