import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DCalendarCarouselBox from "./DCalendarCarouselBox";

const DCalendarCarousel = () => {
  const getCurrentAndNextMonths = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth().toString();
    const currentYear = currentDate.getFullYear();
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const next12Months = [];

    for (var i = 0; i < 12; i++) {
      const nextMonthIndex = (currentMonth + i) % 12;
      const nextYear = currentYear + Math.floor((currentMonth + i) / 12);

      const monthObject = {
        name: monthNames[nextMonthIndex],
        year: nextYear,
      };

      next12Months.push(monthObject);
    }

    return next12Months;
  };

  const displayMonths = getCurrentAndNextMonths();
  return (
    <Carousel className="w-[80%] border-[red] border-2 items-center justify-center flex">
      <CarouselContent className='gap-4'>
        {
            displayMonths.map((month) => (
                <CarouselItem
                key={month.name}
                className="flex items-center basis-1/5 gap-0 aspect-square p-0 justify-center"
              >
                  <DCalendarCarouselBox month={month.name} year={month.year} className='w-full aspect-square'/>
              </CarouselItem>
            ))
        }
       
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DCalendarCarousel;
