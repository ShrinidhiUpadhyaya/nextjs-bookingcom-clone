import React from "react";
import ExploreContentCarousel from "../components/ExploreContentCarousel";

const ExploreContent = () => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-xl">Explore Germany</h2>
      <p className="text-normal text-base">These popular destinations have a lot to offer</p>
      <ExploreContentCarousel />
    </div>
  );
};

export default ExploreContent;
