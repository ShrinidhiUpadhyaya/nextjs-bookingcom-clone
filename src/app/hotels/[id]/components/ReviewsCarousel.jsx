import React from "react";

import { CarouselItem } from "@/components/ui/carousel";
import DCarousel from "@/app/stays/components/DCarousel";

import { cn } from "@/lib/utils";

import { reviewsData } from "../constants";

const ReviewsCarousel = ({ className }) => {
  return (
    <DCarousel className={cn(className, "mt-4")}>
      {reviewsData?.map((review) => (
        <CarouselItem
          key={review.title}
          className="group basis-1/3 cursor-pointer gap-0"
        >
          <div className="h-full rounded-md border px-4 pb-8 pt-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                {review.name[0]}
              </div>

              <div>
                <p className="font-semibold">{review.name}</p>
                <p className="text-sm font-light">{review.country}</p>
              </div>
            </div>
            <div className="mt-2 text-base font-normal">
              {review.description}
            </div>
          </div>
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default ReviewsCarousel;
