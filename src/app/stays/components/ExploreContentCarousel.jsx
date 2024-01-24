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

const ExploreContentCarousel = ({ carouselData }) => {
  return (
    <DCarousel prevButtonStyle='-mt-8' nextButtonStyle='-mt-8'>
      {carouselData?.map((data) => (
        <CarouselItem
          key={data.title}
          className="group basis-1/3 md:basis-1/6 items-center justify-start flex gap-0 cursor-pointer"
        >
          <div className="p-1 flex-1">
            <Card className="border-none">
              <CardContent className="p-0">
                <div className="flex flex-col">
                  <div className="flex-1 relative group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={data.imgSource}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="font-bold text-base">{data.title}</h3>
                  <p className="text-base font-normal">{data.description}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default ExploreContentCarousel;
