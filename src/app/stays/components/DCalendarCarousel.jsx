import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DCalendarCarouselBox from "./DCalendarCarouselBox";
import { monthNames } from "@/lib/constants";
const DCalendarCarousel = () => {
  const getCurrentAndNextMonths = () => {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth().toString();
    const currentYear = currentDate.getFullYear();
    const next12Months = [];

    for (var i = 0; i < 12; i++) {
      const nextMonthIndex = (currentMonth + i) % 12;
      const nextYear = currentYear + Math.floor((currentMonth + i) / 12);

      const monthObject = {
        name: monthNames[nextMonthIndex],
        year: nextYear,
        selected: false,
      };

      next12Months.push(monthObject);
    }

    return next12Months;
  };

  const [displayMonths, setDisplayMonths] = useState(getCurrentAndNextMonths());

  const handleMonthSelection = (index) => {
    const temp = displayMonths.map((month, currentIndex) => ({
      ...month,
      selected: index === currentIndex ? !month.selected : month.selected,
    }));
    setDisplayMonths(temp);
  };
  return (
    <Carousel className="w-[80%] items-center justify-center flex">
      <CarouselContent className="gap-4">
        {displayMonths.map((month, index) => (
          <CarouselItem
            key={month.name}
            className="flex items-center basis-1/5 gap-0 aspect-square p-0 justify-center"
          >
            <DCalendarCarouselBox
              month={month.name}
              year={month.year}
              selected={month.selected}
              className="w-full aspect-square"
              onClick={() => handleMonthSelection(index)}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default DCalendarCarousel;
