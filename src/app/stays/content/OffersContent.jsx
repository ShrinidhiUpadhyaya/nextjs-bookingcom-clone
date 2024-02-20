import React from "react";
import OffersCarousel from "../components/OffersCarousel";

const OffersContent = () => {
  return (
    <div className="flexCol gap-1">
      <h2 className="text-xl font-bold">Offers</h2>
      <p className="text-base">Promotions, deals, and special offers for you</p>
      <OffersCarousel />
    </div>
  );
};

export default OffersContent;
