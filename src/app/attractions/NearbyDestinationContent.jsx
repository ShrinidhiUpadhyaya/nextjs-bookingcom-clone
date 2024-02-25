import React from "react";
import { nearbyDestinations } from "./constants";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
const NearbyDestinationContent = () => {
  return (
    <div className="contentWidth sectionSpacing">
      <h3 className="secondaryTitle">Nearby destinations</h3>
      <div className="mt-4 grid grid-cols-3 gap-4">
        {nearbyDestinations.map((destination) => (
          <div className="group relative cursor-pointer">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={destination.imgSource}
                layout="fill"
                objectFit="cover"
                className="rounded-md group-hover:opacity-90"
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

export default NearbyDestinationContent;
