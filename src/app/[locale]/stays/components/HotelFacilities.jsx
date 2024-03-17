import React from "react";
import { Check } from "lucide-react";

const HotelFacilities = ({ label, Icon, facilities }) => {
  return (
    <div className="mt-4 gap-4">
      <div className="flex gap-2">
        <Icon />
        {label && <p className="text-base font-semibold">{label}</p>}
      </div>
      <div>
        {facilities &&
          facilities.map((facility) => (
            <div
              key={facility.label}
              className="my-1 flex items-center gap-2 text-sm"
            >
              {" "}
              <Check size={"16"} />
              <p>{facility.label}</p>{" "}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HotelFacilities;
