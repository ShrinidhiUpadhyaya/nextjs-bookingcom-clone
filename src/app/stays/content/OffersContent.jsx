import React from "react";
import OffersCarousel from "../components/OffersCarousel";

const OffersContent = () => {
  return (
    <div className="flexCol sectionSpacing gap-1">
      <h2 className="text-xl font-bold">Offers</h2>
      <p className="tertiaryText">
        Promotions, deals, and special offers for you
      </p>
      <OffersCarousel />
    </div>
  );
};

export default OffersContent;
