import DOutlineButton from "@/components/DOutlineButton";
import React, { useState } from "react";
import {
  destinationsButtonOptions,
  destinationsData,
} from "@/lib/staysConstants";
import DColumnTexts from "../components/DColumnTexts";

const DestinationsContent = () => {
  const [destinationsFilter, setDestinationsFilter] = useState(
    destinationsButtonOptions,
  );
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
      <h2 className="text-xl font-bold">Destinations we love</h2>
      <div className="mt-4 flex gap-2">
        {destinationsFilter.map((option, index) => (
          <DOutlineButton
            label={option.label}
            selected={option.selected}
            onClick={() => handleDestinationsFilterChange(index)}
          />
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
