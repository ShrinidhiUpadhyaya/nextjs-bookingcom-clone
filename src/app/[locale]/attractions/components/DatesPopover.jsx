"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { addDays } from "date-fns";
import DPopover from "@/components/DPopover";

import { cn } from "@/lib/utils";

import { CalendarDays } from "lucide-react";

const DatesPopover = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  function convertDate(date) {
    return date?.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  }

  return (
    <DPopover
      className={cn("h-full flex-1", className)}
      label={`${convertDate(date?.from)} - ${convertDate(date?.to)}`}
      Icon={CalendarDays}
    >
      <div className="px-2 py-2 pb-4">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          selected={date}
          onSelect={setDate}
          numberOfMonths={2}
        />
      </div>
    </DPopover>
  );
};

export default DatesPopover;
