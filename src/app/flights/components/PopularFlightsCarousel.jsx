import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import DCarousel from "@/components/DCarousel";

import { cn } from "@/lib/utils";

const PopularFlightsCarousel = ({ carouselData, onClick, className }) => {
  const [flightOnDate, setFlightOnDate] = useState(null);
  const [flightReturnDate, setFlightReturnDate] = useState(null);

  useEffect(() => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 6);
    let onDate =
      currentDate.getDate() + " " + months[currentDate.getMonth() + 1];
    currentDate.setDate(currentDate.getDate() + 7);
    let returnDate =
      currentDate.getDate() + " " + months[currentDate.getMonth() + 1];
    setFlightOnDate(onDate);
    setFlightReturnDate(returnDate);
  }, []);
  return (
    <DCarousel
      prevButtonStyle="-mt-8"
      nextButtonStyle="-mt-8"
      className={cn("", className)}
    >
      {carouselData?.map((data) => (
        <CarouselItem
          key={data.id}
          className="flexCenter group max-h-64 basis-1/4 cursor-pointer justify-start gap-0"
          onClick={onClick}
        >
          <div className="flex-1">
            <Card className="border-none">
              <CardContent className="p-0 pb-2">
                <div className="group-hover:opacity-90">
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={data?.imgSource}
                      fill
                      style={{ objectFit: "cover" }}
                      alt={data?.from + " to " + data?.to}
                      className="rounded-md"
                    />
                  </AspectRatio>
                </div>
                <h3 className="secondaryTitleText px-1 pt-2">
                  {data?.from + " to " + data?.to}
                </h3>
                <p className="tertiaryText px-1">
                  {flightOnDate + " - " + flightReturnDate + " - Round Trip"}
                </p>
              </CardContent>
            </Card>
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default PopularFlightsCarousel;
