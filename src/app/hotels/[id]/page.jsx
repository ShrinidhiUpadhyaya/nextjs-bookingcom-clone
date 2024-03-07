"use client";

import React, { useRef } from "react";

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
  const overviewRef = useRef(null);
  const availableRoomsRef = useRef(null);
  const facilitiesRef = useRef(null);
  const reviewsRef = useRef(null);
  const houseRulesRef = useRef(null);
  const faqRef = useRef(null);

  const scrollToSection = (index) => {
    console.log(index);
    console.log(faqRef);
    console.log(houseRulesRef);
    switch (index) {
      case 0:
        overviewRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 1:
        availableRoomsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 2:
        facilitiesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 3:
        reviewsRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 4:
        houseRulesRef.current.scrollIntoView({ behavior: "smooth" });
        break;
      case 5:
        faqRef.current.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <div className="pb-10">
      <div className="flex justify-center">
        <div className="contentWidth">
          <HeaderTabBar
            onCurrentIndexChanged={(index) => scrollToSection(index)}
          />
          <Separator />
          <HotelInfoContent ref={overviewRef} />
          <Separator />
          <RoomsListContent ref={availableRoomsRef} />
          <FacilitiesContent ref={facilitiesRef} />
          <SurroundingsContent />
          <ReviewsContent ref={reviewsRef} />
          <HouseRulesContent ref={houseRulesRef} />
          <FAQContent ref={faqRef} />
        </div>
      </div>

      <FooterContent />
    </div>
  );
}
