import React, { useContext } from "react";
import PropertyTypeCarousel from "../components/PropertyTypeCarousel";
import { propertyTypeData } from "@/app/[locale]/stays/constants/staysConstants";
import { StaysTranslationContext } from "../context/TranslationProvider";

const PropertyTypeContent = () => {
  const t = useContext(StaysTranslationContext);

  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("PropertyTypeH2")}</h2>
      <PropertyTypeCarousel carouselData={propertyTypeData.data} />
    </div>
  );
};

const data = [];
export default PropertyTypeContent;
