"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import LocationPopover from "@/components/LocationPopover";
import CheckInDatePopover from "@/components/CheckInDatePopover";
import PersonCountPopover from "@/app/stays/components/PersonCountPopover";

const SearchContent = () => {
  return (
    <div className="h-12 w-full bg-[#003B95]">
      <div className="flex w-full justify-center">
        <div className="contentWidth">
          <div className="mt-4 items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
            <LocationPopover />
            <CheckInDatePopover />
            <PersonCountPopover />
            <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
