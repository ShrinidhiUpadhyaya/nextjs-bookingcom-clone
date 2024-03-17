import React, { useContext, useState } from "react";

import DOutlineButton from "@/components/DOutlineButton";
import DColumnTexts from "@/components/DColumnTexts";

import {
  destinationsButtonOptions,
  destinationsData,
} from "@/app/[locale]/stays/constants/staysConstants";
import { StaysTranslationContext } from "../context/TranslationProvider";

const DestinationsContent = () => {
  const [currentFilterIndex, setCurrentFilterIndex] = useState(0);
  const t = useContext(StaysTranslationContext);

  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("DestinationsH2")}</h2>
      <div className="mt-1 flex gap-2">
        {destinationsButtonOptions.map((option, index) => (
          <DOutlineButton
            key={option.label}
            label={t(`${option.label}`)}
            selected={index === currentFilterIndex}
            onClick={() => setCurrentFilterIndex(index)}
          />
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {destinationsData.map((data) => (
          <DColumnTexts
            key={data.label}
            label={data.label}
            description={data.description + t("Properties")}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationsContent;
