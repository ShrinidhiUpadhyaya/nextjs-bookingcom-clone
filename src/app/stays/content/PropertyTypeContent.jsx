import React from "react";
import PropertyTypeCarousel from "../components/PropertyTypeCarousel";
import { propertyTypeData } from "@/app/stays/constants/staysConstants";

const PropertyTypeContent = () => {
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">Browse by property type</h2>
      <PropertyTypeCarousel carouselData={propertyTypeData.data} />
    </div>
  );
};

const data = [];
export default PropertyTypeContent;
