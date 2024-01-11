"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import DCalendarCarousel from "./DCalendarCarousel";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];
const DCombobox = ({ className }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [date, setDate] = React.useState(new Date());

  return (
    <div className={className}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full py-6 px-8 justify-between"
          >
            {value
              ? frameworks.find((framework) => framework.value === value)?.label
              : "Select framework..."}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[600px]">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="calendar">Calendar</TabsTrigger>
                  <TabsTrigger value="flexible">I'm flexible</TabsTrigger>
                </TabsList>
                <TabsContent value="calendar">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border"
                  />
                </TabsContent>
                <TabsContent value="flexible">
                  <div>
                    <div>
                      <h3 className="font-bold text-base">
                        How long do you want to stay?
                      </h3>
                      <RadioGroup defaultValue="comfortable">
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

                    <div className="">
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
                  </div>
                </TabsContent>
              </Tabs>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default DCombobox;
