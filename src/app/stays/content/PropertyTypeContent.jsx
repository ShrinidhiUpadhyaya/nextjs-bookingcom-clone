import React from "react";
import PropertyTypeCarousel from "../components/PropertyTypeCarousel";

const PropertyTypeContent = ({data}) => {
  return (
    <div className="flexCol gap-1">
      <h2 className="font-bold text-xl">Browse by property type</h2>
      <PropertyTypeCarousel carouselData={data}/>
    </div>
  );
};

const data = [];
export default PropertyTypeContent;
