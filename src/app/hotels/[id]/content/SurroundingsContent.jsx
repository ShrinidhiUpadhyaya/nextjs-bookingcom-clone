import React from "react";

import HotelSurroundings from "@/app/stays/components/HotelSurroundings";

import {
  nearByPlaces,
  topAttractions,
  restaurentCafes,
  naturalBeauty,
  closestAirports,
} from "../constants";

const SurroundingsContent = () => {
  return (
    <div>
      <div className="sectionSpacing">
        <h2 className="primaryTitle mb-4">Hotel Surroundings</h2>
        <div className="grid grid-cols-3 gap-4">
          <HotelSurroundings
            label={nearByPlaces.label}
            placesList={nearByPlaces.places}
          />
          <HotelSurroundings
            label={topAttractions.label}
            placesList={topAttractions.places}
          />
          <HotelSurroundings
            label={restaurentCafes.label}
            placesList={restaurentCafes.places}
          />
          <HotelSurroundings
            label={naturalBeauty.label}
            placesList={naturalBeauty.places}
          />
          <HotelSurroundings
            label={closestAirports.label}
            placesList={closestAirports.places}
          />
        </div>
      </div>
    </div>
  );
};

export default SurroundingsContent;
