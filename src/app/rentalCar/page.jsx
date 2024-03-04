import React from "react";
import FooterContent from "../stays/content/FooterContent";
import SearchContent from "./content/SearchContent";
import PopularBrandsContent from "./content/PopularBrandsContent";
import OffersContent from "./content/OffersContent";
import PopularDestinationContent from "./content/PopularDestinationContent";
import FAQContent from "./content/FAQContent";

const page = () => {
  return (
    <>
      <div className="flexHVCenter w-full bg-[#003B95] pb-20 pt-16">
        <div className="contentWidth">
          <h1 className="text-3xl font-semibold text-[white] transition xl:text-5xl">
            Car hire for any kind of trip
          </h1>
          <h3 className="mt-2 text-lg text-white md:text-2xl">
            Great deals at great prices, from the biggest car hire companies
          </h3>
        </div>
      </div>

      <div className="sectionSpacing -mt-8 flex w-full justify-center">
        <SearchContent className="contentWidth" />
      </div>

      <div className="flexCol w-full items-center">
        <PopularBrandsContent />
        <OffersContent />
        <PopularDestinationContent />
        <FAQContent />
        <FooterContent />
      </div>
    </>
  );
};

export default page;
