import React from "react";

import AdditionalUpgrades from "./content/AdditionalUpgrades";
import SpecialRequests from "./content/SpecialRequests";
import ArrivalTime from "./content/ArrivalTime";
import LoginSignUp from "./content/LoginSignUp";
import OffersContent from "./content/OffersContent";
import BookingDetails from "./content/BookingDetails";
import { ChevronLeft } from "lucide-react";

const page = () => {
  return (
    <div className="flex justify-center">
      <div className="contentWidth rounded-md">
        <p className="mt-8 flex items-center gap-4 text-3xl font-semibold">
          <ChevronLeft />
          Your booking details
        </p>

        <BookingDetails />

        <AdditionalUpgrades />

        <SpecialRequests />
        <ArrivalTime />

        <div className="sectionSpacing flex gap-8">
          <OffersContent />
          <LoginSignUp />
        </div>
      </div>
    </div>
  );
};

export default page;
