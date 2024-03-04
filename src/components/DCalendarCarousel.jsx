import React, { useState } from "react";
import { CarouselItem } from "@/components/ui/carousel";
import DCalendarCarouselBox from "./DCalendarCarouselBox";
import DCarousel from "./DCarousel";
import { monthNames } from "@/app/stays/constants/constants";

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
    <DCarousel>
      {displayMonths.map((month, index) => (
        <CarouselItem
          key={month.name}
          className="flexCenter group cursor-pointer justify-start gap-0 lg:basis-1/6"
        >
          <DCalendarCarouselBox
            month={month.name}
            year={month.year}
            selected={month.selected}
            className="aspect-square w-full"
            onClick={() => handleMonthSelection(index)}
          />
        </CarouselItem>
      ))}
    </DCarousel>
  );
};

export default DCalendarCarousel;