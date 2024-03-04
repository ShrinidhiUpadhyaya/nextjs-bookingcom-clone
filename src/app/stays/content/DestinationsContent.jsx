import React, { useState } from "react";

import DOutlineButton from "@/components/DOutlineButton";
import DColumnTexts from "@/components/DColumnTexts";

import {
  destinationsButtonOptions,
  destinationsData,
} from "@/app/stays/constants/staysConstants";

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
    <div className="sectionSpacing">
      <h2 className="primaryTitle">Destinations we love</h2>
      <div className="mt-1 flex gap-2">
        {destinationsFilter.map((option, index) => (
          <DOutlineButton
            label={option.label}
            selected={option.selected}
            onClick={() => handleDestinationsFilterChange(index)}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
