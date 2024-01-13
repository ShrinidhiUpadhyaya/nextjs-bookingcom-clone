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

const page = () => {
  return (
    <>
      <div className="bg-[#003B95] py-16 pb-4 flex flex-col items-center justify-center">
        <div className="w-[60%] flex flex-col">
          <h1 className="text-5xl text-[white] font-bold my-2">
            Find your next accomodation
          </h1>
          <h3 className="text-white text-2xl my-2">
            Find deals on hotels, vacation rentals and more...
          </h3>
        </div>

        <div className="w-[60%] flex items-center relative top-12 bg-[#FFB700] p-1 rounded-md gap-1">
          <LocationPopover />
          <CheckInDatePopover />
          <PersonCountPopover />
          <Button className="py-6 px-8 text-lg flex-0">Search</Button>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-4 mt-12 w-[60%]">
          <div className="flex gap-2">
            <Checkbox className="h-5 w-5" />
            <Label className="text-sm font-normal">
              I'm looking for flights
            </Label>
          </div>

          <OffersContent />
          <ExploreContent />
        </div>
      </div>
    </>
  );
};

export default page;
