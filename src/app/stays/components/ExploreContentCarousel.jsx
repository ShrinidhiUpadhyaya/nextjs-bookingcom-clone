import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";

const ExploreContentCarousel = ({ carouselData, onClick, className }) => {
  return (
    <DCarousel className={cn(className)}>
      {carouselData?.map((data, index) => (
        <CarouselItem
          key={data.title}
          className="group basis-1/3 cursor-pointer gap-0 md:basis-1/6"
          onClick={(e) => {
            e.preventDefault();
            onClick(index);
          }}
        >
          <div>
            <Card className="border-none">
              <CardContent className="p-0 pb-2">
                <>
                  <div className="flex-1 group-hover:opacity-90">
                    <AspectRatio ratio={4 / 3}>
                      <Image
                        src={data.imgSource}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                        alt={data.title}
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
