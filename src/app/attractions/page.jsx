import React from "react";

import { Separator } from "@/components/ui/separator";

import NearbyDestinationContent from "./content/NearbyDestinationContent";
import OffersContent from "../rentalCar/content/OffersContent";
import MoreDestinationsContent from "./content/MoreDestinationsContent";
import FooterContent from "../flights/content/FooterContent";
import SearchContent from "./content/SearchContent";
import HeaderContent from "./content/HeaderContent";

import { coveredData } from "./constants";

const page = () => {
  return (
    <div className="flexCol items-center justify-center">
      <HeaderContent />
      <SearchContent />
      <NearbyDestinationContent />
      <OffersContent />

      <div className="contentWidth sectionSpacing">
        <Separator />
        <div className="my-8">
          <h3 className="secondaryTitle">We've got you covered</h3>
          <div className="mt-4 flex gap-4 text-sm">
            {coveredData.map((data) => (
              <div className="flex gap-2">
                <div className="w-[20%] text-[#008234]">{data.icon}</div>
                <div>
                  <p className="secondaryTitleText">{data.title}</p>
                  <p className="tertiaryText">{data.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Separator />
      </div>

      <MoreDestinationsContent />

      <div className="flex w-full justify-center bg-[#F5F5F5] pb-16">
        <FooterContent />
      </div>
    </div>
  );
};

export default page;
