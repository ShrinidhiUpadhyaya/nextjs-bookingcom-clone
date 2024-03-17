"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { cn } from "@/lib/utils";

import { Check, ArrowUpDown } from "lucide-react";

const sortByOptions = [
  {
    value: "toppicks",
    label: "Top picks for long stays",
  },
  {
    value: "homes",
    label: "Homes & apartment first",
  },
  {
    value: "lowprice",
    label: "Price(lowest first)",
  },
  {
    value: "bestreviwedandlowestprice",
    label: "Best reviewed and lowest price",
  },
  {
    value: "hightolow",
    label: "Property rating(high to low)",
  },
  {
    value: "lowtohigh",
    label: "Property rating(low to high)",
  },
  {
    value: "ratingandprice",
    label: "Property rating and price",
  },
  {
    value: "distancefromcity",
    label: "Distance from city center",
  },
  {
    value: "topreviewed",
    label: "Top reviewed",
  },
];

export default function DCombobox({ className }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Popover open={open} onOpenChange={setOpen} className={cn(className)}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="hover:primaryTextColor justify-between rounded-3xl border border-[#868686] text-base font-normal text-[#1a1a1a] hover:bg-accent"
        >
          Sort by:{" "}
          {value
            ? sortByOptions.find((option) => option.value === value)?.label
            : ""}
          <ArrowUpDown className="ml-2 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            {sortByOptions.map((option) => (
              <CommandItem
                key={option.value}
                value={option.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue);
                  setOpen(false);
                }}
              >
                {option.label}
                <Check
                  className={cn(
                    "ml-auto h-4 w-4",
                    value === option.value ? "opacity-100" : "opacity-0",
                  )}
                />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
