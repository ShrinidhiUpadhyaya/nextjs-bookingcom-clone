import DOutlineButton from "@/components/DOutlineButton";
import React, { useState } from "react";
import { Heart } from "lucide-react";
import { tripPlannerButtonsData } from "@/lib/staysConstants";
import TripPlannerCarousel from "../components/TripPlannerCarousel";
import { Button } from "@/components/ui/button";

const TripPlannerContent = () => {
  const [optionsButtonState, setOptionsButtonState] = useState(
    tripPlannerButtonsData,
  );
  const handleButtonSelect = (index) => {
    const temp = optionsButtonState.map((options, tempIndex) => ({
      ...options,
      selected: index === tempIndex,
    }));
    setOptionsButtonState(temp);
  };
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">Quick and easy planner</h2>
      <p className="tertiaryText">
        Pick a vibe and explore the top destinations in Germany
      </p>

      <div className="my-2 flex gap-4">
        {optionsButtonState.map((options, index) => (
          <DOutlineButton
            key={options.label}
            label={options.label}
            Icon={options.Icon}
            selected={options.selected}
            onClick={() => handleButtonSelect(index)}
          />
        ))}
      </div>

      <TripPlannerCarousel className="mt-4 h-44" />
    </div>
  );
};

export default TripPlannerContent;
