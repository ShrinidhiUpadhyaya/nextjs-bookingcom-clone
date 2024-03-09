import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";

const PropertyTypeCarousel = ({ carouselData, className }) => {
  return (
    <DCarousel
      prevButtonStyle="-mt-8"
      nextButtonStyle="-mt-8"
      className={cn(className)}
    >
      {carouselData?.map((data) => (
        <CarouselItem
          key={data.title}
          className="group h-56 basis-1/2 md:basis-1/4"
        >
          <div>
            <Card className="h-full border-none shadow-none">
              <CardContent className="p-0 pb-2">
                <div className="group-hover:opacity-90">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={data.imgSource}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </AspectRatio>
                </div>
                <h3 className="primaryTitleText mt-2">{data.title}</h3>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default PropertyTypeCarousel;
