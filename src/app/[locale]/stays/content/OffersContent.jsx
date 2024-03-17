import React, { useContext } from "react";
import OffersCarousel from "../components/OffersCarousel";
import { StaysTranslationContext } from "../context/TranslationProvider";

const OffersContent = () => {
  const t = useContext(StaysTranslationContext);

  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("OffersH2")}</h2>
      <p className="tertiaryText">{t("OffersSubText")}</p>
      <OffersCarousel className="mt-2" />
    </div>
  );
};

export default OffersContent;
