import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CarouselItem } from "@/components/ui/carousel";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";

import { tripPlannerRomanceData } from "@/app/[locale]/stays/constants/staysConstants";

const TripPlannerCarousel = ({ className }) => {
  return (
    <div className={cn(className)}>
      <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
        {tripPlannerRomanceData.map((data) => (
          <CarouselItem
            key={data.title}
            className="basis-1/3 md:basis-1/5 lg:basis-1/6"
          >
            <Card className="group border-none shadow-none">
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
                <h3 className="secondaryTitleText pt-2">{data.title}</h3>
                <p className="tertiaryText">{data.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </DCarousel>
    </div>
  );
};

export default TripPlannerCarousel;
