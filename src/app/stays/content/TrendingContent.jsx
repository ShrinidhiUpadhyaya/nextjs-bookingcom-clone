import React from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { trendingDestinationsData } from "@/app/stays/constants/staysConstants";

const TrendingContent = () => {
  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">Trending Choices</h2>
      <p className="tertiaryText">
        Most popular choices for travelers from Germany
      </p>

      <div className="mt-2 flex gap-4">
        {trendingDestinationsData.topData.map((data) => (
          <div key={data.title} className="group relative flex-1 rounded-md">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={data.imgSource}
                fill
                style={{ objectFit: "cover" }}
                alt={data.title}
                className="rounded-md group-hover:opacity-90"
              />
            </AspectRatio>

            <h2 className="absolute top-0 px-4 py-8 text-2xl font-bold text-[white]">
              {data.title}
            </h2>
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-4">
        {trendingDestinationsData.bottomData.map((data) => (
          <div key={data.title} className="group relative flex-1 rounded-md">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={data.imgSource}
                fill
                style={{ objectFit: "cover" }}
                alt={data.title}
                className="rounded-md group-hover:opacity-90"
              />
            </AspectRatio>

            <h2 className="absolute top-0 px-4 py-8 text-2xl font-bold text-[white]">
              {data.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingContent;
