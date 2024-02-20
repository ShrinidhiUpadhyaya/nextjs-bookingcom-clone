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

const page = () => {
  return (
    <>
      <div className="flexHVCenter flex-col bg-[#003B95] py-16 pb-4">
        <div className="contentWidth flexCol">
          <h1 className="my-2 text-3xl font-bold text-[white] transition xl:text-5xl">
            Find your next accomodation
          </h1>
          <h3 className="my-2 text-lg text-white md:text-2xl">
            Find deals on hotels, vacation rentals and more...
          </h3>
        </div>

        <div className="contentWidth relative top-12 grid grid-rows-4 items-center gap-1 rounded-md bg-[#FFB700] p-1 md:grid md:grid-cols-4 md:grid-rows-1">
          <LocationPopover />
          <CheckInDatePopover />
          <PersonCountPopover />
          <Button className="px-8 py-6 text-lg">Search</Button>
        </div>
      </div>
      <div className="flexHCenter">
        <div className="flexCol contentWidth mt-12 gap-4">
          <div className="flex gap-2">
            <Checkbox className="h-5 w-5" />
            <Label className="text-sm font-normal">
              I'm looking for flights
            </Label>
          </div>

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
