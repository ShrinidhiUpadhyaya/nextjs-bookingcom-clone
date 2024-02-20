import React from "react";
import DCarousel from "./DCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { tripPlannerRomanceData } from "@/lib/staysConstants";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const TripPlannerCarousel = () => {
  return (
    <div>
      <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
        {tripPlannerRomanceData.map((data) => (
          <CarouselItem
            key={data.title}
            className="basis-1/3 md:basis-1/5 lg:basis-1/6"
          >
            <Card className="border-none">
              <CardContent className="border-none p-0">
                <div className="flexCol">
                  <div className="relative flex-1 group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/cities/hamburg.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="text-base font-bold">{data.title}</h3>
                  <p className="text-base font-normal">{data.description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </DCarousel>
    </div>
  );
};

export default TripPlannerCarousel;
