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

const carouselData = [
  {
    id: "hamburg",
    title: "Hamburg",
    description: "722 properties",
    imgSource: "/cities/hamburg.png",
  },
  {
    id: "berlin",
    title: "Berlin",
    description: "1748 properties",
    imgSource: "/cities/berlin.png",
  },
  {
    id: "munich",
    title: "Munich",
    description: "720 properties",
    imgSource: "/cities/munich.png",
  },
  {
    id: "cologne",
    title: "Cologne",
    description: "15647 properties",
    imgSource: "/cities/cologne.png",
  },
  {
    id: "frankfurt",
    title: "Frankfurt",
    description: "25603 properties",
    imgSource: "/cities/frankfurt.png",
  },
  {
    id: "allgau",
    title: "Allgau",
    description: "756 properties",
    imgSource: "/cities/allgau.png",
  },
  {
    id: "dresden",
    title: "Dresden",
    description: "368 properties",
    imgSource: "/cities/dresden.png",
  },
  {
    id: "baltic",
    title: "Baltic Sea",
    description: "2436 properties",
    imgSource: "/cities/balticsea.png",
  },
  {
    id: "dusseldorf",
    title: "Dusseldorf",
    description: "562 properties",
    imgSource: "/cities/dusseldorf.png",
  },
];
const ExploreContentCarousel = ({ label, description, imgSource }) => {
  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
      }}
    >
      <CarouselContent>
        {carouselData.map((data) => (
          <CarouselItem
            key={data.id}
            className="group lg:basis-1/6 items-center justify-start flex gap-0 cursor-pointer"
          >
            <div className="p-1 flex-1">
              <Card className="border-none">
                <CardContent className="p-0">
                  <div className="flex flex-col">
                    <div className="flex-1 relative group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image src={data.imgSource} layout='fill' objectFit="cover" className="rounded-md"/>
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
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ExploreContentCarousel;
