import React, { useContext, useState } from "react";
import DOutlineButton from "@/components/DOutlineButton";
import TripPlannerCarousel from "../components/TripPlannerCarousel";
import { tripPlannerButtonsData } from "@/app/[locale]/stays/constants/staysConstants";
import { StaysTranslationContext } from "../context/TranslationProvider";

const TripPlannerContent = () => {
  const t = useContext(StaysTranslationContext);

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleButtonSelect = (index) => {
    const temp = optionsButtonState.map((options, tempIndex) => ({
      ...options,
      selected: index === tempIndex,
    }));
    setOptionsButtonState(temp);
  };
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("PlannerH2")}</h2>
      <p className="tertiaryText">{t("PlannerSubText")}</p>

      <div className="my-2 flex gap-4">
        {tripPlannerButtonsData.map((options, index) => (
          <DOutlineButton
            key={options.label}
            label={t(`${options.label}`)}
            Icon={options.Icon}
            selected={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      <TripPlannerCarousel className="mt-4 h-44" />
    </div>
  );
};

export default TripPlannerContent;
