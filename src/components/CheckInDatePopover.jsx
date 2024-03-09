"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import DPopover from "./DPopover";

import { cn } from "@/lib/utils";
import { addDays } from "date-fns";

import { CalendarDays } from "lucide-react";

function convertDate(date) {
  console.log("Date change", date);
  return date?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const CheckInDatePopover = ({
  defaultDate = {
    from: new Date(),
    to: addDays(new Date(), 10),
  },
  onDateChange,
  className,
}) => {
  const [date, setDate] = useState(defaultDate);

  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label={`${convertDate(date?.from)} - ${convertDate(date?.to)}`}
      Icon={CalendarDays}
    >
      <Calendar
        initialFocus
        mode="range"
        defaultMonth={date?.from}
        selected={date}
        onSelect={(date) => {
          setDate(date);
          onDateChange && onDateChange(date);
        }}
        numberOfMonths={2}
      />
    </DPopover>
  );
};

export default CheckInDatePopover;
