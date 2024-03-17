import React from "react";
import OffersCarousel from "../components/OffersCarousel";

const OffersContent = () => {
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">Offers</h2>
      <p className="tertiaryText">
        Promotions, deals, and special offers for you
      </p>
      <OffersCarousel className="mt-2" />
    </div>
  );
};

export default OffersContent;
