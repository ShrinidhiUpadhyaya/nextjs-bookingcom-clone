import React from "react";
import UniquePropertiesCarousel from "../components/UniquePropertiesCarousel";

const UniquePropertiesContent = () => {
  return (
    <div className="flexCol sectionSpacing gap-1">
      <h2 className="text-xl font-bold">Stay at our top unique properties</h2>
      <p className="tertiaryText">
        From castles and villas to boats and igloos, we have it all
      </p>
      <UniquePropertiesCarousel />
    </div>
  );
};

export default UniquePropertiesContent;
