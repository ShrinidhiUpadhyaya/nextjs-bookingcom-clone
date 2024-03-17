import React from "react";
import { PopularFlightsContent } from "./content/PopularFlightsContent";
import TrendingCitiesContent from "./content/TrendingCitiesContent";
import WorldwideContent from "./content/WorldwideContent";
import FooterContent from "./content/FooterContent";
import FAQContent from "./content/FAQContent";
import SearchContent from "./content/SearchContent";

const page = () => {
  return (
    <div className="flexCol w-full items-center justify-center">
      <SearchContent />
      <PopularFlightsContent />
      <TrendingCitiesContent />
      <WorldwideContent />
      <FAQContent />

      <div className="mt-2 flex w-full items-center justify-center bg-[#F5F5F5] pb-20">
        <FooterContent />
      </div>
    </div>
  );
};

export default page;
