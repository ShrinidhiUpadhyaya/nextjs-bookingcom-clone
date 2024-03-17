"use client";

import React, { useState } from "react";

import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import DPopover from "@/components/DPopover";

import { cn } from "@/lib/utils";
import { addDays } from "date-fns";

import { CalendarDays, Check } from "lucide-react";
import { generateTimeStamps } from "@/utils/generateTimeStamps";

const PickUpDatePopover = ({ className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const timeStamps = generateTimeStamps();
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("08:00");

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
      className={cn("flex-1", className)}
      label={`${convertDate(date?.from)}, ${startTime} - ${convertDate(date?.to)}, ${endTime}`}
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
        <div className="w-full gap-8 space-y-4  px-4">
          <div className="flex flex-1 items-center gap-2">
            <span className="secondaryTitleText flex-1">Start Time</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[35%] justify-start border-2 border-[##f5f5f5] px-4 py-2 text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <span className="primaryTitleText">{startTime}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandGroup className="h-56 overflow-auto">
                    {timeStamps.map((time) => (
                      <CommandItem
                        key={time.value}
                        value={time.value}
                        onSelect={(currentValue) => {
                          setStartTime(
                            currentValue === value ? "" : currentValue,
                          );
                          setOpen(false);
                        }}
                        className={cn({
                          primaryTextColor: time.value === startTime,
                        })}
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

          <div className="flex flex-1 items-center gap-2">
            <span className="secondaryTitleText flex-1">End Time</span>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  id="date"
                  variant={"outline"}
                  className={cn(
                    "w-[35%] justify-start border-2 border-[##f5f5f5] px-4 py-2 text-left font-normal",
                    !date && "text-muted-foreground",
                  )}
                >
                  <span className="primaryTitleText">{endTime}</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent>
                <Command>
                  <CommandGroup className="h-56 overflow-auto">
                    {timeStamps.map((time) => (
                      <CommandItem
                        key={time.value}
                        value={time.value}
                        onSelect={(currentValue) => {
                          setEndTime(
                            currentValue === value ? "" : currentValue,
                          );
                          setOpen(false);
                        }}
                        className={cn({
                          primaryTextColor: time.value === endTime,
                        })}
                      >
                        {time.value}
                        {time.value === endTime && (
                          <Check className={cn("ml-auto h-4 w-4")} />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </Command>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </DPopover>
  );
};

export default PickUpDatePopover;
