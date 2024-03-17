import React from "react";

const HotelSurroundings = ({ Icon, label, placesList }) => {
  return (
    <div className="space-y-4">
      <p className="secondaryTitle">{label}</p>
      <div className="space-y-4">
        {placesList.map((place) => (
          <p
            key={place.name}
            className="flex items-center justify-between gap-2 text-sm font-light"
          >
            <span>{place.name}</span>
            <span>{place.distance}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default HotelSurroundings;
