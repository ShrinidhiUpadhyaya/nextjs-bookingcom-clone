import React from "react";
import UniquePropertiesCarousel from "../components/UniquePropertiesCarousel";

const UniquePropertiesContent = () => {
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">Stay at our top unique properties</h2>
      <p className="tertiaryText">
        From castles and villas to boats and igloos, we have it all
      </p>
      <UniquePropertiesCarousel className="mt-2" />
    </div>
  );
};

export default UniquePropertiesContent;
