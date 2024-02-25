"use client";

import React from "react";
import FooterContent from "../flights/content/FooterContent";
import { coveredData } from "./constants";
import { Separator } from "@/components/ui/separator";
import NearbyDestinationContent from "./NearbyDestinationContent";
import OffersContent from "../rentalCar/content/OffersContent";
import MoreDestinationsContent from "./MoreDestinationsContent";
import LocationPopover from "@/app/stays/components/LocationPopover";
import PickUpPopover from "../airportTaxi/components/PickUpPopover";
import { Button } from "@/components/ui/button";
import DatesPopover from "./DatesPopover";

const page = () => {
  return (
    <div className="flexCol items-center justify-center">
      <div className="flexHVCenter w-full flex-col bg-[#003B95] pb-20 pt-16">
        <div className="contentWidth relative">
          {/* <div className="w-[75%]"> */}
          <h1 className="text-3xl font-semibold text-[white] transition xl:text-5xl">
            Attractions, activities and experiences
          </h1>
          <h3 className="mt-2 text-lg text-white md:text-2xl">
            Discover new attractions and experiences to match your interests and
            travel style
          </h3>

          {/* </div> */}
        </div>
      </div>

      <div className="contentWidth -mt-8 mb-10 flex flex-col items-center justify-center">
        <div className="w-full items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
          <LocationPopover />
          <DatesPopover />
          <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
            Search
          </Button>
        </div>
      </div>

      <NearbyDestinationContent />
      <OffersContent />

      <div className="contentWidth sectionSpacing">
        <Separator />
        <div className="my-8">
          <h3 className="secondaryTitle">We've got you covered</h3>
          <div className="mt-4 flex gap-4 text-sm">
            {coveredData.map((data) => (
              <div className="flex gap-2">
                <div className="w-[20%] text-[#008234]">{data.icon}</div>
                <div>
                  <p className="secondaryTitleText">{data.title}</p>
                  <p className="tertiaryText">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />
      </div>

      <MoreDestinationsContent />

      <div className="flex w-full justify-center bg-[#F5F5F5] pb-16">
        <FooterContent />
      </div>
    </div>
  );
};

export default page;
