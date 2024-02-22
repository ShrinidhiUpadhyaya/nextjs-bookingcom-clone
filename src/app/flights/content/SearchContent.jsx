import React, { useState, useEffect } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
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
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DRowSpinbox from "../../stays/components/DRowSpinbox";
import { Checkbox } from "@/components/ui/checkbox";
import DCheckbox from "../../stays/components/DCheckbox";
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

  useEffect(() => {
    console.log("Printing flight filter values", flightFilterValues);
  }, [flightFilterValues]);

  const updateNumberofAdults = (value) => {
    console.log("Updating number of adults", value);
    let tempValue = flightFilterValues.numberOfTravellers;
    tempValue.adults = value;
    console.log(tempValue);
    setFlightFilterValues({
      ...flightFilterValues,
      numberOfTravellers: tempValue,
    });
  };

  const updateNumberofChildrens = (value) => {
    let tempValue = flightFilterValues.numberOfTravellers;
    tempValue.children = value;
    console.log("Updating number of childrens", value);
    console.log(tempValue);
    setFlightFilterValues({
      ...flightFilterValues,
      numberOfTravellers: tempValue,
    });
  };
  return (
    <div className="flexCol contentWidth">
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
                      console.log("##Value:", currentValue);
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
    </div>
  );
};

export default SearchContent;
