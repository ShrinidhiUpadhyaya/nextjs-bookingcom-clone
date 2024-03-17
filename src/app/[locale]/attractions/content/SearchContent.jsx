import React from "react";
import { Button } from "@/components/ui/button";
import DatesPopover from "../components/DatesPopover";
import LocationPopover from "@/components/LocationPopover";

const SearchContent = () => {
  return (
    <div className="contentWidth -mt-8 mb-10 flex flex-col items-center justify-center">
      <div className="w-full items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
        <LocationPopover />
        <DatesPopover />
        <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchContent;
