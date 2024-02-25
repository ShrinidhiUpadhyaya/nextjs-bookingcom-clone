import DPopover from "@/app/stays/components/DPopover";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { CalendarDays, UserrRound, Check } from "lucide-react";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import DCalendarCarousel from "@/app/stays/components/DCalendarCarousel";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@radix-ui/react-popover";
import { addDays, format } from "date-fns";

const generateTimeStamps = () => {
  const timestamps = [];

  for (let i = 0; i <= 24; i++) {
    const timestamp = `${i < 10 ? "0" : ""}${i}:00`; // Format hours with leading zero if necessary
    timestamps.push({ value: timestamp });
  }

  console.log("##");
  console.log(timestamps);

  return timestamps;
};

const PickUpPopover = ({ label, Icon = CalendarDays, className }) => {
  const [date, setDate] = useState({
    from: new Date(),
    to: addDays(new Date(), 10),
  });

  const timeStamps = generateTimeStamps();
  const [startTime, setStartTime] = useState("08:00");

  return (
    <DPopover className={cn("flex-1", className)} label={label} Icon={Icon}>
      <div className="px-2 py-2 pb-4">
        <Calendar
          mode="single"
          selected={new Date()}
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
