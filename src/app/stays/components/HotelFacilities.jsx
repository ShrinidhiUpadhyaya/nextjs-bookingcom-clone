import React from "react";
import { Check } from "lucide-react";
const HotelFacilities = ({ label, Icon, facilities }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <Icon />
        {label && <p>{label}</p>}
      </div>
      <div>
      {facilities &&
        facilities.map((facility) => (
          <div className="flex gap-2 text-sm items-center my-1">
            {" "}
            <Check size={'16'}/>
            <p>{facility.label}</p>{" "}
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default HotelFacilities;
