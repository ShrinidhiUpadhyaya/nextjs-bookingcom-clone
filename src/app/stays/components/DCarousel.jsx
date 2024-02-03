import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
const DCarousel = ({ children, prevButtonStyle, nextButtonStyle, className }) => {
  return (
    <div className={cn("flexCenter", className)}>
      <Carousel className="w-full flexCenter" opts={{
        slidesToScroll: 2,
      }}>
        <CarouselContent className='h-full'>
            {children}
      </CarouselContent>
        <CarouselPrevious className={cn('ml-8 opacity-100 bg-[white] shadow-[0px_2px_8px_0px_rgba(26,26,26,0.16)]', prevButtonStyle)} variant='primary'/>
        <CarouselNext className={cn('mr-8 bg-[white] shadow-[0px_2px_8px_0px_rgba(26,26,26,0.16)]', nextButtonStyle)} variant='primary'/>
      </Carousel>
    </div>
  );
};

export default DCarousel;
