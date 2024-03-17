import React, { useContext } from "react";
import UniquePropertiesCarousel from "../components/UniquePropertiesCarousel";
import { StaysTranslationContext } from "../context/TranslationProvider";

const UniquePropertiesContent = () => {
  const t = useContext(StaysTranslationContext);

  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("UniquePropertiesH2")}</h2>
      <p className="tertiaryText">{t("UniqurePropertiesSubText")}</p>
      <UniquePropertiesCarousel className="mt-2" />
    </div>
  );
};

export default UniquePropertiesContent;
