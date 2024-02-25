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
import DCarousel from "./DCarousel";
import { useRouter } from "next/navigation";

const carouselData = [
  {
    id: "flight",
    title: "Fly away to your dream vacation",
    description: "Get inspired - compare and book flights with flexibility",
    buttonText: "Search for flights",
    imgSource: "/plane.png",
    link: "/flights",
  },
  {
    id: "properties",
    title: "Take your longest vacation yet",
    description:
      "Browse properties offering long term stays, many at reduced monthly rates.",
    buttonText: "Find a stay",
    imgSource: "/hotel.png",
    link: "/cities",
  },
  {
    id: "adventure",
    title: "New year, new adventures",
    description: "Save 15% or more when you book and stay before April 1,2024",
    buttonText: "Find Early 2024 Deals",
    imgSource: "/surfing.png",
    link: "/flights",
  },
];

const OffersCarousel = () => {
  const router = useRouter();

  return (
    <DCarousel>
      {carouselData.map((data) => (
        <CarouselItem
          key={data.id}
          className="flexCenter h-44 justify-start gap-0 lg:basis-1/2"
        >
          <div className="h-full flex-1 p-1">
            <Card className="h-full">
              <CardContent className="h-full p-0">
                <div className="flex h-full justify-between">
                  <div className="leftDiv flexCol justify-between p-4">
                    <div>
                      <h3 className="labelText">{data.title}</h3>
                      <p className="tertiaryText">{data.description}</p>
                    </div>

                    <div>
                      <Button onClick={() => router.push(data.link)}>
                        {data.buttonText}
                      </Button>
                    </div>
                  </div>
                  <div className="rightDiv h-full">
                    <Image
                      src={data.imgSource}
                      width={100}
                      height={100}
                      className="aspect-square h-full w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default OffersCarousel;
