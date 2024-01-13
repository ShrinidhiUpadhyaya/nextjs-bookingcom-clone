import React from "react";
import DPopover from "./DPopover";
import { BedDouble } from "lucide-react";

const LocationPopover = () => {
  return (
    <DPopover
      className="flex-1"
      label="Where are you going?"
      Icon={BedDouble}
    >
      {" "}
    </DPopover>
  );
};

export default LocationPopover;
