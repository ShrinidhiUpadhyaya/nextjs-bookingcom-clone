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
import { cn } from "@/lib/utils";

const carouselData = [
  {
    id: "flight",
    title: "Fly to your dream vacation",
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

const OffersCarousel = ({ className }) => {
  const router = useRouter();

  return (
    <DCarousel className={cn(className)}>
      {carouselData.map((data) => (
        <CarouselItem key={data.id} className="h-40 lg:basis-1/2">
          <Card className="h-full">
            <CardContent className="h-full p-0">
              <div className="flex h-full justify-between">
                <div className="p-4">
                  <div>
                    <h3 className="primaryTitleText">{data.title}</h3>
                    <p className="tertiaryText">{data.description}</p>
                  </div>

                  <Button
                    onClick={() => router.push(data.link)}
                    className="mt-4 px-4 py-2"
                  >
                    {data.buttonText}
                  </Button>
                </div>

                <div className="w-[45%]">
                  <div className="relative h-full w-full">
                    <Image src={data.imgSource} fill={true} />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default OffersCarousel;
