"use client";
import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Button } from "@/components/ui/button";
import DIconLabel from "@/components/DIconLabel";

import { cn } from "@/lib/utils";

import { ArrowUpDown, Check } from "lucide-react";
import { generateTimeStamps } from "@/utils/generateTimeStamps";

const ArrivalTime = () => {
  const [startTime, setStartTime] = useState(null);

  const timeStamps = generateTimeStamps();
  return (
    <div className="sectionSpacing rounded-md border p-4">
      <h3 className="text-xl font-semibold">Your arrival time</h3>
      <DIconLabel
        Icon={Check}
        label={
          "Your room will be ready for check-in between 3:00 PM and 10:00 PM"
        }
      />

      <div className="flex flex-1 items-center justify-between gap-2">
        <p className="font-semibold">
          Add your estimated arrival time{" "}
          <span className="tertiaryText">(optional)</span>
        </p>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={"outline"}
              className={cn(
                "w-[35%] justify-between border-2 border-[##f5f5f5] px-4 py-2 text-left font-normal",
                !startTime && "text-muted-foreground",
              )}
            >
              Please select
              <ArrowUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
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
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
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

      <p className="tertiaryText">Time is for Hamburg time zone</p>
    </div>
  );
};

export default ArrivalTime;
