"use client";

import React, { useState, useEffect } from "react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DRowSpinbox from "@/components/DRowSpinbox";
import LocationPopover from "@/components/LocationPopover";
import CheckInDatePopover from "@/components/CheckInDatePopover";
import DCheckbox from "@/components/DCheckbox";
import { Check, ChevronDown, ArrowRightLeft } from "lucide-react";

import { cn } from "@/lib/utils";

const flightSearchFilters = [
  {
    id: "fl1",
    label: "Round trip",
  },
  {
    id: "fl2",
    label: "One Way",
  },
  {
    id: "fl3",
    label: "Multi-City",
  },
];

const flightClasses = [
  {
    id: "fc1",
    label: "Economy",
  },
  {
    id: "fc2",
    label: "Premium economy",
  },
  {
    id: "fc3",
    label: "Business",
  },
  {
    id: "fc4",
    label: "First class",
  },
];

const SearchContent = () => {
  const [currentFlightClassId, setCurrentFlightClassId] = useState("fc1");
  const [flightClassOpen, setFlightClassOpen] = useState(false);
  const [flightFilterValues, setFlightFilterValues] = useState({
    tripType: {
      type: "1",
    },
    numberOfTravellers: {
      adults: 1,
      children: 0,
    },
  });

  const updateNumberofAdults = (value) => {
    let tempValue = flightFilterValues.numberOfTravellers;
    tempValue.adults = value;
    setFlightFilterValues({
      ...flightFilterValues,
      numberOfTravellers: tempValue,
    });
  };

  const updateNumberofChildrens = (value) => {
    let tempValue = flightFilterValues.numberOfTravellers;
    tempValue.children = value;
    setFlightFilterValues({
      ...flightFilterValues,
      numberOfTravellers: tempValue,
    });
  };
  return (
    <div className="flex w-full justify-center bg-[#F5F5F5]">
      <div className="contentWidth flex-col items-center pb-20 pt-16">
        <h2 className="text-3xl font-semibold">
          Compare and book flights with ease
        </h2>
        <p className="assistTitle">Discover your next dream destination</p>
        <div className="flex gap-4">
          <RadioGroup className="flex" defaultValue={currentFlightClassId}>
            {flightSearchFilters.map((filter) => (
              <div key={filter.id} className="flex items-center space-x-2">
                <RadioGroupItem
                  value={filter.id}
                  id="r1"
                  className="h-5 w-5 border-2"
                />
                <Label htmlFor="r1" className="tertiaryText">
                  {filter.label}
                </Label>
              </div>
            ))}
          </RadioGroup>

          <Popover open={flightClassOpen} onOpenChange={setFlightClassOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                // aria-expanded={open}
                className="tertiaryText w-[200px] justify-between"
              >
                {currentFlightClassId &&
                  flightClasses.find(
                    (flightClass) => flightClass.id === currentFlightClassId,
                  )?.label}
                <ChevronDown className="shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandGroup>
                  {flightClasses.map((flightClass) => (
                    <CommandItem
                      key={flightClass.id}
                      value={flightClass.id}
                      onSelect={(currentValue) => {
                        setCurrentFlightClassId(currentValue);
                        setFlightClassOpen(false);
                      }}
                    >
                      {flightClass.label}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          currentFlightClassId === flightClass.id
                            ? "opacity-100"
                            : "opacity-0",
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </Command>
            </PopoverContent>
          </Popover>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="tertiaryText w-[200px] justify-between"
              >
                {flightFilterValues.numberOfTravellers?.adults +
                  flightFilterValues.numberOfTravellers?.children}{" "}
                Travellers
                <ChevronDown className="ml-8 shrink-0 opacity-50 " />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96">
              <div className="w-full">
                <DRowSpinbox
                  label={
                    <p className="labelText">
                      Adults <p className="tertiaryText">Age 18+</p>
                    </p>
                  }
                  className="m-4"
                  defaultValue={flightFilterValues.numberOfTravellers.adults}
                  onValueChange={updateNumberofAdults}
                />
                <DRowSpinbox
                  label={
                    <p className="labelText">
                      Children <p className="tertiaryText">0 - 17</p>
                    </p>
                  }
                  className="m-4"
                  defaultValue={flightFilterValues.numberOfTravellers.children}
                  onValueChange={updateNumberofChildrens}
                />
              </div>

              <DropdownMenuSeparator />

              <div className="m-4 flex items-center justify-between font-light">
                <Label className="tertiaryText">
                  {flightFilterValues.numberOfTravellers.adults} Adults -{" "}
                  {flightFilterValues.numberOfTravellers.children} Childrens
                </Label>
                <Button>Done</Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <DCheckbox label="Direct flights only" className="tertiaryText" />
        </div>

        <div className="mt-4 items-center gap-1 space-y-1 rounded-md bg-[#FFB700] p-1 md:flex md:h-14 md:space-y-0">
          <LocationPopover />

          <div className="flex justify-center md:justify-start">
            <Button className="primaryTextColor w-40 bg-white !px-0 text-sm hover:bg-[#F2F2F2] md:w-10">
              <ArrowRightLeft className="size-5" />
            </Button>
          </div>

          <LocationPopover />
          <CheckInDatePopover />
          <Button className="w-full py-6 text-lg md:w-20 md:text-sm lg:w-24 lg:text-lg">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchContent;
