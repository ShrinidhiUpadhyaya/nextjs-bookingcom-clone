"use client";

import React, { useState } from "react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import DPopover from "@/components/DPopover";

import { cn } from "@/lib/utils";

import { CalendarDays, Check } from "lucide-react";
import { generateTimeStamps } from "@/utils/generateTimeStamps";

function convertDate(date) {
  return date?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

const PickUpPopover = ({ label, Icon = CalendarDays, className }) => {
  const [date, setDate] = useState(new Date());

  const timeStamps = generateTimeStamps();
  const [startTime, setStartTime] = useState("08:00");

  return (
    <DPopover
      className={cn("flex-1", className)}
      label={`${convertDate(date)} - ${startTime}`}
      Icon={Icon}
    >
      <div className="px-2 py-2 pb-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="flexHCenter w-full rounded-md border"
        />
        <div className="mt-2 flex items-center gap-2 px-1">
          <span className="secondaryTitleText flex-1">Pick-up time</span>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="secondaryTitleText w-24">
                {startTime}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56 rounded-md border border-[#e2e8f0] bg-white p-1 shadow-lg">
              <Command>
                <CommandGroup className="h-56 overflow-auto">
                  {timeStamps.map((time) => (
                    <CommandItem
                      key={time.value}
                      value={time.value}
                      onSelect={(currentValue) => {
                        setStartTime(currentValue);
                      }}
                      className={cn({
                        primaryTextColor: time.value === startTime,
                      })}
                      onClick={() => setStartTime(time.value)}
                    >
                      {time.value}
                      {time.value === startTime && (
                        <Check className={cn("ml-auto h-4 w-4")} />
                      )}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        <Separator className="my-4" />
        <div className="flex justify-end">
          <Button className="w-full">Confirm</Button>
        </div>
      </div>
    </DPopover>
  );
};

export default PickUpPopover;
