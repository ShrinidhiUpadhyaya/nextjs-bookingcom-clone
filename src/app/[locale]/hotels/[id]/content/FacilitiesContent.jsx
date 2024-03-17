import React, { forwardRef } from "react";
import DIconLabel from "@/components/DIconLabel";
import HotelFacilities from "@/app/[locale]/stays/components/HotelFacilities";
import { hotelPopularFacilities, hotelFacilities } from "../constants";

const FacilitiesContent = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <h2 className="text-2xl font-semibold">Facilities</h2>
      <h3 className="mt-4 text-lg font-semibold">Most popular facilities</h3>
      <div className="mt-2 flex gap-4">
        {hotelPopularFacilities.map((facility) => (
          <DIconLabel
            key={facility.label}
            label={facility.label}
            Icon={facility.icon}
          />
        ))}
      </div>

      <div className="sectionSpacing mt-4 grid break-inside-avoid-column grid-cols-3">
        {hotelFacilities.map((facility) => (
          <HotelFacilities
            key={facility.label}
            label={facility.label}
            Icon={facility.Icon}
            facilities={facility.facilities}
          />
        ))}
      </div>
    </div>
  );
});

export default FacilitiesContent;
