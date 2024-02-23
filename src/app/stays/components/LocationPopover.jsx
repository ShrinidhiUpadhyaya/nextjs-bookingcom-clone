import React from "react";
import DPopover from "./DPopover";
import { BedDouble, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import DPopoverInput from "./DPopoverInput";

const popularNearbyDestinations = [
  {
    name: "Baltic Sea",
    country: "Germany",
  },
  {
    name: "Allgäu",
    country: "Germany",
  },
  {
    name: "Lake Constance",
    country: "Germany",
  },
  {
    name: "Bavaria",
    country: "Germany",
  },
  {
    name: "Hamburg",
    country: "Germany",
  },
];

async function getPlace(value) {
  console.log("Place search", value);
}

const LocationPopover = ({ className }) => {
  return (
    <DPopoverInput
      className={cn("h-full flex-1", className)}
      label="Where are you going?"
      Icon={BedDouble}
      onInputChange={(e) => getPlace(e.target.value)}
    >
      {/* <div className="w-96 space-y-4">
        <p className="secondaryTitleText pl-4 pt-4">
          Popular neaby destinations
        </p>
        <div className="space-y-2">
          {popularNearbyDestinations.map((destination) => (
            <div
              className="pt-2 hover:bg-[#F2F2F2]"
              onClick={() => {
                getPlace();
              }}
            >
              <div className="flex items-center gap-2 px-2 ">
                <MapPin className="opacity-75" />
                <p className="secondaryTitleText block">
                  {destination.name}
                  <p className="tertiaryText">{destination.country}</p>
                </p>
              </div>
              <Separator className="!mt-2" />
            </div>
          ))}
        </div>
      </div> */}
    </DPopoverInput>
  );
};

export default LocationPopover;
