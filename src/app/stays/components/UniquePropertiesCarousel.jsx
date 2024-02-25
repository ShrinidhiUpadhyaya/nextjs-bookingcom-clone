import React from "react";
import DCarousel from "./DCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { tripPlannerRomanceData } from "@/lib/staysConstants";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const UniquePropertiesCarousel = ({ className }) => {
  return (
    <div className={cn(className)}>
      <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
        {tripPlannerRomanceData.map((data) => (
          <CarouselItem
            key={data.title}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 "
          >
            <Card>
              <CardContent className="p-0 pb-2">
                <div className="flex-1 group-hover:opacity-90">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src="/cities/hamburg.png"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </AspectRatio>
                </div>
                <div className="p-1 py-2">
                  <h3 className="secondaryTitleText">{data.title}</h3>
                  <p className="tertiaryText">{data.description}</p>
                  <div className="flexVCenter mt-2 gap-1 text-xs">
                    <p className="rounded-sm bg-[#003B95] p-1 text-white">
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
