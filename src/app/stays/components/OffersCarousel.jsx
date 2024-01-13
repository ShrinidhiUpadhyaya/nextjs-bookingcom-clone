import * as React from "react";

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

const carouselData = [
    {
        id: 'flight',
        title: 'Fly away to your dream vacation',
        description: 'Get inspired - compare and book flights with flexibility',
        buttonText: 'Search for flights',
        imgSource: '/plane.png',
    },
    {
        id: 'properties',
        title: 'Take your longest vacation yet',
        description: 'Browse properties offering long term stays, many at reduced monthly rates.',
        buttonText: 'Find a stay',
        imgSource: '/hotel.png',
    },
    {
        id: 'adventure',
        title: 'New year, new adventures',
        description: 'Save 15% or more when you book and stay before April 1,2024',
        buttonText: 'Find Early 2024 Deals',
        imgSource: '/surfing.png',
    },

]
const OffersCarousel = () => {
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
            className="lg:basis-1/2 h-44 items-center justify-start flex gap-0"
          >
            <div className="p-1 h-full flex-1">
              <Card className="h-full">
                <CardContent className="h-full p-0">
                  <div className="flex h-full justify-between">
                    <div className="leftDiv flex flex-col justify-between p-4">
                      <div>
                        <h3 className="font-bold text-base">
                          {data.title}
                        </h3>
                        <p className="text-base font-normal">
                          {data.description}
                        </p>
                      </div>

                      <div>
                        <Button>{data.buttonText}</Button>
                      </div>
                    </div>
                    <div className="rightDiv h-full">
                      <Image src={data.imgSource} width={100} height={100} className="h-full w-full aspect-square" />
                    </div>
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

export default OffersCarousel;
