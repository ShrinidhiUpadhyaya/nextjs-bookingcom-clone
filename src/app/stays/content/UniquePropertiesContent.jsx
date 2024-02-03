import React from "react";
import UniquePropertiesCarousel from "../components/UniquePropertiesCarousel";

const UniquePropertiesContent = () => {
  return (
    <div className="flexCol gap-1">
      <h2 className="font-bold text-xl">Stay at our top unique properties</h2>
      <p className="text-base">
        From castles and villas to boats and igloos, we have it all
      </p>
      <UniquePropertiesCarousel />
    </div>
  );
};

export default UniquePropertiesContent;
