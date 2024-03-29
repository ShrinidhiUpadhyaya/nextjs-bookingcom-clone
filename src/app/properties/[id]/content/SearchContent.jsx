"use client";
import React from "react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import LocationPopover from "@/components/LocationPopover";
import CheckInDatePopover from "@/components/CheckInDatePopover";
import PersonCountPopover from "@/components/PersonCountPopover";
import { useBookHotelStore } from "@/app/store/useBookHotelStore";

const SearchContent = () => {
  const bookingDate = useBookHotelStore((state) => state.bookingDate);
  const travellersCount = useBookHotelStore((state) => state.travellersCount);
  const updateBookingDate = useBookHotelStore(
    (state) => state.updateBookingDate,
  );
  const updateTravellersCount = useBookHotelStore(
    (state) => state.updateTravellersCount,
  );

  return (
    <div className="relative flex w-full justify-center">
      <div className="absolute top-0 h-12 w-full justify-center bg-[#003B95]"></div>
      <div className="contentWidth z-10 space-y-4">
        <div className="mt-4 items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
          <LocationPopover />
          <CheckInDatePopover
            defaultDate={bookingDate}
            onDateChange={updateBookingDate}
          />
          <PersonCountPopover
            defaultValues={travellersCount}
            onValuesChanged={updateTravellersCount}
          />
          <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
            Search
          </Button>
        </div>
        <Separator />
      </div>
    </div>
  );
};

export default SearchContent;
