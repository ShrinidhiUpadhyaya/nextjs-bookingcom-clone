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

const ExploreContentCarousel = ({ carouselData, onClick, className }) => {
  return (
    <DCarousel className={cn(className)}>
      {carouselData?.map((data) => (
        <CarouselItem
          key={data.title}
          className="group basis-1/3 cursor-pointer gap-0 md:basis-1/6"
          onClick={onClick}
        >
          <div>
            <Card className="border-none">
              <CardContent className="p-0 pb-2">
                <>
                  <div className="flex-1 group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={data.imgSource}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="primaryTitleText pt-2">{data.title}</h3>
                  <p className="tertiaryText">{data.description}</p>
                </>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default ExploreContentCarousel;
