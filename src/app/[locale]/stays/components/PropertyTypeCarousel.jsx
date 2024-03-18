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
      prevButtonStyle="-mt-4"
      nextButtonStyle="-mt-4"
      className={cn(className)}
    >
      {carouselData?.map((data) => (
        <CarouselItem key={data.title} className="group basis-1/2 md:basis-1/4">
          <div>
            <Card className="h-full border-none shadow-none">
              <CardContent className="p-0 pb-2">
                <div className="relative group-hover:opacity-90">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={data.imgSource}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={`Property type ${data.title}`}
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
