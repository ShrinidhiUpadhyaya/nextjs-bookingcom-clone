import React from "react";
import { Button } from "@/components/ui/button";
import PickUpDatePopover from "../components/PickUpDatePopover";
import LocationPopover from "@/components/LocationPopover";
import { cn } from "@/lib/utils";

const SearchContent = ({ className }) => {
  return (
    <div
      className={cn(
        "flex h-14 items-center gap-1 rounded-md bg-[#FFB700] p-1 py-1 md:flex",
        className,
      )}
    >
      <LocationPopover className="h-full" />
      <PickUpDatePopover className="h-full " />
      <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
        Search
      </Button>
    </div>
  );
};

export default SearchContent;
