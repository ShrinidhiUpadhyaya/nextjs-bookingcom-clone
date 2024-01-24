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
      <div className="bg-[#003B95] py-16 pb-4 flex flex-col items-center justify-center">
        <div className="2xl:w-[55%] xl:w-[75%] lg:w-[90%] w-[95%] flex flex-col">
          <h1 className="text-3xl xl:text-5xl text-[white] font-bold my-2 transition">
            Find your next accomodation
          </h1>
          <h3 className="text-white text-lg md:text-2xl my-2">
            Find deals on hotels, vacation rentals and more...
          </h3>
        </div>

        <div className="2xl:w-[55%] xl:w-[75%] lg:w-[90%] w-[95%] grid grid-rows-4 md:grid md:grid-cols-4 md:grid-rows-1 items-center relative top-12 bg-[#FFB700] p-1 rounded-md gap-1">
          <LocationPopover />
          <CheckInDatePopover />
          <PersonCountPopover />
          <Button className="py-6 px-8 text-lg">Search</Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 mt-12 2xl:w-[55%] xl:w-[75%] lg:w-[90%] w-[95%]">
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
