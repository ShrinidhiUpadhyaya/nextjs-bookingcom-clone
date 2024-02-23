import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TrendingContent = ({ topData, bottomData }) => {
  return (
    <div className="flexCol sectionSpacing gap-1">
      <h2 className="text-xl font-bold">Trending Choices</h2>
      <p className="text-base">
        Most popular choices for travelers from Germany
      </p>

      <div className="grid-row grid gap-4">
        <div className="flex gap-4">
          {topData.map((data) => (
            <div className="relative flex-1 rounded-md">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={data.imgSource}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </AspectRatio>

              <h2 className="absolute top-0 px-4 py-8 text-2xl font-bold text-[white]">
                {data.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          {bottomData.map((data) => (
            <div className="relative flex-1 rounded-md">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={data.imgSource}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </AspectRatio>

              <h2 className="absolute top-0 px-4 py-8 text-2xl font-bold text-[white]">
                {data.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingContent;
