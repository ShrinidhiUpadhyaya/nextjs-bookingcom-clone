import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const TrendingContent = ({ topData, bottomData }) => {
  return (
    <div className="flex flex-col gap-1">
      <h2 className="font-bold text-xl">Trending Choices</h2>
      <p className="text-base">
        Most popular choices for travelers from Germany
      </p>

      <div className="grid grid-row gap-4">
        <div className="flex gap-4">
          {topData.map((data) => (
            <div className="flex-1 relative rounded-md">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={data.imgSource}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </AspectRatio>

              <h2 className="font-bold text-2xl absolute top-0 px-4 py-8 text-[white]">
                {data.title}
              </h2>
            </div>
          ))}
        </div>

        <div className="flex gap-4">
          {bottomData.map((data) => (
            <div className="flex-1 relative rounded-md">
              <AspectRatio ratio={4 / 3}>
                <Image
                  src={data.imgSource}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </AspectRatio>

              <h2 className="font-bold text-2xl absolute top-0 px-4 py-8 text-[white]">
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
