import React, { useContext } from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";
import { StaysTranslationContext } from "../context/TranslationProvider";

const ExploreContentCarousel = ({ carouselData, onClick, className }) => {
  const t = useContext(StaysTranslationContext);
  return (
    <DCarousel
      className={cn(className)}
      prevButtonStyle="-mt-8"
      nextButtonStyle="-mt-8"
    >
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
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-md"
                        alt={data.title}
                      />
                    </AspectRatio>
                  </div>
                  <h3 className="primaryTitleText pt-2">{data.title}</h3>
                  <p className="tertiaryText">
                    {data.description + t("Properties")}
                  </p>
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
