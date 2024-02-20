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

const ExploreContentCarousel = ({ carouselData, onClick }) => {
  return (
    <DCarousel prevButtonStyle="-mt-8" nextButtonStyle="-mt-8">
      {carouselData?.map((data) => (
        <CarouselItem
          key={data.title}
          className="flexCenter group basis-1/3 cursor-pointer justify-start gap-0 md:basis-1/6"
          onClick={onClick}
        >
          <div className="flex-1 p-1">
            <Card className="border-none">
              <CardContent className="p-0">
                <div className="flexCol">
                  <div className="relative flex-1 group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={data.imgSource}
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
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default ExploreContentCarousel;
