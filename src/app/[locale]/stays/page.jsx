"use client";

import React from "react";

import "../../globals.css";

import OffersContent from "./content/OffersContent";
import ExploreContent from "./content/ExploreContent";
import PropertyTypeContent from "./content/PropertyTypeContent";
import TrendingContent from "./content/TrendingContent";
import TripPlannerContent from "./content/TripPlannerContent";
import UniquePropertiesContent from "./content/UniquePropertiesContent";
import DestinationsContent from "./content/DestinationsContent";
import FooterContent from "./content/FooterContent";

import SearchContent from "./content/SearchContent";

const page = () => {
  return (
    <>
      <div className="flexHVCenter w-full bg-[#003B95] pb-20 pt-16">
        <div className="contentWidth">
          <h1 className="text-3xl font-semibold text-[white] transition xl:text-5xl">
            Find your next accomodation
          </h1>
          <h3 className="mt-2 text-lg text-white md:text-2xl">
            Find deals on hotels, vacation rentals and more...
          </h3>
        </div>
      </div>

      <SearchContent />

      <div className="flexHCenter">
        <div className="contentWidth">
          <OffersContent />
          <ExploreContent />
          <PropertyTypeContent />
          <TrendingContent />
          <TripPlannerContent />
          <UniquePropertiesContent />
          <DestinationsContent />
        </div>
      </div>
      <FooterContent />
    </>
  );
};

export default page;
