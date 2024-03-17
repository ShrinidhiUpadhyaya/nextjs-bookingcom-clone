"use client";

import React from "react";

import AdditionalUpgrades from "./content/AdditionalUpgrades";
import SpecialRequests from "./content/SpecialRequests";
import ArrivalTime from "./content/ArrivalTime";
import LoginSignUp from "./content/LoginSignUp";
import OffersContent from "./content/OffersContent";
import BookingDetails from "./content/BookingDetails";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center">
      <div className="contentWidth rounded-md">
        <div className="mt-4 flex items-center gap-4">
          <div className="applyHover flex items-center rounded-full p-2">
            <ChevronLeft onClick={() => router.back()} className="h-8 w-8" />
          </div>

          <p className="flex items-center text-3xl font-semibold">
            Your booking details
          </p>
        </div>

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
