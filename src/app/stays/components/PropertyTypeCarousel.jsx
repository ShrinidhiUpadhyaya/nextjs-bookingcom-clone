import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import DCarousel from "./DCarousel";
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
          className="group h-56 basis-1/2 cursor-pointer md:basis-1/4"
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
