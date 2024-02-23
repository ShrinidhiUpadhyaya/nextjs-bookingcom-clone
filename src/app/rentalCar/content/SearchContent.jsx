import CheckInDatePopover from "@/app/stays/components/CheckInDatePopover";
import LocationPopover from "@/app/stays/components/LocationPopover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import PickUpDatePopover from "../components/PickUpDatePopover";

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