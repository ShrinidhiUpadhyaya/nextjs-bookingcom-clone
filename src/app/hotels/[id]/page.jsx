import React from "react";

import { Separator } from "@/components/ui/separator";

import HeaderTabBar from "./content/HeaderTabBar";
import HotelInfoContent from "./content/HotelInfoContent";
import RoomsListContent from "./content/RoomsListContent";
import FacilitiesContent from "./content/FacilitiesContent";
import SurroundingsContent from "./content/SurroundingsContent";
import ReviewsContent from "./content/ReviewsContent";
import FAQContent from "./content/FAQContent";
import FooterContent from "@/app/stays/content/FooterContent";
import HouseRulesContent from "./content/HouseRulesContent";

export default function page({ params: { id } }) {
  return (
    <div className="pb-10">
      <div className="flex justify-center">
        <div className="contentWidth">
          <HeaderTabBar />
          <HotelInfoContent />
          <Separator />
          <RoomsListContent />
          <FacilitiesContent />
          <SurroundingsContent />
          <ReviewsContent />
          <HouseRulesContent />
          <FAQContent />
        </div>
      </div>

      <FooterContent />
    </div>
  );
}
