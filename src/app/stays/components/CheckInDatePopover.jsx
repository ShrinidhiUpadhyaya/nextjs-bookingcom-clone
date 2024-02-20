import React from "react";

import { Command, CommandGroup } from "@/components/ui/command";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { CalendarDays, UserrRound } from "lucide-react";

import DCalendarCarousel from "./DCalendarCarousel";
import DPopover from "./DPopover";
const CheckInDatePopover = () => {
  return (
    <DPopover
      className="h-full flex-1"
      label="Check-in Date -- Check-out Date"
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
                mode="single"
                selected={new Date()}
                className="flexHCenter w-full rounded-md border"
              />
            </TabsContent>
            <TabsContent value="flexible">
              <div className="flexCol gap-8 p-4">
                <div className="flexCol gap-1">
                  <h3 className="text-base font-bold">
                    How long do you want to stay?
                  </h3>
                  <RadioGroup
                    defaultValue="comfortable"
                    className="flex gap-4 "
                  >
                    <div className="flexCenter space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1" className="text-sm font-normal">
                        Default
                      </Label>
                    </div>
                    <div className="flexCenter space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2" className="text-sm font-normal">
                        Comfortable
                      </Label>
                    </div>
                    <div className="flexCenter space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3" className="text-sm font-normal">
                        Compact
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flexCol gap-1">
                  <h3 className="text-base font-bold">
                    When do you want to go?
                  </h3>
                  <p className="text-sm font-normal">Select up to 3 months</p>
                  <DCalendarCarousel />
                </div>

                <Separator />
                <div className="flexCenter justify-end gap-4">
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
