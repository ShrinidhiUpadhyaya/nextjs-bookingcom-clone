import React, { useContext } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CarouselItem } from "@/components/ui/carousel";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";

import { tripPlannerRomanceData } from "@/app/[locale]/stays/constants/staysConstants";
import { StaysTranslationContext } from "../context/TranslationProvider";

const UniquePropertiesCarousel = ({ className }) => {
  const t = useContext(StaysTranslationContext);

  return (
    <div className={cn(className)}>
      <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
        {tripPlannerRomanceData.map((data) => (
          <CarouselItem
            key={data.title}
            className="group basis-1/2 sm:basis-1/3 md:basis-1/4 "
          >
            <Card className="border-none shadow-none">
              <CardContent className="p-0 pb-2">
                <div className="relative flex-1 group-hover:opacity-90">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="/images/cities/hamburg.png"
                      fill
                      style={{ objectFit: "cover" }}
                      alt={data.title}
                      className="rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="py-2">
                  <h3 className="secondaryTitleText">{data.title}</h3>
                  <p className="tertiaryText">{`${data.description} km ${t("Away")}`}</p>
                  <div className="flexVCenter mt-2 gap-1 text-xs">
                    <p className="rounded-md bg-[#003B95] p-1 text-white">
                      8.7
                    </p>
                    <span className="tertiaryText">Excellent .</span>
                    <span className="tertiaryText">10000 reviews</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </DCarousel>
    </div>
  );
};

export default UniquePropertiesCarousel;
