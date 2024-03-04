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
      className={cn("flex-1", className)}
      label={`${convertDate(date?.from)} - ${convertDate(date?.to)}`}
      Icon={CalendarDays}
    >
      <Command>
        <CommandGroup>
          <Tabs defaultValue="calendar">
            <TabsList className="w-full">
              <TabsTrigger value="calendar" className="flex-1">
                Calendar
              </TabsTrigger>
              <TabsTrigger value="flexible" className="flex-1">
                I'm flexible
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calendar">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
                // className="border border-black"
              />
            </TabsContent>
            <TabsContent value="flexible">
              <div className="flexCol gap-8 p-4">
                <div className="flexCol gap-1">
                  <h3 className="secondaryTitleText">
                    How long do you want to stay?
                  </h3>
                  <RadioGroup
                    defaultValue="comfortable"
                    className="flex gap-4 "
                  >
                    <div className="flexCenter space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="tertiaryText">
                        Default
                      </Label>
                    </div>
                    <div className="flexCenter space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2" className="tertiaryText">
                        Comfortable
                      </Label>
                    </div>
                    <div className="flexCenter space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3" className="tertiaryText">
                        Compact
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flexCol gap-1">
                  <h3 className="secondaryTitleText">
                    When do you want to go?
                  </h3>
                  <p className="tertiaryText">Select up to 3 months</p>
                  <DCalendarCarousel />
                </div>

                <Separator />
                <div className="flexVCenter justify-end gap-4">
                  <span className="text-sm">Warning</span>
                  <Button className="text-sm">Select Dates</Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CommandGroup>
      </Command>
    </DPopover>
  );
};

export default CheckInDatePopover;
