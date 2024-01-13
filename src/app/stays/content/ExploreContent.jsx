import React from "react";
import ExploreContentCarousel from "../components/ExploreContentCarousel";

const ExploreContent = ({title, data}) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-xl">{title}</h2>
      <p className="text-base">These popular destinations have a lot to offer</p>
      <ExploreContentCarousel carouselData={data}/>
    </div>
  );
};

export default ExploreContent;
