"use client";

import React from "react";
import { Button } from "@/components/ui/button";

import ".././globals.css";
import LocationPopover from "./components/LocationPopover";
import CheckInDatePopover from "./components/CheckInDatePopover";
import PersonCountPopover from "./components/PersonCountPopover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import OffersContent from "./content/OffersContent";
import ExploreContent from "./content/ExploreContent";
import PropertyTypeCarousel from "./components/PropertyTypeCarousel";
import PropertyTypeContent from "./content/PropertyTypeContent";
import TrendingContent from "./content/TrendingContent";

import {
  exploreData,
  propertyTypeData,
  trendingDestinationsData,
} from "@/lib/staysConstants";
import TripPlannerContent from "./content/TripPlannerContent";
import UniquePropertiesContent from "./content/UniquePropertiesContent";
import DestinationsContent from "./content/DestinationsContent";
import FooterContent from "./content/FooterContent";
import DCalendarPopover from "@/components/DCalendarPopover";

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

      <div className="flexCol -mt-8 mb-10 items-center justify-center">
        <div className="contentWidth items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
          <LocationPopover />
          <DCalendarPopover />
          <PersonCountPopover />
          <Button className="w-full py-6 text-lg hover:bg-[#006CE4]/95 md:w-20 md:text-sm lg:w-24 lg:text-lg">
            Search
          </Button>
        </div>
        <div className="contentWidth mt-4 flex gap-2">
          <Checkbox className="h-5 w-5" />
          <Label className="tertiaryText">I'm looking for flights</Label>
        </div>
      </div>

      <div className="flexHCenter">
        <div className="contentWidth">
          <OffersContent />
          <ExploreContent title={exploreData.title} data={exploreData.data} />
          <PropertyTypeContent data={propertyTypeData.data} />
          <TrendingContent
            topData={trendingDestinationsData.topData}
            bottomData={trendingDestinationsData.bottomData}
          />
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
