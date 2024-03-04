import React from "react";
import { PopularFlightsContent } from "./content/PopularFlightsContent";
import TrendingCitiesContent from "./content/TrendingCitiesContent";
import WorldwideContent from "./content/WorldwideContent";
import FooterContent from "./content/FooterContent";
import FAQContent from "./content/FAQContent";
import SearchContent from "./content/SearchContent";

const page = () => {
  return (
    <>
      <div className="flexCol w-full items-center bg-[#F5F5F5] pb-14 pt-16">
        <SearchContent />
      </div>

      <div className="flexCol w-full items-center gap-4">
        <PopularFlightsContent />
        <TrendingCitiesContent />
        <WorldwideContent />
        <FAQContent />
      </div>

      <div className="flexCol mt-2 w-full items-center bg-[#F5F5F5] pb-20">
        <FooterContent />
      </div>
    </>
  );
};

export default page;
