"use client";

import React, { useState } from "react";
import Image from "next/image";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import DOutlineButton from "@/components/DOutlineButton";

import { destinationsContinent, moreDestinations } from "../constants";

const MoreDestinationsContent = () => {
  const [currentDestinationContinent, setCurrentDestinationContinent] =
    useState(0);
  return (
    <div className="contentWidth sectionSpacing">
      <h3 className="secondaryTitle">Explore more destinations</h3>
      <p className="tertiaryText">
        Find things to do in cities around the world
      </p>

      <div className="mt-4 flex gap-2">
        {destinationsContinent.map((destination, index) => (
          <DOutlineButton
            label={destination.name}
            selected={index === currentDestinationContinent}
            onClick={() => setCurrentDestinationContinent(index)}
            className="text-xs font-medium"
          />
        ))}
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {moreDestinations.map((destination) => (
          <div className="group relative">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={destination.imgSource}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-md group-hover:opacity-90"
                alt={destination.name}
              />
            </AspectRatio>

            <p className="absolute bottom-8 left-4 text-xl text-white">
              {destination.name}
            </p>
            <p className="absolute bottom-2 left-4 text-white">
              {destination.noOfThings}{" "}
              <span className="text-sm font-light">things to do</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoreDestinationsContent;
