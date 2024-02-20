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
          <CarouselItem
            key={data.title}
            className="basis-1/2 sm:basis-1/3 md:basis-1/4 "
          >
            <Card>
              <CardContent className="border-none p-0 pb-8">
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
                  <div className="flexCol gap-1 p-2">
                    <h3 className="text-base font-bold">{data.title}</h3>
                    <p className="text-sm font-normal">{data.description}</p>
                    <div className="flexVCenter gap-1 text-xs">
                      <div className="rounded-sm bg-[#003B95] p-1 text-white">
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
