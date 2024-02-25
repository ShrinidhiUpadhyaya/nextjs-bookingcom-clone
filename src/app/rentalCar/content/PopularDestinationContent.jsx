"use client";
import { popularDestinationCities, popularDestinations } from "../constants";
import React, { useState } from "react";
import DOutlineButton from "@/components/DOutlineButton";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

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
      <div className="mt-4">
        {popularDestinations.map((destination, index) => (
          <DOutlineButton
            key={destination.id}
            label={destination.label}
            selected={popularDestinationCurrentIndex === index}
            onClick={() => handlePopularDestinationChange(index)}
          />
        ))}

        <div className="mt-4 grid grid-cols-3 gap-x-4 gap-y-8">
          {popularDestinationCities[popularDestinationCurrentIndex].data.map(
            (city) => (
              <div className="group flex cursor-pointer items-center gap-4 rounded-md pr-2 hover:bg-[#F2F2F2]">
                <div className="relative min-w-[25%] max-w-[25%]">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={"/flights/barcelona.png"}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md group-hover:opacity-90"
                    />
                  </AspectRatio>
                </div>
                <div className="text-sm">
                  <p className="labelText">{city.name}</p>
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
