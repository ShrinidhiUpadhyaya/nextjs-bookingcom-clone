import React, { useContext } from "react";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { trendingDestinationsData } from "@/app/[locale]/stays/constants/staysConstants";
import { StaysTranslationContext } from "../context/TranslationProvider";

const TrendingContent = () => {
  const t = useContext(StaysTranslationContext);

  return (
    <div className="sectionSpacing">
      <h2 className="primaryTitle">{t("TrendingH2")}</h2>
      <p className="tertiaryText">{t("TrendingSubText")}</p>

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
