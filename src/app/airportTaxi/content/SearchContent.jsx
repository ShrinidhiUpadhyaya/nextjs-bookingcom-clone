"use client";

import React, { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import LocationPopover from "@/app/stays/components/LocationPopover";
import PickUpPopover from "../components/PickUpPopover";
import PassengersCountPopover from "../components/PassengersCountPopover";

import { taxiSearchFilter } from "../constants";

const SearchContent = () => {
  const [currentSeachFilter, setCurrentSearchFilter] = useState(0);

  return (
    <div className="sectionSpacing flex w-full items-center justify-center bg-[#F5F5F5] pb-20 pt-16">
      <div className="contentWidth">
        <h2 className="text-3xl font-semibold">Book your airport taxi</h2>
        <p className="assistTitle">
          Easy transfer to and from your accomodation{" "}
        </p>

        <div className="mt-2 flex gap-4">
          <RadioGroup className="flex" defaultValue={currentSeachFilter}>
            {taxiSearchFilter.map((filter, index) => (
              <div key={filter.label} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={filter.label}
                  id="r1"
                  className="h-5 w-5 border-2"
                />
                <Label htmlFor="r1" className="tertiaryText">
                  {filter.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        <div className="mt-4 w-full items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
          <LocationPopover />
          <LocationPopover />
          <PickUpPopover className="h-full max-w-52" label={"Date"} />
          <PassengersCountPopover className="max-w-20" label="1" />
          <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
