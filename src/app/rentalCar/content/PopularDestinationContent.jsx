"use client";
import React, { useState } from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import DOutlineButton from "@/components/DOutlineButton";

import { popularDestinationCities, popularDestinations } from "../constants";

const PopularDestinationContent = () => {
  const [popularDestinationCurrentIndex, setPopularDestinationCurrentIndex] =
    useState(0);

  const handlePopularDestinationChange = (index) => {
    setPopularDestinationCurrentIndex(index);
  };
  return (
    <div className="contentWidth sectionSpacing">
      <h3 className="secondaryTitle">Popular car hire destintion</h3>
      <p className="tertiaryText">Explore more options to hire car for cheap</p>
      <div className="mt-2">
        <div className="flex gap-2">
          {popularDestinations.map((destination, index) => (
            <DOutlineButton
              key={destination.label}
              label={destination.label}
              selected={popularDestinationCurrentIndex === index}
              onClick={() => handlePopularDestinationChange(index)}
            />
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-8">
          {popularDestinationCities[popularDestinationCurrentIndex].data.map(
            (city) => (
              <div
                key={city.name}
                className="group flex items-center gap-4 rounded-md pr-2 hover:bg-[#F2F2F2]"
              >
                <div className="relative min-w-[20%] max-w-[20%]">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={"/flights/barcelona.png"}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={city.name}
                      className="rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="text-sm">
                  <p className="secondaryTitleText">{city.name}</p>
                  <p className="tertiaryText">
                    {city.numberOfCars} car hire locations
                  </p>
                  <p className="tertiaryText">
                    Average price of{" "}
                    <span className="font-semibold">€ {city.averagePrice}</span>{" "}
                    per day
                  </p>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default PopularDestinationContent;
