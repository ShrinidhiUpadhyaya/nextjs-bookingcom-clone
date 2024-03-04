"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { addDays } from "date-fns";
import { Separator } from "@/components/ui/separator";
import DPopover from "@/components/DPopover";

import { cn } from "@/lib/utils";

import { CalendarDays } from "lucide-react";

const DatesPopover = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

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
          // className="border border-black"
        />

        <Separator className="my-4" />

        <div className="flex justify-between px-4">
          <div className="space-y-2">
            <p className="tertiaryText flex items-center">
              <span className="min-w-10 text-right">From: </span>
              <span className="flex-1">
                <span className="secondaryTitleText px-2">
                  {convertDate(date?.from)}
                </span>
              </span>
            </p>
            <p className="tertiaryText flex items-center">
              <span className="min-w-10 text-right">To: </span>
              <span className="flex-1">
                <span className="secondaryTitleText px-2">
                  {convertDate(date?.to)}
                </span>
              </span>
            </p>
          </div>
          <Button className="w-[100px]">Confirm</Button>
        </div>
      </div>
    </DPopover>
  );
};

export default DatesPopover;
