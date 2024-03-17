import React, { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";
import { StaysTranslationContext } from "../context/TranslationProvider";

const carouselData = [
  {
    title: "Offer1",
    description: "Offer1SubText",
    buttonText: "Offer1ButtonText",
    imgSource: "/images/plane.png",
    link: "/flights",
  },
  {
    title: "Offer2",
    description: "Offer2SubText",
    buttonText: "Offer2ButtonText",
    imgSource: "/images/hotel.png",
    link: "/cities",
  },
  {
    title: "Offer3",
    description: "Offer3SubText",
    buttonText: "Offer3ButtonText",
    imgSource: "/images/surfing.png",
    link: "/flights",
  },
];

const OffersCarousel = ({ className }) => {
  const router = useRouter();
  const t = useContext(StaysTranslationContext);

  return (
    <DCarousel className={cn(className)}>
      {carouselData.map((data) => (
        <CarouselItem key={data.title} className="h-40 lg:basis-1/2">
          <Card className="h-full">
            <CardContent className="h-full p-0">
              <div className="flex h-full justify-between">
                <div className="p-4">
                  <div>
                    <h3 className="primaryTitleText">{t(`${data.title}`)}</h3>
                    <p className="tertiaryText">{t(`${data.description}`)}</p>
                  </div>

                  <Button
                    onClick={() => router.push(data.link)}
                    className="mt-4 px-4 py-2"
                  >
                    {t(`${data.buttonText}`)}
                  </Button>
                </div>

                <div className="flex-0 w-40 min-w-40 max-w-40">
                  <div className="relative h-full w-full">
                    <Image
                      src={data.imgSource}
                      fill
                      style={{ objectFit: "cover" }}
                      className="rounded-md rounded-l-none"
                      alt={`${data.buttonText} Offers`}
                    />
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
