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
      className="flex-1 h-full"
      label="Check-in Date -- Check-out Date"
      Icon={CalendarDays}
    >
      <Command>
        <CommandGroup>
          <Tabs defaultValue="calendar" className="w-[500px]">
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
                className="rounded-md border w-full flex justify-center"
              />
            </TabsContent>
            <TabsContent value="flexible">
              <div className="p-4 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base">
                    How long do you want to stay?
                  </h3>
                  <RadioGroup defaultValue="comfortable" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="default" id="r1" />
                      <Label htmlFor="r1">Default</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="comfortable" id="r2" />
                      <Label htmlFor="r2">Comfortable</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="compact" id="r3" />
                      <Label htmlFor="r3">Compact</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="flex flex-col gap-1">
                  <h3 className="font-bold text-base">
                    When do you want to go?
                  </h3>
                  <p>Select up to 3 months</p>
                  <div className="flex justify-center h-56">
                    <div className="w-full flex justify-center">
                      <DCalendarCarousel />
                    </div>
                  </div>
                </div>

                <Separator />
                <div className="flex gap-4 items-center justify-end">
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
