import React from "react";
import DCarousel from "./DCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { tripPlannerRomanceData } from "@/lib/staysConstants";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const TripPlannerCarousel = ({ className }) => {
  return (
    <div className={cn(className)}>
      <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
        {tripPlannerRomanceData.map((data) => (
          <CarouselItem
            key={data.title}
            className="basis-1/3 md:basis-1/5 lg:basis-1/6"
          >
            <Card className="pb-2">
              <CardContent className="p-0">
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
                <h3 className="secondaryTitleText px-1 pt-2">{data.title}</h3>
                <p className="tertiaryText px-1">{data.description}</p>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </DCarousel>
    </div>
  );
};

export default TripPlannerCarousel;
