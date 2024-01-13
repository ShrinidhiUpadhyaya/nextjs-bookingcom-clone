import DOutlineButton from "@/components/DOutlineButton";
import React, { useState } from "react";
import {
  destinationsButtonOptions,
  destinationsData,
} from "@/lib/staysConstants";
import DColumnTexts from "../components/DColumnTexts";

const DestinationsContent = () => {
  const [destinationsFilter, setDestinationsFilter] =
    useState(destinationsButtonOptions);
  const handleDestinationsFilterChange = (index) => {
    console.log(index);
    const temp = destinationsFilter.map((data, tempIndex) => ({
      ...data,
      selected: index === tempIndex,
    }));
    setDestinationsFilter(temp);
  };
  return (
    <div>
      <h2 className="font-bold text-xl">Stay at our top unique properties</h2>
      <div className="mt-4 flex gap-2">
        {destinationsFilter.map((option, index) => (
          <DOutlineButton
            label={option.label}
            selected={option.selected}
            onClick={() => handleDestinationsFilterChange(index)}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-5 gap-y-4">
        {destinationsData.map((data) => (
          <DColumnTexts
            label={data.label}
            description={data.description + " properties"}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsContent;