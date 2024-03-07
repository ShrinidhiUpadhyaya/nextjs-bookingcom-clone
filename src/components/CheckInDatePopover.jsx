"use client";

import React, { useState } from "react";

import { Command, CommandGroup } from "@/components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import DCalendarCarousel from "./DCalendarCarousel";
import DPopover from "./DPopover";

import { cn } from "@/lib/utils";
import { addDays } from "date-fns";

import { CalendarDays } from "lucide-react";

function convertDate(date) {
  return date?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const CheckInDatePopover = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

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
        onSelect={setDate}
        numberOfMonths={2}
      />
    </DPopover>
  );
};

export default CheckInDatePopover;
