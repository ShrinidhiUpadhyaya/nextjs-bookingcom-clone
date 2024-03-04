import React from "react";

import FooterContent from "../stays/content/FooterContent";
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
