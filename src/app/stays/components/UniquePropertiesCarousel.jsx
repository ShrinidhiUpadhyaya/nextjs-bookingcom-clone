import React from "react";
import DCarousel from "./DCarousel";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { tripPlannerRomanceData } from "@/lib/staysConstants";
import { CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const UniquePropertiesCarousel = () => {
  return (
    <div className="mb-10">
      <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
        {tripPlannerRomanceData.map((data) => (
          <CarouselItem key={data.title} className="basis-1/2 sm:basis-1/3 md:basis-1/4 ">
            <Card>
              <CardContent className="p-0 pb-8 border-none">
                <div className="flex flex-col">
                  <div className="flex-1 relative group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src="/cities/hamburg.png"
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </AspectRatio>
                  </div>
                  <div className="flex flex-col gap-1 p-2">
                    <h3 className="font-bold text-base">{data.title}</h3>
                    <p className="text-sm font-normal">{data.description}</p>
                    <div className="flex text-xs gap-1 items-center">
                      <div className="bg-[#003B95] text-white p-1 rounded-sm">
                        8.7
                      </div>
                      <span>Excellent .</span>
                      <span>10000 reviews</span>
                    </div>
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
