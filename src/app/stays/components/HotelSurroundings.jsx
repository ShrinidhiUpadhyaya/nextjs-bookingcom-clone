import React from "react";

const HotelSurroundings = ({ Icon, label, placesList }) => {
  return (
    <div className="flexCol gap-4">
      <p className="secondaryTitle">What's nearby</p>
      <div className="flexCol gap-4">
        {placesList.map((place) => (
          <p className="flex items-center justify-between gap-2 text-sm font-light">
            <span>{place.name}</span>
            <span>{place.distance}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default HotelSurroundings;
